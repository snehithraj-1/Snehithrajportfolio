import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text-cyber">Coursework</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in computer science theory, algorithms, intelligent systems, and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                border: "1px solid var(--border-subtle)",
                padding: "2.2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div>
                  <span className="badge-neon" style={{ marginBottom: "0.6rem" }}>
                    {edu.status}
                  </span>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h3>
                  <div style={{ fontSize: "1.05rem", color: "var(--cyan-neon)", fontWeight: 600, marginTop: "0.2rem" }}>
                    {edu.field}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.2rem" }}>
                    {edu.institution}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    alignItems: "flex-start",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Calendar size={14} color="var(--cyan-neon)" />
                    <span>{edu.timeline}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <MapPin size={14} color="var(--purple-neon)" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                {edu.description}
              </p>

              {/* Coursework Block */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.8rem",
                    color: "var(--text-primary)",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                  }}
                >
                  <BookOpen size={16} color="var(--cyan-neon)" />
                  <span>Key Relevant Coursework</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      style={{
                        padding: "0.3rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(15, 23, 42, 0.65)",
                        border: "1px solid var(--border-subtle)",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div
                style={{
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    <CheckCircle size={15} color="var(--emerald-neon)" style={{ flexShrink: 0 }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
