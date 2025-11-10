import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PSWLogo } from "./psw-logo";

// Custom background component with quotation marks
const BackgroundLogo = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden flex items-center justify-center">
    <div className="relative w-full h-full">
      {/* Large quotes background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Giant quotation marks */}
        <img 
          src="/assets/quotes-bg.png" 
          alt="Background quotation marks"
          className="opacity-30 w-[500px]"
          style={{ transform: "scale(4)", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>
      
      {/* Floating colored shapes */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-[20%] left-[10%]"
      >
        <div className="w-40 h-40 rounded-full bg-white" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-[15%] right-[20%]"
      >
        <div className="w-32 h-32 rounded-full bg-white" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2, delay: 1.1 }}
        className="absolute top-[35%] right-[15%]"
      >
        <div className="w-24 h-24 rounded-full bg-white" />
      </motion.div>
    </div>
  </div>
);

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-bl from-[#4ACB6B] to-[#1e486b]">
      <div className="flex items-center justify-center h-screen">
        <BackgroundLogo />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white"
            >
              We help businesses transform ideas{" "}
              <span className="text-white">
                into results
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Global expertise. Local Impact. Marketing that moves.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#1e486b] hover:bg-white/90 gap-2"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Schedule a Call <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}