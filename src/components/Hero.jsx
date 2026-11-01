import React from "react";
import { ArrowRight, Download, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      style={{
        paddingTop: "6.5rem",
        paddingBottom: "3.5rem",
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Main 2-Column Hero Layout matching Screen 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading, Subtitle, Actions, Location & Stats */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.95rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                marginBottom: "1.5rem",
                width: "fit-content",
              }}
            >
              <Sparkles size={14} color="var(--cyan-neon)" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#f4f4f5",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {personal.badgeRole}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.1rem)",
                lineHeight: 1.12,
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                marginBottom: "1.2rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              Building <br />
              Intelligent Systems <br />
              <span
                style={{
                  background: "linear-gradient(180deg, #ffffff 0%, #e2e8f0 45%, #a1a1aa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 35px rgba(255, 255, 255, 0.15)",
                }}
              >
                With AI & Machine Learning.
              </span>
            </h1>

            {/* AI/ML Focus Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.35rem",
              }}
            >
              {[
                "Machine Learning",
                "Deep Learning & Vision",
                "Generative AI & RAG",
                "AI Application Engineering",
              ].map((interest, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    color: "#f4f4f5",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "6px",
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Subtitle Bio */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                maxWidth: "540px",
                marginBottom: "2rem",
              }}
            >
              {personal.tagline}
            </p>

            {/* Action Buttons */}
            <div
              className="hero-cta-group"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2.25rem",
              }}
            >
              {/* Explore Projects */}
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.85rem 1.75rem",
                  background: "#ffffff",
                  color: "#09090b",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  boxShadow: "0 0 25px rgba(255, 255, 255, 0.18)",
                  transition: "all 0.25s ease",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.82rem 1.6rem",
                  background: "rgba(18, 18, 23, 0.75)",
                  color: "var(--text-primary)",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.25s ease",
                }}
              >
                <Download size={16} color="var(--cyan-neon)" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Location & Social Icons Row */}
            <div
              className="hero-meta-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.5rem",
                paddingBottom: "2.25rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                }}
              >
                <MapPin size={16} color="var(--cyan-neon)" />
                <span>{personal.location}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  aria-label="GitHub Profile"
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  aria-label="LinkedIn Profile"
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  aria-label="LeetCode Profile"
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LeetcodeIcon size={18} />
                </a>
              </div>
            </div>

            {/* 4-Stat Bar matching Screen 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.85rem",
              }}
              className="hero-stats-row"
            >
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.85rem 1rem",
                    borderRadius: "14px",
                    background: "rgba(18, 18, 23, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(8px)",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.3rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cosmic Developer Cutout Portrait matching Screen 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <TiltCard
              className="glass-card hero-image-card"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 255, 255, 0.04)",
                background: "rgba(18, 18, 23, 0.8)",
              }}
            >
              {/* Cosmic Cutout Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                }}
              >
                <img
                  src={portfolioAssets.heroProfile}
                  alt="Snehith Raj - AI/ML Engineer & Full Stack Developer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    display: "block",
                  }}
                />

                {/* Subtle bottom gradient to blend with card footer */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(8, 12, 20, 0) 0%, rgba(9, 9, 11, 0.1) 60%, rgba(9, 9, 11, 0.95) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Cosmic Cutout Badge */}
                <div
                  className="hero-floating-badge"
                  style={{
                    position: "absolute",
                    top: "1.2rem",
                    right: "1.2rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "14px",
                    background: "rgba(24, 24, 27, 0.88)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.06)",
                    transform: "rotate(3deg)",
                    maxWidth: "180px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.25,
                    }}
                  >
                    Building AI for a Better Tomorrow! 🚀
                  </p>
                </div>

                {/* Vertical Floating Social Ribbon on right edge */}
                <div
                  className="hero-floating-social"
                  style={{
                    position: "absolute",
                    right: "0.85rem",
                    bottom: "2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    padding: "0.6rem 0.45rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(18, 18, 23, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(10px)",
                    zIndex: 3,
                  }}
                >
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#ffffff", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#e4e4e7", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <LinkedinIcon size={16} />
                  </a>
                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LeetCode"
                    onClick={() => soundFX.playClick()}
                    style={{ color: "#d4d4d8", opacity: 0.85, transition: "opacity 0.2s" }}
                  >
                    <LeetcodeIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Bottom Card Footer: Scroll Down Indicator */}
              <div
                style={{
                  padding: "0.85rem 1.25rem",
                  background: "rgba(8, 12, 20, 0.85)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span>Scroll Down</span>
                <ChevronDown size={14} className="animate-bounce" color="var(--cyan-neon)" />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
