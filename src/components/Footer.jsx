import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, YoutubeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { soundFX } from "../utils/audioFX";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onToggleTerminal }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(10, 10, 14, 0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "4.5rem 0 2.5rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 0.7fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="modal-body-grid"
        >
          {/* Brand Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#09090b",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)",
                  boxShadow: "0 0 16px rgba(255, 255, 255, 0.2)",
                }}
              >
                SR
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {personal.name}
              </span>
            </div>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                lineHeight: 1.65,
                maxWidth: "380px",
              }}
            >
              Computer Science undergraduate at SRM University AP. Building intelligent systems, deep neural backbones, and robust full-stack applications with mathematical rigor and midnight chai ☕.
            </p>

            {/* Live Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                color: "#34d399",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                width: "fit-content",
              }}
            >
              <span className="radar-beacon" style={{ width: "6px", height: "6px" }} />
              <span>Available for 2025–2026 AI/ML Internships</span>
            </div>

            {/* Social Icons Strip */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.5rem" }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                onClick={() => soundFX.playClick()}
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                onClick={() => soundFX.playClick()}
              >
                <LinkedinIcon size={16} />
              </a>

              {personal.leetcode && (
                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-toggle-btn"
                  aria-label="LeetCode Profile"
                  title="LeetCode Profile"
                  onClick={() => soundFX.playClick()}
                >
                  <LeetcodeIcon size={16} />
                </a>
              )}

              {personal.youtube && (
                <a
                  href={personal.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-toggle-btn"
                  aria-label="YouTube Channel"
                  title="YouTube Channel"
                  onClick={() => soundFX.playClick()}
                >
                  <YoutubeIcon size={16} />
                </a>
              )}

              <button
                onClick={() => {
                  soundFX.playClick();
                  onToggleTerminal();
                }}
                className="theme-toggle-btn"
                aria-label="Open Interactive CLI Terminal"
                title="Open Interactive CLI Terminal"
              >
                <Terminal size={16} />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem 1.5rem",
                fontSize: "0.88rem",
              }}
            >
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Achievements", href: "#achievements" },
                { label: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => soundFX.playClick()}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontFamily: "var(--font-accent)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top CTA */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
              }}
            >
              Scroll Top
            </h4>
            <button
              onClick={scrollToTop}
              className="specular-border"
              style={{
                fontSize: "0.88rem",
                padding: "0.65rem 1.4rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                color: "#ffffff",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-accent)",
                fontWeight: 600,
                transition: "all 0.2s ease",
              }}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>
            © {CURRENT_YEAR} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span>Engineered with React, TypeScript & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
