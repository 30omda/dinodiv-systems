import { motion } from "framer-motion";
import { Palette, Globe, Database, Cloud, Zap, Server } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Strategic wireframes, cohesive design systems, and user experience strategies that drive engagement and conversions.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance corporate websites, landing pages, and modern frontend interfaces built with cutting-edge technologies.",
  },
  {
    icon: Database,
    title: "Custom ERP & CRM Systems",
    description: "Enterprise-grade HR systems, sales dashboards, admin panels, and business management platforms tailored to your workflow.",
  },
  {
    icon: Cloud,
    title: "SaaS Platform Development",
    description: "Multi-tenant architecture, subscription billing systems, and analytics platforms engineered for scale and reliability.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable cloud deployment, CI/CD pipelines, performance optimization, and secure infrastructure management.",
  },
  {
    icon: Zap,
    title: "Digital Automation & Integration",
    description: "API integration, workflow automation, and digital transformation solutions that streamline your operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-green opacity-50" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient-green">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            End-to-end digital solutions by DinoDiv — from concept to deployment.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:scale-[1.02] hover-glow"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
