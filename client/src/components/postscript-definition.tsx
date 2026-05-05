import { motion } from "framer-motion";

export function PostscriptDefinition() {
  return (
    <section className="px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&display=swap');
        .psw-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.65;
        }
      `}</style>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center py-14 border-t border-b border-gray-200">

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="psw-quote text-[#1A2233] pl-6 border-l-[3px] border-[#00B09B]"
            style={{ borderRadius: 0 }}
          >
            "A postscript adds new thought to existing context. We look at what
            you have built, find what others have missed, and show you the
            clearest path forward."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">
              Why Postscriptworks
            </p>
            <p className="text-[15px] leading-[1.85] text-gray-500 font-light">
              Most advisors tell you what to do. Most agencies do what they are
              told. We sit in between — we think strategically, then we build
              the solution. We are the team you bring in when you need both
              clarity and execution, not one or the other.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
