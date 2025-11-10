import { CareerForm } from "@/components/career-form";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-8 text-left">Join Our Team</h1>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              At Postscriptworks, we're a crew of thinkers and doers—designers, writers, strategists, 
              developers, and producers who live for the creative solve. We've worked across industries, 
              time zones, and just about every digital platform you can name.
            </p>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              What brings us together? A shared love for big ideas—and the thrill of turning them into 
              campaigns that actually move the needle.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-16">
              Got something brewing? We'd love to hear about it. Reach out and let's make something great together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Tell Us About Yourself</h2>
              <CareerForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
