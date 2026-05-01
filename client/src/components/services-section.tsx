import { motion } from "framer-motion";

const services = [
  {
    tag: "Core offer",
    title: "Strategy and diagnostic",
    desc: "We find what is actually broken — not what looks broken from the outside. Scored diagnostic reports, bottleneck analysis, and a prioritized roadmap that gives your team clarity and direction.",
    outcome: "You know exactly what to fix and in what order.",
    featured: true,
  },
  {
    tag: "Systems",
    title: "AI and automation",
    desc: "We build systems that eliminate manual work and connect the tools your team already uses. CRM setup, lead automation, chatbots, reporting dashboards, and cross-platform integrations.",
    outcome: "Less manual work. Faster response. Better data.",
    featured: false,
  },
  {
    tag: "Execution",
    title: "Marketing execution",
    desc: "From campaign strategy to content production to paid media — we handle the work your team does not have the bandwidth or specialist depth to execute well on its own.",
    outcome: "Campaigns that actually ship and perform.",
    featured: false,
  },
  {
    tag: "Embedded",
    title: "Fractional team extension",
    desc: "We integrate directly into your team as an embedded extension — attending standups, managing projects, owning deliverables. Senior expertise without a full-time hire or agency overhead.",
    outcome: "Senior capability at a fraction of the cost.",
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">
          What we do
        </p>
        <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold text-[#1A2233] leading-[1.2] mb-3">
          Four ways we create impact.
        </h2>
        <p className="text-[15px] text-gray-500 font-light leading-[1.7] mb-10">
          Every engagement is scoped to what you actually need —<br className="hidden md:block" />
          not a packaged service designed for someone else.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map(({ tag, title, desc, outcome, featured }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-2.5 p-7 rounded-2xl border bg-white ${
                featured ? "border-[#00B09B] border-2" : "border-gray-200"
              }`}
            >
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#00B09B]">
                {tag}
              </span>
              <h3 className="font-display text-[18px] font-bold text-[#1A2233]">
                {title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-gray-500 font-light flex-1">
                {desc}
              </p>
              <p className="text-[13px] text-[#00B09B] font-medium pt-3 border-t border-[#E6FFFA]">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
