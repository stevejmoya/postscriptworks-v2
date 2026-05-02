import { motion } from "framer-motion";

const chips = [
  { label: "Strategy", highlight: true },
  { label: "AI and automation", highlight: true },
  { label: "CRM and systems", highlight: true },
  { label: "Marketing execution", highlight: false },
  { label: "Team extension", highlight: false },
  { label: "Diagnostic advisory", highlight: false },
];

const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">
          About us
        </p>
        <h2 className="text-[#1A2233] mb-12" style={{ ...dmSans, fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 600, lineHeight: 1.2 }}>
          Built by practitioners.<br />Led by someone who has been in the room.
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ height: "420px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&fit=crop"
              alt="Postscriptworks working session"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-[15px] leading-[1.85] text-gray-500 font-light space-y-5">
              <p>Stephen Moya has spent over 20 years inside marketing, strategy, and operations across Fortune 500 brands and growth-stage companies. He has seen what breaks, what scales, and what just looks good on a slide deck but never ships.</p>
              <p>Postscriptworks is the firm he built to bring that experience to companies that cannot afford the overhead of a large agency but need something smarter than a freelancer. A lean team of senior specialists assembled around each engagement based on what the work actually requires.</p>
              <p>Remote-first, globally distributed, and built for speed. Our clients get senior thinking without senior agency billing rates.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-7">
              {chips.map(({ label, highlight }) => (
                <span key={label} className={`px-4 py-1.5 rounded-full text-[13px] border ${highlight ? "border-[#00B09B] text-[#00B09B] bg-[#E6FFFA]" : "border-gray-200 text-gray-500"}`}>
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
