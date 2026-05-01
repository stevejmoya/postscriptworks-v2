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
      <HeroSection />
      <PostscriptDefinition />
      <AboutSection />
      <HowWeWorkSection />
      <ServicesSection />
      <ChallengesSection />
      <WhatWeDoSection />
      <DidYouKnowSection />
      <WhereWeComeIn />

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 border border-gray-200 rounded-[20px] overflow-hidden">

            <div className="relative min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85&fit=crop&crop=left"
                alt="Postscriptworks team collaboration"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-[#1A2233]/55 flex flex-col justify-end p-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-display text-[22px] font-bold text-white leading-snug mb-2">
                    Let's find out where you're<br />leaving results on the table.
                  </h3>
                  <p className="text-[14px] text-white/70 leading-relaxed">
                    It takes 10 minutes to start. It changes how you see your business.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="p-12 bg-white">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#00B09B] mb-3">
                Ready to start
              </p>
              <h2 className="font-display text-[26px] font-bold text-[#1A2233] mb-8 leading-snug">
                Start your free diagnostic
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
