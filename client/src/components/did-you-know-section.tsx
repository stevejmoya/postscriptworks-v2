import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { DotPattern } from "./dot-pattern";

export function DidYouKnowSection() {
  const benefits = [
    "A lean in-house marketing team can cost over $406,500 per year when you combine $300K+ in salaries, $90K+ in benefits, and an average of $16.5K per employee for health insurance—costs that continue to rise annually.",
    "Hiring and onboarding can cost 1.5–3x an employee's salary due to training and ramp-up time.",
    "Overhead Adds Up Fast: Office space, equipment, software, and training quietly chip away at your budget. Instead of pouring money into upkeep, redirect it toward high-impact marketing efforts that actually drive results.",
  ];

  return (
    <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Did you know?</h2>
              <p className="text-xl text-gray-700">
                Outsourcing your marketing needs can provide significant cost savings compared to maintaining an in-house team:
              </p>
            </div>

            <div className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-[#4ACB6B] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2112&auto=format&fit=crop"
                alt="Business finance and cost savings concept"
                className="w-full h-auto rounded-lg object-cover"
                style={{ aspectRatio: "16/9" }}
              />
              
              {/* Yellow circle background */}
              <div className="absolute -z-10 -left-10 bottom-0 w-64 h-64 rounded-full bg-[#F0D197]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}