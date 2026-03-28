"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import { Loader2 } from "lucide-react";
import { sileo } from "sileo";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MessageCircle, Calendar, Loader2 } from "lucide-react";
import dinoLogo from "@/assets/dino-logo-dark.png";

const Contact = () => {

  const [state, handleSubmit] = useForm("maqdbegw");

  useEffect(() => {
    if (state.succeeded) {
      sileo.success({
        title: "Message Sent Successfully",
        position: "top-right",
        duration: 4000,
        icon: (
          <img 
            src={dinoLogo} 
            alt="DinoDiv Logo" 
            className="h-20 w-20 object-contain"
          />
        ),
        description: (
          <span className="font-medium text-black">
            Your message has been received. DinoDiv team will contact you as soon as possible.🎉
          </span>
        ),
        fill: "#92e701",
        styles: {
          title: "text-black! font-semibold!",
          description: "text-black!",
          badge: "bg-black!",
        },
        roundness: 8,
      });
    }
  }, [state.succeeded]);

  return (

    <section id="contact" className="relative py-24 lg:py-32">

      <div className="container mx-auto px-6">


        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">

            Get In <span className="text-gradient-green">Touch</span>

          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">

            Tell us about your project and let DinoDiv build something powerful.

          </p>

        </motion.div>



        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">


          {/* FORM */}

          <motion.form

            onSubmit={handleSubmit}

            className="space-y-5 lg:col-span-3"

            initial={{ opacity: 0, x: -30 }}

            whileInView={{ opacity: 1, x: 0 }}

          >


            {/* Name + Email Grid */}

            <div className="grid gap-5 sm:grid-cols-2">


              <div className="space-y-2">

                <Label htmlFor="contact-name">Your Name</Label>

                <input

                  id="contact-name"

                  type="text"

                  name="name"

                  placeholder="Your Name"

                  required

                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"

                />

              </div>



              <div className="space-y-2">

                <Label htmlFor="contact-email">Email Address</Label>

                <input

                  id="contact-email"

                  type="email"

                  name="email"

                  placeholder="Email Address"

                  required

                  aria-invalid={state.errors?.some(error => error.field === "email") ? "true" : "false"}

                  aria-describedby="contact-email-error"

                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"

                />

                <div id="contact-email-error">

                  <ValidationError

                    prefix="Email"

                    field="email"

                    errors={state.errors}

                    className="mt-1 text-xs text-destructive"

                  />

                </div>

              </div>


            </div>



            {/* Company */}

            <div className="space-y-2">

              <Label htmlFor="contact-company">Company Name</Label>

              <input

                id="contact-company"

                type="text"

                name="company"

                placeholder="Company Name"

                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"

              />

            </div>



            {/* Message */}

            <div className="space-y-2">

              <Label htmlFor="contact-message">Message</Label>

              <textarea

                id="contact-message"

                name="message"

                placeholder="Tell us about your project..."

                rows={5}

                required

                aria-invalid={state.errors?.some(error => error.field === "message") ? "true" : "false"}

                aria-describedby="contact-message-error"

                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"

              />

              <div id="contact-message-error">

                <ValidationError

                  prefix="Message"

                  field="message"

                  errors={state.errors}

                  className="mt-1 text-xs text-destructive"

                />

              </div>

            </div>



            {/* Success */}

            {state.succeeded && (

              <p className="text-sm font-medium text-green-500">

                ✅ Thank you! We'll contact you shortly.

              </p>

            )}



            {/* Submit Button */}

            <Button

              variant="hero"

              size="lg"

              type="submit"

              disabled={state.submitting}

              className="w-full sm:w-auto"

            >

              {state.submitting ? (

                <>

                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                  Sending...

                </>

              ) : (

                "Send Message"

              )}

            </Button>



          </motion.form>


          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href="mailto:contact@dinodiv.info"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  contact@dinodiv.info
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">WhatsApp</p>
                <div className="flex flex-wrap gap-x-2 text-sm text-muted-foreground">
                  <a
                    href="https://wa.me/201028661605"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    +201028661605
                  </a>
                  <span>/</span>
                  <a
                    href="https://wa.me/201125011939"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    +201125011939
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm font-medium">Book a Meeting</p>
                <a
                  href="https://cal.com/diodiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Let's Talk →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>

  );

};

export default Contact;
