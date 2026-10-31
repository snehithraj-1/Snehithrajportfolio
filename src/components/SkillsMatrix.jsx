import React, { useState } from "react";
import { Code2, Brain, Cpu, Server, Wrench, Sparkles, BookOpen } from "lucide-react";
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

  return (
    <section id="skills" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header with 3D Isometric Glowing Cubes Accent matching Screen 3 */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
            position: "relative",
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
                marginBottom: "0.4rem",
              }}
            >
              My Skills
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "640px",
              }}
            >
              Categorized technical competencies across Machine Learning, Deep Learning, Generative AI & RAG, Backend Systems, and Deployment.
            </p>
          </div>

          {/* 3D Glowing Isometric Cubes SVG Graphic */}
          <div
            className="skills-cubes-graphic"
            style={{
              position: "relative",
              width: "120px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="110"
              height="85"
              viewBox="0 0 120 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 16px rgba(56, 189, 248, 0.45))",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              {/* Isometric Cube 1 */}
              <g transform="translate(45, 10)">
                <polygon points="20,0 40,11.5 20,23 0,11.5" fill="#38bdf8" fillOpacity="0.85" />
                <polygon points="0,11.5 20,23 20,46 0,34.5" fill="#0284c7" fillOpacity="0.95" />
                <polygon points="20,23 40,11.5 40,34.5 20,46" fill="#1e3a8a" fillOpacity="0.9" />
              </g>
              {/* Isometric Cube 2 */}
              <g transform="translate(15, 30)">
                <polygon points="20,0 40,11.5 20,23 0,11.5" fill="#818cf8" fillOpacity="0.8" />
                <polygon points="0,11.5 20,23 20,46 0,34.5" fill="#4f46e5" fillOpacity="0.9" />
                <polygon points="20,23 40,11.5 40,34.5 20,46" fill="#312e81" fillOpacity="0.85" />
              </g>
              {/* Isometric Cube 3 */}
              <g transform="translate(65, 35)">
                <polygon points="16,0 32,9.2 16,18.4 0,9.2" fill="#c084fc" fillOpacity="0.8" />
                <polygon points="0,9.2 16,18.4 16,36.8 0,27.6" fill="#9333ea" fillOpacity="0.9" />
                <polygon points="16,18.4 32,9.2 32,27.6 16,36.8" fill="#581c87" fillOpacity="0.85" />
              </g>
            </svg>
          </div>
        </div>

        {/* Filter Chips Bar matching Screen 3 */}
        <div
          className="filter-chips-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.5rem",
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
                  padding: "0.45rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  border: isSelected
                    ? "1px solid var(--cyan-neon)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.35) 100%)"
                    : "rgba(15, 23, 42, 0.6)",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.88rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 4 Structured Capability Cards matching Screen 3 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
          className="skills-screen-grid"
        >
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <TiltCard
                key={category.id}
                className="glass-card"
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: "rgba(15, 23, 42, 0.7)",
                  border: "1px solid rgba(56, 189, 248, 0.18)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(56, 189, 248, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--cyan-neon)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Tech Badges with Logos */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
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
                        gap: "0.6rem",
                        padding: "0.55rem 0.75rem",
                        borderRadius: "10px",
                        background: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "all 0.2s ease",
                      }}
                      className="tech-badge-item"
                    >
                      {tech.logo && (
                        <img
                          src={tech.logo}
                          alt={tech.name}
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
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            lineHeight: 1.2,
                          }}
                        >
                          {tech.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.1,
                          }}
                        >
                          {tech.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom "Currently Learning" Bar matching Screen 3 */}
        <div
          style={{
            padding: "1.25rem 1.75rem",
            borderRadius: "16px",
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(167, 139, 250, 0.25)",
            boxShadow: "0 0 25px rgba(167, 139, 250, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <BookOpen size={18} color="var(--purple-neon)" />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "#ffffff",
                fontSize: "0.95rem",
              }}
            >
              Currently Learning
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.65rem",
            }}
          >
            {currentlyLearning.map((topic, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(167, 139, 250, 0.12)",
                  border: "1px solid rgba(167, 139, 250, 0.28)",
                  color: "var(--purple-neon)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
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
