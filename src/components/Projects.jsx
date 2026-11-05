import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ArrowRight, Code2, GitBranch, Cpu, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { soundFX } from "../utils/audioFX";

export default function Projects() {
  const { projects } = portfolioData;
  const flagshipProject = projects[0] || null;
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" style={{ padding: "6.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.95rem",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              marginBottom: "1rem",
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
              Verified GitHub Repository // Production Showcase
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.3rem, 4.2vw, 3.2rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              marginBottom: "0.75rem",
            }}
          >
            Flagship Engineering Project.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              lineHeight: 1.6,
            }}
          >
            Production web application engineered with 60 FPS HTML5 neural canvas physics, synthesized Web Audio feedback, and keyboard-driven developer tooling — verified and open-source on GitHub.
          </p>
        </div>

        {/* Flagship Project Showcase Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 1fr",
            gap: "2rem",
            alignItems: "stretch",
          }}
          className="modal-body-grid"
        >
          {/* Main Flagship Project Bento Card */}
          {flagshipProject && (
            <TiltCard
              className="bento-card"
              style={{
                padding: "0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                background: "rgba(14, 14, 18, 0.85)",
              }}
            >
              {/* Top Media & Visual Preview */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  background: "#09090b",
                }}
              >
                {flagshipProject.image ? (
                  <img
                    src={flagshipProject.image}
                    alt={flagshipProject.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 28%",
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

                {/* Dark Vignette Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(9, 9, 11, 0.3) 0%, rgba(9, 9, 11, 0.85) 100%)",
                  }}
                />

                {/* Top Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.1rem",
                    left: "1.1rem",
                    right: "1.1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(16, 185, 129, 0.15)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        color: "var(--emerald-neon)",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--emerald-neon)",
                          display: "inline-block",
                        }}
                      />
                      LIVE IN PRODUCTION
                    </span>

                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(9, 9, 11, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        color: "#f4f4f5",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                      }}
                    >
                      VERCEL EDGE
                    </span>
                  </div>

                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                    }}
                  >
                    60 FPS
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "1.2rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.55rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.2,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {flagshipProject.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--cyan-neon)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {flagshipProject.subtitle}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.93rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {flagshipProject.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {flagshipProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "0.24rem 0.7rem",
                        borderRadius: "9999px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#e4e4e7",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.75rem",
                    padding: "0.9rem",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.025)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {flagshipProject.stats.map((s, idx) => (
                    <div key={idx} style={{ textAlign: "center" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 800,
                          fontSize: "1.1rem",
                          color: "#ffffff",
                          display: "block",
                        }}
                      >
                        {s.value}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    paddingTop: "1.2rem",
                    marginTop: "auto",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setActiveProject(flagshipProject);
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontFamily: "var(--font-accent)",
                      padding: 0,
                    }}
                  >
                    <span>Inspect Case Study & Architecture</span>
                    <ArrowRight size={15} />
                  </button>

                  <div style={{ display: "flex", gap: "0.65rem" }}>
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="specular-border"
                      style={{
                        color: "#ffffff",
                        padding: "0.55rem 1rem",
                        borderRadius: "9999px",
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.14)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        fontFamily: "var(--font-accent)",
                        transition: "all 0.2s ease",
                      }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={15} />
                      <span>Codebase</span>
                    </a>

                    <a
                      href={flagshipProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFX.playClick()}
                      style={{
                        color: "#09090b",
                        padding: "0.55rem 1.15rem",
                        borderRadius: "9999px",
                        background: "#ffffff",
                        boxShadow: "0 2px 14px rgba(255, 255, 255, 0.25)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontFamily: "var(--font-accent)",
                        transition: "all 0.2s ease",
                      }}
                      title="Live Production Deployment"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          )}

          {/* Right Column: Pipeline & Development Roadmap Bento Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Pipeline Bento Card */}
            <div
              className="bento-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(18, 18, 23, 0.7)",
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  background: "rgba(167, 139, 250, 0.12)",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  width: "fit-content",
                }}
              >
                <GitBranch size={13} color="#a78bfa" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#a78bfa",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Active Roadmap // In Pipeline
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.5rem",
                  }}
                >
                  Full-Stack & AI Systems in Development
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  Currently architecting next-generation web applications, modern React client interfaces, and Python backend services. New engineered projects will be pushed directly to GitHub.
                </p>
              </div>

              {/* Active Development Modules */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  {
                    title: "Modern React & Next.js Platforms",
                    desc: "Component-driven architectures with server actions & edge compute",
                    status: "Architecture Phase",
                    color: "var(--cyan-neon)",
                  },
                  {
                    title: "Python & Machine Learning APIs",
                    desc: "Lightweight inference pipelines & structured API contracts",
                    status: "Sprint Active",
                    color: "var(--emerald-neon)",
                  },
                  {
                    title: "Competitive DSA Solutions",
                    desc: "Java algorithmic implementations & LeetCode patterns",
                    status: "Continuous",
                    color: "#a78bfa",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.86rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "9999px",
                        background: "rgba(255, 255, 255, 0.06)",
                        color: item.color,
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* GitHub Follow CTA */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <a
                  href="https://github.com/snehithraj-1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: "var(--font-accent)",
                    transition: "color 0.2s ease",
                  }}
                >
                  <GithubIcon size={16} />
                  <span>Follow commits on github.com/snehithraj-1</span>
                  <ExternalLink size={13} color="var(--text-muted)" />
                </a>
              </div>
            </div>

            {/* LeetCode / DSA Callout Bento Card */}
            <div
              className="bento-card"
              style={{
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(18, 18, 23, 0.6)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(234, 179, 8, 0.12)",
                    border: "1px solid rgba(234, 179, 8, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--amber-neon)",
                  }}
                >
                  <Cpu size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#ffffff" }}>
                    Data Structures & Problem Solving
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                    Algorithmic implementations in Java & verified coursework
                  </div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/hcdiMGr9EW/"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                style={{
                  padding: "0.45rem 0.95rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "#ffffff",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--font-accent)",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
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
