import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
  useEffect(() => {
    document.title =
      "Terms & Conditions — DinoDiv | Software Development Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Terms and conditions for DinoDiv software development services including ERP development, CRM systems, SaaS platforms, and enterprise web solutions."
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-3xl px-6 py-24">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose-invert prose prose-sm max-w-none"
        >
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="mt-10 space-y-8 text-muted-foreground">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                1. Introduction
              </h2>
              <p>
                Welcome to DinoDiv. These Terms and Conditions govern your use
                of our software development services, including but not limited
                to ERP development, CRM systems, SaaS platforms, and enterprise
                web solutions. By engaging our services, you agree to these
                terms in full.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                2. Services
              </h2>
              <p>
                DinoDiv provides custom software development, UI/UX design,
                system architecture consulting, and ongoing maintenance. All
                deliverables, timelines, and specifications are defined in
                individual project agreements between DinoDiv and the client.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                3. Intellectual Property
              </h2>
              <p>
                Upon full payment, clients receive ownership of all custom code
                and deliverables produced specifically for their project.
                DinoDiv retains the right to use general methodologies,
                frameworks, and non-proprietary components developed during
                the engagement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                4. Payment Terms
              </h2>
              <p>
                Payment schedules are outlined in individual project proposals.
                Invoices are due within 14 business days unless otherwise
                agreed. Late payments may incur additional charges and may
                result in project delays.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                5. Confidentiality
              </h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary
                information shared during the course of the engagement. This
                obligation survives the termination of any project agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                6. Limitation of Liability
              </h2>
              <p>
                DinoDiv shall not be liable for indirect, incidental, or
                consequential damages arising from the use of our software
                solutions. Our total liability shall not exceed the fees paid
                for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                7. Termination
              </h2>
              <p>
                Either party may terminate a project agreement with 30 days
                written notice. Upon termination, the client is responsible for
                payment of all work completed up to the termination date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                8. Contact
              </h2>
              <p>
                For questions regarding these terms, contact us at{" "}
                <a
                  href="mailto:dinodiv.info@gmail.com"
                  className="text-primary hover:underline"
                >
                  dinodiv.info@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
};

export default Terms;
