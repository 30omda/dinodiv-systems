import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
  useEffect(() => {
    document.title =
      "Privacy Policy — DinoDiv | Data Protection & Digital Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "DinoDiv privacy policy covering data protection, client information handling, digital services, and software consulting confidentiality practices."
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="mt-10 space-y-8 text-muted-foreground">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as your name,
                email address, company name, and project requirements when you
                contact us or engage our software consulting services. We also
                collect usage data through analytics to improve our digital
                services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is used to deliver and improve our services,
                communicate about project updates, provide technical support,
                and send relevant updates about our software development
                offerings. We never sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                3. Data Protection
              </h2>
              <p>
                We implement industry-standard security measures to protect
                client information, including encrypted data transmission,
                secure server infrastructure, and strict access controls. All
                project data is stored on encrypted, access-controlled servers.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                4. Client Information &amp; Project Data
              </h2>
              <p>
                All client project data, source code, and proprietary
                information shared during software consulting engagements is
                treated as strictly confidential. We do not share, distribute,
                or use client project data for any purpose beyond the agreed
                scope of work.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                5. Cookies &amp; Analytics
              </h2>
              <p>
                Our website may use cookies and analytics tools to understand
                visitor behavior and improve user experience. You can control
                cookie preferences through your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                6. Third-Party Services
              </h2>
              <p>
                We may use third-party services for hosting, analytics, and
                communication. These services have their own privacy policies,
                and we ensure they meet our data protection standards before
                integration.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                7. Data Retention
              </h2>
              <p>
                We retain client information for the duration of our business
                relationship and as required by applicable law. Upon request,
                we will delete personal data within 30 days, subject to legal
                obligations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                8. Contact
              </h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
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

export default Privacy;
