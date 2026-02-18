import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "A top-tier software partner! Their ability to translate complex business requirements into a scalable and robust application is impressive. They don't just write code; they build real value.",
    name: "Andrei S. ",
    role: "CTO, NovaTech Industries",
    stars: 5,
  },
  {
    quote: "بصراحة التعامل مع الشركة كان إضافة قوية لينا. فريق فاهم شغله كويس جداً، وعندهم مرونة في تنفيذ الطلبات وسرعة في الرد. أهم حاجة عجبتنا هي الالتزام بالمواعيد والجودة اللي بتقدموها، فعلاً شركة محترفة وتستاهل الثقة.",
    name: "م. أحمد ممدوح",
    role: "CEO, ScalePoint",
    stars: 5,
  },
  {
    quote: "تعاملنا مع الشركة في أكثر من مشروع، وما وجدنا منهم إلا كل اتقان وتفاني. عندهم رؤية واضحة وحلول مبتكرة خدمت تطلعاتنا بالشكل المطلوب. نشكر القائمين على هذا الكيان للاحترافية العالية وروح التعاون المستمرة.",
    name: "أ. فيصل",
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
                {/* <p className="text-xs text-muted-foreground">{t.role}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
