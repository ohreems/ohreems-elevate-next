import tech from "@/assets/division-tech.jpg";
import green from "@/assets/division-greencell.jpg";
import globe from "@/assets/global-map.jpg";
import workforceLogo from "@/assets/workforce-logo-original.svg";
import greencellLogo from "@/assets/greencell-logo-original.svg";

function SectionLabel({ eyebrow, title, kicker, index }: { eyebrow: string; title: string; kicker?: string; index?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.36em] text-gold">
        <span className="h-px w-10 bg-gold/60" />
        {index && <span className="text-gold/60">{index}</span>}
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-balance">
        {title}
      </h2>
      {kicker && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">{kicker}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-light relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel
            eyebrow="About Ohreems"
            title="A multi-sector group built on vision, integrity and innovation."
          />
        </div>
        <div className="space-y-8 lg:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ohreems operates at the intersection of <span className="text-foreground">technological innovation</span> and{" "}
            <span className="text-foreground">sustainable practice</span>. Across two flagship divisions, the group
            delivers enterprise-grade IT solutions and pioneering battery recycling — engineered to transform how
            businesses scale and how the planet recovers.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass">
            {[
              { k: "Innovation", v: "Cutting-edge technologies that solve real-world enterprise challenges." },
              { k: "Sustainability", v: "Environmental responsibility at the heart of every operation." },
              { k: "Excellence", v: "The highest standards in delivery, engineering and outcomes." },
              { k: "Partnership", v: "Long-term relationships built on trust and mutual success." },
            ].map((p) => (
              <div key={p.k} className="group bg-background/40 p-6 transition-colors hover:bg-background/60">
                <div className="font-display text-lg text-gold">{p.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Division = {
  tag: string;
  index: string;
  name: string;
  lede: string;
  desc: string;
  img: string;
  href: string;
  capabilities: string[];
  stats: { k: string; v: string }[];
  theme: "tech" | "green";
};

const divisions: Division[] = [
  {
    tag: "Technology Division",
    index: "01",
    name: "Ohreems Workforce",
    lede: "Engineering the digital backbone of modern enterprise.",
    desc: "Cutting-edge software development, cloud architecture, digital transformation and IT consulting — purpose-built to help global enterprises scale with confidence.",
    img: tech,
    href: "/business/workforce",
    capabilities: ["Software Engineering", "Cloud & DevOps", "Digital Transformation", "AI & Data", "IT Consulting"],
    stats: [{ k: "Cloud", v: "Native" }, { k: "24/7", v: "SLA" }, { k: "Ent.", v: "Grade" }],
    theme: "tech",
  },
  {
    tag: "Sustainability Division",
    index: "02",
    name: "Ohreems Greencell",
    lede: "Closing the loop on the materials that power tomorrow.",
    desc: "Sustainable battery recycling — safely processing and recovering valuable materials to reduce waste and accelerate a global circular economy.",
    img: green,
    href: "/business/greencell",
    capabilities: ["Battery Recycling", "Material Recovery", "Circular Supply", "Safety & Compliance", "ESG Advisory"],
    stats: [{ k: "Zero", v: "Waste" }, { k: "Closed", v: "Loop" }, { k: "ESG", v: "Aligned" }],
    theme: "green",
  },
];

function DivisionCard({ d, reverse }: { d: Division; reverse: boolean }) {
  const isTech = d.theme === "tech";
  return (
    <article className="group relative">
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-70 ${
          isTech ? "bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.5_0.18_240_/_0.45),transparent_60%)]" : "bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.6_0.14_180_/_0.35),transparent_60%)]"
        }`}
      />

      <div
        className={`relative grid gap-0 overflow-hidden rounded-[2rem] glass-strong shadow-luxe lg:grid-cols-12 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        {/* Visual */}
        <div className="relative lg:col-span-7">
          <img
            src={d.img}
            alt={d.name}
            loading="lazy"
            width={1280}
            height={896}
            className="h-full max-h-[620px] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
          />
          {/* Theme overlay */}
          {isTech ? (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[oklch(0.18_0.12_250_/_0.85)] via-[oklch(0.3_0.18_240_/_0.35)] to-transparent" />
              <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50 mix-blend-screen" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan/30 blur-[120px]" />
              <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full border border-cyan/40" />
              <div className="pointer-events-none absolute right-16 top-16 h-28 w-28 rounded-full border border-cyan/20" />
            </>
          ) : (
            <>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[oklch(0.22_0.06_200_/_0.85)] via-[oklch(0.45_0.12_180_/_0.25)] to-transparent" />
              <div className="pointer-events-none absolute -top-24 -right-10 h-80 w-80 rounded-full bg-teal/25 blur-[130px]" />
              <div className="pointer-events-none absolute bottom-8 left-8 h-px w-40 bg-gradient-to-r from-teal/60 to-transparent" />
            </>
          )}
          {/* Floating index badge */}
          <div className="absolute left-7 top-7 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-background/60 backdrop-blur ring-1 ring-gold/40 font-display text-sm text-gold">
              {d.index}
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/70">{d.tag}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-between gap-8 p-8 lg:col-span-5 lg:p-12">
          <div>
            <div className={`text-xs uppercase tracking-[0.3em] ${isTech ? "text-cyan" : "text-teal"}`}>{d.lede}</div>
            <h3 className="mt-5 font-display text-[clamp(1.75rem,2.6vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              {d.name}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">{d.desc}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {d.capabilities.map((c) => (
              <li
                key={c}
                className={`rounded-full border px-3 py-1 text-[11px] tracking-wide ${
                  isTech ? "border-cyan/30 text-cyan/90 bg-cyan/5" : "border-teal/30 text-teal/90 bg-teal/5"
                }`}
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="flex items-end justify-between gap-6 border-t border-border pt-6">
            <div className="grid grid-cols-3 gap-6">
              {d.stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-lg text-foreground">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
            <a
              href={d.href}
              className="btn-ghost-gold inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Enter <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Divisions() {
  return (
    <section id="divisions" className="section-light relative py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel
              eyebrow="Our Ecosystem"
              index="II"
              title="Two divisions. One enterprise vision."
              kicker="Ohreems operates across two strategic horizons — fusing technological innovation with sustainable practice to engineer outcomes that compound for decades."
            />
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="rounded-2xl glass p-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-gold">Group Architecture</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A holding group structure designed for long-term stewardship, with autonomous divisions sharing a single standard of craft.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {divisions.map((d, i) => (
            <DivisionCard key={d.name} d={d} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { t: "Software Development", d: "Custom enterprise platforms engineered for scale, security and longevity." },
  { t: "Digital Transformation", d: "End-to-end modernization of operations, products and customer journeys." },
  { t: "Cloud Services", d: "Architect, migrate and operate resilient cloud-native infrastructure." },
  { t: "IT Consulting", d: "Strategic advisory that turns technology into measurable business advantage." },
  { t: "Battery Recycling", d: "Closed-loop recovery of valuable materials with industry-leading safety." },
  { t: "Sustainability Advisory", d: "Programs that align growth with environmental responsibility." },
];

export function Services() {
  return (
    <section id="services" className="section-light relative overflow-hidden py-32">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-royal/20 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          eyebrow="What We Do"
          title="Enterprise-grade services across two horizons."
          kicker="From digital transformation to sustainable recovery — a unified portfolio engineered for the next decade of business."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl glass md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="group relative bg-background/40 p-8 transition-colors hover:bg-background/70">
              <div className="font-display text-sm text-gold/70">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  const items = [
    "Financial Services", "Healthcare", "Manufacturing", "Energy & Utilities",
    "Retail & E-commerce", "Logistics", "Telecommunications", "Public Sector",
    "Education", "Sustainability", "Automotive", "Hospitality",
  ];
  return (
    <section id="industries" className="section-light relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel eyebrow="Industries Served" title="Trusted across the global enterprise landscape." />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3">
              {items.map((i) => (
                <li key={i} className="bg-background/40 px-5 py-6 text-sm text-muted-foreground transition-colors hover:bg-background/70 hover:text-foreground">
                  <span className="mr-2 text-gold">◆</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const rows = [
    { k: "01", t: "Visionary Leadership", d: "An executive team building enterprise outcomes that compound over decades." },
    { k: "02", t: "Engineering Excellence", d: "Production-grade systems delivered with discipline, security and craft." },
    { k: "03", t: "Sustainable by Design", d: "Every initiative measured against environmental and social impact." },
    { k: "04", t: "Long-Term Partnership", d: "We invest in relationships — not transactions — to scale shared success." },
  ];
  return (
    <section className="section-light relative overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Why Choose Us" title="A holding group engineered for the enterprises of tomorrow." />
        <div className="mt-16 divide-y divide-border overflow-hidden rounded-3xl glass">
          {rows.map((r) => (
            <div key={r.k} className="group grid items-center gap-6 px-8 py-8 transition-colors hover:bg-background/40 md:grid-cols-12">
              <div className="font-display text-2xl text-gold md:col-span-1">{r.k}</div>
              <h3 className="font-display text-xl md:col-span-3">{r.t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-7">{r.d}</p>
              <div className="md:col-span-1 md:text-right">
                <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Innovation() {
  const milestones = [
    { y: "Foundation", t: "A vision is born", d: "Ohreems is founded on a mission to fuse innovation with sustainability." },
    { y: "Workforce", t: "Technology division launches", d: "IT, cloud and digital transformation services scale across enterprises." },
    { y: "Greencell", t: "Sustainability division launches", d: "Battery recycling operations open — closing the materials loop." },
    { y: "Tomorrow", t: "A global enterprise group", d: "Building tomorrow's solutions today, across every sector we touch." },
  ];
  return (
    <section className="section-light relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          eyebrow="Innovation & Vision"
          title="Building the infrastructure of what comes next."
          kicker="A clear arc from founding vision to global enterprise impact — anchored in technology and sustainability."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <li key={m.t} className="relative rounded-2xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-xs text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-gold">{m.y}</span>
              </div>
              <h3 className="mt-5 font-display text-xl">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Global() {
  return (
    <section id="global" className="relative overflow-hidden py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionLabel
            eyebrow="Global Presence"
            title="An enterprise reach. A local commitment."
            kicker="From flagship operations to forward-deployed teams, Ohreems is engineered to deliver wherever ambition takes our partners."
          />
          <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl glass">
            {[
              { k: "2", v: "Divisions" },
              { k: "6+", v: "Industries" },
              { k: "24/7", v: "Operations" },
            ].map((s) => (
              <div key={s.v} className="bg-background/40 px-5 py-6">
                <div className="font-display text-2xl text-gradient-gold">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl glass">
            <img src={globe} alt="Global presence" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover opacity-90" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gold/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "Ohreems delivered our digital transformation with the precision of a global enterprise partner.", a: "Director of Technology", c: "Enterprise Client" },
    { q: "Their commitment to sustainable practice is matched only by the quality of their engineering.", a: "Head of Operations", c: "Industrial Group" },
    { q: "A genuine long-term partner — not a vendor. That distinction has compounded for us.", a: "Chief Executive", c: "Healthcare Sector" },
  ];
  return (
    <section className="section-light relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel eyebrow="Clients & Testimonials" title="Trusted by leaders building what's next." />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="flex h-full flex-col justify-between rounded-2xl glass p-8">
              <div className="text-3xl leading-none text-gold/70">"</div>
              <blockquote className="mt-2 text-base leading-relaxed text-foreground">{t.q}</blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-sm">
                <div className="font-medium text-foreground">{t.a}</div>
                <div className="text-muted-foreground">{t.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="section-light relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel eyebrow="Leadership & Culture" title="An enterprise culture built around stewardship." />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ohreems is led by operators and engineers who believe enterprise growth and planetary health are
              inseparable. Our culture rewards craft, candor and the patience to build systems that outlast quarters.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl glass sm:grid-cols-3">
              {[
                { k: "Stewardship", v: "We hold capital, talent and resources in trust." },
                { k: "Craft", v: "Every detail engineered with intention." },
                { k: "Candor", v: "Honest dialogue, internally and with partners." },
              ].map((p) => (
                <div key={p.k} className="bg-background/40 p-6">
                  <div className="font-display text-base text-gold">{p.k}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 shadow-luxe">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-royal/30 blur-[120px]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-[0.28em] text-gold">Let's Connect</div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Ready to <span className="text-gradient-gold">work with us?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Let's discuss how Ohreems can help transform your business with our innovative IT solutions
                and sustainable practices.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
              <a href="/contact" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
                Get in Touch →
              </a>
              <a href="#divisions" className="btn-ghost-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
                Our Divisions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      {/* Premium ambient gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-royal/15 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[40rem] rounded-full bg-gold/8 blur-[180px]" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:pt-36">
        {/* Brand row */}
        <div className="grid gap-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[10px] font-light uppercase tracking-[0.46em] text-gold/85">
              <span className="h-px w-12 bg-gold/45" /> The Ohreems Ecosystem
            </div>
            <div className="mt-10 font-display text-5xl font-extralight tracking-[-0.03em] md:text-6xl">
              <span className="text-foreground/95">Oh</span>
              <span className="text-sheen-gold">reems</span>
            </div>
            <p className="mt-10 max-w-md text-[13.5px] font-light leading-[1.95] text-muted-foreground/95 text-pretty">
              Innovating tomorrow's solutions today — a multi-sector enterprise group
              fusing technological innovation with sustainable practice across
              two flagship divisions.
            </p>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 text-[10px] font-light uppercase tracking-[0.4em] text-gold/85">
              <span className="h-1.5 w-1.5 rounded-full bg-gold anim-pulse-gold" />
              Innovate · Integrate · Impact
            </div>
          </div>

          {/* Divisions block */}
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl glass sm:grid-cols-2">
              {[
                {
                  tag: "Division 01",
                  name: "Ohreems Workforce",
                  desc: "Enterprise IT, cloud and digital transformation.",
                  href: "/business/workforce",
                  accent: "text-cyan",
                },
                {
                  tag: "Division 02",
                  name: "Ohreems Greencell",
                  desc: "Sustainable battery recycling & circular materials.",
                  href: "/business/greencell",
                  accent: "text-teal",
                },
              ].map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  className="group relative bg-background/40 p-8 transition-colors duration-700 hover:bg-background/65"
                >
                  <div className={`text-[10px] font-light uppercase tracking-[0.36em] ${d.accent}`}>{d.tag}</div>
                  <div className="mt-4 font-display text-xl font-light tracking-tight text-foreground">{d.name}</div>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground/90">{d.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold/90 transition-transform duration-700 group-hover:translate-x-1">
                    Visit Division <span aria-hidden>→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="mt-28 grid gap-16 border-t border-border/40 pt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-[10px] font-light uppercase tracking-[0.4em] text-gold/85">Group</div>
            <ul className="mt-8 space-y-5 text-[13px] font-light text-muted-foreground/90">
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#about">About Ohreems</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#divisions">Our Divisions</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#global">Global Presence</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-light uppercase tracking-[0.4em] text-gold/85">Capabilities</div>
            <ul className="mt-8 space-y-5 text-[13px] font-light text-muted-foreground/90">
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#services">Services</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#industries">Industries</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="#about">Innovation</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-light uppercase tracking-[0.4em] text-gold/85">Engage</div>
            <ul className="mt-8 space-y-5 text-[13px] font-light text-muted-foreground/90">
              <li><a className="transition-colors duration-700 hover:text-foreground" href="/contact">Contact Group</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="/contact">Partnerships</a></li>
              <li><a className="transition-colors duration-700 hover:text-foreground" href="/contact">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-light uppercase tracking-[0.4em] text-gold/85">Headquarters</div>
            <ul className="mt-8 space-y-5 text-[13px] font-light text-muted-foreground/90">
              <li><a className="transition-colors duration-700 hover:text-foreground" href="https://ohreems.com/">ohreems.com</a></li>
              <li className="text-muted-foreground/60">Global Operations · 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-[10px] font-light uppercase tracking-[0.36em] text-muted-foreground/75 md:flex-row md:items-center">
          <div>© {year} Ohreems Group of Companies — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="text-gold/75 transition-colors duration-700 hover:text-gold" href="/privacy">Privacy</a>
            <span className="h-3 w-px bg-border/60" />
            <a className="text-gold/75 transition-colors duration-700 hover:text-gold" href="/terms">Terms</a>
            <span className="h-3 w-px bg-border/60" />
            <a className="text-gold/75 transition-colors duration-700 hover:text-gold" href="/contact">ESG Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ====================================================================
   Brand-specific footers — Workforce (corporate blue) & Greencell (eco)
   ==================================================================== */



export function WorkforceFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-workforce relative overflow-hidden border-t border-[oklch(0.36_0.12_255/0.18)]">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[oklch(0.55_0.18_252/0.18)] blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={workforceLogo} alt="Ohreems Workforce" width={220} height={140} className="h-auto w-[200px]" />
            <p className="mt-8 max-w-md text-[13.5px] font-light leading-[1.95] text-muted-foreground">
              Ohreems Workforce Solutions — custom software, cloud, AI and managed delivery
              engineered for global enterprise. A division of the Ohreems Group.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[oklch(0.42_0.16_252/0.3)] bg-white/60 px-5 py-2 text-[10px] font-light uppercase tracking-[0.36em] text-wf-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.5_0.18_252)]" />
              Engineering · Cloud · AI
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3">
            <FooterCol title="Solutions" accent="wf" items={[
              { l: "Custom Software", h: "/business/workforce" },
              { l: "Cloud & DevOps", h: "/business/workforce" },
              { l: "AI & ML", h: "/business/workforce" },
              { l: "Security", h: "/business/workforce" },
            ]} />
            <FooterCol title="Group" accent="wf" items={[
              { l: "Ohreems", h: "/" },
              { l: "Greencell", h: "/business/greencell" },
              { l: "About", h: "/#about" },
            ]} />
            <FooterCol title="Contact" accent="wf" items={[
              { l: "Get in Touch", h: "/contact" },
              { l: "Careers", h: "/contact" },
              { l: "Partnerships", h: "/contact" },
            ]} />
          </div>
        </div>
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.42_0.16_252/0.3)] to-transparent" />
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-[10px] font-light uppercase tracking-[0.32em] text-muted-foreground md:flex-row md:items-center">
          <div>© {year} Ohreems Workforce Solutions — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="text-wf-blue hover:opacity-80" href="/privacy">Privacy</a>
            <a className="text-wf-blue hover:opacity-80" href="/terms">Terms</a>
            <a className="text-wf-blue hover:opacity-80" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function GreencellFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-greencell relative overflow-hidden border-t border-[oklch(0.55_0.14_152/0.2)]">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[oklch(0.7_0.16_152/0.2)] blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 md:pt-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={greencellLogo} alt="Ohreems Greencell Tech" width={220} height={140} className="h-auto w-[200px]" />
            <p className="mt-8 max-w-md text-[13.5px] font-light leading-[1.95] text-muted-foreground">
              Ohreems Green-Cell Technologies — closing the loop on clean energy through advanced
              lithium-ion battery recycling and critical metal recovery.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[oklch(0.5_0.16_152/0.3)] bg-white/60 px-5 py-2 text-[10px] font-light uppercase tracking-[0.36em] text-green-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.18_152)]" />
              Recycle · Recover · Renew
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3">
            <FooterCol title="Capabilities" accent="green" items={[
              { l: "Battery Recycling", h: "/business/greencell" },
              { l: "Material Recovery", h: "/business/greencell" },
              { l: "Circular Supply", h: "/business/greencell" },
              { l: "ESG Advisory", h: "/business/greencell" },
            ]} />
            <FooterCol title="Group" accent="green" items={[
              { l: "Ohreems", h: "/" },
              { l: "Workforce", h: "/business/workforce" },
              { l: "About", h: "/#about" },
            ]} />
            <FooterCol title="Engage" accent="green" items={[
              { l: "Partner with us", h: "/contact" },
              { l: "Careers", h: "/contact" },
              { l: "Sustainability", h: "/contact" },
            ]} />
          </div>
        </div>
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[oklch(0.5_0.16_152/0.3)] to-transparent" />
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-[10px] font-light uppercase tracking-[0.32em] text-muted-foreground md:flex-row md:items-center">
          <div>© {year} Ohreems Greencell Tech — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="text-green-accent hover:opacity-80" href="/privacy">Privacy</a>
            <a className="text-green-accent hover:opacity-80" href="/terms">Terms</a>
            <a className="text-green-accent hover:opacity-80" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, accent }: { title: string; items: { l: string; h: string }[]; accent: "wf" | "green" }) {
  const accentClass = accent === "wf" ? "text-wf-blue" : "text-green-accent";
  return (
    <div>
      <div className={`text-[10px] font-light uppercase tracking-[0.36em] ${accentClass}`}>{title}</div>
      <ul className="mt-6 space-y-4 text-[13px] font-light text-muted-foreground">
        {items.map((i) => (
          <li key={i.l}>
            <a className="transition-colors duration-500 hover:text-foreground" href={i.h}>{i.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

