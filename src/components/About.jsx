import React from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  MapPin,
  Trophy,
  Compass,
  ArrowRight,
  Brain,
  Search,
  Layers,
  Zap,
  Quote,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function About() {
  const { personal, about } = portfolioData;

  const pillarIcons = {
    "problem-solving": Brain,
    research: Search,
    "building-products": Layers,
    "continuous-learning": Zap,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.85rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "0.85rem",
              }}
            >
              <Sparkles size={13} color="#ffffff" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "#f4f4f5",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                About Me // Identity & Principles
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.035em",
                lineHeight: 1.12,
              }}
            >
              The Story Behind the Code.
            </h2>
          </div>

          {/* Open to Internships Pill */}
          <a
            href="#contact"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.55rem 1.25rem",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 600,
              boxShadow: "0 0 20px rgba(16, 185, 129, 0.12)",
              transition: "all 0.25s ease",
            }}
          >
            <span className="radar-beacon" style={{ width: "7px", height: "7px" }} />
            <span>Open to Internships</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Cohesive Bento Grid Architecture */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {/* Top Row: Executive Bio (Col 8) & Academic Details (Col 4) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.45fr 1fr",
              gap: "1.5rem",
            }}
            className="about-details-grid"
          >
            {/* Bento Card 1: Executive Narrative */}
            <motion.div variants={itemVariants}>
              <TiltCard
                className="bento-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1.5px solid rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={portfolioAssets.heroProfile}
                      alt="Snehith Raj"
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 20%",
                        display: "block",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {personal.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-mono)",
                        marginTop: "0.2rem",
                      }}
                    >
                      SRM University AP • 3rd Year CSE
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      lineHeight: 1.6,
                    }}
                  >
                    {about.intro}
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {about.narrative[0]}
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {about.narrative[1]}
                  </p>
                </div>

                {/* Focus Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Deep Learning", "Generative AI & RAG", "Computer Vision", "PyTorch", "FastAPI"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "6px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          color: "#f4f4f5",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </TiltCard>
            </motion.div>

            {/* Bento Card 2: Academic & Institutional Credentials */}
            <motion.div variants={itemVariants}>
              <TiltCard
                className="bento-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <GraduationCap size={18} color="#ffffff" />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Academic Profile
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-mono)",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Institution
                      </span>
                      <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.05rem" }}>
                        SRM University AP
                      </p>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                        Andhra Pradesh, India (2022–2026)
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-mono)",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Degree Program
                      </span>
                      <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.98rem" }}>
                        B.Tech in Computer Science and Engineering
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-mono)",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Academic Performance
                      </span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                        <span
                          style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            color: "#ffffff",
                            fontFamily: "var(--font-heading)",
                            lineHeight: 1,
                          }}
                        >
                          8.44
                        </span>
                        <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                          / 10.0 CGPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dean's List Honor Pill */}
                <div
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "14px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Trophy size={18} color="#f59e0b" />
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "#f4f4f5",
                      fontWeight: 600,
                    }}
                  >
                    High Academic Standing & Research Scholar
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Middle Row: Quote & Guiding Philosophy Card */}
          <motion.div variants={itemVariants}>
            <TiltCard
              className="bento-card"
              style={{
                padding: "2.25rem 2.5rem",
                background:
                  "linear-gradient(135deg, rgba(18, 18, 23, 0.95) 0%, rgba(24, 24, 32, 0.8) 100%)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Quote size={24} color="#ffffff" style={{ opacity: 0.6 }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Engineering Credo
                </span>
              </div>

              <p
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#ffffff",
                  lineHeight: 1.5,
                  letterSpacing: "-0.015em",
                }}
              >
                "{about.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#f4f4f5",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  — Snehith Raj
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  • Machine Learning Engineer
                </span>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bottom Row: 4 Engineering Pillars Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.25rem",
            }}
            className="about-pillars-grid"
          >
            {about.pillars.map((pillar) => {
              const IconComponent = pillarIcons[pillar.id] || Brain;
              return (
                <motion.div key={pillar.id} variants={itemVariants}>
                  <TiltCard
                    className="bento-card"
                    style={{
                      height: "100%",
                      padding: "1.6rem 1.4rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.55,
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
