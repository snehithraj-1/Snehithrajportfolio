import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2.5px",
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.05)",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          height: "100%",
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.95) 90%, #ffffff 100%)",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.3)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

