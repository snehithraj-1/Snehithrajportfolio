import React, { useState, useEffect } from "react";
import { Coffee, Music, Terminal, Sparkles, Heart, AlertTriangle, BookOpen, Volume2, VolumeX, Check } from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import { soundFX } from "../utils/audioFX";
import TiltCard from "./TiltCard";

export default function HumanTouch() {
  const { humanSide, personal } = portfolioData;

  // High-five & Chai state with localStorage persistence
  const [highFives, setHighFives] = useState(() => {
    try {
      const saved = localStorage.getItem("snehith_high_fives");
      return saved ? parseInt(saved, 10) : 142;
    } catch {
      return 142;
    }
  });

  const [chaiCount, setChaiCount] = useState(() => {
    try {
      const saved = localStorage.getItem("snehith_chai_count");
      return saved ? parseInt(saved, 10) : 89;
    } catch {
      return 89;
    }
  });

  const [particles, setParticles] = useState([]);
  const [activeBlooper, setActiveBlooper] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  // Web Audio API ambient focus sound generator (Lo-fi / Ambient drone)
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [ambientVibe, setAmbientVibe] = useState("lofi"); // "lofi" | "rain" | "space"
  const audioContextRef = React.useRef(null);
  const oscillatorNodesRef = React.useRef([]);
  const gainNodeRef = React.useRef(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const handleHighFive = (e) => {
    soundFX.playClick();
    const newCount = highFives + 1;
    setHighFives(newCount);
    try {
      localStorage.setItem("snehith_high_fives", newCount.toString());
    } catch {
      // ignore
    }

    // Spawn floating particle
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const emojis = ["✋", "✨", "❤️", "🚀", "🔥"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    setParticles((prev) => [
      ...prev,
      { id, emoji, x: rect.left + rect.width / 2, y: rect.top }
    ]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1200);

    triggerToast("High-five received! ✋ You just made my day awesome.");
  };

  const handleSendChai = (e) => {
    soundFX.playClick();
    const newCount = chaiCount + 1;
    setChaiCount(newCount);
    try {
      localStorage.setItem("snehith_chai_count", newCount.toString());
    } catch {
      // ignore
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    const emojis = ["☕", "🫖", "✨", "💛", "🌿"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    setParticles((prev) => [
      ...prev,
      { id, emoji, x: rect.left + rect.width / 2, y: rect.top }
    ]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1200);

    triggerToast("Virtual chai brewed! ☕ Fueled for another 500 lines of code.");
  };

  // Ambient sound synthesizer using native Web Audio API
  const stopAmbient = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.3);
      setTimeout(() => {
        oscillatorNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorNodesRef.current = [];
        setIsAmbientPlaying(false);
      }, 350);
    } else {
      setIsAmbientPlaying(false);
    }
  };

  const startAmbient = (vibe) => {
    stopAmbient();
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContextRef.current || new AudioCtx();
      audioContextRef.current = ctx;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.8);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Frequencies depending on vibe
      let freqs = [110, 164.81, 220, 329.63]; // A major 9th warm chord
      if (vibe === "space") freqs = [65.41, 130.81, 196, 293.66]; // Cosmic ambient
      if (vibe === "rain") freqs = [82.41, 123.47, 164.81, 246.94]; // Deep contemplative

      const oscs = freqs.map((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        // subtle LFO detune
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) {
          panner.pan.setValueAtTime((i - 1.5) * 0.4, ctx.currentTime);
          osc.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(masterGain);
        }

        osc.start();
        return osc;
      });

      oscillatorNodesRef.current = oscs;
      setIsAmbientPlaying(true);
      setAmbientVibe(vibe);
    } catch {
      setIsAmbientPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbient();
    };
  }, []);

  const getRitualIcon = (iconName) => {
    switch (iconName) {
      case "Coffee": return <Coffee size={18} color="var(--amber-neon)" />;
      case "Music": return <Music size={18} color="var(--purple-neon)" />;
      case "Terminal": return <Terminal size={18} color="var(--cyan-neon)" />;
      case "Sparkles": return <Sparkles size={18} color="var(--emerald-neon)" />;
      default: return <Coffee size={18} />;
    }
  };

  return (
    <section
      id="human-touch"
      style={{
        padding: "6rem 0 5rem 0",
        position: "relative",
        background: "radial-gradient(circle 800px at 50% 50%, rgba(245, 158, 11, 0.04), transparent 70%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(245, 158, 11, 0.2)",
            color: "#ffffff",
            padding: "0.85rem 1.4rem",
            borderRadius: "var(--radius-lg)",
            backdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-heading)",
            fontSize: "0.92rem",
            fontWeight: 600,
            animation: "slideInRight 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <Check size={18} color="#f59e0b" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Click Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{ left: `${p.x}px`, top: `${p.y}px` }}
        >
          {p.emoji}
        </div>
      ))}

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem auto" }}>
          {/* Handwritten badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 1rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              marginBottom: "1rem",
            }}
          >
            <Sparkles size={14} color="#f59e0b" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#f59e0b",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              THE HUMAN BEHIND THE SCREEN
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Curiosity, Chai & Late-Night AHA! Moments
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Software isn't just about passing automated tests. It’s about human empathy, midnight debugging epiphanies, and the genuine joy of crafting tools that make people smile.
          </p>

          {/* Interactive Human Connection Station: High-Fives & Virtual Chai */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={handleHighFive}
              className="high-five-btn"
              title="Click to give Snehith a high-five!"
            >
              <span>✋ Give a High-Five</span>
              <span
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "0.15rem 0.55rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {highFives}
              </span>
            </button>

            <button
              onClick={handleSendChai}
              className="chai-btn"
              title="Click to offer Snehith a warm virtual cup of chai!"
            >
              <span>☕ Offer a Virtual Chai</span>
              <span
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "0.15rem 0.55rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {chaiCount}
              </span>
            </button>
          </div>
        </div>

        {/* 2-Column Showcase: Polaroid Workspace + Sticky Notes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
          className="human-grid-layout"
        >
          {/* Left Column: Cozy Polaroid Desk + Interactive Vibe Player */}
          <div>
            <div
              className="polaroid-card"
              style={{
                transform: "rotate(-1.5deg)",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={portfolioAssets.humanWorkspace}
                  alt="Snehith's cozy developer workspace with steaming chai and handwritten notebook"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* Chai Steam Badge overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "6px",
                    background: "rgba(15, 23, 42, 0.8)",
                    backdropFilter: "blur(8px)",
                    color: "#fcd34d",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <Coffee size={12} />
                  <span>Fresh Cardamom Chai • 11:45 PM</span>
                </div>
              </div>

              {/* Handwritten Polaroid Caption */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-handwriting)",
                    fontSize: "1.45rem",
                    lineHeight: 1.25,
                    color: "#1e293b",
                    fontWeight: 700,
                  }}
                >
                  "Where crazy ideas turn into working code — with hot chai and good music."
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#64748b",
                    marginTop: "0.25rem",
                    display: "block",
                  }}
                >
                  📍 SRM University AP Hostels & Lab
                </span>
              </div>
            </div>

            {/* Interactive Ambient Vibe Player */}
            <div
              style={{
                marginTop: "1.75rem",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "1rem 1.25rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <button
                  onClick={() => {
                    if (isAmbientPlaying) {
                      stopAmbient();
                    } else {
                      startAmbient(ambientVibe);
                    }
                  }}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: isAmbientPlaying
                      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                      : "rgba(255, 255, 255, 0.08)",
                    border: "none",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  aria-label={isAmbientPlaying ? "Mute coding focus soundtrack" : "Play coding focus soundtrack"}
                >
                  {isAmbientPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>

                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                    {isAmbientPlaying ? "🎵 Focus Chords Active" : "Coding Vibe Player"}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {isAmbientPlaying ? `Preset: ${ambientVibe.toUpperCase()}` : "Click to hear the late-night focus sound"}
                  </div>
                </div>
              </div>

              {/* Vibe Selection Pills */}
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {[
                  { id: "lofi", label: "Lo-Fi Warmth" },
                  { id: "rain", label: "Night Rain" },
                  { id: "space", label: "Cosmic Drift" }
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => startAmbient(v.id)}
                    style={{
                      background: ambientVibe === v.id && isAmbientPlaying
                        ? "rgba(56, 189, 248, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: ambientVibe === v.id && isAmbientPlaying
                        ? "1px solid var(--cyan-neon)"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      color: ambientVibe === v.id && isAmbientPlaying ? "var(--cyan-neon)" : "var(--text-secondary)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Authentic Handwritten Sticky Notes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {humanSide.stickyNotes.map((note, idx) => (
              <div
                key={idx}
                className="sticky-note"
                style={{
                  background: note.color,
                  color: note.textColor,
                  transform: `rotate(${note.rotate})`,
                }}
              >
                {/* Washi tape strip */}
                <div className="washi-tape" />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                    borderBottom: "1px dashed rgba(0, 0, 0, 0.15)",
                    paddingBottom: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      opacity: 0.85,
                    }}
                  >
                    {note.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      opacity: 0.65,
                    }}
                  >
                    #NOTE_0{idx + 1}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-handwriting)",
                    fontSize: "1.35rem",
                    lineHeight: 1.35,
                    fontWeight: 700,
                  }}
                >
                  "{note.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Coding Rituals & Engineering Bloopers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
          className="human-grid-layout"
        >
          {/* Daily Rituals & Setup */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "20px",
              padding: "2rem",
              backdropFilter: "blur(14px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <Coffee size={20} color="var(--amber-neon)" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>
                My Coding Rituals & Gear
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {humanSide.rituals.map((ritual, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0.55rem",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getRitualIcon(ritual.icon)}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--cyan-neon)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {ritual.label}
                    </div>
                    <div style={{ fontSize: "0.92rem", color: "var(--text-primary)", lineHeight: 1.45 }}>
                      {ritual.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candid Bloopers & Real Lessons */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "20px",
              padding: "2rem",
              backdropFilter: "blur(14px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <AlertTriangle size={20} color="#fb7185" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff" }}>
                Real Engineering Bloopers
              </h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
              Any robot can claim 100% perfection. Here are real things that broke, and the valuable lessons they taught me:
            </p>

            {/* Blooper selector tabs */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", overflowX: "auto" }}>
              {humanSide.bloopers.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveBlooper(idx);
                  }}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "8px",
                    border: "none",
                    background: activeBlooper === idx ? "rgba(251, 113, 133, 0.18)" : "rgba(255, 255, 255, 0.04)",
                    color: activeBlooper === idx ? "#fda4af" : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                    borderBottom: activeBlooper === idx ? "2px solid #fb7185" : "2px solid transparent",
                  }}
                >
                  #{idx + 1} {b.context}
                </button>
              ))}
            </div>

            {/* Active blooper card */}
            <div
              style={{
                background: "rgba(251, 113, 133, 0.06)",
                border: "1px solid rgba(251, 113, 133, 0.2)",
                borderRadius: "14px",
                padding: "1.35rem",
              }}
            >
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>
                {humanSide.bloopers[activeBlooper].title}
              </h4>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#fda4af",
                  marginBottom: "0.85rem",
                }}
              >
                Event: {humanSide.bloopers[activeBlooper].context}
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                }}
              >
                "{humanSide.bloopers[activeBlooper].story}"
              </p>
            </div>

            {/* Unpopular Opinion Quote */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "0.85rem 1.15rem",
                borderRadius: "12px",
                background: "rgba(56, 189, 248, 0.05)",
                border: "1px dashed rgba(56, 189, 248, 0.3)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>💡</span>
              <p
                style={{
                  fontFamily: "var(--font-handwriting)",
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  color: "var(--cyan-neon)",
                  fontWeight: 600,
                }}
              >
                "{humanSide.unpopularOpinions[0]}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
