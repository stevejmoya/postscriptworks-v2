import { motion } from "framer-motion";

const fits = [
  { num: "01", title: "You are generating leads but losing them", desc: "Interest is coming in from campaigns and outreach but disappearing before it converts. No clear pipeline. No follow-up system. No visibility into what happens next." },
  { num: "02", title: "Your tools are not talking to each other", desc: "You have a CRM, a marketing platform, and reporting tools — but data lives in three places and someone reconciles it in Excel every week." },
  { num: "03", title: "You have a strategy but nothing is shipping", desc: "The plan exists. The deck is polished. But execution is slow or stalled because no one owns the actual build." },
  { num: "04", title: "You need senior thinking without senior overhead", desc: "You cannot justify a full-time CMO or operations lead, but you need that level of thinking to move the business forward." },
  { num: "05", title: "Your spend has no clear attribution", desc: "Money is going out. You cannot confidently say which campaigns, channels, or efforts are actually driving revenue." },
  { num: "06", title: "You are scaling and your systems are not", desc: "What worked at five people is breaking at twenty. The process, tools, and workflows were not built to scale." },
];

const dmSans = { fontFamily: "'DM Sans', sans-serif" };

export function ChallengesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">Who we work with</p>
        <h2 className="text-[#1A2233] mb-10" style={{ ...dmSans, fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 600, lineHeight: 1.2 }}>You might be a fit if...</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {fits.map(({ num, title, desc }, i) => (
            <motion.div key={num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }} className="p-6 border border-gray-200 rounded-2xl hover:border-[#00B09B] transition-colors duration-200 group">
              <div className="text-[28px] font-bold text-gray-200 mb-3 group-hover:text-[#00B09B]/20 transition-colors" style={dmSans}>{num}</div>
              <h3 className="text-[#1A2233] mb-2 leading-snug" style={{ ...dmSans, fontSize: "15px", fontWeight: 600 }}>{title}</h3>
              <p className="text-[13px] leading-[1.65] text-gray-400 font-light">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
