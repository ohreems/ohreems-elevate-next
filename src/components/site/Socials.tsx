import { Facebook, Instagram, Linkedin } from "lucide-react";
import { mainSocials, type SocialLinks } from "@/lib/socials";
export type SocialBrand = "gold" | "blue" | "green";

const TONE: Record<SocialBrand, { color: string; ring: string; bg: string }> = {
  gold: {
    color: "text-gold",
    ring: "border-gold/30 hover:border-gold/70",
    bg: "bg-gold/[0.06] hover:bg-gold/[0.14]",
  },
  blue: {
    color: "text-wf-blue",
    ring: "border-[oklch(0.42_0.16_252/0.35)] hover:border-[oklch(0.42_0.16_252/0.8)]",
    bg: "bg-[oklch(0.5_0.18_252/0.06)] hover:bg-[oklch(0.5_0.18_252/0.14)]",
  },
  green: {
    color: "text-green-accent",
    ring: "border-[oklch(0.55_0.16_152/0.35)] hover:border-[oklch(0.55_0.16_152/0.8)]",
    bg: "bg-[oklch(0.55_0.16_152/0.06)] hover:bg-[oklch(0.55_0.16_152/0.14)]",
  },
};
const BRAND_NAME: Record<SocialBrand, string> = {
  gold: "Ohreems",
  blue: "Ohreems Workforce",
  green: "Ohreems Greencell",
};
export function Socials({
  brand = "gold",
  links,
  size = "md",
  className = "",
}: {
  brand?: SocialBrand;
   links?: SocialLinks;
  size?: "sm" | "md";
  className?: string;
}) {
  const tone = TONE[brand];
  const dim = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const ic = size === "sm" ? 15 : 17;
    const urls = links ?? mainSocials;
  const items = [

    { key: "instagram", label: "Instagram", Icon: Instagram, href: urls.instagram },
    { key: "linkedin", label: "LinkedIn", Icon: Linkedin, href: urls.linkedin },
  ] as const;
  const brandName = BRAND_NAME[brand];
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
          {items.map(({ key, label, Icon, href }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${brandName} on ${label} (opens in new tab)`}
            className={`group inline-flex ${dim} items-center justify-center rounded-full border ${tone.ring} ${tone.bg} ${tone.color} transition-all duration-500 ease-[cubic-bezier(.16,.84,.34,1)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_24px_-12px_currentColor] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40`}
          >
            <Icon size={ic} strokeWidth={1.75} className="transition-transform duration-500 group-hover:rotate-[6deg]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
