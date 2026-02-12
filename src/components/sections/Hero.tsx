import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dinoLogo from "@/assets/dino-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-green" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
            Software Development Company
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            We Build{" "}
            <span className="text-gradient-green">Scalable</span>
            <br />
            Digital Systems
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground lg:text-xl">
            From UI/UX to ERP, CRM and SaaS Platforms — We Transform Ideas into Powerful Digital Solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#projects">View Our Work</a>
            </Button>
          </div>
        </motion.div>

        {/* Right logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px]" />
            <img
              src={dinoLogo}
              alt="DinoDiv Logo"
              className="relative z-10 h-64 w-64 animate-float object-contain sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
