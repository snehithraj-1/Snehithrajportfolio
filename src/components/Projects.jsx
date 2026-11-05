import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { soundFX } from "../utils/audioFX";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filters = ["All", "Web Apps", "Full Stack", "TypeScript", "Python", "DSA"];

  const matchesFilter = (project, filterKey) => {
    if (filterKey === "All") return true;
    if (filterKey === "Web Apps")
      return project.category === "Web Apps" || project.tags.includes("Web Apps") || project.tags.includes("PWA");
    if (filterKey === "Full Stack")
      return project.category === "Full Stack" || project.tags.includes("Full Stack");
    if (filterKey === "TypeScript") return project.tags.includes("TypeScript");
    if (filterKey === "Python") return project.tags.includes("Python");
    if (filterKey === "DSA")
      return project.category === "DSA" || project.tags.includes("DSA") || project.tags.includes("Algorithms") || project.tags.includes("Problem Solving");
    return project.category === filterKey || project.tags.includes(filterKey);
  };

  const filteredProjects = projects.filter((project) => matchesFilter(project, selectedFilter));

  const countForFilter = (filterKey) => {
    return projects.filter((project) => matchesFilter(project, filterKey)).length;
  };

  return (
    <section id="projects" style={{ padding: "6rem 0", position: "relative" }}>
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
              GitHub Repositories // Deployed Projects
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
            Featured GitHub Projects.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "640px",
            }}
          >
            Production web applications, offline-first progressive web apps, campus peer platforms, and algorithmic problem-solving repositories directly from my GitHub.
          </p>
        </div>

        {/* Filter Chips Bar with Framer Motion Active Indicator */}
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
                  position: "relative",
                  padding: "0.45rem 1.15rem",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  color: isSelected ? "#09090b" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.86rem",
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
                    layoutId="projects-filter-pill"
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
                <span>{filter}</span>
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
                  {countForFilter(filter)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Flagship Project Cards */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
          className="projects-screen-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  className="bento-card"
                  onClick={() => {
                    soundFX.playClick();
                    setActiveProject(project);
                  }}
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* 16:9 Thumbnail Container */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                      background: "#09090b",
                    }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className="project-thumb-img"
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          background: "linear-gradient(135deg, #18181f 0%, #09090b 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        <Code2 size={40} />
                      </div>
                    )}

                    {/* Ambient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(9, 9, 11, 0.9) 100%)",
                      }}
                    />

                    {/* Tags on Image */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0.95rem",
                        left: "0.95rem",
                        display: "flex",
                        gap: "0.4rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "0.22rem 0.65rem",
                            borderRadius: "9999px",
                            background: "rgba(9, 9, 11, 0.85)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: "#f4f4f5",
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

                  {/* Card Content */}
                  <div
                    style={{
                      padding: "1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      gap: "0.85rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics / Highlights if present */}
                    {project.stats && (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`,
                          gap: "0.5rem",
                          padding: "0.75rem",
                          borderRadius: "12px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                        }}
                      >
                        {project.stats.map((s, idx) => (
                          <div key={idx} style={{ textAlign: "center" }}>
                            <span
                              style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 800,
                                fontSize: "0.95rem",
                                color: "#ffffff",
                                display: "block",
                              }}
                            >
                              {s.value}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.65rem",
                                color: "var(--text-muted)",
                                textTransform: "uppercase",
                              }}
                            >
                              {s.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Card Action Footer */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.84rem",
                          color: "#ffffff",
                          fontWeight: 600,
                          fontFamily: "var(--font-accent)",
                        }}
                      >
                        <span>Case Study & Details</span>
                        <ArrowRight size={15} />
                      </span>

                      <div style={{ display: "flex", gap: "0.5rem" }}>
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
                            padding: "0.4rem",
                            borderRadius: "8px",
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s ease",
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
                              color: "#ffffff",
                              padding: "0.4rem",
                              borderRadius: "8px",
                              background: "rgba(255, 255, 255, 0.08)",
                              border: "1px solid rgba(255, 255, 255, 0.16)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.2s ease",
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
