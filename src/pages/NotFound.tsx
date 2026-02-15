import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import dinoLogo from "@/assets/dino-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "404 — Page Not Found | DinoDiv";
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.img
          src={dinoLogo}
          alt="DinoDiv Logo"
          className="mx-auto mb-8 h-32 w-32 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <h1 className="mb-4 text-6xl font-bold tracking-tight sm:text-8xl">
          <span className="text-gradient-green">404</span>
        </h1>
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist. DinoDiv is always building forward — let's get you back on track.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">Back to Home</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
