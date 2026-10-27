import React, { useEffect, useRef } from "react";
import { soundFX } from "../utils/audioFX";

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes configuration - tuned by -5% per user request
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 66 : 133;
    const maxDistance = isMobile ? 133 : 185;

    const mouse = {
      x: null,
      y: null,
      radius: 228,
    };

    // Shockwave ripples on click
    const ripples = [];
    // Transient sparks flaring on click
    const sparks = [];
    // Electrical signal pulses travelling along synapses
    const pulses = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const spawnBurst = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 10,
        maxRadius: isMobile ? 220 : 320,
        alpha: 0.95,
        color: "#00f2fe",
      });

      // Spawn 18 vibrant spark particles
      for (let i = 0; i < 18; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2.5;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.8 + 1.4,
          color: i % 3 === 0 ? "#00f2fe" : i % 3 === 1 ? "#a78bfa" : "#10b981",
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
        });
      }

      // Kinetic repulsion kick to nearby nodes
      for (const node of nodes) {
        const dx = node.x - x;
        const dy = node.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 260 && dist > 0) {
          const force = (1 - dist / 260) * 10;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      }
    };

    const handleClick = (e) => {
      const target = e.target;
      const isInteractive = target.closest("button, a, input, textarea, select");
      if (!isInteractive || target.closest(".canvas-interactive-allowed")) {
        spawnBurst(e.clientX, e.clientY);
        soundFX.playClick();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    const nodes = [];
    const colors = ["#00f2fe", "#38bdf8", "#818cf8", "#a78bfa", "#34d399"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.28,
        vy: (Math.random() - 0.5) * 1.28,
        radius: Math.random() * 2.2 + 1.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        baseVx: (Math.random() - 0.5) * 1.28,
        baseVy: (Math.random() - 0.5) * 1.28,
      });
    }

    // Spawn electrical synaptic action potentials periodically
    const spawnSynapticPulse = () => {
      if (nodes.length < 2) return;
      const srcIdx = Math.floor(Math.random() * nodes.length);
      const src = nodes[srcIdx];

      // Find a connected neighbor
      for (let j = 0; j < nodes.length; j++) {
        if (j === srcIdx) continue;
        const dest = nodes[j];
        const dx = dest.x - src.x;
        const dy = dest.y - src.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance && dist > 30) {
          pulses.push({
            x1: src.x,
            y1: src.y,
            x2: dest.x,
            y2: dest.y,
            progress: 0,
            speed: Math.random() * 0.035 + 0.025,
            color: Math.random() > 0.5 ? "#00f2fe" : "#a78bfa",
          });
          break;
        }
      }
    };

    let pulseTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep ambient cyber glow backdrops
      const grad1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        80,
        width * 0.2,
        height * 0.25,
        width * 0.5
      );
      grad1.addColorStop(0, "rgba(0, 242, 254, 0.065)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.75,
        80,
        width * 0.8,
        height * 0.75,
        width * 0.5
      );
      grad2.addColorStop(0, "rgba(167, 139, 250, 0.055)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Periodically trigger synaptic pulses
      pulseTimer++;
      if (pulseTimer % 20 === 0 && pulses.length < 14) {
        spawnSynapticPulse();
      }

      // Update and draw ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 6.5;
        rip.alpha *= 0.94;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 242, 254, ${rip.alpha})`;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = "#00f2fe";
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (rip.radius > rip.maxRadius || rip.alpha < 0.02) {
          ripples.splice(r, 1);
        }
      }

      // Update and draw sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.96;
        spark.vy *= 0.96;
        spark.alpha -= spark.decay;

        if (spark.alpha <= 0) {
          sparks.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, Math.max(0.6, spark.radius * spark.alpha), 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.shadowColor = spark.color;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = spark.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Smooth velocity restoration
        node.vx = node.vx * 0.98 + node.baseVx * 0.02;
        node.vy = node.vy * 0.98 + node.baseVy * 0.02;

        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        // Bounce on boundary
        if (node.x < 0) {
          node.x = 0;
          node.vx *= -1;
          node.baseVx *= -1;
        } else if (node.x > width) {
          node.x = width;
          node.vx *= -1;
          node.baseVx *= -1;
        }
        if (node.y < 0) {
          node.y = 0;
          node.vy *= -1;
          node.baseVy *= -1;
        } else if (node.y > height) {
          node.y = height;
          node.vy *= -1;
          node.baseVy *= -1;
        }

        // Draw connections between nodes with enhanced clarity
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.40;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }

        // Draw connection to interactive mouse cursor with intense glow
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.radius) {
            const mAlpha = (1 - mDist / mouse.radius) * 0.80;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${mAlpha})`;
            ctx.lineWidth = 1.5;
            ctx.shadowColor = "#00f2fe";
            ctx.shadowBlur = 8;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        // Draw node with glowing neural halo
        const dynamicRadius = node.radius + Math.sin(node.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.8, dynamicRadius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw electrical synaptic pulses travelling along connections
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const px = pulse.x1 + (pulse.x2 - pulse.x1) * pulse.progress;
        const py = pulse.y1 + (pulse.y2 - pulse.y1) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
