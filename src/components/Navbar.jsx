import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { soundFX } from "../utils/audioFX";
import { portfolioAssets } from "../data/portfolioData";

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "skills", "projects", "research", "achievements", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Research", href: "#research", id: "research" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = () => {
    soundFX.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(8, 12, 20, 0.88)"
          : "rgba(8, 12, 20, 0.45)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(56, 189, 248, 0.18)"
          : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.5rem",
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={() => soundFX.playClick()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "var(--text-primary)",
            flexShrink: 0,
          }}
          aria-label="Snehith Raj Portfolio Homepage"
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--cyan-neon)",
              boxShadow: "0 0 16px rgba(56, 189, 248, 0.4)",
              flexShrink: 0,
            }}
          >
            <img
              src={portfolioAssets.heroProfile}
              alt="Snehith Raj"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              lineHeight: 1.25,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Snehith Raj
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--cyan-neon)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                display: "flex",
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
                  boxShadow: "0 0 6px var(--emerald-neon)",
                  display: "inline-block",
                }}
              />
              AI/ML • Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.1rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-accent)",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--cyan-neon)" : "var(--text-secondary)",
                  transition: "var(--transition-fast)",
                  padding: "0.35rem 0.55rem",
                  borderRadius: "var(--radius-sm)",
                  position: "relative",
                  background: isActive ? "rgba(56, 189, 248, 0.08)" : "transparent",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "0.55rem",
                      right: "0.55rem",
                      height: "2px",
                      background: "var(--cyan-neon)",
                      boxShadow: "0 0 8px var(--cyan-neon)",
                      borderRadius: "var(--radius-full)",
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Let's Talk CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            {/* Resume Modal Trigger */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 0.85rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "var(--text-primary)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.48rem 1.25rem",
                background: "linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%)",
                color: "#ffffff",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 0 18px rgba(37, 99, 235, 0.45)",
                transition: "all 0.2s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="mobile-menu-toggle"
            style={{
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid var(--border-neon)",
              borderRadius: "10px",
              color: "var(--cyan-neon)",
              width: "42px",
              height: "42px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(56, 189, 248, 0.15)",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            position: "fixed",
            top: "4.5rem",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(8, 12, 20, 0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "1.75rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            zIndex: 99,
            overflowY: "auto",
            borderTop: "1px solid rgba(56, 189, 248, 0.15)",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontFamily: "var(--font-accent)",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--cyan-neon)" : "var(--text-primary)",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    background: isActive ? "rgba(56, 189, 248, 0.12)" : "rgba(255, 255, 255, 0.02)",
                    border: isActive ? "1px solid rgba(56, 189, 248, 0.25)" : "1px solid transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--cyan-neon)",
                        boxShadow: "0 0 8px var(--cyan-neon)",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs inside mobile drawer */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              style={{
                padding: "0.95rem",
                borderRadius: "12px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid var(--border-neon)",
                color: "var(--cyan-neon)",
                fontWeight: 700,
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                cursor: "pointer",
                width: "100%",
              }}
            >
              <FileText size={18} />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={handleNavClick}
              style={{
                textDecoration: "none",
                padding: "0.95rem",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                width: "100%",
              }}
            >
              <span>Let's Talk • Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
