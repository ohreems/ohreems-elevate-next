import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";
import { Socials } from "@/components/site/Socials";
import { mainSocials } from "@/lib/socials";

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

type Status = "idle" | "loading" | "success" | "error";

// Web3Forms is a free, frontend-only form backend. Replace this access key
// with the one issued for letsconnect@ohreems.com at https://web3forms.com/
// (Access keys are public by design and safe to ship in the client bundle.)
const WEB3FORMS_ACCESS_KEY = "a63a50e4-1bd0-483e-bd0f-84571d94c268";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const startedAtRef = useRef<number>(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const honeypot = String(fd.get("company") || "");

    // Client-side validation
    if (!name || name.length > 100) {
      setStatus("error");
      setErrorMsg("Please enter a valid name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (message.length < 5 || message.length > 5000) {
      setStatus("error");
      setErrorMsg("Please write a slightly longer message.");
      return;
    }
    // Honeypot tripped — silently succeed
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }
    // Time-based bot guard
    if (Date.now() - startedAtRef.current < 2000) {
      setStatus("error");
      setErrorMsg("Please take a moment before submitting.");
      return;
    }

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject: subject || "New contact form submission",
        message,
        from_name: "Ohreems Website",
        replyto: email,
        // Web3Forms honeypot — submissions with this field set are ignored
        botcheck: "",
        // Custom subject line in the recipient inbox
        _subject: `[Ohreems] ${subject || "New contact form submission"}`,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to send message.");
      }
      setStatus("success");
      form.reset();
      startedAtRef.current = Date.now();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const loading = status === "loading";
  const success = status === "success";


  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — light luxury */}
      <section className="section-light relative overflow-hidden pt-28 pb-14 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:gap-16 md:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span>Contact Us</span>
            </div>
            <h1 className="mt-5 font-display text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-balance md:mt-6">
              Let's turn ideas <br className="hidden sm:block" />
              into <span className="text-gold">impact.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
              Have a question, challenge, or collaboration in mind? Fill out the form and our team will get back to you as soon as possible. We're excited to hear from you and help make your next step easier.
            </p>

            <div className="mt-8 space-y-6 md:mt-12">
              <div className="rounded-2xl glass p-5 md:p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-gold">Ready when you are</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fast, friendly replies within <span className="text-foreground">24 hours.</span> Whether you need a quote, feedback, or just want to say hello — sending one message is all it takes.
                </p>
              </div>
              <div>
            
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl glass-strong p-6 md:p-10 shadow-[0_30px_80px_-40px_oklch(0.18_0.04_265_/_0.25)]"
            >
              {/* Honeypot — visually hidden, off-screen, not announced as required */}
              <div aria-hidden="true" className="absolute -left-[10000px] top-0 h-0 w-0 overflow-hidden">
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required disabled={loading} autoComplete="name" placeholder="Enter your full name" />
                <Field label="Email" name="email" type="email" required disabled={loading} autoComplete="email" placeholder="Enter your email address" />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" disabled={loading} autoComplete="off" placeholder="How can we help?" />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  disabled={loading}
                  maxLength={5000}
                  placeholder="Tell us about your project or requirement"
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20 disabled:opacity-60"
                />
              </div>

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                >
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}
              {success && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-gold/30 bg-gold/[0.06] px-4 py-3 text-sm text-foreground"
                >
                  Thank you — your message is on its way. We'll reply within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={loading || success}
                className="btn-gold mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {loading && (
                  <span
                    aria-hidden="true"
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
                  />
                )}
                {loading ? "Sending…" : success ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  disabled,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={type === "email" ? 255 : 200}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20 disabled:opacity-60"
      />
    </div>
  );
}
