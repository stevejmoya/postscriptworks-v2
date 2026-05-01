import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="pt-[128px] pb-0 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-5"
        >
          Advisory · Strategy · Execution
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.08] text-[#1A2233] mb-7 max-w-4xl"
        >
          Most companies don't have a strategy problem.{" "}
          They have an{" "}
          <em className="not-italic text-[#00B09B]">execution</em>{" "}
          problem.{" "}
          We solve both.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-[1.8] text-gray-500 font-light max-w-2xl mb-9"
        >
          We diagnose what is actually breaking in your business, build the plan
          to fix it, and lead the team that executes it. No guesswork. No generic
          frameworks. Just clear thinking and real results.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 bg-[#1A2233] text-white text-[15px] font-medium rounded-[10px] hover:bg-[#00B09B] transition-colors duration-150"
          >
            Start your free diagnostic
          </a>
          <a
            href="#approach"
            className="px-7 py-3.5 bg-transparent text-[#1A2233] text-[15px] font-medium rounded-[10px] border-[1.5px] border-gray-200 hover:border-[#1A2233] transition-colors duration-150"
          >
            See our approach
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-t-2xl overflow-hidden w-full"
          style={{ height: "clamp(280px, 38vw, 500px)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=85&fit=crop"
            alt="Postscriptworks strategic team session"
            className="w-full h-full object-cover object-[center_30%]"
          />
        </motion.div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 border border-t-0 border-gray-200 rounded-b-2xl overflow-hidden mb-20">
          {[
            { num: "20+", label: "Years across Fortune 500 and growth-stage companies" },
            { num: "Global", label: "Expert team — US, Philippines, and beyond" },
            { num: "3-in-1", label: "Strategy, systems, and execution under one engagement" },
          ].map(({ num, label }, i) => (
            <div
              key={num}
              className={`p-6 ${i < 2 ? "border-r border-gray-200" : ""}`}
            >
              <div className="font-display text-2xl font-bold text-[#1A2233] mb-1">{num}</div>
              <div className="text-[13px] text-gray-400 leading-snug">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
