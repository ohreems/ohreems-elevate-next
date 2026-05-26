import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ohreems Group of Companies" },
      { name: "description", content: "Get in touch with Ohreems Group of Companies — let's turn ideas into impact. Our team responds within 24 hours." },
      { property: "og:title", content: "Contact — Ohreems Group of Companies" },
      { property: "og:description", content: "Let's turn ideas into impact. Reach out for collaboration, quotes, or just to say hello." },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — light luxury */}
      <section className="section-light relative overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span>Contact Us</span>
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-balance">
              Let's turn ideas <br className="hidden sm:block" />
              into <span className="text-gold">impact.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Have a question, challenge, or collaboration in mind? Fill out the form and our team will get back to you as soon as possible. We're excited to hear from you and help make your next step easier.
            </p>

            <div className="mt-12 space-y-6">
              <div className="rounded-2xl glass p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-gold">Ready when you are</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fast, friendly replies within <span className="text-foreground">24 hours.</span> Whether you need a quote, feedback, or just want to say hello — sending one message is all it takes.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl glass-strong p-8 md:p-10 shadow-[0_30px_80px_-40px_oklch(0.18_0.04_265_/_0.25)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <button
                type="submit"
                className="btn-gold mt-8 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em]"
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}
