import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Target,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
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
    <section id="achievements" style={{ padding: "6rem 0", position: "relative" }}>
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
              Milestones & Recognition // Track Record
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
            Achievements & Experience.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
            }}
          >
            Competitive hackathons, verified technical certifications, algorithmic programming, and technical leadership.
          </p>
        </div>

        {/* Category Tabs with Framer Motion Active Indicator */}
        <div
          className="filter-chips-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3rem",
            background: "rgba(18, 18, 23, 0.6)",
            padding: "0.35rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            width: "fit-content",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            const count = achievements[cat.id]?.length || 0;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.45rem 1.25rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  color: isSelected ? "#09090b" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.88rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  zIndex: 1,
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="achievements-filter-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      background: "#ffffff",
                      boxShadow: "0 2px 14px rgba(255, 255, 255, 0.25)",
                      zIndex: -1,
                    }}
                  />
                )}
                <Icon size={16} />
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-mono)",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "9999px",
                    background: isSelected ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.08)",
                    color: isSelected ? "#09090b" : "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Milestone Cards Grid */}
        <motion.div
          layout
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {currentList.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard
                  className="bento-card"
                  style={{
                    padding: "1.85rem 2.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.35rem",
                      flex: 1,
                      minWidth: "280px",
                    }}
                  >
                    {/* Glowing Milestone Icon */}
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "14px",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        flexShrink: 0,
                        boxShadow: "0 0 16px rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <Trophy size={20} />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            letterSpacing: "-0.015em",
                          }}
                        >
                          {item.title}
                        </h3>
                        <span
                          style={{
                            padding: "0.22rem 0.75rem",
                            borderRadius: "9999px",
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#ffffff",
                            fontSize: "0.74rem",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 600,
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.94rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.highlight || item.desc}
                      </p>

                      {/* Tags */}
                      {item.tags && (
                        <div
                          style={{
                            display: "flex",
                            gap: "0.45rem",
                            flexWrap: "wrap",
                            marginTop: "0.25rem",
                          }}
                        >
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
                      color: "#ffffff",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      background: "rgba(24, 24, 30, 0.8)",
                      padding: "0.5rem 1rem",
                      borderRadius: "9999px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
