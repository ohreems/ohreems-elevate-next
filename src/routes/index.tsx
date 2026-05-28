import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Divisions,
  Services,
  Industries,
  WhyUs,
  Innovation,
  Global,
  Testimonials,
  Leadership,
  ContactCTA,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
   
      { title: "Ohreems Group of Companies — Innovate · Integrate · Impact" },
      {
        name: "description",
        content:
          "Ohreems Group of Companies — a multi-sector enterprise combining enterprise IT solutions with sustainable battery recycling and green technology. Innovating tomorrow's solutions today.",
      },
      { name: "keywords", content: "Ohreems, enterprise IT, workforce solutions, sustainable technology, battery recycling, greencell, multinational group" },
      { property: "og:title", content: "Ohreems Group of Companies — Innovate · Integrate · Impact" },
      { property: "og:description", content: "A multi-sector enterprise group fusing technological innovation with sustainable practice." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ohreems-elevate-next.lovable.app/" },
      { property: "og:site_name", content: "Ohreems Group of Companies" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ohreems Group of Companies" },
      { name: "twitter:description", content: "Enterprise IT and sustainable battery recycling — innovating tomorrow's solutions today." },
      { name: "theme-color", content: "#0a1530" },
    ],
    links: [
      { rel: "canonical", href: "https://ohreems-elevate-next.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ohreems Group of Companies",
          url: "https://ohreems-elevate-next.lovable.app/",
          description: "A multi-sector enterprise combining enterprise IT solutions with sustainable battery recycling.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="seam-dark-to-light" aria-hidden />
      <About />
      <div className="seam-light-to-dark" aria-hidden />
      <Divisions />
      <div className="seam-dark-to-light" aria-hidden />
      <Services />
      <div className="seam-light-to-light" aria-hidden />
      <Industries />
      <div className="seam-light-to-dark" aria-hidden />
      <WhyUs />
      <Innovation />
      <Global />
      <div className="seam-dark-to-light" aria-hidden />
      <Testimonials />
      <div className="seam-light-to-light" aria-hidden />
      <Leadership />
      <div className="seam-light-to-dark" aria-hidden />
      <ContactCTA />
      <Footer />
    </main>
  );
}
