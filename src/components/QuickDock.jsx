import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Terminal, Command, ArrowUp } from "lucide-react";
import { soundFX } from "../utils/audioFX";

export default function QuickDock({ onToggleTerminal, onOpenCmdPalette }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setAudioEnabled(soundFX.isEnabled());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundFX.toggle();
    setAudioEnabled(newState);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      className="quick-dock"
      aria-label="Quick Access Controls"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 95,
        display: "flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.4rem 0.55rem",
        borderRadius: "var(--radius-full)",
        background: "rgba(14, 14, 18, 0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.04)",
      }}
    >
      {/* Sound FX Toggle */}
      <button
        onClick={handleSoundToggle}
        className="quick-dock-btn"
        aria-label={audioEnabled ? "Mute interactive audio" : "Enable interactive audio"}
        title={audioEnabled ? "Sound Effects ON" : "Sound Effects MUTED"}
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: audioEnabled ? "rgba(255, 255, 255, 0.12)" : "transparent",
          border: audioEnabled ? "1px solid rgba(255, 255, 255, 0.25)" : "1px solid transparent",
          color: audioEnabled ? "#ffffff" : "var(--text-muted)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>

      {/* Terminal CLI Modal Trigger */}
      <button
        onClick={() => {
          soundFX.playClick();
          onToggleTerminal();
        }}
        className="quick-dock-btn"
        aria-label="Open Interactive Terminal"
        title="Open Developer Terminal"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "1px solid transparent",
          color: "var(--text-secondary)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <Terminal size={16} />
      </button>

      {/* Command Palette Trigger */}
      <button
        onClick={() => {
          soundFX.playClick();
          onOpenCmdPalette();
        }}
        className="quick-dock-btn"
        aria-label="Open Command Palette (Ctrl+K)"
        title="Command Palette (⌘K / Ctrl+K)"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "1px solid transparent",
          color: "var(--text-secondary)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <Command size={15} />
      </button>

      {/* Scroll to Top (Appears when scrolled) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="quick-dock-btn"
          aria-label="Scroll to top"
          title="Back to Top"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "#ffffff",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          <ArrowUp size={16} />
        </button>
      )}
    </aside>
  );
}

