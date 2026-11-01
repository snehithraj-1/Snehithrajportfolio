import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable / interactive elements
      const target = e.target;
      const interactive = target.closest("button, a, input, textarea, select, .glass-card, [role='button']");
      setIsHovered(!!interactive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth trailing inertia animation
    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
      aria-hidden="true"
    >
      {/* Outer Smooth Trailing Ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "46px" : isClicked ? "26px" : "32px",
          height: isHovered ? "46px" : isClicked ? "26px" : "32px",
          borderRadius: "50%",
          border: isHovered
            ? "1.5px solid rgba(255, 255, 255, 0.8)"
            : "1px solid rgba(255, 255, 255, 0.35)",
          background: isHovered ? "rgba(255, 255, 255, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 16px rgba(255, 255, 255, 0.25)" : "none",
          transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0) translate(-50%, -50%)`,
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      />

      {/* Center Precise Dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "4px" : "6px",
          height: isHovered ? "4px" : "6px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${isClicked ? 0.6 : 1})`,
          transition: "transform 0.08s ease, width 0.15s ease, height 0.15s ease",
        }}
      />
    </div>
  );
}

