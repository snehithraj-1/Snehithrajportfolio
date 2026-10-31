import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./Icons";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playClick();
    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(`Hello Snehith,\n\n${formData.message}\n\n--\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playSuccess();
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" style={{ padding: "5.5rem 0", position: "relative" }}>
      <div className="container">
        {/* Main 2-Column Contact Layout matching Screen 9 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="contact-screen-grid"
        >
          {/* Left Column: Heading, Channels & Contact Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div>
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
                Let's Connect
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                }}
              >
                Feel free to reach out for collaborations, opportunities or just a chat.
              </p>
            </div>

            {/* Direct Channel Cards List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                onClick={() => soundFX.playClick()}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(56, 189, 248, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--cyan-neon)",
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Email</span>
                  <span style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>{personal.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(37, 99, 235, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38bdf8",
                  }}
                >
                  <LinkedinIcon size={16} />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>LinkedIn</span>
                  <span style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>linkedin.com/in/snehithraj-gaddam</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFX.playClick()}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <GithubIcon size={16} />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>GitHub</span>
                  <span style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>github.com/snehithraj-1</span>
                </div>
              </a>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-secondary)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--emerald-neon)",
                  }}
                >
                  <MapPin size={16} />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Location</span>
                  <span style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 600 }}>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: "18px",
                padding: "1.75rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "12px",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    textAlign: "center",
                    color: "var(--emerald-neon)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={32} />
                  <strong style={{ fontSize: "1.1rem" }}>Message Sent Successfully!</strong>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Thank you! Snehith will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.35rem", fontFamily: "var(--font-mono)" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      style={{
                        width: "100%",
                        background: "rgba(8, 12, 20, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        padding: "0.75rem 1rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.35rem", fontFamily: "var(--font-mono)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      style={{
                        width: "100%",
                        background: "rgba(8, 12, 20, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        padding: "0.75rem 1rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.35rem", fontFamily: "var(--font-mono)" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss an internship, project collaboration, or just say hello..."
                      style={{
                        width: "100%",
                        background: "rgba(8, 12, 20, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "10px",
                        padding: "0.75rem 1rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => soundFX.playHover()}
                    style={{
                      padding: "0.85rem",
                      borderRadius: "var(--radius-full)",
                      background: "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                      marginTop: "0.5rem",
                    }}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Right Column: Astronaut on Moon Gazing at Earth matching Screen 9 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <TiltCard
              className="glass-card"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.15)",
                background: "rgba(10, 16, 30, 0.8)",
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                }}
              >
                <img
                  src={portfolioAssets.contactAstronaut}
                  alt="Astronaut on lunar surface looking at earth"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Ambient vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(8, 12, 20, 0.1) 0%, rgba(8, 12, 20, 0.3) 60%, rgba(8, 12, 20, 0.95) 100%)",
                  }}
                />

                {/* Handwritten Glowing Quote Pill matching Screen 9 */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.75rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    padding: "0.85rem 1.25rem",
                    borderRadius: "16px",
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Caveat', cursive, var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#38bdf8",
                      lineHeight: 1.3,
                      textShadow: "0 0 12px rgba(56, 189, 248, 0.5)",
                    }}
                  >
                    "If You Can Dream It, You Can Build It!"
                  </p>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-accent)",
                      marginTop: "0.2rem",
                    }}
                  >
                    — Snehith Raj
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
