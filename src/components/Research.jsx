import React, { useState } from "react";
import { BookOpen, ExternalLink, FileText, Sparkles, ArrowRight, CheckCircle2, Atom, Telescope, Sprout, ShieldCheck } from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Research() {
  const { research, researchInterests } = portfolioData;
  const [selectedResearch, setSelectedResearch] = useState(null);

  const featured = research.find((r) => r.featured) || research[0];
  const others = research.filter((r) => !r.featured);

  const getSubCardIcon = (id) => {
    switch (id) {
      case "exoplanet-research":
        return Telescope;
      case "smart-crop-research":
        return Sprout;
      case "environmental-vision":
        return ShieldCheck;
      default:
        return Atom;
    }
  };

  return (
    <section id="research" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header matching Screen 6 */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "0.4rem",
            }}
          >
            Research & Academic Work
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "650px",
            }}
          >
            Exploring real world problems through research and experimentation.
          </p>
        </div>

        {/* Featured Paper Hero Card matching Screen 6 */}
        <TiltCard
          className="glass-card research-featured-grid"
          style={{
            borderRadius: "22px",
            overflow: "hidden",
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(56, 189, 248, 0.22)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.12)",
            marginBottom: "3rem",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "0",
          }}
        >
          {/* Featured Image */}
          <div
            style={{
              position: "relative",
              minHeight: "320px",
              overflow: "hidden",
              background: "#080c14",
            }}
          >
            <img
              src={featured.image || portfolioAssets.projectWater}
              alt={featured.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, transparent 50%, rgba(15, 23, 42, 0.95) 100%)",
              }}
            />
          </div>

          {/* Featured Content Details */}
          <div
            className="research-featured-content"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.2rem",
            }}
          >
            {/* Tags Row */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {featured.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.25rem 0.8rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    color: "var(--cyan-neon)",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              {featured.subtitle || featured.abstract}
            </p>

            {/* Action Buttons matching Screen 6 */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedResearch(featured);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  padding: "0.65rem 1.4rem",
                  borderRadius: "var(--radius-full)",
                  background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
                }}
              >
                <FileText size={16} />
                <span>View Details</span>
              </button>

              <a
                href={personalPaperUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  textDecoration: "none",
                  padding: "0.62rem 1.3rem",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <span>View Paper</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </TiltCard>

        {/* Section: Other Research Work matching Screen 6 */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1.25rem",
            }}
          >
            Other Research Work
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {others.map((item) => {
              const Icon = getSubCardIcon(item.id);
              return (
                <TiltCard
                  key={item.id}
                  className="glass-card"
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedResearch(item);
                  }}
                  style={{
                    padding: "1.75rem",
                    borderRadius: "16px",
                    background: "rgba(15, 23, 42, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "rgba(56, 189, 248, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--cyan-neon)",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div style={{ display: "flex", gap: "0.4rem" }}>
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "0.15rem 0.6rem",
                            borderRadius: "var(--radius-full)",
                            background: "rgba(255, 255, 255, 0.06)",
                            color: "var(--text-secondary)",
                            fontSize: "0.72rem",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      flex: 1,
                    }}
                  >
                    {item.desc || item.abstract}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--cyan-neon)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      paddingTop: "0.5rem",
                    }}
                  >
                    <span>Read Exploration</span>
                    <ArrowRight size={14} />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Research Interests Chips matching Screen 6 */}
        <div
          style={{
            padding: "1.25rem 1.75rem",
            borderRadius: "16px",
            background: "rgba(15, 23, 42, 0.6)",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <Sparkles size={18} color="var(--cyan-neon)" />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "0.95rem",
              }}
            >
              Research Interests
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {researchInterests.map((interest, idx) => (
              <span
                key={idx}
                style={{
                  padding: "0.35rem 0.95rem",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "var(--cyan-neon)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Research Paper Preview Modal */}
      {selectedResearch && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedResearch(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 210,
            background: "rgba(5, 8, 16, 0.88)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "750px",
              background: "rgba(12, 18, 32, 0.98)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--cyan-neon)", fontFamily: "var(--font-mono)" }}>RESEARCH PAPER ABSTRACT</span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff", marginTop: "0.25rem" }}>{selectedResearch.title}</h3>
              </div>
              <button
                onClick={() => setSelectedResearch(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {selectedResearch.abstract || selectedResearch.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {selectedResearch.techStack?.map((t, idx) => (
                <span key={idx} className="tech-pill">{t}</span>
              ))}
            </div>

            <button
              onClick={() => setSelectedResearch(null)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function personalPaperUrl() {
  return "https://github.com/snehithraj-1";
}
