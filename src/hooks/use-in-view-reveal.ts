import { useEffect } from "react";

/**
 * Adds `.is-visible` to any element with `.in-view-reveal` once it scrolls
 * into the viewport. Pair with the `.in-view-reveal` styles in styles.css
 * for premium scroll-triggered fades.
 */
export function useInViewReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".in-view-reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
