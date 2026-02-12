import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-green" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/50 p-12 text-center backdrop-blur-sm glow-green-strong lg:p-16"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Build Your Next{" "}
            <span className="text-gradient-green">Digital System</span>?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's turn your vision into a scalable, production-ready platform.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Start Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
