import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Copy,
  Check,
} from "lucide-react";
import { portfolioData, portfolioAssets } from "../data/portfolioData";
import TiltCard from "./TiltCard";
import { soundFX } from "../utils/audioFX";
import { triggerToast } from "./Toast";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    soundFX.playClick();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(personal.email);
    }
    setCopiedEmail(true);
    triggerToast("✓ Email copied to clipboard: " + personal.email);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playClick();
    setIsSubmitting(true);
    triggerToast("Preparing email draft...");

    const mailSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hello Snehith,\n\n${formData.message}\n\n--\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playSuccess();
      setFormData({ name: "", email: "", message: "" });
      triggerToast("Draft launched in your mail client!");
    }, 600);
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", position: "relative" }}>
      <div className="container">
        {/* Main 2-Column Contact Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="contact-screen-grid"
        >
          {/* Left Column: Heading, Channels & Contact Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  marginBottom: "0.85rem",
                }}
              >
                <Sparkles size={13} color="#ffffff" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#f4f4f5",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Direct Channels // Contact
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.035em",
                  lineHeight: 1.12,
                  marginBottom: "0.5rem",
                }}
              >
                Let's Build Something Great.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                }}
              >
                Feel free to reach out for internship opportunities, technical collaborations, or engineering chats.
              </p>
            </div>

            {/* Direct Channel Cards List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {/* Email with 1-click copy */}
              <div
                className="bento-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => soundFX.playClick()}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flex: 1,
                  }}
                  title="Click to open default mail client"
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.14)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                      }}
                    >
                      Email Address
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontFamily: "var(--font-accent)",
                      }}
                    >
                      {personal.email}
                    </span>
                  </div>
                </a>

                {/* 1-Click Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "9999px",
                    background: copiedEmail ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.06)",
                    border: copiedEmail ? "1px solid rgba(16, 185, 129, 0.35)" : "1px solid rgba(255, 255, 255, 0.12)",
                    color: copiedEmail ? "#34d399" : "var(--text-secondary)",
                    fontSize: "0.78rem",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Location Badge */}
              <div
                className="bento-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                    }}
                  >
                    Current Base
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "#ffffff",
                      fontWeight: 600,
                    }}
                  >
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bento-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.15rem",
                padding: "2.25rem",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "16px",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    textAlign: "center",
                    color: "#34d399",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <CheckCircle2 size={36} />
                  <strong style={{ fontSize: "1.2rem", color: "#ffffff" }}>
                    Message Dispatched Successfully!
                  </strong>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    Thank you! Snehith will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      style={{
                        width: "100%",
                        background: "rgba(10, 10, 14, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "12px",
                        padding: "0.85rem 1.15rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        fontFamily: "var(--font-heading)",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      style={{
                        width: "100%",
                        background: "rgba(10, 10, 14, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "12px",
                        padding: "0.85rem 1.15rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        fontFamily: "var(--font-heading)",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Message Content
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss an internship, project collaboration, or research opportunity..."
                      style={{
                        width: "100%",
                        background: "rgba(10, 10, 14, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "12px",
                        padding: "0.85rem 1.15rem",
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "var(--font-heading)",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => soundFX.playHover()}
                    style={{
                      padding: "0.95rem",
                      borderRadius: "9999px",
                      background: "#ffffff",
                      border: "1px solid rgba(255, 255, 255, 0.6)",
                      color: "#09090b",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-accent)",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
                      marginTop: "0.5rem",
                      transition: "all 0.2s ease",
                    }}
                    className="sheen-effect"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                    <Send size={16} />
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Right Column: Holographic Lunar Visual Badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <TiltCard
              className="bento-card"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                borderRadius: "26px",
                overflow: "hidden",
                padding: "0",
              }}
            >
              {/* Visual Container */}
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
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Subtle dark gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(8, 12, 20, 0.1) 0%, rgba(9, 9, 11, 0.2) 50%, rgba(9, 9, 11, 0.95) 100%)",
                  }}
                />

                {/* Handwritten Signature Quote Capsule */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.75rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    padding: "0.95rem 1.4rem",
                    borderRadius: "18px",
                    background: "rgba(20, 20, 26, 0.9)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.14)",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Caveat', cursive, var(--font-heading)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.3,
                      textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    "If You Can Dream It, You Can Build It!"
                  </p>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-accent)",
                      marginTop: "0.25rem",
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
