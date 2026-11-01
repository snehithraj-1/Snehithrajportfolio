import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { soundFX } from "../utils/audioFX";
import { portfolioAssets } from "../data/portfolioData";

export default function Navbar({ onOpenResume, onToggleTerminal, onOpenCmdPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["hero", "about", "skills", "projects", "research", "achievements", "contact"];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        padding: scrolled ? "0.75rem 1.25rem" : "1.25rem 1.25rem",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        className="nav-island-pill"
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.45rem 1rem" : "0.55rem 1.25rem",
          borderRadius: "9999px",
          background: scrolled
            ? "rgba(10, 10, 14, 0.88)"
            : "rgba(18, 18, 23, 0.65)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: scrolled
            ? "inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 16px 36px -8px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.2)"
            : "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 24px -6px rgba(0, 0, 0, 0.4)",
          pointerEvents: "auto",
        }}
      >
        {/* Brand Identity */}
        <a
          href="#hero"
          onClick={() => soundFX.playClick()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "#ffffff",
          }}
          aria-label="Snehith Raj Portfolio"
        >
          <div
            style={{
              position: "relative",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid rgba(255, 255, 255, 0.25)",
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.12)",
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

          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "1.02rem",
                letterSpacing: "-0.025em",
                color: "#ffffff",
              }}
            >
              Snehith Raj
            </span>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.68rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <span className="radar-beacon" style={{ width: "6px", height: "6px" }} />
              AI/ML • Full Stack
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Framer Motion Floating Active Pill */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
            background: "rgba(255, 255, 255, 0.03)",
            padding: "0.22rem",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
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
                  position: "relative",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-accent)",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  padding: "0.36rem 0.85rem",
                  borderRadius: "9999px",
                  transition: "color 0.2s ease",
                  zIndex: 1,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
                      zIndex: -1,
                    }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            {/* Resume Trigger */}
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
                padding: "0.45rem 0.95rem",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-accent)",
                fontSize: "0.84rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              className="specular-border"
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
                padding: "0.48rem 1.15rem",
                borderRadius: "9999px",
                background: "#ffffff",
                color: "#09090b",
                fontFamily: "var(--font-accent)",
                fontSize: "0.86rem",
                fontWeight: 700,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                transition: "all 0.2s ease",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
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
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "50%",
              color: "#ffffff",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-nav-drawer"
            style={{
              position: "fixed",
              top: "4.75rem",
              left: "1rem",
              right: "1rem",
              background: "rgba(10, 10, 14, 0.95)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "24px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 99,
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
              pointerEvents: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={handleNavClick}
                    style={{
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontFamily: "var(--font-accent)",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#ffffff" : "var(--text-secondary)",
                      padding: "0.75rem 1rem",
                      borderRadius: "14px",
                      background: isActive ? "rgba(255, 255, 255, 0.08)" : "transparent",
                      border: isActive ? "1px solid rgba(255, 255, 255, 0.16)" : "1px solid transparent",
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
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#ffffff",
                          boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTAs inside drawer */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.5rem" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                style={{
                  padding: "0.85rem",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <FileText size={16} />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={handleNavClick}
                style={{
                  textDecoration: "none",
                  padding: "0.85rem",
                  borderRadius: "14px",
                  background: "#ffffff",
                  color: "#09090b",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                  width: "100%",
                }}
              >
                <span>Let's Talk • Contact Me</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}