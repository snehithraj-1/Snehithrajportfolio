import React, { useState } from "react";
import NeuralCanvas from "./components/NeuralCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsMatrix from "./components/SkillsMatrix";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import Footer from "./components/Footer";
import TerminalEmulator from "./components/TerminalEmulator";
import CommandPalette from "./components/CommandPalette";
import { X } from "lucide-react";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);

  React.useEffect(() => {
    const handleGlobalKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, []);

  return (
    <div className="portfolio-app" style={{ position: "relative", minHeight: "100vh" }}>
      {/* Dynamic Synaptic Neural Background */}
      <NeuralCanvas />

      {/* Modern Navbar with Screen 1 Navigation & Let's Talk CTA */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTerminal={() => setIsTerminalModalOpen(true)}
        onOpenCmdPalette={() => setIsCmdPaletteOpen(true)}
      />

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTerminal={() => setIsTerminalModalOpen(true)}
      />

      {/* Main Content Sections matching reference mockup Screens 1 through 9 */}
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* 1. Home / Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Page */}
        <About />

        {/* 3. Skills Page */}
        <SkillsMatrix />

        {/* 4. Projects Page & 5. Project Detail Showcase */}
        <Projects />

        {/* 6. Research Page */}
        <Research />

        {/* 7. Achievements & Experience Page */}
        <Achievements />

        {/* 8. Contact Page */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onToggleTerminal={() => setIsTerminalModalOpen(true)} />

      {/* 10. Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Global Interactive Terminal CLI Modal */}
      {isTerminalModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsTerminalModalOpen(false)}
        >
          <div
            style={{
              maxWidth: "780px",
              width: "100%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsTerminalModalOpen(false)}
              style={{
                position: "absolute",
                top: "-2.6rem",
                right: 0,
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid var(--border-neon)",
                color: "#fff",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Close terminal"
            >
              <X size={16} />
            </button>
            <TerminalEmulator />
          </div>
        </div>
      )}
    </div>
  );
}
