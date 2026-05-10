import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

const About = lazy(() => import("@/components/sections/About"));
const Services = lazy(() => import("@/components/sections/Services"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const TeamSection = lazy(() => import("@/components/team/TeamSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <WhyChooseUs />
          <TeamSection />
          <CTASection />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
