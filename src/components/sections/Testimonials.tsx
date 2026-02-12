import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "DinoDiv transformed our entire HR workflow into a seamless digital platform. Their understanding of enterprise systems is unmatched.",
    name: "Sarah Chen",
    role: "CTO, NovaTech Industries",
    stars: 5,
  },
  {
    quote: "The SaaS platform they built handles 50k+ daily users flawlessly. Clean architecture, incredible performance, and a team that truly cares.",
    name: "Marcus Andersen",
    role: "CEO, ScalePoint",
    stars: 5,
  },
  {
    quote: "From wireframes to deployment, DinoDiv delivered a CRM that our sales team actually loves using. That's rare.",
    name: "Lina Torres",
    role: "VP of Sales, BrightEdge",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-radial-green opacity-30" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our <span className="text-gradient-green">Clients</span> Say
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            We build long-term partnerships, not just software.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-8 transition-all hover-glow"
            >
              <div>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
