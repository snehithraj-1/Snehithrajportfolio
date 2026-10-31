import React, { useState } from "react";
import { X, Download, ExternalLink, Printer, GraduationCap, Mail, MapPin, AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { soundFX } from "../utils/audioFX";

export default function ResumeModal({ isOpen, onClose }) {
  const [downloadNotice, setDownloadNotice] = useState(false);
  const { personal, education, skillsCategories, projects, achievements } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  const handleDownload = () => {
    soundFX.playClick();
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 5000);
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
          maxWidth: "860px",
          background: "rgba(12, 18, 32, 0.98)",
          border: "1px solid rgba(56, 189, 248, 0.28)",
          borderRadius: "22px",
          boxShadow: "0 25px 70px rgba(0, 0, 0, 0.85)",
          padding: "2.5rem",
          maxHeight: "90vh",
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
              Download my latest resume or view it online.
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
                background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                color: "#ffffff",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
              }}
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            {/* View Online Button */}
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
              <ExternalLink size={15} />
              <span>View Online</span>
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

        {/* Printable / Clean Resume Document Sheet matching Screen 10 */}
        <div
          id="printable-cv"
          style={{
            background: "#ffffff",
            color: "#0f172a",
            borderRadius: "14px",
            padding: "2.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: "2px solid #2563eb", paddingBottom: "1.2rem", marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em" }}>
              SNEHITH RAJ
            </h1>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#2563eb", marginTop: "0.2rem" }}>
              AI/ML Engineer | Full Stack Developer
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.6rem", fontSize: "0.85rem", color: "#475569" }}>
              <span>{personal.location}</span>
              <span>•</span>
              <span>{personal.email}</span>
              <span>•</span>
              <span>github.com/snehithraj-1</span>
              <span>•</span>
              <span>linkedin.com/in/snehithraj-gaddam</span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.3rem", marginBottom: "0.6rem" }}>
              Education
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <strong style={{ fontSize: "0.98rem", color: "#0f172a" }}>SRM University AP</strong>
                <p style={{ fontSize: "0.9rem", color: "#334155" }}>Bachelor of Technology in Computer Science and Engineering</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#2563eb" }}>2022 – 2026</span>
                <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#059669" }}>CGPA: 8.44 / 10.0</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.3rem", marginBottom: "0.6rem" }}>
              Technical Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.88rem", color: "#334155" }}>
              <p><strong>Languages:</strong> Python, C++, Java, JavaScript, TypeScript, HTML5, CSS3, SQL</p>
              <p><strong>AI & Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, OpenCV, NumPy, Pandas, Keras, LangChain, Ollama</p>
              <p><strong>Web & Cloud Development:</strong> React, Node.js, Express.js, Flask, Tailwind CSS, Next.js, SQLite, PostgreSQL, Supabase, Vercel</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, Docker, Linux, VS Code, Postman, Figma</p>
            </div>
          </div>

          {/* Flagship Projects */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.3rem", marginBottom: "0.6rem" }}>
              Featured Projects
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {projects.slice(0, 4).map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: "0.95rem", color: "#0f172a" }}>{p.title}</strong>
                    <span style={{ fontSize: "0.8rem", color: "#64748b", fontStyle: "italic" }}>{p.techStack.slice(0, 4).join(", ")}</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#334155", marginTop: "0.15rem" }}>{p.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathons */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e3a8a", textTransform: "uppercase", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.3rem", marginBottom: "0.6rem" }}>
              Hackathons & Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.88rem", color: "#334155" }}>
              <p><strong>NASA Space Apps Challenge 2024 (Participant):</strong> Built AI exoplanet detection pipeline from Kepler/TESS photometric light curves.</p>
              <p><strong>MIND SPRINT - 2K25 (Finalist):</strong> Developed innovative software solutions under strict 24-hour sprint constraints.</p>
              <p><strong>Smart India Hackathon (R&D):</strong> Worked on national problem statements in education and agriculture technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
