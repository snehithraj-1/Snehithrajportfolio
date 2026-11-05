import React, { useState, useEffect } from "react";
import { X, Download, ExternalLink, Printer, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { soundFX } from "../utils/audioFX";
import { triggerToast } from "./Toast";

export default function ResumeModal({ isOpen, onClose }) {
  const [downloadNotice, setDownloadNotice] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundFX.playClick();
    triggerToast("Opening printable resume view...");
    window.print();
  };

  const handleDownload = () => {
    soundFX.playClick();
    setDownloadNotice(true);
    triggerToast("Resume downloaded successfully! 📄");
    setTimeout(() => setDownloadNotice(false), 5000);
  };

  const sectionHeadingStyle = {
    fontSize: "1.12rem",
    fontWeight: 700,
    color: "#000000",
    textTransform: "capitalize",
    borderBottom: "1.5px solid #000000",
    paddingBottom: "2px",
    marginBottom: "0.55rem",
    marginTop: "1.25rem",
    fontFamily: "'Latin Modern Roman', 'Times New Roman', Times, Georgia, serif",
    letterSpacing: "0.01em",
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 250,
        background: "rgba(5, 8, 16, 0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        overflowY: "auto",
      }}
    >
      <div
        className="modal-dialog resume-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "880px",
          background: "rgba(14, 14, 18, 0.98)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "22px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85)",
          padding: "2.5rem",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {/* Top Control Bar matching Screen 10 */}
        <div
          className="modal-control-bar"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h2 id="resume-modal-title" style={{ fontSize: "1.85rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
              My Resume
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Academic & industry resume matching standard Ivy League / LaTeX format.
            </p>
          </div>

          <div className="resume-action-btns" style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
            {/* Download PDF Button */}
            <a
              href={personal.resumeUrl}
              download="Snehith_Raj_Resume.pdf"
              onClick={handleDownload}
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.55rem 1.25rem",
                borderRadius: "var(--radius-full)",
                background: "#ffffff",
                color: "#09090b",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.18)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.55rem 1.15rem",
                borderRadius: "var(--radius-full)",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                fontSize: "0.88rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
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
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              background: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "var(--emerald-neon)",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <CheckCircle2 size={16} />
            <span>Resume download initiated! For an updated printable PDF, ensure your file is located at <code>/public/resume.pdf</code>.</span>
          </div>
        )}

        {/* Printable Resume Document Sheet Exactly in User Reference Format */}
        <div
          id="printable-cv"
          style={{
            background: "#ffffff",
            color: "#000000",
            borderRadius: "4px",
            padding: "2.75rem 3.25rem",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.45)",
            fontFamily: "'Latin Modern Roman', 'Times New Roman', Times, Georgia, serif",
            lineHeight: "1.4",
          }}
        >
          {/* Header (Centered) */}
          <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
            <h1
              style={{
                fontSize: "2.35rem",
                fontWeight: 700,
                color: "#000000",
                letterSpacing: "-0.01em",
                margin: 0,
                lineHeight: 1.15,
                fontFamily: "'Latin Modern Roman', 'Times New Roman', Times, Georgia, serif",
              }}
            >
              Snehith Raj Gaddam
            </h1>
            <div
              style={{
                marginTop: "0.45rem",
                fontSize: "0.92rem",
                color: "#000000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.35rem",
              }}
            >
              <a href="https://github.com/snehithraj-1" target="_blank" rel="noreferrer" style={{ color: "#0044cc", textDecoration: "none" }}>
                GitHub
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/snehithraj-gaddam-454852322/" target="_blank" rel="noreferrer" style={{ color: "#0044cc", textDecoration: "none" }}>
                LinkedIn
              </a>
              <span>|</span>
              <a href="https://leetcode.com/u/hcdiMGr9EW/" target="_blank" rel="noreferrer" style={{ color: "#0044cc", textDecoration: "none" }}>
                LeetCode
              </a>
              <span>|</span>
              <a href="mailto:snehithraj007@gmail.com" style={{ color: "#0044cc", textDecoration: "none" }}>
                snehithraj007@gmail.com
              </a>
              <span>|</span>
              <span>SRM University AP, Andhra Pradesh</span>
            </div>
          </div>

          {/* 1. Education Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Education</h2>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                <strong style={{ fontSize: "1rem", color: "#000000" }}>SRM AP University, Amaravati</strong>
                <strong style={{ fontSize: "0.95rem", color: "#000000" }}>Aug 2022 – Jul 2026</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.15rem" }}>
                <span style={{ fontSize: "0.92rem", color: "#000000" }}>B.Tech in Computer Science and Engineering</span>
                <strong style={{ fontSize: "0.95rem", color: "#000000" }}>CGPA: 8.44/10</strong>
              </div>
              <div style={{ fontSize: "0.88rem", color: "#111827", marginTop: "0.2rem" }}>
                <span>Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, Object-Oriented Programming</span>
              </div>
            </div>
          </div>

          {/* 2. Hackathons & Experience Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Hackathons & Experience</h2>

            {/* NASA Space Apps */}
            <div style={{ marginBottom: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                <strong style={{ fontSize: "0.98rem", color: "#000000" }}>
                  NASA International Space Apps Challenge 2025 | Shortlisted • Galactic Problem Solver
                </strong>
                <strong style={{ fontSize: "0.92rem", color: "#000000" }}>Oct 2025</strong>
              </div>
              <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.45" }}>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>Global Space Hackathon</strong>: Shortlisted in the world&apos;s largest space & Earth science hackathon for outstanding participation in developing solutions to critical planetary and space challenges.
                </li>
                <li>
                  <strong>Collaborative Problem Solving</strong>: Collaborated on data-driven astronomical and Earth science challenge statements organized by NASA in partnership with ESA, ISRO, JAXA, and CSA.
                </li>
              </ul>
            </div>

            {/* CMR HACKFEST 3.0 */}
            <div style={{ marginBottom: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                <strong style={{ fontSize: "0.98rem", color: "#000000" }}>
                  CMR HACKFEST 3.0 | 36-Hour National Level Hackathon (Team Vision-Crew)
                </strong>
                <strong style={{ fontSize: "0.92rem", color: "#000000" }}>Jan 2026</strong>
              </div>
              <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.45" }}>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>36-Hour Continuous Sprint</strong>: Represented SRM University AP with Team &quot;Vision-Crew&quot; in an intensive 36-hour national-level hackathon organized by CMR College of Engineering & Technology.
                </li>
                <li>
                  <strong>Rapid Prototype Engineering</strong>: Architected and implemented software solutions under competitive 36-hour sprint constraints with zero downtime.
                </li>
              </ul>
            </div>

            {/* SYNAPSE 2K25 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                <strong style={{ fontSize: "0.98rem", color: "#000000" }}>
                  SYNAPSE 2K25 — AI & ML Hackathon | Mohan Babu University & Hubexus
                </strong>
                <strong style={{ fontSize: "0.92rem", color: "#000000" }}>Oct 2025</strong>
              </div>
              <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.45" }}>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>AI/ML Systems Development</strong>: Participated in intelligent systems challenge organized by the Department of AIML at Mohan Babu University in association with Hubexus Solutions and IEEE CIS Chapter.
                </li>
                <li>
                  <strong>Algorithmic Solutions</strong>: Designed structured data processing workflows and machine learning pipelines to solve domain-specific problem statements.
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Projects Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Projects</h2>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                <strong style={{ fontSize: "0.98rem", color: "#000000" }}>
                  Interactive 3D Developer Portfolio
                </strong>
                <em style={{ fontSize: "0.88rem", color: "#333333" }}>
                  React 19, JavaScript ES6+, HTML5 Canvas, Web Audio API, Vite
                </em>
              </div>
              <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.45" }}>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>HTML5 Neural Particle Canvas</strong>: Engineered a 60 FPS real-time vector particle canvas with distance-based synaptic connecting lines and kinetic mouse repulsion.
                </li>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>Synthesized Audio Engine</strong>: Built a zero-latency Web Audio API sound synthesizer delivering real-time tactile micro-feedback without external audio asset downloads.
                </li>
                <li style={{ marginBottom: "0.2rem" }}>
                  <strong>Developer Tooling & UX</strong>: Integrated an embedded CLI terminal emulator and keyboard-driven &#x2318;K command palette for accessible, fluid developer navigation.
                </li>
                <li>
                  <strong>Performance & Edge Deployment</strong>: Achieved 60 FPS steady animation and zero cumulative layout shift via Lenis momentum scrolling; deployed globally on Vercel.
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Technical Skills Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Technical Skills</h2>
            <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.55" }}>
              <li style={{ marginBottom: "0.2rem" }}>
                <strong>Languages</strong>: Python, Java, C++, JavaScript, SQL, HTML/CSS
              </li>
              <li style={{ marginBottom: "0.2rem" }}>
                <strong>Web & Frontend</strong>: React 19, HTML5 Canvas, Web Audio API, Tailwind CSS, Vite, Single Page Architectures
              </li>
              <li style={{ marginBottom: "0.2rem" }}>
                <strong>Databases & Backend</strong>: MongoDB (Certified), SQLite, Flask, RESTful APIs, Supabase
              </li>
              <li style={{ marginBottom: "0.2rem" }}>
                <strong>Tools & Platforms</strong>: Git, GitHub, Linux/Bash, VS Code, Postman, Vercel
              </li>
              <li>
                <strong>Core Concepts</strong>: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems
              </li>
            </ul>
          </div>

          {/* 5. Certifications Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Certifications</h2>
            <ul style={{ margin: "0.3rem 0 0 1.35rem", padding: 0, fontSize: "0.88rem", color: "#000000", lineHeight: "1.55" }}>
              <li style={{ marginBottom: "0.35rem" }}>
                <strong>MongoDB Associate Developer</strong> | <em>MongoDB (Credly Verified)</em> — Certified in document data modeling, CRUD operations, aggregation pipelines, and database optimization. (Verify: <a href="https://www.credly.com/go/1C7PTLWN" target="_blank" rel="noreferrer" style={{ color: "#0044cc", textDecoration: "none" }}>credly.com/go/1C7PTLWN</a>)
              </li>
              <li>
                <strong>Java Programming: Solving Problems with Software</strong> | <em>Duke University (Coursera Verified)</em> — Comprehensive software engineering course covering algorithms, Java syntax, CSV structured data parsing, and automated test design. (Verify: <a href="https://coursera.org/verify/S6UVEK4C9OE1" target="_blank" rel="noreferrer" style={{ color: "#0044cc", textDecoration: "none" }}>coursera.org/verify/S6UVEK4C9OE1</a>)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
