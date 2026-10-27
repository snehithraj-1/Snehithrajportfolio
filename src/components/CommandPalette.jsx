import React, { useState, useEffect, useRef } from "react";
import { Search, ExternalLink, Terminal, FileText, ArrowRight, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

export default function CommandPalette({ isOpen, onClose, onOpenResume, onToggleTerminal }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // will be triggered by toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "proj-campus-trade",
      category: "Live Deployments",
      title: "Launch Campus-Trade (University Marketplace)",
      subtitle: "Python • Flask • SQLite • Vercel Serverless",
      icon: <ExternalLink size={16} color="var(--cyan-neon)" />,
      run: () => {
        window.open("https://campus-trade-blond.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "proj-you-needs",
      category: "Live Deployments",
      title: "Launch YOU NEEDS (Campus Peer Logistics)",
      subtitle: "React 19 • TypeScript 5.8 • Vite 6 • Vercel",
      icon: <ExternalLink size={16} color="var(--cyan-neon)" />,
      run: () => {
        window.open("https://uneeds-ten.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "proj-contact-book",
      category: "Live Deployments",
      title: "Launch Contact Book Web App & Python CLI",
      subtitle: "Dual-mode directory manager on Vercel",
      icon: <ExternalLink size={16} color="var(--cyan-neon)" />,
      run: () => {
        window.open("https://campus-trade-522i.vercel.app", "_blank");
        onClose();
      },
    },
    {
      id: "jump-projects",
      category: "Navigation",
      title: "Jump to Featured Projects & Case Studies",
      subtitle: "Explore interactive architecture & schema inspectors",
      icon: <Code2 size={16} color="var(--purple-neon)" />,
      run: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "jump-about",
      category: "Navigation",
      title: "Jump to About Snehith Raj (SRM AP Background)",
      subtitle: "Engineering focus, approach, and credentials",
      icon: <ArrowRight size={16} color="var(--text-muted)" />,
      run: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "jump-human-touch",
      category: "Navigation",
      title: "The Human Behind The Screen (Rituals, Chai & Bloopers)",
      subtitle: "Interactive workspace polaroid, high-fives, and honest dev lessons",
      icon: <ArrowRight size={16} color="var(--amber-neon)" />,
      run: () => {
        document.getElementById("human-touch")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "jump-skills",
      category: "Navigation",
      title: "Jump to Technical Skills Matrix",
      subtitle: "Languages, Frontend, Backend, AI/ML, and DevOps",
      icon: <ArrowRight size={16} color="var(--text-muted)" />,
      run: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "open-resume",
      category: "Actions",
      title: "Open Resume Credentials & PDF Download",
      subtitle: "View complete academic record and coursework",
      icon: <FileText size={16} color="var(--emerald-neon)" />,
      run: () => {
        onClose();
        if (onOpenResume) onOpenResume();
      },
    },
    {
      id: "open-terminal",
      category: "Developer Tools",
      title: "Open Interactive Developer Shell (CLI)",
      subtitle: "Execute whoami, skills, projects, and benchmarks",
      icon: <Terminal size={16} color="var(--amber-neon)" />,
      run: () => {
        onClose();
        if (onToggleTerminal) onToggleTerminal();
      },
    },
    {
      id: "open-github",
      category: "External Profiles",
      title: "Visit GitHub Profile (@snehithraj-1)",
      subtitle: "Inspect repositories, commit history, and codebases",
      icon: <GithubIcon size={16} />,
      run: () => {
        window.open("https://github.com/snehithraj-1", "_blank");
        onClose();
      },
    },
    {
      id: "open-leetcode",
      category: "External Profiles",
      title: "Visit LeetCode Problem Solving Profile",
      subtitle: "Algorithmic challenges, data structures, and contest rating",
      icon: <LeetcodeIcon size={16} color="var(--amber-neon)" />,
      run: () => {
        window.open("https://leetcode.com/u/hcdiMGr9EW/", "_blank");
        onClose();
      },
    },
    {
      id: "open-linkedin",
      category: "External Profiles",
      title: "Connect on LinkedIn",
      subtitle: "Snehith Raj Gaddam • Professional network",
      icon: <LinkedinIcon size={16} color="#0a66c2" />,
      run: () => {
        window.open("https://www.linkedin.com/in/snehithraj-gaddam-454852322/", "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].run();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        zIndex: 200,
        alignItems: "flex-start",
        paddingTop: "12vh",
      }}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "620px",
          padding: 0,
          borderRadius: "var(--radius-lg)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
          background: "#080c14",
          overflow: "hidden",
        }}
      >
        {/* Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--border-subtle)",
            gap: "0.75rem",
          }}
        >
          <Search size={18} color="var(--cyan-neon)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or section... (e.g. 'Campus-Trade', 'Resume')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
            }}
          />
          <kbd
            style={{
              padding: "0.2rem 0.5rem",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid var(--border-subtle)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            padding: "0.6rem",
          }}
        >
          {filtered.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem" }}>
              No commands or projects match "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.run()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: isSelected ? "rgba(56, 189, 248, 0.1)" : "transparent",
                    border: isSelected ? "1px solid rgba(56, 189, 248, 0.25)" : "1px solid transparent",
                    cursor: "pointer",
                    transition: "var(--transition-fast)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(15, 23, 42, 0.7)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255, 255, 255, 0.04)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Guidance */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.65rem 1.25rem",
            borderTop: "1px solid var(--border-subtle)",
            background: "rgba(15, 23, 42, 0.5)",
            fontSize: "0.74rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Snehith Raj's Command Palette</span>
        </div>
      </div>
    </div>
  );
}
