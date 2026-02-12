import { motion } from "framer-motion";
import { Building2, Code, Eye, Handshake } from "lucide-react";

const values = [
  { icon: Building2, title: "Enterprise-Level Thinking" },
  { icon: Code, title: "Clean & Scalable Code" },
  { icon: Eye, title: "Modern UI/UX Focus" },
  { icon: Handshake, title: "Long-Term Technical Partnership" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-green opacity-30" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why <span className="text-gradient-green">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
