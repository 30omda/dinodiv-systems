import { motion } from "framer-motion";
import projectHr from "@/assets/project-hr.jpg";
import projectCrm from "@/assets/project-crm.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectLogistics from "@/assets/project-logistics.jpg";

const projects = [
  {
    title: "Enterprise HR Platform",
    description: "Full-scale HR management system with employee tracking, payroll, and performance analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "ERP"],
    image: projectHr,
  },
  {
    title: "Sales CRM Dashboard",
    description: "Real-time sales pipeline management with AI-powered forecasting and team collaboration tools.",
    tags: ["TypeScript", "Next.js", "Supabase", "CRM"],
    image: projectCrm,
  },
  {
    title: "E-Commerce Analytics",
    description: "Multi-tenant analytics platform with custom dashboards and automated reporting engine.",
    tags: ["React", "Python", "AWS", "SaaS"],
    image: projectAnalytics,
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with appointment scheduling, digital records, and compliance.",
    tags: ["TypeScript", "Docker", "PostgreSQL", "ERP"],
    image: projectHealthcare,
  },
  {
    title: "FinTech Mobile Platform",
    description: "Digital banking interface with real-time transactions and security compliance.",
    tags: ["React Native", "Node.js", "Redis", "SaaS"],
    image: projectFintech,
  },
  {
    title: "Logistics Automation",
    description: "End-to-end supply chain management with real-time tracking and route optimization.",
    tags: ["Vue.js", "Python", "MongoDB", "ERP"],
    image: projectLogistics,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Selected <span className="text-gradient-green">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A glimpse into the enterprise systems DinoDiv has built for ambitious businesses.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} — DinoDiv Project`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
