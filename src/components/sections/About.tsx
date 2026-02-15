import { motion } from "framer-motion";
import { Lightbulb, Layers, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Strategic Product Design",
    description: "We think beyond pixels — crafting products that solve real business problems and drive measurable results.",
  },
  {
    icon: Layers,
    title: "Scalable System Architecture",
    description: "Built to grow with your business, from startup to enterprise scale — without compromising performance.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Cutting-edge technologies ensuring performance, security, and long-term maintainability for every project.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About <span className="text-gradient-green">DinoDiv</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            DinoDiv is a professional web development company specialized in building scalable digital systems, enterprise platforms, and modern web solutions. We combine strategic design, clean architecture, and cutting-edge technologies to deliver powerful, production-ready results for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:scale-[1.02] hover-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
