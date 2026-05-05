import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    name: "Discovery intake",
    desc: "A focused 10-minute assessment covering your lead generation, workflows, tools, and bottlenecks. Surfaces what usually takes weeks to find.",
  },
  {
    num: "02",
    name: "Diagnostic assessment",
    desc: "We analyze your responses and return a scored report: where things are breaking, what it is costing you, and what to fix first.",
  },
  {
    num: "03",
    name: "Solution architecture",
    desc: "We translate the diagnostic into a concrete plan. The right systems, the right team, the right sequence. Advisory first. Solution second. Execution third.",
  },
  {
    num: "04",
    name: "Implementation and oversight",
    desc: "We lead the build and stay accountable until the system is running and your team owns it.",
  },
];

const bandColors = [
  "#2ec4a9",
  "#1da892",
  "#164e63",
  "#0f1f35",
];

export const HowWeWorkSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="approach" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#2ec4a9",
            marginBottom: "0.75rem",
          }}>
            How every engagement starts
          </p>

          {/* Headline */}
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#0f1f35",
            lineHeight: 1.2,
            marginBottom: "0.75rem",
          }}>
            Understanding your business is the work.<br />
            Everything else follows.
          </h2>

          {/* Subhead */}
          <p style={{
            fontSize: "15px",
            color: "#6b7280",
            lineHeight: 1.65,
            maxWidth: "560px",
            marginBottom: "2rem",
          }}>
            Before we recommend anything, we run a structured discovery process
            that finds what your team cannot see from the inside. Messy reality
            becomes a clear picture of where you are losing time, money, and
            momentum.
          </p>
        </motion.div>

        {/* Phase Bands */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          borderRadius: "14px",
          overflow: "hidden",
        }}>
          {phases.map((phase, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => toggle(i)}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  minHeight: isOpen ? "140px" : "72px",
                  cursor: "pointer",
                  background: bandColors[i],
                  transition: "min-height 0.32s ease",
                }}
              >
                {/* Number */}
                <span style={{
                  width: "54px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: "22px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.45)",
                }}>
                  {phase.num}
                </span>

                {/* Body */}
                <div style={{ flex: 1, padding: "20px 16px 20px 0" }}>
                  <p style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "4px",
                  }}>
                    {phase.name}
                  </p>
                  <p style={{
                    fontSize: "13px",
                    lineHeight: 1.62,
                    color: "rgba(255,255,255,0.85)",
                    maxHeight: isOpen ? "120px" : "0",
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.32s ease, opacity 0.25s ease",
                    margin: 0,
                  }}>
                    {phase.desc}
                  </p>
                </div>

                {/* Caret */}
                <span style={{
                  flexShrink: 0,
                  paddingTop: "20px",
                  paddingRight: "18px",
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.45)",
                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.32s ease",
                  lineHeight: 1,
                }}>
                  ›
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
