import { motion } from "framer-motion";

export function WhatWeDoSection() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            </div>
            
            <div className="text-gray-700 space-y-4">
              <p>
                Postscriptworks is a global marketing consultancy that turns bold ideas into real results. 
                We act as an outsourced extension of your team, ideal for companies without dedicated 
                internal marketing expertise.
              </p>
              
              <p>
                Our team of advisors, strategists, designers, project managers, and developers brings deep 
                expertise across disciplines to every project. We are more than partners; we are the secret 
                sauce behind the scenes—trusted, proactive, and genuinely enjoyable to work with.
              </p>
              
              <p>
                Powered by a remote-first model, we move fast and work across time zones, so we're always 
                making progress—closer to launch, closer to impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Global team of marketing experts"
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -right-8 top-1/2 transform -translate-y-1/2 w-16 h-64 bg-gradient-to-r from-[#4ACB6B] to-[#1e486b] rounded-full opacity-70"></div>
              <div className="absolute -z-10 -bottom-8 left-1/4 w-32 h-32 bg-[#4ACB6B] rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}