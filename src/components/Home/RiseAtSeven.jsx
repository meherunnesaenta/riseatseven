import { useEffect, useRef } from "react";
import "../../styles/home/RiseAtSeven.css";

const TEXT = "Ready to Rise at Seven?";


export default function RiseAtSeven() {
  const headingRef = useRef(null);
  const triggerRef = useRef(null);
  const nonSpaceRefs = useRef([]);

  useEffect(() => {
    const heading = headingRef.current;
    const zone = triggerRef.current;
    if (!heading || !zone) return;

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function getProgress() {
      const rect = zone.getBoundingClientRect();
      const zoneH = zone.offsetHeight;
      const vh = window.innerHeight;
      const scrolled = -rect.top;
      const total = zoneH - vh;
      return Math.max(0, Math.min(scrolled / total, 1));
    }

    function tick() {
      const p = getProgress();

      const headingW = heading.scrollWidth;
      const winW = window.innerWidth;
      // Start: heading enters from right side
      const xStart = winW * 0.55;
      // End: heading exits toward left
      const xEnd = -(headingW - winW + winW * 0.08);
      const x = xStart + (xEnd - xStart) * ease(Math.min(p * 1.6, 1));
      heading.style.transform = `translateX(${x}px)`;

      // Character reveal staggered across first 55% of scroll
      const revealP = Math.min(p / 0.55, 1);
      const els = nonSpaceRefs.current.filter(Boolean);
      const n = els.length;

      els.forEach((el, i) => {
        const threshold = (i / (n - 1)) * 0.65;
        const local = Math.max(0, Math.min((revealP - threshold) / 0.35, 1));
        const y = (1 - local) * -55;
        const r = (1 - local) * 10;
        el.style.transform = `translateY(${y}%) rotate(${r}deg)`;
        el.style.opacity = local;
      });
    }

    window.addEventListener("scroll", tick, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", tick);
  }, []);

  const chars = [...TEXT];
  let nonSpaceIdx = 0;

  return (
    <>
      <div
        ref={triggerRef}
        style={{ height: "300vh", position: "relative" }}
      >
        {/* Sticky panel — stays in view while user scrolls through 300vh */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            ref={headingRef}
            className="ras-heading"
            aria-label={TEXT}
          >
            {chars.map((ch, i) => {
              if (ch === " ") {
                return (
                  <span
                    key={i}
                    aria-hidden="true"
                    style={{ display: "inline-block", width: "0.32em" }}
                  />
                );
              }
              const idx = nonSpaceIdx++;
              return (
                <span
                  key={i}
                  aria-hidden="true"
                  ref={(el) => {
                    nonSpaceRefs.current[idx] = el;
                  }}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    transform: "translateY(-55%) rotate(10deg)",
                    willChange: "transform, opacity",
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}