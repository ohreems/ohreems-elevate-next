import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { WorkforceFooter } from "@/components/site/Sections";
// workforce logo lives in the navbar (brand="workforce")
import workforceBanner from "@/assets/workforce-banner.jpg";
import { useInViewReveal } from "@/hooks/use-in-view-reveal";

export const Route = createFileRoute("/business/workforce")({
  head: () => ({
    meta: [
      { title: "Ohreems Workforce Solutions — IT & Software Solutions" },
      { name: "description", content: "Custom software services and IT solutions tailored to your business — applications, platforms, and digital experiences engineered for global enterprise." },
      { property: "og:title", content: "Ohreems Workforce Solutions" },
      { property: "og:description", content: "Custom software, cloud, AI and managed delivery for modern enterprise." },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/business/workforce" },
    ],
    links: [{ rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/business/workforce" }],
  }),
  component: WorkforcePage,
});

const stats = [
  { v: "120+", k: "Projects Delivered" },
  { v: "98%", k: "Client Satisfaction" },
  { v: "8+", k: "Years of Expertise" },
  { v: "40+", k: "Expert Engineers" },
];

const processSteps = [
  { i: "01", tag: "Discover", title: "Collaborate", desc: "We begin with your goals, gather requirements, and align on a clear roadmap through stakeholder interviews and business analysis." },
  { i: "02", tag: "Strategy", title: "Strategic Roadmap", desc: "Our architects define a technical strategy — choosing the right stack and architecture to match your scale, budget, and timeline." },
  { i: "03", tag: "Build", title: "Build", desc: "We deliver components, integrations, and features in iterative two-week cycles to keep your team involved throughout." },
  { i: "04", tag: "Launch", title: "Improve", desc: "After launch we monitor, refine, and scale the solution as your needs evolve — with zero-downtime deployments." },
];

const services = [
  { icon: "🖥️", title: "Custom Software", desc: "From web and mobile applications to internal systems, we craft solutions that fit your requirements and deliver measurable value." },
  { icon: "📱", title: "Mobile & Web Apps", desc: "Modern user experiences across platforms — intuitive, high-performance apps that connect customers and teams." },
  { icon: "☁️", title: "Cloud Integration", desc: "We connect your software with cloud services and automation tools so your systems stay resilient and easy to manage." },
  { icon: "🔧", title: "Managed Delivery", desc: "Our team supports every stage of delivery with planning, testing, deployment, and ongoing improvement." },
  { icon: "🤖", title: "AI & ML Solutions", desc: "Intelligent automation, predictive analytics, and custom AI model integration to future-proof your product." },
  { icon: "🛡️", title: "Security & Compliance", desc: "End-to-end security audits, penetration testing, and secure-by-design engineering built into every pipeline." },
];

const stacks = [
  { name: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "React Native", "Flutter"] },
  { name: "Backend", items: ["Node.js", "Python", "Go", "Java / Spring", "NestJS", "FastAPI", "GraphQL", "REST APIs"] },
  { name: "Database & Storage", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Supabase", "Firebase"] },
  { name: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"] },
];

const whyUs = [
  { icon: "⚡", title: "Speed Without Shortcuts", desc: "Proven engineering systems and pre-built accelerators cut development time by 40% — without compromising on quality or architecture." },
  { icon: "🔭", title: "Radical Transparency", desc: "Live project dashboards, weekly video reports, and open repositories mean you always know exactly what's happening." },
  { icon: "🧠", title: "Domain-Driven Engineering", desc: "Our engineers become deeply embedded in your domain to build solutions that solve real business problems." },
  { icon: "🔒", title: "Security-First by Default", desc: "Every project ships with OWASP best practices, penetration testing, and compliance built into the pipeline." },
  { icon: "♾️", title: "Long-Term Partnership", desc: "Retainer teams provide ongoing maintenance, performance monitoring, and feature evolution as you scale." },
];

function WorkforcePage() {
  useInViewReveal();
  return (
    <main className="section-workforce relative min-h-screen text-foreground">
      <Navbar brand="workforce" />

      {/* Hero — corporate blue with cinematic banner */}
      <section className="relative isolate overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <img
            src={workforceBanner}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-[0.28] anim-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F8FF]/72 via-[#F4F8FF]/55 to-[#E6EEFB]" />
        </div>
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-15" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.55_0.18_252/0.25)] blur-[140px] gradient-drift" />
        <div className="pointer-events-none absolute -right-28 top-10 h-[24rem] w-[24rem] rounded-full bg-[oklch(0.7_0.12_240/0.22)] blur-[120px] gradient-drift" style={{ animationDelay: "-6s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center text-center reveal-up">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-wf-blue">
              <span className="h-px w-10 bg-[oklch(0.42_0.16_252)]/50" />
              <span>◆ IT & Software Solutions</span>
              <span className="h-px w-10 bg-[oklch(0.42_0.16_252)]/50" />
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-balance reveal-up-delay-1">
              Ohreems <span className="text-gradient-blue">Workforce</span> Solutions
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg reveal-up-delay-2">
              Delivering custom software services and IT solutions tailored to your business needs. We build applications, platforms, and digital experiences that help teams work smarter, grow faster, and stay competitive.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 reveal-up-delay-3">
              <Link to="/contact" className="btn-blue inline-flex items-center rounded-full px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] hover-lift-soft">
                Get in Touch
              </Link>
              <a href="#how-we-work" className="inline-flex items-center rounded-full border border-[oklch(0.42_0.16_252/0.35)] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-wf-blue transition-all duration-500 hover:border-[oklch(0.42_0.16_252)] hover:bg-[oklch(0.5_0.18_252/0.08)] hover:-translate-y-0.5">
                How We Work
              </a>
            </div>
          </div>


          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4 reveal-up-delay-3">
            {stats.map((s) => (
              <div key={s.k} className="bg-white/50 p-6 text-center md:text-left">
                <div className="font-display text-3xl text-wf-blue md:text-4xl">{s.v}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-we-work" className="relative overflow-hidden py-28 border-t border-[oklch(0.36_0.12_255/0.12)]">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Our Process" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">How We Work</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We combine collaboration, agile delivery, and quality engineering to ensure every project launches on time and meets your business goals.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.i} className="group in-view-reveal rounded-2xl glass p-7 transition duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_oklch(0.3_0.12_255_/_0.35)]">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-wf-blue">
                  <span>{p.i}</span><span>/ {p.tag}</span>
                </div>
                <div className="mt-5 font-display text-xl text-foreground">{p.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.36_0.12_255/0.12)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Services" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">What We Do</h2>
            <Link to="/contact" className="text-sm uppercase tracking-[0.22em] text-wf-blue hover:opacity-80 transition">
              Explore All Services →
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Full-spectrum software engineering — from a founding MVP to enterprise-grade platforms, we cover every layer of the stack.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group in-view-reveal rounded-2xl glass p-7 transition duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_oklch(0.3_0.12_255_/_0.35)]">
                <div className="text-3xl">{s.icon}</div>
                <div className="mt-5 font-display text-lg text-foreground">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.36_0.12_255/0.12)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Technology" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">Our Tech Stack</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We use modern frameworks and DevOps tools to build fast, reliable, and maintainable solutions.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stacks.map((g) => (
              <div key={g.name} className="in-view-reveal rounded-2xl glass p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-wf-blue">{g.name}</div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i} className="rounded-full border border-[oklch(0.42_0.16_252/0.25)] bg-white/70 px-3 py-1.5 text-xs text-foreground/80">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.36_0.12_255/0.12)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Eyebrow text="Why Us" />
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            Why Smart Teams <span className="text-gradient-blue">Choose Us</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We combine technical expertise with a practical, client-first approach so your project stays focused, efficient, and future-ready.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="in-view-reveal rounded-2xl glass p-7 transition duration-700 hover:-translate-y-1">
                <div className="text-3xl">{w.icon}</div>
                <div className="mt-5 font-display text-lg text-foreground">{w.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 border-t border-[oklch(0.36_0.12_255/0.12)]">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <Eyebrow text="Ready to Build?" center />
          <h2 className="mt-6 font-display text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
            Ready to Build Your <span className="text-gradient-blue">Next Project?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Contact Ohreems Workforce Solutions to discuss your software vision and start a smarter development journey.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="btn-blue inline-flex items-center rounded-full px-10 py-4 text-[13px] font-medium uppercase tracking-[0.18em]">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <WorkforceFooter />
    </main>
  );
}

function Eyebrow({ text, center }: { text: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-wf-blue ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-[oklch(0.42_0.16_252)]/50" />
      <span>{text}</span>
    </div>
  );
}
