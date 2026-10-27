import React, { useState } from "react";
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Blog() {
  const { blogPosts } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["All", "AI/ML", "Web Dev", "College Life", "Research", "Tutorials"];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory === "All") return true;
    return post.category === selectedCategory;
  });

  return (
    <section id="blog" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Section Header matching Screen 7 */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "0.4rem",
            }}
          >
            Blog & Learnings
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
            }}
          >
            My thoughts, notes and experiences in AI, ML and software development.
          </p>
        </div>

        {/* Category Filters matching Screen 7 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  padding: "0.45rem 1.15rem",
                  borderRadius: "var(--radius-full)",
                  border: isSelected
                    ? "1px solid var(--cyan-neon)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.35) 100%)"
                    : "rgba(15, 23, 42, 0.6)",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.88rem",
                  fontWeight: isSelected ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSelected ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 5-Card Blog Grid matching Screen 7 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
          className="blog-screen-grid"
        >
          {filteredPosts.map((post) => (
            <TiltCard
              key={post.id}
              className="glass-card"
              onClick={() => {
                soundFX.playClick();
                setActiveArticle(post);
              }}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(56, 189, 248, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              {/* Thumbnail Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  background: "#080c14",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  className="blog-thumb-img"
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.85) 100%)",
                  }}
                />

                {/* Category & Read Time Tags */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.85rem",
                    left: "0.85rem",
                    right: "0.85rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "0.25rem 0.7rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(8, 12, 20, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      color: "var(--cyan-neon)",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </span>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      background: "rgba(8, 12, 20, 0.8)",
                      color: "var(--text-secondary)",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  gap: "0.65rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Read Article Trigger */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    color: "var(--cyan-neon)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    paddingTop: "0.5rem",
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="modal-overlay"
          onClick={() => setActiveArticle(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 220,
            background: "rgba(5, 8, 16, 0.88)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "760px",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "rgba(12, 18, 32, 0.98)",
              border: "1px solid rgba(56, 189, 248, 0.28)",
              borderRadius: "22px",
              padding: "2.25rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                  <span className="badge-neon">{activeArticle.category}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {activeArticle.date} • {activeArticle.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                  {activeArticle.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
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

            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                lineHeight: 1.75,
                whiteSpace: "pre-line",
                padding: "1.25rem 0",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "1.5rem",
              }}
            >
              {activeArticle.content}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setActiveArticle(null)}
                className="btn-primary"
                style={{ padding: "0.55rem 1.4rem" }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
