import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { soundFX } from "../utils/audioFX";

export default function ProjectDetailsModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  // State for CycleCare Simulator
  const [cycleDay, setCycleDay] = useState(14);
  const [loggedSymptom, setLoggedSymptom] = useState("High Energy");

  // State for Campus-Trade Simulator
  const [tradeRole, setTradeRole] = useState("student");
  const [escrowStep, setEscrowStep] = useState(2);

  // State for U-Needs Delivery Simulator
  const [uneedsRole, setUneedsRole] = useState("hosteler");
  const [orderStage, setOrderStage] = useState(2);

  // State for Contact Book Simulator
  const [contactSearch, setContactSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Overview & Objectives" },
    { id: "architecture", label: "Architecture & Pipeline" },
    { id: "dataset", label: "Data Schema & Design" },
    { id: "metrics", label: "Benchmarks & Impact" },
    { id: "learnings", label: "Key Learnings & Future Work" },
  ];

  // Render Project-Specific Interactive Simulator
  const renderInteractiveDemo = () => {
    // 1. Cycle-Care Simulator
    if (project.id === "cycle-care") {
      let phaseName = "Menstrual Phase";
      let fertility = "Low Fertility";
      let phaseColor = "#f43f5e";
      let estrogen = 25;
      let progesterone = 15;

      if (cycleDay >= 6 && cycleDay <= 11) {
        phaseName = "Follicular Phase";
        fertility = "Moderate (Opening Window)";
        phaseColor = "#38bdf8";
        estrogen = 70;
        progesterone = 20;
      } else if (cycleDay >= 12 && cycleDay <= 16) {
        phaseName = "Ovulation Window";
        fertility = "Peak Fertility (LH Surge)";
        phaseColor = "#a855f7";
        estrogen = 95;
        progesterone = 50;
      } else if (cycleDay >= 17) {
        phaseName = "Luteal Phase";
        fertility = "Low Fertility";
        phaseColor = "#eab308";
        estrogen = 45;
        progesterone = 85;
      }

      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
              INTERACTIVE CYCLE TELEMETRY • CLIENT-SIDE DEXIE.JS
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--emerald-neon)", fontFamily: "var(--font-mono)" }}>
              ● 100% Offline-First IndexedDB
            </span>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.35rem" }}>
              <span>Simulate Cycle Day: <strong style={{ color: "var(--cyan-neon)" }}>Day {cycleDay} of 28</strong></span>
              <span style={{ fontWeight: 700, color: phaseColor }}>{phaseName}</span>
            </div>
            <input
              type="range"
              min="1"
              max="28"
              value={cycleDay}
              onChange={(e) => setCycleDay(parseInt(e.target.value))}
              style={{ width: "100%", accentColor: phaseColor }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ padding: "0.75rem 1rem", borderRadius: "10px", background: "rgba(15, 23, 42, 0.7)", border: `1px solid ${phaseColor}40` }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>FERTILITY WINDOW</span>
              <strong style={{ fontSize: "0.92rem", color: phaseColor }}>{fertility}</strong>
            </div>

            <div style={{ padding: "0.75rem 1rem", borderRadius: "10px", background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>HORMONE PROFILE</span>
              <div style={{ fontSize: "0.82rem", color: "#ffffff", display: "flex", gap: "0.8rem", marginTop: "0.15rem" }}>
                <span>Estrogen: <strong style={{ color: "var(--cyan-neon)" }}>{estrogen}%</strong></span>
                <span>Progesterone: <strong style={{ color: "#f59e0b" }}>{progesterone}%</strong></span>
              </div>
            </div>

            <div style={{ padding: "0.75rem 1rem", borderRadius: "10px", background: "rgba(15, 23, 42, 0.7)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>LOGGED SYMPTOM</span>
              <strong style={{ fontSize: "0.92rem", color: "var(--emerald-neon)" }}>{loggedSymptom}</strong>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>Quick Log:</span>
            {["High Energy", "Mild Cramps", "Deep Focus", "Rest Needed", "Hydration Checked"].map((sym) => (
              <button
                key={sym}
                type="button"
                onClick={() => {
                  setLoggedSymptom(sym);
                  soundFX.playClick();
                }}
                style={{
                  padding: "0.25rem 0.65rem",
                  borderRadius: "var(--radius-full)",
                  background: loggedSymptom === sym ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: loggedSymptom === sym ? "1px solid var(--cyan-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                  color: loggedSymptom === sym ? "#ffffff" : "var(--text-secondary)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                + {sym}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // 2. Campus-Trade Simulator
    if (project.id === "campus-trade") {
      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["student", "campus_seller", "admin"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => {
                    setTradeRole(role);
                    soundFX.playClick();
                  }}
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
              ● Verified SRM University AP Student Network
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600 }}>
                Listing #CT-2041 — "Introduction to Algorithms (CLRS) 4th Edition"
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--cyan-neon)", fontWeight: 700 }}>₹650 (Campus Pick-up)</span>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {["1. Listing Active", "2. Peer Offer Made", "3. In-Person Handover", "4. Trade Completed"].map((step, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setEscrowStep(idx + 1);
                    soundFX.playClick();
                  }}
                  style={{
                    padding: "0.35rem 0.75rem",
                    borderRadius: "6px",
                    background: idx < escrowStep ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.05)",
                    border: idx < escrowStep ? "1px solid var(--emerald-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: idx < escrowStep ? "var(--emerald-neon)" : "var(--text-secondary)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                  }}
                >
                  {step}
                </button>
              ))}
            </div>

            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Direct student communication avoids retail markups and shipping delays with same-day handoffs.
            </p>
          </div>
        </div>
      );
    }

    // 3. U-Needs Delivery Simulator
    if (project.id === "uneeds") {
      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["hosteler", "campus_helper", "admin"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setUneedsRole(r);
                    soundFX.playClick();
                  }}
                  style={{
                    padding: "0.3rem 0.75rem",
                    borderRadius: "6px",
                    background: uneedsRole === r ? "rgba(56, 189, 248, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: uneedsRole === r ? "1px solid var(--cyan-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: uneedsRole === r ? "#ffffff" : "var(--text-secondary)",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  {r.replace("_", " ")}
                </button>
              ))}
            </div>

            <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--emerald-neon)" }}>
              ● Live Errand Dispatcher
            </span>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "10px",
              background: "#070c18",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 600 }}>
                Delivery Request #UN-782: "Hostel Block A - Cafeteria Late Snack"
              </div>
              <span style={{ fontSize: "0.78rem", color: "var(--emerald-neon)", fontFamily: "var(--font-mono)" }}>
                OTP: 8492
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["1. Order Placed", "2. Helper Accepted", "3. Items Picked Up", "4. OTP Verified"].map((stg, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setOrderStage(idx + 1);
                    soundFX.playClick();
                  }}
                  style={{
                    padding: "0.3rem 0.65rem",
                    borderRadius: "6px",
                    background: idx < orderStage ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.05)",
                    border: idx < orderStage ? "1px solid var(--emerald-neon)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: idx < orderStage ? "var(--emerald-neon)" : "var(--text-secondary)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                  }}
                >
                  {stg}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // 4. Contact Book Simulator
    if (project.id === "contact-book") {
      const sampleContacts = [
        { name: "SRM Computer Science Dept", phone: "+91 863 2343000", tag: "Academic" },
        { name: "Campus Health Center", phone: "+91 863 2343111", tag: "Emergency" },
        { name: "Hostel Warden Office", phone: "+91 863 2343222", tag: "Hostel" },
        { name: "Library Helpdesk", phone: "+91 863 2343333", tag: "Campus" },
      ];

      const matches = sampleContacts.filter((c) =>
        c.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
        c.phone.includes(contactSearch)
      );

      return (
        <div style={{ padding: "1.25rem", background: "rgba(8, 12, 20, 0.9)" }}>
          <div style={{ marginBottom: "0.85rem" }}>
            <input
              type="text"
              value={contactSearch}
              onChange={(e) => setContactSearch(e.target.value)}
              placeholder="Search contacts by name or number..."
              style={{
                width: "100%",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                borderRadius: "8px",
                padding: "0.55rem 0.9rem",
                color: "#ffffff",
                fontSize: "0.85rem",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {matches.map((c, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.6rem 0.85rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", color: "#ffffff", fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--cyan-neon)", fontFamily: "var(--font-mono)" }}>{c.phone}</div>
                </div>
                <span style={{ fontSize: "0.72rem", padding: "0.2rem 0.55rem", borderRadius: "var(--radius-full)", background: "rgba(56, 189, 248, 0.12)", color: "var(--cyan-neon)" }}>
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default Fallback
    return (
      <div style={{ padding: "1.5rem", background: "rgba(8, 12, 20, 0.9)", textAlign: "center" }}>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Explore this project in action directly through the live deployment or view the full source code on GitHub.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {project.hasLiveDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "0.6rem 1.4rem",
                borderRadius: "var(--radius-full)",
                background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                color: "#ffffff",
                fontSize: "0.88rem",
                fontWeight: 700,
              }}
            >
              Open Live Application ↗
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              padding: "0.6rem 1.4rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              fontSize: "0.88rem",
              fontWeight: 600,
            }}
          >
            View GitHub Repository
          </a>
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
        className="modal-dialog project-modal-dialog"
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
          className="modal-header-strip"
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

          <div className="modal-action-btns" style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
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
        <div className="modal-content-scroll" style={{ padding: "2rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
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
            className="filter-chips-row modal-tabs-strip"
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
                      className="table-responsive-wrapper"
                      style={{
                        borderRadius: "12px",
                        overflowX: "auto",
                        WebkitOverflowScrolling: "touch",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <table style={{ width: "100%", minWidth: "480px", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
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
