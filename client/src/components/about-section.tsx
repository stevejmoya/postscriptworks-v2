import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Clock, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-8">
              We're a collective team of cross-disciplined professionals - 
              Strategists, Project Managers, Designers, Copywriters, 
              Producers, Art Directors, Animators, Illustrators, and Developers.
              With over 20 years of marketing experience and successful
              partnerships with Fortune 500 brands, our team has the expertise to
              drive results for you.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-auto">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">20+ Years</CardTitle>
                  <CardDescription>Experience</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">Global</CardTitle>
                  <CardDescription>Reach</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">24/7</CardTitle>
                  <CardDescription>Support</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center"
          >
            <div className="w-full h-full min-h-[400px] relative">
              <img 
                src="/team-meeting.png" 
                alt="Team collaborating in a meeting" 
                className="rounded-lg w-full h-full shadow-lg object-cover absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
