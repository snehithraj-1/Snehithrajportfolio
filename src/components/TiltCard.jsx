import React, { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 4,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Pull the hovered side towards the viewer rather than pushing back
    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((centerX - x) / centerX) * maxTilt;

    setTilt({ rotateX, rotateY });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.18 });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  // Card elevates forward towards the user on hover
  const currentTransform = isHovered
    ? `perspective(1000px) translateY(-8px) translateZ(30px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(1.022, 1.022, 1.022)`
    : "perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: currentTransform,
        transition: isHovered
          ? "transform 0.12s ease-out, box-shadow 0.2s ease, border-color 0.2s ease"
          : "transform 0.35s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease",
        transformStyle: "preserve-3d",
        position: "relative",
        zIndex: isHovered ? 15 : 1,
        boxShadow: isHovered
          ? "0 24px 50px -10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.25)"
          : (style.boxShadow || "0 4px 20px rgba(0, 0, 0, 0.3)"),
        borderColor: isHovered
          ? "rgba(56, 189, 248, 0.45)"
          : (style.borderColor || "var(--border-subtle)"),
        overflow: "hidden",
      }}
      {...props}
    >
      {glare && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, transparent 65%)`,
            transition: "opacity 0.2s ease",
            zIndex: 2,
          }}
          aria-hidden="true"
        />
      )}
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
