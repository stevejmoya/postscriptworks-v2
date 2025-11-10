import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Target, Users, Rocket } from "lucide-react";

const services = [
  {
    title: "Strategy Development",
    description:
      "We craft comprehensive marketing strategies aligned with your business goals.",
    icon: Target,
  },
  {
    title: "Brand Building",
    description:
      "Create a strong, memorable brand identity that resonates with your audience.",
    icon: Sparkles,
  },
  {
    title: "Marketing Execution",
    description:
      "From content creation to campaign management, we handle it all.",
    icon: Rocket,
  },
  {
    title: "Team Extension",
    description:
      "We integrate seamlessly with your team, providing the expertise you need.",
    icon: Users,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We provide end-to-end marketing solutions tailored to your needs,
            eliminating the hassle of managing multiple freelancers and contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-[#00ECAB] transition-colors">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-[#00ECAB] mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#101820]/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}