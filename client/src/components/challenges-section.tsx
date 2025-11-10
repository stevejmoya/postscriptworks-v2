import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const challenges = [
  {
    title: "No Dedicated Marketing Team",
    description:
      "We understand how overwhelming it can feel without dedicated marketing support.",
    type: "External",
  },
  {
    title: "Ineffective Marketing Efforts",
    description:
      "Stop wasting resources on marketing initiatives that don't deliver results.",
    type: "Internal",
  },
  {
    title: "Complex Marketing Landscape",
    description:
      "Navigate the countless tools and platforms with our expert guidance.",
    type: "Philosophical",
  },
];

export function ChallengesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Challenges We Solve</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Marketing shouldn't be a struggle. We help businesses overcome common
            challenges and achieve sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription className="text-sm uppercase text-primary">
                    {challenge.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
