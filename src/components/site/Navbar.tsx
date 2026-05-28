import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import ringLogo from "@/assets/o_logo.svg";
import workforceLogo from "@/assets/workforce-logo-original.svg";
import greencellLogo from "@/assets/greencell-logo-original.svg";

type Brand = "default" | "workforce" | "greencell";

const links = [
  { label: "Home", to: "/" as const, hash: undefined as string | undefined },
  { label: "About Us", to: "/" as const, hash: "about" },
  { label: "Contact", to: "/contact" as const, hash: undefined },
];

const BRAND_LOGOS: Record<Brand, string> = {
  default: ringLogo,
  workforce: workforceLogo,
  greencell: greencellLogo,
};

const businesses = [
  {
    label: "Ohreems Workforce Solutions",
    subtitle: "Technology solutions for modern businesses",
    to: "/business/workforce" as const,
  },
  {
    label: "Ohreems Greencell Tech",
    subtitle: "Sustainable initiatives and eco solutions",
    to: "/business/greencell" as const,
  },
];

export function Navbar({ brand = "default" }: { brand?: Brand } = {}) {
  const logo = BRAND_LOGOS[brand];
  const isWorkforce = brand === "workforce";
  const isGreencell = brand === "greencell";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const [mobileBizOpen, setMobileBizOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
       className={`fixed inset-x-0 top-0 z-[100] w-full max-w-[100vw] overflow-x-clip transition-all duration-700 ${
        scrolled || open ? "glass-strong py-1.5 md:py-2.5" : "py-2.5 md:py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 md:px-6">
            <Link
  to="/"
  aria-label="Ohreems Group of Companies — Home"
  className={`group relative flex shrink-0 items-center ${
    brand === "default" ? "gap-0 md:gap-1" : ""
  }`}
  onClick={() => setOpen(false)}
>
  {/* Premium Glow */}
  {brand === "default" && (
    <span className="pointer-events-none absolute left-10 top-1/2 -z-10 h-36 w-36 -translate-y-1/2 rounded-full bg-[#D4AF37]/20 blur-3xl opacity-80 transition-all duration-700 group-hover:scale-110" />
  )}

  {/* Logo */}
<img
  src={logo}
  alt="Ohreems Group of Companies emblem"
  width={120}
  height={120}
  decoding="async"
  className={`block w-auto select-none object-contain transition-all duration-700 ease-out
    ${
      brand === "default"
        ? `
        drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]
        group-hover:drop-shadow-[0_12px_32px_rgba(212,175,55,0.35)]
        group-hover:scale-[1.03]
        animate-[float_6s_ease-in-out_infinite]
        ${
          scrolled
            ? "h-16 md:h-20"
            : "h-[82px] md:h-[108px]"
        }
      `
        : `
        ${
          brand === "workforce"
            ? scrolled
              ? "h-16 md:h-24"
              : "h-20 md:h-[115px]"
            : brand === "greencell"
            ? scrolled
              ? "h-12 md:h-16"
              : "h-14 md:h-[84px]"
            : scrolled
            ? "h-12 md:h-16"
            : "h-14 md:h-[84px]"
        }
      `
    }
  `}
/>

  {/* Text ONLY for ring logo */}
  {brand === "default" && (
    <div className="-ml-1 md:-ml-2 flex flex-col leading-none">
      
       {/* Main Title */}
    <span className="
      bg-gradient-to-r from-[#F5D77A] via-[#D4AF37] to-[#FFF1B8]
      bg-clip-text text-transparent
      text-[14px] md:text-[20px]
      font-semibold tracking-[0.22em]
      transition-all duration-700
      group-hover:tracking-[0.28em]
    ">
      OHREEMS
    </span>

    {/* Subtitle */}
    <span className="
      mt-2
      text-[6px] md:text-[8px]
      font-medium
      tracking-[0.42em]
      text-[#D4AF37]
      transition-all duration-700
      group-hover:text-[#F5D77A]
    ">
      GROUP OF COMPANIES
    </span>

  {/* Tagline */}
<span
  className="
    mt-2

    text-[5px]
    md:text-[7px]

    font-medium

    tracking-[0.32em]

    text-[#F5D77A]

    transition-all
    duration-500

    group-hover:text-[#FFF1B8]
  "
>
  INNOVATE • INTEGRATE • IMPACT
</span>
    </div>
  )}
</Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.slice(0, 2).map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="nav-link text-[15px] font-normal uppercase tracking-[0.22em]"
              >
                {l.label}
              </Link>
            </li>
          ))}

          <li
            className="relative"
            onMouseEnter={() => setBizOpen(true)}
            onMouseLeave={() => setBizOpen(false)}
          >
            <button
              type="button"
              className="nav-link flex items-center gap-2 text-[15px] font-normal uppercase tracking-[0.22em]"
              aria-expanded={bizOpen}
              aria-haspopup="menu"
            >
              Businesses
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform duration-500 ${bizOpen ? "rotate-180" : ""}`}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              role="menu"
              className={`absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 pt-7 transition-all duration-700 ease-[cubic-bezier(.16,.84,.34,1)] ${
                bizOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-gold/10 bg-background/95 p-3 shadow-[0_40px_100px_-40px_oklch(0_0_0_/_0.5),0_10px_30px_-16px_oklch(0_0_0_/_0.22)] backdrop-blur-2xl">
                {businesses.map((b, i) => (
                  <Link
                    key={b.label}
                    to={b.to}
                    role="menuitem"
                    className={`group/item flex flex-col gap-2 rounded-xl px-6 py-5 transition-all duration-700 ease-[cubic-bezier(.16,.84,.34,1)] hover:bg-gold/[0.05] ${i === 0 ? "" : "mt-1.5"}`}
                  >
                    <span className="flex items-center justify-between text-[15px] font-normal tracking-[0.005em] text-foreground transition-colors duration-700 group-hover/item:text-gold">
                      {b.label}
                      <span className="translate-x-0 text-gold opacity-0 transition-all duration-700 ease-[cubic-bezier(.16,.84,.34,1)] group-hover/item:translate-x-1.5 group-hover/item:opacity-100">→</span>
                    </span>
                    <span className="text-[12.5px] font-light leading-relaxed tracking-[0.04em] text-muted-foreground/90">
                      {b.subtitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

        {links.slice(2).map((l) => (
  <li key={l.label}>
    <Link
      to={l.to}
      className="nav-link text-[15px] font-normal uppercase tracking-[0.22em]"
    >
      {l.label}
    </Link>
  </li>
))}


      
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`${isGreencell ? "btn-green" : isWorkforce ? "btn-blue" : "btn-gold"} inline-flex items-center rounded-full px-7 py-3 text-[13px] font-medium uppercase tracking-[0.18em]`}
          >
            Get in Touch
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md border border-border p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
        </button>
      </nav>

      {/* Mobile menu — full-width solid panel, prevents hero overlap */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 z-[90] origin-top transition-all duration-500 ease-out ${
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        }`}
        style={{ paddingTop: scrolled ? "76px" : "92px" }}
      >
        <div className="mx-3 mt-2 rounded-2xl border border-border bg-background/98 p-6 shadow-[0_30px_80px_-30px_oklch(0_0_0_/_0.6)] backdrop-blur-2xl">
          <ul className="space-y-1">
            {links.slice(0, 2).map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="nav-link block rounded-lg px-3 py-3 text-base"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setMobileBizOpen((v) => !v)}
                className="nav-link flex w-full items-center justify-between rounded-lg px-3 py-3 text-base"
              >
                Businesses
                <span className={`transition-transform ${mobileBizOpen ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {mobileBizOpen && (
                <div className="mt-1 space-y-1 border-l border-gold/20 pl-4">
                  {businesses.map((b) => (
                    <Link
                      key={b.label}
                      to={b.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3"
                    >
                      <span className="block text-sm font-medium text-foreground">{b.label}</span>
                      <span className="block text-xs font-light text-muted-foreground">{b.subtitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {links.slice(2).map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="nav-link block rounded-lg px-3 py-3 text-base"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`${isGreencell ? "btn-green" : isWorkforce ? "btn-blue" : "btn-gold"} inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-medium uppercase tracking-[0.18em]`}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
