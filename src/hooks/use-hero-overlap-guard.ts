import { useEffect } from "react";

/**
 * Dev-only automated responsive check for the hero headline.
 *
 * Measures the <h1> bounding box against sibling elements (eyebrow badge,
 * subtitle, CTA row, stat strip) on mount, on every resize, and across
 * simulated breakpoints. Logs a console warning if any vertical overlap is
 * detected so headline collisions surface immediately in development.
 *
 * No-op in production builds.
 */
export function useHeroOverlapGuard(
  headlineRef: React.RefObject<HTMLElement | null>,
  siblingRefs: Record<string, React.RefObject<HTMLElement | null>>,
) {
  useEffect(() => {
    if (import.meta.env.PROD) return;
    if (typeof window === "undefined") return;

    const BREAKPOINTS = [
      { name: "mobile", min: 0, max: 639 },
      { name: "tablet", min: 640, max: 1023 },
      { name: "desktop", min: 1024, max: Infinity },
    ] as const;

    const check = () => {
      const h1 = headlineRef.current;
      if (!h1) return;
      const w = window.innerWidth;
      const bp = BREAKPOINTS.find((b) => w >= b.min && w <= b.max)?.name ?? "unknown";
      const h1Rect = h1.getBoundingClientRect();

      const collisions: string[] = [];
      for (const [label, ref] of Object.entries(siblingRefs)) {
        const el = ref.current;
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const verticalOverlap = h1Rect.bottom > r.top && h1Rect.top < r.bottom;
        const horizontalOverlap = h1Rect.right > r.left && h1Rect.left < r.right;
        if (verticalOverlap && horizontalOverlap) {
          collisions.push(
            `${label} (h1.bottom=${h1Rect.bottom.toFixed(0)} > el.top=${r.top.toFixed(0)})`,
          );
        }
      }

      if (collisions.length > 0) {
        console.warn(
          `[hero-overlap-guard] viewport=${w}px (${bp}) — headline overlaps:`,
          collisions,
        );
      } else {
        console.debug(
          `[hero-overlap-guard] viewport=${w}px (${bp}) — OK, no overlap`,
        );
      }
    };

    // Initial check after layout settles
    const raf = requestAnimationFrame(check);

    const ro = new ResizeObserver(check);
    if (headlineRef.current) ro.observe(headlineRef.current);
    Object.values(siblingRefs).forEach((r) => r.current && ro.observe(r.current));

    window.addEventListener("resize", check);
    window.addEventListener("load", check);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", check);
      window.removeEventListener("load", check);
    };
  }, [headlineRef, siblingRefs]);
}
