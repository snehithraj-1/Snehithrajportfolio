import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Send,
  Sparkles,
  Sliders,
  Play,
  RotateCcw,
  Activity,
  Layers,
  Database,
  ShieldCheck,
  Cpu,
  BarChart2,
  AlertTriangle,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { soundFX } from "../utils/audioFX";

export default function ProjectDetailsModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  // State for EduPath AI Chat Simulator
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Namaste! I am EduPath AI. I can guide you through AI/ML careers, higher education roadmaps, and scholarships in English, Telugu, or Hindi. What would you like to explore today?",
    },
    {
      sender: "user",
      text: "I am a 3rd-year CS student interested in AI Engineering. What skills should I master first?",
    },
    {
      sender: "bot",
      text: "Great career target! Focus on: 1. Strong Python & Vectorized NumPy. 2. Supervised Learning & Scikit-learn. 3. PyTorch for Deep Learning & CNNs. 4. RAG pipelines with LangChain & Vector DBs. 5. FastAPI microservice deployment.",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  // State for Water Quality Simulator
  const [waterParams, setWaterParams] = useState({
    ph: 7.2,
    hardness: 195,
    chloramines: 7.1,
    sulfate: 330,
  });

  // State for SmartVision Telemetry Simulator
  const [visionScene, setVisionScene] = useState("campus");
  const [visionDetecting, setVisionDetecting] = useState(true);

  // State for Exoplanet Transit Inspector
  const [exoplanetCandidate, setExoplanetCandidate] = useState("kepler186f");
  const [phaseFold, setPhaseFold] = useState(0.5);

  // State for Campus-Trade Simulator
  const [tradeRole, setTradeRole] = useState("student");
  const [escrowStep, setEscrowStep] = useState(2);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    soundFX.playClick();
    const newMsg = { sender: "user", text: userInput };
    const promptText = userInput.toLowerCase();
    setUserInput("");

    setChatMessages((prev) => [...prev, newMsg]);

    setTimeout(() => {
      soundFX.playSuccess();
      let reply =
        "That's a vital question. For modern AI/ML roles, having strong problem-solving skills (DSA in C++), empirical modeling experience, and deployed demo applications creates a competitive edge.";
      if (promptText.includes("telugu") || promptText.includes("తెలుగు")) {
        reply =
          "మీరు అడిగిన ప్రశ్నకు సమాధానం: AI/ML మరియు Deep Learning రంగాలలో పరిశోధన మరియు ప్రాక్టికల్ ప్రాజెక్ట్‌ల అనుభవం ఉద్యోగ అవకాశాలను మెరుగుపరుస్తుంది!";
      } else if (promptText.includes("hindi") || promptText.includes("हिंदी")) {
        reply =
          "आपके प्रश्न का उत्तर: मशीन लर्निंग, पायथन और डीप लर्निंग में प्रोजेक्ट्स बनाकर आप बेहतरीन तकनीकी अवसर प्राप्त कर सकते हैं।";
      } else if (promptText.includes("roadmap") || promptText.includes("learn")) {
        reply =
          "Recommended 3-step roadmap: Step 1 - Linear algebra, calculus & Scikit-learn. Step 2 - Deep Learning architectures (CNNs/Transformers) in PyTorch. Step 3 - Containerized REST APIs with Docker & FastAPI.";
      }

      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  const tabs = [
    { id: "overview", label: "Overview & Objectives" },
    { id: "architecture", label: "Architecture & Pipeline" },
    { id: "dataset", label: "Dataset & Preprocessing" },
    { id: "metrics", label: "Evaluation & Benchmarks" },
    { id: "learnings", label: "Challenges & Limitations" },
  ];

  // Render Project-Specific Interactive Simulator
  const renderInteractiveDemo = () => {
    if (project.id === "edupath-ai") {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Chat Simulator Content */}
          <div
            style={{
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              minHeight: "220px",
              maxHeight: "260px",
              overflowY: "auto",
              background: "radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.6) 0%, rgba(8, 12, 20, 0.95) 100%)",
            }}
          >
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "0.75rem 1rem",
                    borderRadius: msg.sender === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)"
                        : "rgba(30, 41, 59, 0.8)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    lineHeight: 1.5,
                    border: msg.sender === "user" ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              padding: "0.5rem 1.25rem",
              background: "rgba(10, 15, 28, 0.9)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
            }}
          >
            {[
              "AI Engineer Roadmap?",
              "Scholarships for Rural CS?",
              "తెలుగులో కెరీర్ సలహా",
            ].map((qp, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setUserInput(qp);
                  soundFX.playClick();
                }}
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "var(--cyan-neon)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                + {qp}
              </button>
            ))}
          </div>

          {/* Chat Input Box */}
          <form
            onSubmit={handleSendMessage}
            style={{
              padding: "0.75rem 1.25rem",
              background: "rgba(15, 23, 42, 0.95)",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              gap: "0.75rem",
            }}
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask EduPath AI in English, Telugu or Hindi..."
              style={{
                flex: 1,
                background: "rgba(8, 12, 20, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: "10px",
                padding: "0.55rem 0.9rem",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontFamily: "var(--font-heading)",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.55rem 1.1rem",
                borderRadius: "10px",
                background: "var(--cyan-neon)",
                border: "none",
                color: "#080c14",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              <span>Ask</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      );
    }

    if (project.id === "water-quality") {
      const isPotable =
        waterParams.ph >= 6.5 &&
        waterParams.ph <= 8.5 &&
        waterParams.chloramines <= 8.0 &&
        waterParams.sulfate <= 350;
      const vqcScore = isPotable ? 0.92 : 0.21;
      const rfScore = isPotable ? 0.98 : 0.08;

      return (
        <div style={{ padding: "1.5rem", background: "rgba(8, 12, 20, 0.85)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                <span>pH Level (Safe: 6.5 - 8.5)</span>
                <span style={{ color: "var(--cyan-neon)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{waterParams.ph}</span>
              </div>
              <input
                type="range"
                min="4"
                max="10"
                step="0.1"
                value={waterParams.ph}
                onChange={(e) => setWaterParams({ ...waterParams, ph: parseFloat(e.target.value) })}
                style={{ width: "100%", accentColor: "var(--cyan-neon)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                <span>Chloramines (Safe: &lt;8.0 ppm)</span>
                <span style={{ color: "var(--cyan-neon)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{waterParams.chloramines} ppm</span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                step="0.2"
                value={waterParams.chloramines}
                onChange={(e) => setWaterParams({ ...waterParams, chloramines: parseFloat(e.target.value) })}
                style={{ width: "100%", accentColor: "var(--cyan-neon)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                <span>Hardness (mg/L)</span>
                <span style={{ color: "var(--cyan-neon)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{waterParams.hardness}</span>
              </div>
              <input
                type="range"
                min="80"
                max="320"
                step="5"
                value={waterParams.hardness}
                onChange={(e) => setWaterParams({ ...waterParams, hardness: parseInt(e.target.value) })}
                style={{ width: "100%", accentColor: "var(--cyan-neon)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                <span>Sulfate (Safe: &lt;350 mg/L)</span>
                <span style={{ color: "var(--cyan-neon)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>{waterParams.sulfate}</span>
              </div>
              <input
                type="range"
                min="150"
                max="450"
                step="5"
                value={waterParams.sulfate}
                onChange={(e) => setWaterParams({ ...waterParams, sulfate: parseInt(e.target.value) })}
                style={{ width: "100%", accentColor: "var(--cyan-neon)" }}
              />
            </div>
          </div>

          {/* Model Inference Results Bar */}
          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "12px",
              background: isPotable ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)",
              border: isPotable ? "1px solid rgba(16, 185, 129, 0.35)" : "1px solid rgba(239, 68, 68, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: isPotable ? "var(--emerald-neon)" : "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#080c14",
                  fontWeight: 800,
                }}
              >
                {isPotable ? "✓" : "✕"}
              </div>
              <div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
                  Water Status: {isPotable ? "Potable & Safe to Drink" : "Non-Potable / Contaminated"}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  PennyLane Angle Embedding: [RY({(waterParams.ph * 0.3).toFixed(2)}), RY({(waterParams.chloramines * 0.25).toFixed(2)})]
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
              <div>
                <span style={{ color: "var(--text-secondary)" }}>Classical RF: </span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>{(rfScore * 100).toFixed(1)}%</span>
              </div>
              <div>
                <span style={{ color: "var(--text-secondary)" }}>PennyLane VQC: </span>
                <span style={{ color: "var(--cyan-neon)", fontWeight: 700 }}>{(vqcScore * 100).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "smartvision-ai") {
      const scenes = {
        campus: { title: "Campus Walkway", objects: [{ label: "Student Pedestrian", conf: "94.2%", bbox: "x: 120, y: 80, w: 90, h: 210" }, { label: "Backpack", conf: "89.1%", bbox: "x: 140, y: 130, w: 40, h: 60" }] },
        traffic: { title: "Intersection", objects: [{ label: "Electric Vehicle", conf: "97.5%", bbox: "x: 280, y: 150, w: 220, h: 140" }, { label: "Bicycle", conf: "91.8%", bbox: "x: 80, y: 200, w: 70, h: 110" }] },
        lab: { title: "Robotics Lab", objects: [{ label: "Laptop / Display", conf: "98.1%", bbox: "x: 180, y: 110, w: 130, h: 90" }, { label: "Robot Chassis", conf: "93.4%", bbox: "x: 350, y: 170, w: 150, h: 120" }] },
      };
      const curScene = scenes[visionScene];

      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          {/* Controls Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {Object.keys(scenes).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setVisionScene(key)}
                  style={{
                    padding: "0.3rem 0.8rem",
                    borderRadius: "6px",
                    background: visionScene === key ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: visionScene === key ? "1px solid var(--cyan-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: visionScene === key ? "#ffffff" : "var(--text-secondary)",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                  }}
                >
                  {scenes[key].title}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              <span style={{ color: "var(--emerald-neon)" }}>● 45.2 FPS (TensorRT)</span>
              <span style={{ color: "var(--text-secondary)" }}>Latency: 22.1ms</span>
            </div>
          </div>

          {/* Visual Telemetry Canvas HUD */}
          <div
            style={{
              height: "170px",
              borderRadius: "10px",
              border: "1px dashed rgba(56, 189, 248, 0.35)",
              background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.95) 100%)",
              position: "relative",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--cyan-neon)" }}>
                INPUT: 640x640 RGB STREAM • YOLOv8 CSP-Darknet Backbone
              </span>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
                CONF_THRESH: 0.45
              </span>
            </div>

            {/* Simulated Bounding Boxes */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {curScene.objects.map((obj, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.5rem 0.85rem",
                    borderRadius: "6px",
                    background: "rgba(56, 189, 248, 0.12)",
                    border: "1px solid var(--cyan-neon)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                  }}
                >
                  <div style={{ color: "#ffffff", fontWeight: 700 }}>
                    {obj.label} — <span style={{ color: "var(--emerald-neon)" }}>{obj.conf}</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                    BBox: [{obj.bbox}]
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              Vectorized NMS filter eliminated 14 overlapping anchor candidates.
            </div>
          </div>
        </div>
      );
    }

    if (project.id === "exoplanet-detection") {
      const candidates = {
        kepler186f: { name: "Kepler-186f", period: "129.9 Days", depth: "512 ppm", score: "97.4%", label: "Confirmed Earth-Sized Exoplanet" },
        kepler452b: { name: "Kepler-452b", period: "384.8 Days", depth: "210 ppm", score: "96.1%", label: "Super-Earth in Habitable Zone" },
        binary: { name: "TCE-9832227", period: "1.2 Days", depth: "4,500 ppm", score: "4.2%", label: "Eclipsing Binary False Alarm" },
      };
      const cur = candidates[exoplanetCandidate];

      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {Object.keys(candidates).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setExoplanetCandidate(key)}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "6px",
                    background: exoplanetCandidate === key ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: exoplanetCandidate === key ? "1px solid var(--cyan-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: exoplanetCandidate === key ? "#ffffff" : "var(--text-secondary)",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                  }}
                >
                  {candidates[key].name}
                </button>
              ))}
            </div>

            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--cyan-neon)" }}>
              BLS Transit Period: {cur.period}
            </div>
          </div>

          {/* Light Curve Transit Dip Visualizer */}
          <div
            style={{
              padding: "1rem",
              borderRadius: "10px",
              background: "#050810",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
              <span>Phase Folded Flux (Detrended Kepler Photometry)</span>
              <span>Dip Depth: {cur.depth}</span>
            </div>

            {/* SVG Synthetic Transit Dip */}
            <svg width="100%" height="70" viewBox="0 0 500 70" preserveAspectRatio="none">
              <path
                d={
                  exoplanetCandidate === "binary"
                    ? "M 0 20 L 180 20 L 250 65 L 320 20 L 500 20"
                    : "M 0 25 L 210 25 L 235 48 L 265 48 L 290 25 L 500 25"
                }
                fill="none"
                stroke="var(--cyan-neon)"
                strokeWidth="2.5"
              />
              <circle cx="250" cy={exoplanetCandidate === "binary" ? "65" : "48"} r="4" fill="var(--emerald-neon)" />
            </svg>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "0.5rem" }}>
              <span style={{ fontSize: "0.82rem", color: "#ffffff", fontWeight: 600 }}>
                1D CNN Vetting Result: <span style={{ color: cur.score > "50%" ? "var(--emerald-neon)" : "#ef4444" }}>{cur.label}</span>
              </span>
              <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--cyan-neon)", fontWeight: 700 }}>
                Exoplanet Probability: {cur.score}
              </span>
            </div>
          </div>
        </div>
      );
    }

    // Default / Campus-Trade Simulator
    return (
      <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["student", "cafeteria_admin", "delivery"].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setTradeRole(role)}
                style={{
                  padding: "0.3rem 0.75rem",
                  borderRadius: "6px",
                  background: tradeRole === role ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                  border: tradeRole === role ? "1px solid var(--cyan-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                  color: tradeRole === role ? "#ffffff" : "var(--text-secondary)",
                  fontSize: "0.78rem",
                  fontFamily: "var(--font-mono)",
                  textTransform: "capitalize",
                  cursor: "pointer",
                }}
              >
                {role.replace("_", " ")}
              </button>
            ))}
          </div>

          <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--emerald-neon)" }}>
            ● Session Active: SRM University Campus Network
          </span>
        </div>

        <div
          style={{
            padding: "1rem",
            borderRadius: "10px",
            background: "#0a0f1d",
            border: "1px solid rgba(56, 189, 248, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600 }}>
            Active Escrow Transaction #CB-8492 — Quadrangle Cafeteria
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {["1. Order Placed", "2. Payment in Escrow", "3. OTP Peer Handover", "4. Funds Released"].map((step, idx) => (
              <span
                key={idx}
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: "6px",
                  background: idx <= escrowStep ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.05)",
                  border: idx <= escrowStep ? "1px solid var(--emerald-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                  color: idx <= escrowStep ? "var(--emerald-neon)" : "var(--text-secondary)",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const caseStudy = project.caseStudy || {};

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(5, 8, 16, 0.88)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        overflowY: "auto",
      }}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "1050px",
          background: "rgba(12, 18, 32, 0.96)",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          borderRadius: "24px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.15)",
          overflow: "hidden",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Header Strip with Breadcrumb & Action CTAs */}
        <div
          style={{
            padding: "1.5rem 2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(15, 23, 42, 0.5)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "var(--cyan-neon)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>Projects</span>
              <span>&gt;</span>
              <span>{project.title}</span>
            </div>
            <h2
              style={{
                fontSize: "1.85rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {project.title}
            </h2>
            <span style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              {project.subtitle}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Live Demo CTA */}
            {project.hasLiveDemo && project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.5rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
                }}
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}

            {/* View Code */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFX.playClick()}
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <GithubIcon size={15} />
              <span>View Code</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div style={{ padding: "2rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Interactive Showcase Window */}
          <div
            style={{
              borderRadius: "16px",
              background: "#080c14",
              border: "1px solid rgba(56, 189, 248, 0.25)",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Simulator Title Bar */}
            <div
              style={{
                padding: "0.75rem 1.25rem",
                background: "rgba(15, 23, 42, 0.8)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                <span style={{ marginLeft: "0.5rem", fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  {project.title} — Interactive Telemetry & Demonstration Engine
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--emerald-neon)",
                  fontFamily: "var(--font-mono)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--emerald-neon)", display: "inline-block" }} />
                Live Model Online
              </span>
            </div>

            {/* Dynamic Interactive Simulator */}
            {renderInteractiveDemo()}
          </div>

          {/* Sub-Tabs Bar */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "0.5rem",
              overflowX: "auto",
            }}
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveTab(tab.id);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: "10px",
                    border: "none",
                    background: isSelected ? "rgba(56, 189, 248, 0.15)" : "transparent",
                    color: isSelected ? "var(--cyan-neon)" : "var(--text-secondary)",
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 2-Column Details: Tab Content on Left & Stats on Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 0.6fr",
              gap: "2rem",
            }}
            className="modal-body-grid"
          >
            {/* Left Content Area */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {activeTab === "overview" && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                    Problem Statement
                  </h4>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                    {caseStudy.problemStatement || project.shortDescription}
                  </p>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Core Objectives
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.5rem" }}>
                    {(caseStudy.objectives || project.keyFeatures.slice(0, 3)).map((obj, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "var(--text-secondary)", fontSize: "0.92rem" }}>
                        <CheckCircle2 size={16} color="var(--cyan-neon)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Key Features
                  </h4>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.65rem" }}>
                    {project.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          padding: "0.65rem 0.85rem",
                          borderRadius: "8px",
                          background: "rgba(15, 23, 42, 0.6)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          color: "var(--text-secondary)",
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--emerald-neon)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Pipeline & System Architecture
                  </h4>
                  <div
                    style={{
                      padding: "1.25rem",
                      borderRadius: "12px",
                      background: "rgba(8, 12, 20, 0.9)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.88rem",
                      color: "var(--cyan-neon)",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {caseStudy.architecture || project.architecture}
                  </div>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Core Tech Stack
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.45rem 1rem",
                          borderRadius: "var(--radius-full)",
                          background: "rgba(56, 189, 248, 0.12)",
                          border: "1px solid rgba(56, 189, 248, 0.3)",
                          color: "var(--cyan-neon)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "dataset" && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Dataset Profile & Source
                  </h4>
                  {caseStudy.dataset ? (
                    <div
                      style={{
                        padding: "1.25rem",
                        borderRadius: "12px",
                        background: "rgba(15, 23, 42, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                        fontSize: "0.9rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div>
                        <strong style={{ color: "#ffffff" }}>Dataset: </strong>
                        <span style={{ color: "var(--text-secondary)" }}>{caseStudy.dataset.name}</span>
                      </div>
                      <div>
                        <strong style={{ color: "#ffffff" }}>Source: </strong>
                        <span style={{ color: "var(--text-secondary)" }}>{caseStudy.dataset.source}</span>
                      </div>
                      <div>
                        <strong style={{ color: "#ffffff" }}>Size: </strong>
                        <span style={{ color: "var(--text-secondary)" }}>{caseStudy.dataset.size}</span>
                      </div>
                      {caseStudy.dataset.split && (
                        <div>
                          <strong style={{ color: "#ffffff" }}>Partition: </strong>
                          <span style={{ color: "var(--text-secondary)" }}>{caseStudy.dataset.split}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                      Curated production datasets collected and cleaned specifically for this system.
                    </p>
                  )}

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Preprocessing & Feature Engineering
                  </h4>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                    {caseStudy.preprocessing ||
                      "Data standardization, outlier rejection using interquartile ranges, class imbalance mitigation, and tensor batch normalization."}
                  </p>
                </div>
              )}

              {activeTab === "metrics" && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                    Quantitative Evaluation & Baseline Benchmarks
                  </h4>

                  {caseStudy.metricsTable ? (
                    <div
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.88rem" }}>
                        <thead>
                          <tr style={{ background: "rgba(15, 23, 42, 0.8)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                            <th style={{ padding: "0.75rem 1rem", color: "#ffffff", fontWeight: 700 }}>Evaluation Metric</th>
                            <th style={{ padding: "0.75rem 1rem", color: "var(--cyan-neon)", fontWeight: 700 }}>Achieved Value</th>
                            <th style={{ padding: "0.75rem 1rem", color: "var(--text-muted)", fontWeight: 600 }}>Baseline Benchmark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseStudy.metricsTable.map((row, idx) => (
                            <tr
                              key={idx}
                              style={{
                                borderBottom: idx !== caseStudy.metricsTable.length - 1 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                                background: idx % 2 === 0 ? "rgba(8, 12, 20, 0.4)" : "rgba(15, 23, 42, 0.4)",
                              }}
                            >
                              <td style={{ padding: "0.75rem 1rem", color: "#ffffff", fontWeight: 600 }}>{row.metric}</td>
                              <td style={{ padding: "0.75rem 1rem", color: "var(--emerald-neon)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                                {row.value}
                              </td>
                              <td style={{ padding: "0.75rem 1rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                                {row.benchmark}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                      {project.results}
                    </p>
                  )}

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                    {project.results}
                  </p>
                </div>
              )}

              {activeTab === "learnings" && (
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                    Engineering Trade-offs & Limitations
                  </h4>
                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      borderRadius: "12px",
                      background: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.25)",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ef4444", fontWeight: 700, marginBottom: "0.35rem" }}>
                      <AlertTriangle size={16} />
                      <span>Current System Constraints:</span>
                    </div>
                    {caseStudy.limitations || "Requires GPU acceleration for high concurrency; edge inference on low-power devices requires INT8 quantization."}
                  </div>

                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                    Future Scope & Scalability Roadmap
                  </h4>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                    {caseStudy.futureWork || project.learnings}
                  </p>
                </div>
              )}
            </div>

            {/* Right Stat Badges Strip */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                Key Model Metrics
              </h4>

              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "14px",
                    background: "rgba(15, 23, 42, 0.7)",
                    border: "1px solid rgba(56, 189, 248, 0.18)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--cyan-neon)",
                      fontFamily: "var(--font-mono)",
                      marginTop: "0.2rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
