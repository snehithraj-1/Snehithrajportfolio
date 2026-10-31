import React from "react";
import { User, GraduationCap, MapPin, Trophy, Compass, ArrowRight, Brain, Search, Layers, Zap, Quote } from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function About() {
  const { personal, about } = portfolioData;

  const pillarIcons = {
    "problem-solving": Brain,
    "research": Search,
    "building-products": Layers,
    "continuous-learning": Zap,
  };

  return (
    <section id="about" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Top Bar: Title & Open to Internships Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  marginBottom: "0.35rem",
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--cyan-neon)",
                  fontFamily: "var(--font-accent)",
                  fontWeight: 600,
                }}
              >
                Get to know me better.
              </p>
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
                gap: "0.45rem",
                padding: "0.5rem 1.1rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                color: "var(--emerald-neon)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 600,
                boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--emerald-neon)",
                  boxShadow: "0 0 8px var(--emerald-neon)",
                }}
              />
              <span>Open to Internships</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Narrative & Story Box */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "18px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "2.25rem",
              alignItems: "center",
              backdropFilter: "blur(12px)",
            }}
            className="about-narrative-grid"
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "22px",
                overflow: "hidden",
                border: "2px solid rgba(56, 189, 248, 0.35)",
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
                flexShrink: 0,
              }}
            >
              <img
                src={portfolioAssets.heroProfile}
                alt="Snehith Raj"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.15rem" }}>
                {about.intro}
              </p>
              {about.narrative.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Profile Info & Quote Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.75rem",
            }}
            className="about-details-grid"
          >
            {/* Profile Details List */}
            <TiltCard
              className="glass-card"
              style={{
                padding: "1.75rem",
                borderRadius: "18px",
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(56, 189, 248, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cyan-neon)",
                  }}
                >
                  <User size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Name</span>
                  <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>{about.details.name}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(167, 139, 250, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--purple-neon)",
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Education</span>
                  <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem" }}>{about.details.education}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--emerald-neon)",
                  }}
                >
                  <Trophy size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>CGPA</span>
                  <p style={{ color: "var(--emerald-neon)", fontWeight: 800, fontSize: "1rem" }}>{about.details.cgpa}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(245, 158, 11, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--amber-neon)",
                  }}
                >
                  <Compass size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Interests</span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{about.details.interests}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(56, 189, 248, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cyan-neon)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Location</span>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem" }}>{about.details.location}</p>
                </div>
              </div>
            </TiltCard>

            {/* Quote Block Card */}
            <TiltCard
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "18px",
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.6) 100%)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 0 25px rgba(56, 189, 248, 0.1)",
              }}
            >
              <div>
                <Quote size={28} color="var(--cyan-neon)" style={{ opacity: 0.5, marginBottom: "0.75rem" }} />
                <p
                  style={{
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    color: "#ffffff",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  "{about.quote}"
                </p>
              </div>
              <div>
                <span
                  style={{
                    color: "var(--cyan-neon)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  — Snehith Raj
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Bottom 4 Pillar Cards */}
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
                <TiltCard
                  key={pillar.id}
                  className="glass-card"
                  style={{
                    padding: "1.4rem",
                    borderRadius: "14px",
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.12)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--cyan-neon)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.45,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
