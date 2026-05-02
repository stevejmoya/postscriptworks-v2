import { motion } from "framer-motion";

const pillars = [
  { label: "Advisory first", title: "Understand the real problem", desc: "We take time to find what is actually breaking — not the surface symptoms, but the underlying gaps costing you time, money, and momentum." },
  { label: "Solution second", title: "Design the right answer", desc: "We design a solution that fits your actual situation — your team, your budget, your constraints — not a package built for someone else." },
  { label: "Execution third", title: "Build it and own it", desc: "We lead the implementation and train your team to run it confidently. The goal is always a system that works without depending on us." },
];

const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export function WhatWeDoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1A2233] rounded-[20px] p-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-4">Our philosophy</p>
            <h2 className="text-white mb-4" style={{ ...dmSans, fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 600, lineHeight: 1.25 }}>
              Good advice starts<br />with good questions.
            </h2>
            <p className="text-[15px] leading-[1.8] text-slate-400 font-light max-w-xl mb-10">
              Every engagement follows the same sequence — not as a process for its own sake, but because it is the only way to build the right solution instead of a fast one.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map(({ label, title, desc }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="p-7 bg-white/[0.06] rounded-2xl border border-white/10">
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#00B09B] mb-2.5">{label}</p>
                <h3 className="text-white mb-2.5" style={{ ...dmSans, fontSize: "17px", fontWeight: 600, lineHeight: 1.3 }}>{title}</h3>
                <p className="text-[13px] leading-[1.7] text-slate-400 font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
