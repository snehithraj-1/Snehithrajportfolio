import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Brain,
  Cpu,
  Server,
  Wrench,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function SkillsMatrix() {
  const { skillsCategories, currentlyLearning } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterTabs = [
    "All",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Programming",
    "Backend",
    "Tools",
  ];

  const filteredCategories = skillsCategories.filter((cat) => {
    if (selectedFilter === "All") return true;
    return cat.categoryKey === selectedFilter;
  });

  const getCategoryIcon = (id) => {
    switch (id) {
      case "programming":
        return Code2;
      case "ml-data":
        return Brain;
      case "dl-cv":
        return Cpu;
      case "genai":
        return Sparkles;
      case "backend":
        return Server;
      case "tools":
        return Wrench;
      default:
        return Sparkles;
    }
  };

  const getTechCount = (catKey) => {
    if (catKey === "All") {
      return skillsCategories.reduce((acc, cat) => acc + cat.items.length, 0);
    }
    const cat = skillsCategories.find((c) => c.categoryKey === catKey);
    return cat ? cat.items.length : 0;
  };

  return (
    <section id="skills" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
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
                Technical Competencies // Skills
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
              Technical Skills & Toolchain.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "640px",
              }}
            >
              Categorized competencies across Machine Learning, Deep Neural Networks, Generative AI & RAG, Backend Systems, and Deployment.
            </p>
          </div>

          {/* Isometric Geometry SVG Accent */}
          <div
            className="skills-cubes-graphic"
            style={{
              width: "100px",
              height: "75px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="95"
              height="75"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 16px rgba(255, 255, 255, 0.15))",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <g transform="translate(45, 10)">
                <polygon points="20,0 40,11.5 20,23 0,11.5" fill="#ffffff" fillOpacity="0.9" />
                <polygon points="0,11.5 20,23 20,46 0,34.5" fill="#e2e8f0" fillOpacity="0.95" />
                <polygon points="20,23 40,11.5 40,34.5 20,46" fill="#a1a1aa" fillOpacity="0.9" />
              </g>
              <g transform="translate(15, 30)">
                <polygon points="20,0 40,11.5 20,23 0,11.5" fill="#f4f4f5" fillOpacity="0.85" />
                <polygon points="0,11.5 20,23 20,46 0,34.5" fill="#cbd5e1" fillOpacity="0.9" />
                <polygon points="20,23 40,11.5 40,34.5 20,46" fill="#71717a" fillOpacity="0.85" />
              </g>
              <g transform="translate(65, 35)">
                <polygon points="16,0 32,9.2 16,18.4 0,9.2" fill="#e4e4e7" fillOpacity="0.85" />
                <polygon points="0,9.2 16,18.4 16,36.8 0,27.6" fill="#94a3b8" fillOpacity="0.9" />
                <polygon points="16,18.4 32,9.2 32,27.6 16,36.8" fill="#52525b" fillOpacity="0.85" />
              </g>
            </svg>
          </div>
        </div>

        {/* Filter Chips Bar with Framer Motion Active Indicator */}
        <div
          className="filter-chips-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.75rem",
            background: "rgba(18, 18, 23, 0.6)",
            padding: "0.35rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            width: "fit-content",
          }}
        >
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedFilter(tab);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  position: "relative",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  color: isSelected ? "#09090b" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.85rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  zIndex: 1,
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="skills-filter-pill"
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
                <span>{tab}</span>
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
                  {getTechCount(tab)}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Bento Cards Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.75rem",
            marginBottom: "2.75rem",
          }}
          className="skills-screen-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = getCategoryIcon(category.id);
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard
                    className="bento-card"
                    style={{
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.16)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            letterSpacing: "-0.015em",
                          }}
                        >
                          {category.name}
                        </h3>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.72rem",
                            color: "var(--text-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {category.items.length} Production Technologies
                        </span>
                      </div>
                    </div>

                    {/* Tech Badges with Logos */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(135px, 1fr))",
                        gap: "0.75rem",
                      }}
                    >
                      {category.items.map((tech, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => soundFX.playHover()}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.65rem",
                            padding: "0.6rem 0.8rem",
                            borderRadius: "12px",
                            background: "rgba(24, 24, 30, 0.65)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          className="tech-badge-item specular-border"
                        >
                          {tech.logo && (
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              loading="lazy"
                              style={{
                                width: "20px",
                                height: "20px",
                                objectFit: "contain",
                                flexShrink: 0,
                              }}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          )}
                          <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                            <span
                              style={{
                                fontSize: "0.86rem",
                                fontWeight: 600,
                                color: "#ffffff",
                                lineHeight: 1.2,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {tech.name}
                            </span>
                            <span
                              style={{
                                fontSize: "0.68rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.1,
                                marginTop: "0.15rem",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {tech.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom "Currently Learning" Bar */}
        <div
          className="bento-card"
          style={{
            padding: "1.35rem 1.85rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontSize: "0.95rem",
                  display: "block",
                }}
              >
                Currently Exploring & Upskilling
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                }}
              >
                Active research frontiers & distributed training
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
          >
            {currentlyLearning.map((topic, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#f4f4f5",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
