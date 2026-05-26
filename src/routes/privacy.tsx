import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ohreems Group of Companies" },
      { name: "description", content: "How Ohreems Group of Companies collects, uses, and safeguards your personal information across our digital services and engagements." },
      { property: "og:title", content: "Privacy Policy — Ohreems Group of Companies" },
      { property: "og:description", content: "Our commitment to protecting your data and respecting your privacy." },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information We Collect",
    p: "We collect information you provide directly — such as your name, email address, company, and message contents when you contact us, request a quote, or subscribe to communications. We also collect limited technical information automatically, including device, browser, IP address, referring pages, and aggregated usage analytics to operate and improve our services.",
  },
  {
    h: "How We Use Information",
    p: "We use collected information to respond to inquiries, deliver and improve our services, secure our platforms, communicate updates relevant to engagements, and comply with legal obligations. We do not sell personal information to third parties.",
  },
  {
    h: "Cookies & Similar Technologies",
    p: "Our website uses essential cookies to operate core functionality and may use analytics cookies to understand visitor behavior in aggregate. You may control cookie preferences through your browser settings; disabling certain cookies may limit functionality.",
  },
  {
    h: "Data Security",
    p: "We apply industry-standard administrative, technical, and physical safeguards — including encryption in transit, access controls, audit logging, and routine security reviews — to protect personal information. No transmission method over the internet is fully secure, and we cannot guarantee absolute security.",
  },
  {
    h: "Third-Party Services",
    p: "We rely on trusted third-party providers for hosting, analytics, email delivery, and customer support tooling. These providers process limited information on our behalf under contractual safeguards and are not permitted to use it for their own purposes.",
  },
  {
    h: "Your Rights",
    p: "Subject to applicable law, you may request access to, correction of, or deletion of your personal information. To exercise any of these rights, please contact us using the details below. We will respond within the timeframes required by applicable regulation.",
  },
  {
    h: "Contact Information",
    p: "For questions or requests regarding this Privacy Policy or your personal information, please reach our team via the contact page. We will respond within 30 days of a verified request.",
  },
];

function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="section-light relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
        <div className="pointer-events-none absolute -left-32 top-10 h-[24rem] w-[24rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center reveal-up">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
            <span className="h-px w-10 bg-gold/60" /><span>Legal</span><span className="h-px w-10 bg-gold/60" />
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}. Your privacy matters — here's how we protect it.
          </p>
        </div>
      </section>

      <section className="section-light relative py-20 border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <article key={s.h} className="reveal-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-gold">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-px w-8 bg-gold/50" />
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.015em] md:text-3xl">{s.h}</h2>
                <p className="mt-5 text-[15px] leading-[1.85] text-muted-foreground text-pretty">{s.p}</p>
              </article>
            ))}

            <div className="mt-16 rounded-2xl glass p-8 text-center">
              <p className="text-sm text-muted-foreground">Questions about your data or this policy?</p>
              <Link to="/contact" className="btn-gold mt-5 inline-flex items-center rounded-full px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em]">
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
