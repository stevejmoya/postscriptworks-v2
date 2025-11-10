import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WhereWeComeIn() {
  const benefits = [
    {
      title: "Navigating the marketing maze.",
      description: "Modern marketing is a maze of platforms, tools, and moving parts. You need a partner who sees the big picture, zeroes in on what matters, and knows how to turn complexity into results."
    },
    {
      title: "Dedicated Account Management.",
      description: "Every project comes with a dedicated U.S.-based Account Manager who leads the charge—assembling the right talent at the right time, from kickoff to delivery. Unlike managing freelancers yourself, you won't need to repeat briefs or juggle coordination. We handle the details so you can focus on the big picture."
    },
    {
      title: "Flexible engagement models.",
      description: "We offer project-based, retainer, and consulting options to fit your specific needs and budget."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Marketing team collaborating on strategies"
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              
              {/* Yellow circle background */}
              <div className="absolute -z-10 -left-8 top-24 w-64 h-64 rounded-full bg-[#F0D197]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">That's where we come in.</h2>
              <p className="text-xl text-gray-700">
                We understand how overwhelming it can feel without dedicated marketing support.
              </p>
            </div>

            <div className="space-y-10 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="h-6 w-6 text-[#4ACB6B] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}