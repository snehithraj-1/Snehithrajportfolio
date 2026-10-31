import React, { useState } from "react";
import { ExternalLink, Sparkles, ArrowRight, Eye, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { soundFX } from "../utils/audioFX";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filters = ["All", "Web Apps", "Full Stack", "TypeScript", "Python", "C++ / DSA"];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Web Apps") return project.category === "Web Apps" || project.tags.includes("Web Apps") || project.tags.includes("PWA");
    if (selectedFilter === "Full Stack") return project.category === "Full Stack" || project.tags.includes("Full Stack");
    if (selectedFilter === "TypeScript") return project.tags.includes("TypeScript");
    if (selectedFilter === "Python") return project.tags.includes("Python");
    if (selectedFilter === "C++ / DSA") return project.category === "Core CS" || project.tags.includes("C++") || project.tags.includes("DSA");
    return project.category === selectedFilter || project.tags.includes(selectedFilter);
  });

  return (
    <section id="projects" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
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
            My Projects & Case Studies
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "640px",
            }}
          >
            Flagship machine learning systems, deep learning models, generative AI applications, and empirical research case studies.
          </p>
        </div>

        {/* Filter Chips matching Screen 4 */}
        <div
          className="filter-chips-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.5rem",
          }}
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedFilter(filter);
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
                {filter}
              </button>
            );
          })}
        </div>

        {/* 6-Card Grid matching Screen 4 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
          className="projects-screen-grid"
        >
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              className="glass-card"
              onClick={() => {
                soundFX.playClick();
                setActiveProject(project);
              }}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(56, 189, 248, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              {/* Thumbnail Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  background: "#080c14",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="project-thumb-img"
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--cyan-neon)",
                    }}
                  >
                    <Code2 size={40} />
                  </div>
                )}

                {/* Ambient Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.85) 100%)",
                  }}
                />

                {/* Tags on Image */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.85rem",
                    left: "0.85rem",
                    display: "flex",
                    gap: "0.4rem",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "0.2rem 0.65rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(8, 12, 20, 0.75)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        color: "var(--cyan-neon)",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Footer Action Strip */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.82rem",
                      color: "var(--cyan-neon)",
                      fontWeight: 600,
                    }}
                  >
                    <span>View Showcase</span>
                    <ArrowRight size={14} />
                  </span>

                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundFX.playClick();
                      }}
                      style={{
                        color: "var(--text-secondary)",
                        padding: "0.3rem",
                        borderRadius: "6px",
                      }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>

                    {project.hasLiveDemo && project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFX.playClick();
                        }}
                        style={{
                          color: "var(--cyan-neon)",
                          padding: "0.3rem",
                          borderRadius: "6px",
                        }}
                        title="Live Demonstration"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal matching Screen 5 */}
      {activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
