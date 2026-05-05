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

        {/* Label */}
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">
          About us
        </p>

        {/* Headline */}
        <h2
          className="text-[#1A2233] mb-12"
          style={{ ...dmSans, fontSize: "clamp(24px, 2.8vw, 38px)", fontWeight: 600, lineHeight: 1.2 }}
        >
          Built by practitioners.<br />Led by someone who has been in the room.
        </h2>

        {/* Top block — team image + team copy */}
        <div className="grid md:grid-cols-2 gap-14 items-start mb-16">

          {/* Team image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ height: "420px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&fit=crop"
              alt="Postscriptworks team"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </motion.div>

          {/* Team copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-[15px] leading-[1.85] text-gray-500 font-light space-y-5">
              <p>
                We are a collective of cross-disciplined professionals: strategists, project managers, designers, copywriters, producers, art directors, animators, illustrators, and developers. Senior specialists assembled around each engagement based on what the work actually requires.
              </p>
              <p>
                Built for companies that cannot afford the overhead of a large agency but need something
                smarter than a freelancer. Remote-first, globally distributed, and built for speed. Our
                clients get senior thinking without senior agency billing rates.
              </p>
              <p>
                With over 20 years of successful partnerships across Fortune 500 brands and growth-stage
                companies, our team has the depth to find what breaks, what scales, and what drives
                real results.
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-7">
              {chips.map(({ label, highlight }) => (
                <span
                  key={label}
                  className={`px-4 py-1.5 rounded-full text-[13px] border ${
                    highlight
                      ? "border-[#00B09B] text-[#00B09B] bg-[#E6FFFA]"
                      : "border-gray-200 text-gray-500"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom block — founder bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center border-t border-gray-100 pt-14"
        >
          {/* Founder copy */}
          <div className="text-[15px] leading-[1.85] text-gray-500 font-light space-y-4">
            <p
              className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3"
            >
              Founder and Managing Partner
            </p>
            <p
              className="text-[#1A2233] mb-4"
              style={{ ...dmSans, fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, lineHeight: 1.3 }}
            >
              Steve Moya
            </p>
            <p>
              Steve has spent over 20 years in digital media sales, marketing, strategy, and operations, sitting inside Fortune 500 boardrooms and growth-stage pitches alike. He knows what breaks under pressure, what actually scales, and what just looks good on a slide deck but never ships.

            </p>
            <p>
              Postscriptworks is the firm he built to bring that experience to the companies that need it most. Not the ones chasing generic frameworks, but the ones ready to build something that actually works.
            </p>
          </div>

          {/* Founder image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
            style={{ height: "380px" }}
          >
            <img
              src="/Steve_Presenting.png"
              alt="Stephen Moya presenting"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
