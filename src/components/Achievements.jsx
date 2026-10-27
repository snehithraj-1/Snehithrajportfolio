import React, { useState } from "react";
import { Trophy, Award, Target, Users, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Achievements() {
  const { achievements } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("hackathons");

  const categories = [
    { id: "hackathons", label: "Hackathons", icon: Trophy },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "competitions", label: "Competitions", icon: Target },
    { id: "leadership", label: "Leadership", icon: Users },
  ];

  const currentList = achievements[activeCategory] || [];

  return (
    <section id="achievements" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header matching Screen 8 */}
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
            Achievements & Experience
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
            }}
          >
            Hackathons, certifications and notable contributions.
          </p>
        </div>

        {/* Category Tabs matching Screen 8 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1.3rem",
                  borderRadius: "var(--radius-full)",
                  border: isSelected
                    ? "1px solid var(--cyan-neon)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.35) 100%)"
                    : "rgba(15, 23, 42, 0.6)",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.9rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none",
                }}
              >
                <Icon size={16} color={isSelected ? "var(--cyan-neon)" : "var(--text-muted)"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Cards Grid matching Screen 8 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {currentList.map((item) => (
            <TiltCard
              key={item.id}
              className="glass-card"
              style={{
                padding: "1.75rem 2rem",
                borderRadius: "18px",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.18)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flex: 1, minWidth: "280px" }}>
                {/* Glowing Dot or Milestone Icon */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cyan-neon)",
                    flexShrink: 0,
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <Trophy size={20} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <span
                      style={{
                        padding: "0.2rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(16, 185, 129, 0.12)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        color: "var(--emerald-neon)",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.55 }}>
                    {item.highlight || item.desc}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Date & Indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--cyan-neon)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  background: "rgba(8, 12, 20, 0.6)",
                  padding: "0.45rem 0.95rem",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
