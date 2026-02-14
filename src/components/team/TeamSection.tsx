import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import type { TeamMember } from "@/types/team";
import mohamedImage from "@/assets/mohamed.jpg";
import MelamrosyImage from "@/assets/mahmoud.jpg";
import MohabImage from "@/assets/mohab.jpg";
const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Emad",
    role: "Frontend Engineer",
    image: mohamedImage,
    description:
      "Frontend Engineer specializing in building user-friendly and responsive web applications.",
    linkedin: "https://www.linkedin.com/in/mohamed-shamseldeen/",
    github: "https://github.com/30omda",
    portfolio: "https://30omda.vercel.app/",
  },
  // {
  //   name: "Sara Khan",
  //   role: "UI/UX Designer",
  //   description:
  //     "Crafting intuitive, pixel-perfect interfaces that balance aesthetics with usability for enterprise applications.",
  //   linkedin: "https://linkedin.com",
  // },
  {
    name: "Ali Hassan",
    role: "Backend Engineer",
    image: MelamrosyImage,
    description:
      "Backend Engineer specializing in building robust APIs and microservices for high-traffic production environments.",
    linkedin: "https://www.linkedin.com/in/mahmoud-elamrosy/",
    github: "https://github.com/melamrosy72",
  },
  // {
  //   name: "Fatima Noor",
  //   role: "Project Manager",
  //   description:
  //     "Driving cross-functional teams to deliver complex software projects on time with agile methodologies.",
  //   linkedin: "https://linkedin.com",
  //   portfolio: "https://example.com",
  // },
  // {
  //   name: "Usman Tariq",
  //   role: "DevOps Engineer",
  //   description:
  //     "Automating CI/CD pipelines and cloud infrastructure to ensure zero-downtime deployments at scale.",
  //   github: "https://github.com",
  // },
  {
    name: "Mohab Abdelmohsen",
    role: "Cloud Engineer",
    image: MohabImage,
    description:
      "Cloud Engineer specializing in AWS and Azure cloud platforms. Passionate about cloud architecture and automation.",
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
