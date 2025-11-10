import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ChallengesSection } from "@/components/challenges-section";
import { ContactForm } from "@/components/contact-form";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { DidYouKnowSection } from "@/components/did-you-know-section";
import { WhereWeComeIn } from "@/components/where-we-come-in";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { PostscriptDefinition } from "@/components/postscript-definition";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* ===== 1. INTRODUCTION: Who We Are ===== */}
      <HeroSection />
      <PostscriptDefinition />
      <AboutSection />
      
      {/* ===== 2. OFFERINGS: What We Provide ===== */}
      <WhatWeDoSection />
      <ServicesSection />
      <HowWeWorkSection />
      
      {/* ===== 3. VALUE PROPOSITION: Why Choose Us ===== */}
      <ChallengesSection />
      <DidYouKnowSection />
      <WhereWeComeIn />
      
      {/* ===== 4. CALL TO ACTION: Get in Touch ===== */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#f4e4d9] rounded-lg p-6 md:p-8">
                <img
                  src="/images/red-shoes.png"
                  alt="Red shoes on a path with a forward arrow, representing the journey ahead"
                  className="w-full h-auto rounded-md shadow-md object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#1e486b] rounded-full hidden md:block" />
            </motion.div>
            
            <div>
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Get Started</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Marketing doesn't have to be overwhelming.
                  Share a few details below, and we'll set up a call to see how our team can help.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
