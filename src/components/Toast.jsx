import React, { useState, useEffect } from "react";
import { CheckCircle2, Copy, Sparkles, X } from "lucide-react";

// Global custom event helper to trigger toasts from anywhere with zero prop drilling
export function triggerToast(message, type = "success") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("portfolio-toast", {
        detail: { message, type, id: Date.now() },
      })
    );
  }
}

export default function Toast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleToastEvent = (e) => {
      const newToast = e.detail;
      setToasts((prev) => [...prev.slice(-2), newToast]); // keep max 3 visible

      // Auto dismiss after 3.5s
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 3500);
    };

    window.addEventListener("portfolio-toast", handleToastEvent);
    return () => window.removeEventListener("portfolio-toast", handleToastEvent);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "5.5rem",
        right: "1.75rem",
        zIndex: 9990,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        pointerEvents: "none",
      }}
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            padding: "0.65rem 1.15rem",
            borderRadius: "var(--radius-full)",
            background: "rgba(18, 18, 23, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.08)",
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: 600,
            fontFamily: "var(--font-accent)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            animation: "slideUpFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0 }} />
          <span>{toast.message}</span>
          <button
            onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "0.1rem",
              display: "flex",
              alignItems: "center",
              marginLeft: "0.25rem",
            }}
            aria-label="Dismiss toast"
          >
            <X size={13} />
          </button>
        </div>
      ))}
    </div>
  );
}

