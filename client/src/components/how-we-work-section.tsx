import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery intake", desc: "A focused assessment covering your lead generation, internal workflows, tools, bottlenecks, and speed to revenue. Takes 10 minutes. Surfaces what usually takes weeks to find." },
  { num: "02", title: "Diagnostic assessment", desc: "We analyze your responses and produce a scored report: where things are breaking, what it is costing you in lost time and revenue, and a prioritized view of what to fix first." },
  { num: "03", title: "Solution architecture", desc: "We translate the diagnostic into a concrete plan — the right systems, the right team, the right sequence. Advisory first. Solution second. Execution third." },
  { num: "04", title: "Implementation and oversight", desc: "We lead the build — CRM configuration, automation pipelines, reporting dashboards — and stay accountable until the system is running and your team owns it." },
];

const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export function HowWeWorkSection() {
  return (
    <section id="approach" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#F5F7FA] rounded-[20px] p-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-4">How every engagement starts</p>
            <h2 className="text-[#1A2233] mb-4" style={{ ...dmSans, fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 600, lineHeight: 1.2 }}>
              Understanding your business is the work.<br />Everything else follows.
            </h2>
            <p className="text-[15px] leading-[1.85] text-gray-500 font-light max-w-2xl mb-10">
              Before we recommend anything, we run a structured discovery process that surfaces the gaps your team cannot clearly see from the inside. It turns messy business reality into a clear picture of where you are losing time, money, and momentum.
            </p>
          </motion.div>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className={`grid grid-cols-[56px_1fr] gap-2 py-6 ${i < steps.length - 1 ? "border-b border-gray-200" : ""}`}>
                <span className="text-[13px] font-medium text-[#00B09B] pt-0.5" style={dmSans}>{step.num}</span>
                <div>
                  <h3 className="text-[#1A2233] mb-1.5" style={{ ...dmSans, fontSize: "16px", fontWeight: 600 }}>{step.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-gray-500 font-light">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
