import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise HR Platform",
    description: "Full-scale HR management system with employee tracking, payroll, and performance analytics.",
    tags: ["ERP", "SaaS"],
  },
  {
    title: "Sales CRM Dashboard",
    description: "Real-time sales pipeline management with AI-powered forecasting and team collaboration.",
    tags: ["CRM", "Web"],
  },
  {
    title: "E-Commerce Analytics",
    description: "Multi-tenant analytics platform with custom dashboards and automated reporting.",
    tags: ["SaaS", "Web"],
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with appointment scheduling and digital records.",
    tags: ["ERP", "UI/UX"],
  },
  {
    title: "FinTech Mobile Platform",
    description: "Digital banking interface with real-time transactions and security compliance.",
    tags: ["SaaS", "UI/UX"],
  },
  {
    title: "Logistics Automation",
    description: "End-to-end supply chain management with real-time tracking and optimization.",
    tags: ["ERP", "Web"],
  },
];

const tagColors: Record<string, string> = {
  ERP: "bg-primary/10 text-primary border-primary/20",
  CRM: "bg-primary/10 text-primary border-primary/20",
  SaaS: "bg-primary/10 text-primary border-primary/20",
  "UI/UX": "bg-primary/10 text-primary border-primary/20",
  Web: "bg-primary/10 text-primary border-primary/20",
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Selected <span className="text-gradient-green">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A glimpse into the systems we've built for ambitious businesses.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover-glow"
            >
              {/* Gradient placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-muted to-secondary transition-all group-hover:from-primary/10 group-hover:to-muted" />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${tagColors[tag]}`}
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
