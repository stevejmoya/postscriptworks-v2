import { motion } from "framer-motion";

export function PostscriptDefinition() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#f8fcf9] to-[#f8fafc]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-[#f8fcf9] to-[#f8fafc] px-4 text-sm text-gray-500">
                OUR NAME
              </span>
            </div>
          </div>
          
          <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed px-6">
            <p className="mb-4">
              "A postscript is defined as adding new or expanded thought to existing context, ideas, or objectives. 
              These insights hold nuggets of learning, analysis, and recommendations on how best to move forward.
            </p>
            <p>
              At Postscriptworks, we provide clarity and actionable strategies to drive innovation and growth for 
              organizations that want to make a difference."
            </p>
          </blockquote>
          
          <div className="mt-6 flex justify-center space-x-3">
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#4ACB6B] to-[#1e486b] rounded-full"></div>
            <div className="h-1.5 w-8 bg-[#1e486b] rounded-full"></div>
            <div className="h-1.5 w-4 bg-[#4ACB6B] rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}