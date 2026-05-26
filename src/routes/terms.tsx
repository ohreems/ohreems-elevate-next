import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Ohreems Group of Companies" },
      { name: "description", content: "The terms that govern your use of Ohreems Group of Companies websites, services, and engagements." },
      { property: "og:title", content: "Terms & Conditions — Ohreems Group of Companies" },
      { property: "og:description", content: "Terms governing the use of our websites and services." },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Website Usage",
    p: "By accessing or using ohreems.com and related properties, you agree to comply with these Terms and all applicable laws. You may browse the site for lawful, informational, and commercial-inquiry purposes only. We reserve the right to suspend or restrict access at our discretion, with or without notice.",
  },
  {
    h: "Intellectual Property",
    p: "All content on this website — including text, graphics, logos, icons, code, and the Ohreems name and emblems — is the property of Ohreems Group of Companies or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written permission.",
  },
  {
    h: "User Responsibilities",
    p: "You agree not to misuse the website by introducing malware, attempting unauthorized access, scraping at scale, or interfering with normal operation. Any information you submit must be accurate and lawful. You are responsible for maintaining the confidentiality of any credentials issued for engagements.",
  },
  {
    h: "Liability Limitation",
    p: "The website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind, express or implied. To the maximum extent permitted by law, Ohreems Group of Companies shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the site or any linked resource.",
  },
  {
    h: "Third-Party Links",
    p: "Our website may contain links to third-party websites or services not owned or controlled by Ohreems. We do not endorse and are not responsible for the content, privacy practices, or terms of any third-party site. Accessing third-party links is at your own risk.",
  },
  {
    h: "Privacy Reference",
    p: (
      <>
        Your use of the website is also governed by our{" "}
        <Link to="/privacy" className="text-gold underline-offset-2 hover:underline">Privacy Policy</Link>, which describes how we collect, use, and safeguard information. By using the site you acknowledge that you have reviewed our privacy practices.
      </>
    ),
  },
  {
    h: "Changes to These Terms",
    p: "We may update these Terms from time to time. The most current version will always be posted on this page with an updated revision date. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
  },
  {
    h: "Contact Information",
    p: "For questions about these Terms, please reach out through our contact page. Our team will respond promptly to all reasonable inquiries.",
  },
];

function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="section-light relative overflow-hidden pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[24rem] w-[24rem] rounded-full bg-royal/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center reveal-up">
          <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
            <span className="h-px w-10 bg-gold/60" /><span>Legal</span><span className="h-px w-10 bg-gold/60" />
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            Terms & <span className="text-gold">Conditions</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}. Please read these terms carefully before using our services.
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
              <p className="text-sm text-muted-foreground">Need clarification on any of these terms?</p>
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
