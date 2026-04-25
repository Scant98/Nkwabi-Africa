"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: MapPin, title: "Headquarters", lines: ["Kahama, Shinyanga", "Tanzania"] },
  { icon: Phone, title: "Phone", lines: ["+255 747 555 542"] },
  { icon: Mail, title: "Email", lines: ["info@nkwabiafrica.co.tz", "trade@nkwabiafrica.co.tz"] },
  { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 1:00 PM"] },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setSendError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_company: data.company ?? "",
          from_email: data.email,
          from_phone: data.phone ?? "",
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Failed to send your message. Please try again or email us directly at info@nkwabiafrica.co.tz");
    }
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-28 bg-background-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Let&apos;s Start a{" "}
              <span className="text-gold-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you&apos;re looking to buy gold, source coffee, arrange logistics, or explore a business partnership — our team is ready to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollRevealWrapper direction="left">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="mb-1.5 block">Full Name *</Label>
                      <Input id="name" placeholder="John Kamau" {...register("name")} className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company" className="mb-1.5 block">Company</Label>
                      <Input id="company" placeholder="Your Company Ltd" {...register("company")} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email" className="mb-1.5 block">Email *</Label>
                      <Input id="email" type="email" placeholder="you@company.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-1.5 block">Phone</Label>
                      <Input id="phone" placeholder="+255 700 000 000" {...register("phone")} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="mb-1.5 block">Subject *</Label>
                    <Input id="subject" placeholder="Gold trading inquiry, Coffee sourcing, etc." {...register("subject")} className={errors.subject ? "border-destructive" : ""} />
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-1.5 block">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={6} {...register("message")} className={errors.message ? "border-destructive" : ""} />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:opacity-90 gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {sendError && (
                    <p className="text-destructive text-sm text-center">{sendError}</p>
                  )}
                </form>
              )}
            </ScrollRevealWrapper>

            {/* Contact Info */}
            <ScrollRevealWrapper direction="right" delay={0.1}>
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{info.title}</p>
                      {info.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-bold text-foreground mb-3">Our Locations</h4>
                <div className="space-y-2">
                  {[
                    "Kahama, Shinyanga — Headquarters",
                    "Dar es Salaam — Export & Trade Office",
                    "Geita — Mining Operations",
                    "Mwanza — Regional Hub",
                  ].map((loc) => (
                    <div key={loc} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
