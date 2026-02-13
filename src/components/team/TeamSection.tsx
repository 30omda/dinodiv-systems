import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import type { TeamMember } from "@/types/team";

const teamMembers: TeamMember[] = [
  {
    name: "Ahmad Raza",
    role: "Founder & Lead Developer",
    description:
      "Full-stack architect specializing in scalable ERP and SaaS platforms. Passionate about clean code and performance.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://example.com",
  },
  {
    name: "Sara Khan",
    role: "UI/UX Designer",
    description:
      "Crafting intuitive, pixel-perfect interfaces that balance aesthetics with usability for enterprise applications.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ali Hassan",
    role: "Backend Engineer",
    description:
      "Database specialist building robust APIs and microservices for high-traffic production environments.",
    github: "https://github.com",
  },
  {
    name: "Fatima Noor",
    role: "Project Manager",
    description:
      "Driving cross-functional teams to deliver complex software projects on time with agile methodologies.",
    linkedin: "https://linkedin.com",
    portfolio: "https://example.com",
  },
  {
    name: "Usman Tariq",
    role: "DevOps Engineer",
    description:
      "Automating CI/CD pipelines and cloud infrastructure to ensure zero-downtime deployments at scale.",
    github: "https://github.com",
  },
  {
    name: "Hira Malik",
    role: "QA Lead",
    description:
      "Ensuring software excellence through comprehensive testing strategies and automated quality assurance.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-green opacity-30" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            Our Team
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The Minds Behind{" "}
            <span className="text-gradient-green">DinoDiv</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A passionate team of engineers, designers, and strategists building
            the next generation of enterprise software.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
