import { motion } from "framer-motion";

export function HowWeWorkSection() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We begin by understanding your business, goals, and target audience to develop a tailored strategy.",
      bgColor: "bg-[#1e486b]"
    },
    {
      number: 2,
      title: "Creative Development",
      description: "Our cross-disciplined team collaborates to create compelling campaigns that align with your brand.",
      bgColor: "bg-[#4ACB6B]"
    },
    {
      number: 3,
      title: "Global Execution",
      description: "We leverage our global team to execute campaigns efficiently across different markets and time zones.",
      bgColor: "bg-[#1e486b]"
    },
    {
      number: 4,
      title: "Measurement & Optimization",
      description: "We continuously monitor performance and optimize campaigns to drive the best possible results.",
      bgColor: "bg-[#4ACB6B]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our global team works across time zones to ensure efficient delivery and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div>            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className={`${step.bgColor} text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#1e486b] via-[#17606f] to-[#1a9764] aspect-square relative hidden lg:block"
          >
            {/* Circular overlays */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-white opacity-10"></div>
            <div className="absolute top-[35%] right-[25%] w-[40%] h-[40%] rounded-full bg-white opacity-10"></div>
            <div className="absolute top-[30%] left-[30%] w-[25%] h-[25%] rounded-full bg-white opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}