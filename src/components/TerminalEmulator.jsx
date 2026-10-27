import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft, Copy, Check } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { soundFX } from "../utils/audioFX";

export default function TerminalEmulator({ onOpenResume }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      content: "Snehith Raj's Developer Shell [SRM University AP • v2.0]\nType 'help' or click quick command buttons below to explore projects & profiles.",
    },
    {
      type: "user",
      content: "whoami",
    },
    {
      type: "output",
      content: portfolioData.terminalCommands.whoami,
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    soundFX.playSuccess();

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (trimmed === "resume") {
      setHistory((prev) => [
        ...prev,
        { type: "user", content: cmdStr },
        { type: "output", content: portfolioData.terminalCommands.resume },
      ]);
      setInputVal("");
      if (onOpenResume) onOpenResume();
      return;
    }

    const output =
      portfolioData.terminalCommands[trimmed] ||
      `Command not recognized: '${trimmed}'. Type 'help' to see available commands or click the chips below.`;

    setHistory((prev) => [
      ...prev,
      { type: "user", content: cmdStr },
      { type: "output", content: output },
    ]);
    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  const handleCopy = () => {
    const text = history.map((h) => `${h.type === "user" ? "> " : ""}${h.content}`).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickChips = ["whoami", "skills", "pipeline", "projects", "contact", "clear"];

  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        background: "rgba(9, 14, 26, 0.92)",
        border: "1px solid rgba(0, 242, 254, 0.3)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 242, 254, 0.12)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "440px",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Terminal Title Bar */}
      <div
        style={{
          background: "rgba(15, 23, 42, 0.9)",
          padding: "0.65rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0, 242, 254, 0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10b981" }} />
          <span
            style={{
              marginLeft: "0.5rem",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Terminal size={13} color="var(--cyan-neon)" />
            <span>snehith@ai-cluster:~/inference-vllm</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          style={{
            background: "transparent",
            border: "none",
            color: copied ? "var(--emerald-neon)" : "var(--text-muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            fontSize: "0.7rem",
          }}
          title="Copy Terminal Logs"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Terminal Output Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem",
          fontSize: "0.825rem",
          lineHeight: "1.5",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        {history.map((item, idx) => (
          <div key={idx}>
            {item.type === "system" && (
              <div style={{ color: "#38bdf8", whiteSpace: "pre-wrap" }}>
                {item.content}
              </div>
            )}
            {item.type === "user" && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--cyan-neon)" }}>
                <span style={{ color: "var(--emerald-neon)" }}>➜</span>
                <span style={{ color: "#a855f7" }}>~</span>
                <span style={{ fontWeight: 600 }}>{item.content}</span>
              </div>
            )}
            {item.type === "output" && (
              <div
                style={{
                  color: "#cbd5e1",
                  whiteSpace: "pre-wrap",
                  paddingLeft: "1rem",
                  borderLeft: "2px solid rgba(0, 242, 254, 0.25)",
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Chips */}
      <div
        style={{
          padding: "0.5rem 1rem",
          background: "rgba(11, 18, 32, 0.8)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Chips:</span>
        {quickChips.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleChipClick(cmd)}
            style={{
              background: "rgba(0, 242, 254, 0.08)",
              border: "1px solid rgba(0, 242, 254, 0.25)",
              color: "var(--cyan-neon)",
              padding: "0.2rem 0.55rem",
              borderRadius: "4px",
              fontSize: "0.72rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 242, 254, 0.2)";
              e.currentTarget.style.boxShadow = "0 0 8px rgba(0,242,254,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 242, 254, 0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(15, 23, 42, 0.95)",
          borderTop: "1px solid rgba(0, 242, 254, 0.2)",
          padding: "0.6rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ color: "var(--emerald-neon)", fontWeight: 700 }}>➜</span>
        <span style={{ color: "var(--cyan-neon)", fontWeight: 700 }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => {
            soundFX.playKey();
            setInputVal(e.target.value);
          }}
          placeholder="Type command ('help', 'skills', 'projects')..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#f8fafc",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
          }}
        />
        <button
          type="submit"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--cyan-neon)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          title="Execute"
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}
