import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  image: string;
  savings: string;
  index: number;
}

function ServiceCard({ title, image, savings, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: "16/9" }}
        />
      </div>
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-gray-600">{savings} Average Savings</p>
    </motion.div>
  );
}

export function ServicesShowcase() {
  const services = [
    {
      title: "Creative",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
      savings: "80%"
    },
    {
      title: "Development",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
      savings: "81%"
    },
    {
      title: "Customer Support",
      image: "https://images.unsplash.com/photo-1587614380862-ba85ef2734f4?q=80&w=2070&auto=format&fit=crop",
      savings: "82%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional value across our wide range of services with significant cost savings compared to in-house teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
              savings={service.savings}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}