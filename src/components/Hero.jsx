import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, YoutubeIcon } from "./Icons";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        paddingTop: "7.5rem",
        paddingBottom: "4.5rem",
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading, Focus Tags, Actions & Stats */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Live Availability Radar Pill */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                  marginBottom: "1.5rem",
                  width: "fit-content",
                }}
              >
                <span className="radar-beacon" style={{ width: "8px", height: "8px" }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "#f4f4f5",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  {personal.status || "Available for AI/ML Engineering Roles"}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5.2vw, 4.3rem)",
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: "-0.038em",
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Engineering <br />
                Intelligent Systems <br />
                <span className="headline-metallic">
                  With AI & Machine Learning.
                </span>
              </h1>
            </motion.div>

            {/* AI/ML Competency Chips */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.35rem",
                }}
              >
                {[
                  "Full Stack Web",
                  "React & TypeScript",
                  "Python & Flask",
                  "Machine Learning & AI",
                  "DSA & Algorithms",
                ].map((interest, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "#f4f4f5",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "8px",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Editorial Bio Tagline */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: "clamp(1.02rem, 1.35vw, 1.15rem)",
                  lineHeight: 1.68,
                  color: "var(--text-secondary)",
                  maxWidth: "560px",
                  marginBottom: "2rem",
                }}
              >
                {personal.tagline}
              </p>
            </motion.div>

            {/* Primary & Secondary Action CTAs */}
            <motion.div variants={itemVariants}>
              <div
                className="hero-cta-group"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2.25rem",
                }}
              >
                {/* Explore Projects CTA */}
                <a
                  href="#projects"
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.85rem 1.85rem",
                    background: "#ffffff",
                    color: "#09090b",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    fontFamily: "var(--font-accent)",
                    boxShadow: "0 0 25px rgba(255, 255, 255, 0.18), inset 0 1px 0 #ffffff",
                    transition: "all 0.25s ease",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                  className="sheen-effect"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={17} />
                </a>

                {/* Download Resume Button */}
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onOpenResume();
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    padding: "0.85rem 1.7rem",
                    background: "rgba(18, 18, 23, 0.75)",
                    color: "var(--text-primary)",
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-accent)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    cursor: "pointer",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.25s ease",
                  }}
                  className="specular-border"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </button>
              </div>
            </motion.div>

            {/* Location & Social Connections Strip */}
            <motion.div variants={itemVariants}>
              <div
                className="hero-meta-row"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.5rem",
                  paddingBottom: "2rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                  }}
                >
                  <MapPin size={16} color="var(--cyan-neon)" />
                  <span>{personal.location}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFX.playClick()}
                    onMouseEnter={() => soundFX.playHover()}
                    aria-label="GitHub Profile"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFX.playClick()}
                    onMouseEnter={() => soundFX.playHover()}
                    aria-label="LinkedIn Profile"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LinkedinIcon size={18} />
                  </a>

                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFX.playClick()}
                    onMouseEnter={() => soundFX.playHover()}
                    aria-label="LeetCode Profile"
                    style={{
                      color: "var(--text-secondary)",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LeetcodeIcon size={18} />
                  </a>

                  {personal.youtube && (
                    <a
                      href={personal.youtube}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFX.playClick()}
                      onMouseEnter={() => soundFX.playHover()}
                      aria-label="YouTube Channel"
                      style={{
                        color: "var(--text-secondary)",
                        transition: "color 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <YoutubeIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* 4-Stat Hardware Metric Bar */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "0.85rem",
                }}
                className="hero-stats-row"
              >
                {personal.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0.95rem 1rem",
                      borderRadius: "16px",
                      background: "rgba(18, 18, 23, 0.65)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
                      backdropFilter: "blur(12px)",
                      transition: "transform 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        marginTop: "0.35rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic Developer Cutout Portrait Card */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <TiltCard
              className="glass-card hero-image-card specular-border"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                borderRadius: "26px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 28px 65px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
                background: "rgba(18, 18, 23, 0.82)",
                padding: "0",
              }}
            >
              {/* Cutout Portrait Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                }}
              >
                <img
                  src={portfolioAssets.heroProfile}
                  alt="Snehith Raj - AI/ML Engineer & Full Stack Developer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    display: "block",
                  }}
                />

                {/* Bottom gradient blending seamlessly with card base */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(8, 12, 20, 0) 0%, rgba(9, 9, 11, 0.1) 50%, rgba(9, 9, 11, 0.95) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating Achievement Capsule */}
                <div
                  className="hero-floating-badge"
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    padding: "0.55rem 0.95rem",
                    borderRadius: "16px",
                    background: "rgba(20, 20, 26, 0.88)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
                    transform: "rotate(2.5deg)",
                    maxWidth: "200px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                    }}
                  >
                    Building AI for a Better Tomorrow! 🚀
                  </p>
                </div>

                {/* Vertical Floating Social Ribbon on right edge */}
                <div
                  className="hero-floating-social"
                  style={{
                    position: "absolute",
                    right: "0.85rem",
                    bottom: "2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    padding: "0.6rem 0.45rem",
                    borderRadius: "9999px",
                    background: "rgba(18, 18, 23, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    backdropFilter: "blur(12px)",
                    zIndex: 3,
                  }}
                >
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#ffffff", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#e4e4e7", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LeetCode"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#d4d4d8", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <LeetcodeIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Bottom Card Footer: Scroll Down Indicator */}
              <div
                style={{
                  padding: "0.95rem 1.25rem",
                  background: "rgba(12, 12, 16, 0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span>Scroll to Explore</span>
                <ChevronDown size={14} className="animate-bounce" color="#ffffff" />
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
