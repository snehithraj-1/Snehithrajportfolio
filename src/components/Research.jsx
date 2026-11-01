import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FileText,
  Sparkles,
  ArrowRight,
  Atom,
  Telescope,
  Sprout,
  ShieldCheck,
  X,
} from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Research() {
  const { research, researchInterests } = portfolioData;
  const [selectedResearch, setSelectedResearch] = useState(null);

  const featured = research.find((r) => r.featured) || research[0];
  const others = research.filter((r) => !r.featured);

  // Universal Escape key listener for the research preview modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedResearch(null);
    };
    if (selectedResearch) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedResearch]);

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
    <section id="research" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3rem" }}>
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
              Academic Investigations // Research
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              marginBottom: "0.5rem",
            }}
          >
            Research & Empirical Studies.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "650px",
            }}
          >
            Exploring real-world machine learning challenges through rigorous experimentation, NASA astronomical data, and environmental telemetry.
          </p>
        </div>

        {/* Featured Paper Hero Bento Card */}
        <TiltCard
          className="bento-card research-featured-grid"
          style={{
            padding: "0",
            overflow: "hidden",
            marginBottom: "3.5rem",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "0",
          }}
        >
          {/* Featured Image Frame */}
          <div
            style={{
              position: "relative",
              minHeight: "340px",
              overflow: "hidden",
              background: "#080c14",
            }}
          >
            <img
              src={featured.image || portfolioAssets.projectWater}
              alt={featured.title}
              loading="lazy"
              decoding="async"
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
                background:
                  "linear-gradient(90deg, transparent 40%, rgba(18, 18, 23, 0.95) 100%)",
              }}
            />
          </div>

          {/* Featured Content Details */}
          <div
            className="research-featured-content"
            style={{
              padding: "2.75rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            {/* Tags Row */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {featured.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.25rem 0.8rem",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    color: "#f4f4f5",
                    fontSize: "0.76rem",
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
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
              }}
            >
              {featured.title}
            </h3>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {featured.subtitle || featured.abstract}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.85rem",
                marginTop: "0.5rem",
              }}
            >
              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedResearch(featured);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  padding: "0.75rem 1.6rem",
                  borderRadius: "9999px",
                  background: "#ffffff",
                  border: "none",
                  color: "#09090b",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-accent)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                  transition: "all 0.2s ease",
                }}
              >
                <FileText size={16} />
                <span>View Abstract & Metrics</span>
              </button>

              <a
                href="https://github.com/snehithraj-1"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  textDecoration: "none",
                  padding: "0.72rem 1.4rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--text-primary)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  transition: "all 0.2s ease",
                }}
                className="specular-border"
              >
                <span>Code Repository</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </TiltCard>

        {/* Section: Secondary Research Explorations */}
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Secondary Research Investigations
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {others.map((item) => {
              const Icon = getSubCardIcon(item.id);
              return (
                <TiltCard
                  key={item.id}
                  className="bento-card"
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedResearch(item);
                  }}
                  style={{
                    padding: "1.85rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                      }}
                    >
                      <Icon size={19} />
                    </div>

                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "0.18rem 0.65rem",
                            borderRadius: "9999px",
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
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
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
                      color: "#ffffff",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-accent)",
                      paddingTop: "0.75rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span>Read Investigation</span>
                    <ArrowRight size={14} />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Research Interests Chips */}
        <div
          className="bento-card"
          style={{
            padding: "1.4rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Sparkles size={20} color="#ffffff" />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "1rem",
              }}
            >
              Academic & Research Focus Areas
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
            {researchInterests.map((interest, idx) => (
              <span
                key={idx}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#f4f4f5",
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
      <AnimatePresence>
        {selectedResearch && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedResearch(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 300,
              background: "rgba(5, 5, 8, 0.88)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="modal-dialog"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "750px",
                background: "rgba(18, 18, 23, 0.98)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "24px",
                padding: "2.25rem",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.25rem",
                  gap: "1rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Empirical Research Investigation
                  </span>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginTop: "0.35rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {selectedResearch.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedResearch(null)}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.96rem",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                {selectedResearch.abstract || selectedResearch.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {selectedResearch.techStack?.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#f4f4f5",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedResearch(null)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Close Investigation
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
