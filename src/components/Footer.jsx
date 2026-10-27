import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon, YoutubeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onToggleTerminal }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-card)",
        padding: "3.5rem 0 2rem 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: "380px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--cyan-neon)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#04131f",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                SR
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)" }}>
                {personal.name}
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Passionate Computer Science student at SRM University AP. Building intelligent, reliable, and accessible systems with machine learning, clean code architecture, and a healthy dose of midnight chai ☕.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
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
                >
                  <LeetcodeIcon size={16} color="var(--amber-neon)" />
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
                >
                  <YoutubeIcon size={16} color="#ef4444" />
                </a>
              )}

              <button
                onClick={onToggleTerminal}
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
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cyan-neon)", marginBottom: "1rem" }}>
              Navigation
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.6rem 2rem", fontSize: "0.88rem" }}>
              <a href="#hero" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Home
              </a>
              <a href="#about" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                About
              </a>
              <a href="#skills" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Skills
              </a>
              <a href="#projects" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Projects
              </a>
              <a href="#education" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Education
              </a>
              <a href="#experience" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Experience
              </a>
              <a href="#research" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Research
              </a>
              <a href="#contact" className="btn-ghost" style={{ padding: "0.2rem 0", justifyContent: "flex-start" }}>
                Contact
              </a>
            </div>
          </div>

          {/* Scroll to top */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--purple-neon)" }}>
              Back to Top
            </h4>
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.2rem" }}
              aria-label="Scroll back to top of page"
            >
              <span>Scroll to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {CURRENT_YEAR} {personal.name}. All rights reserved.
          </div>
          <div>
            Designed & Engineered with React, TypeScript & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
