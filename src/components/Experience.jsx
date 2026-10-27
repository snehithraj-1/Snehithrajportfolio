import React from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Milestones & Engineering</span>
          </div>
          <h2 className="section-title">
            Experience & <span className="gradient-text-cyber">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development initiatives, exploratory research studies, academic sprints, and technical milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "2.2rem",
          }}
        >
          {/* Vertical Neon Stem Line */}
          <div className="timeline-stem" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {/* Timeline Dot */}
                <div className="timeline-dot" />

                <div
                  className="glass-card"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    transition: "var(--transition-normal)",
                    padding: "2rem",
                  }}
                >
                  {/* Top Bar: Title, Org, Period */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                        <span className="badge-neon">{exp.badge}</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                          {exp.category}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {exp.title}
                      </h3>
                      <div style={{ fontSize: "0.95rem", color: "var(--cyan-neon)", fontWeight: 600 }}>
                        {exp.organization}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        background: "rgba(15, 23, 42, 0.6)",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      <Calendar size={13} color="var(--purple-neon)" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
                    {exp.achievements.map((ach, achIdx) => (
                      <div
                        key={achIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontSize: "0.88rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle size={15} color="var(--emerald-neon)" style={{ flexShrink: 0, marginTop: "3px" }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)" }}>
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(15, 23, 42, 0.7)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
