import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "SIXT",
    subtitle: "Brand & Digital",
    year: "[2023-2025]",
    tags: ["Automotive", "B2B", "Strategy"],
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
    color: "#0a0a0a",
  },
  {
    id: "02",
    title: "Dojo — B2B",
    subtitle: "Growth Marketing",
    year: "[2021-2025]",
    tags: ["Fintech", "Campaigns", "SEO"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    color: "#0f0f0f",
  },
  {
    id: "03",
    title: "Capital One",
    subtitle: "Content & SEO",
    year: "[2020-2024]",
    tags: ["Finance", "Content", "Performance"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    color: "#0c0c0c",
  },
  {
    id: "04",
    title: "Red Bull",
    subtitle: "Social & Creative",
    year: "[2019-2023]",
    tags: ["FMCG", "Social", "Creative"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80",
    color: "#080808",
  },
];

export default function FeatureCard() {
  const sectionRef = useRef(null);
  const rightColRef = useRef(null);
  const leftColRef = useRef(null);
  const imageRefs = useRef([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalItems = projects.length;

      // Each project title scrolls in from bottom and out to top
      titleRefs.current.forEach((el, i) => {
        if (!el) return;

        if (i === 0) {
          // First item starts visible
          gsap.set(el, { yPercent: 0, opacity: 1 });
        } else {
          gsap.set(el, { yPercent: 100, opacity: 0 });
        }
      });

      // Image crossfade on scroll
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });

      // ScrollTrigger for each project transition
      projects.forEach((_, i) => {
        const nextIndex = i + 1;
        if (nextIndex >= totalItems) return;

        const triggerEl = titleRefs.current[i];
        if (!triggerEl) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerEl,
            start: "bottom 60%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        // Outgoing title
        tl.to(titleRefs.current[i], { yPercent: -100, opacity: 0 }, 0);

        // Incoming title
        tl.fromTo(
          titleRefs.current[nextIndex],
          { yPercent: 80, opacity: 0 },
          { yPercent: 0, opacity: 1 },
          0
        );

        // Image crossfade
        tl.to(imageRefs.current[i], { opacity: 0 }, 0);
        tl.to(imageRefs.current[nextIndex], { opacity: 1 }, 0);
      });

      // Sticky right column
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightColRef.current,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Editorial+New:ital,wght@0,400;0,700;1,400&family=Neue+Haas+Grotesk+Display+Pro:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .fc-root {
          font-family: 'DM Sans', sans-serif;
          background: #050505;
          color: #fff;
          overflow-x: hidden;
        }

        .fc-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          position: relative;
        }

        /* LEFT COLUMN */
        .fc-left {
          position: relative;
          padding: 0;
          z-index: 2;
        }

        .fc-label {
          position: sticky;
          top: 3rem;
          padding: 3rem 3rem 0;
          z-index: 10;
          pointer-events: none;
        }

        .fc-label span {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* Each project scroll block */
        .fc-item {
          height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 0 3rem 3.5rem;
          position: relative;
        }

        .fc-title-wrap {
          overflow: hidden;
          position: relative;
        }

        .fc-project-title {
          position: absolute;
          bottom: 0;
          left: 0;
          will-change: transform, opacity;
        }

        .fc-number {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.25rem;
        }

        .fc-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 6vw, 88px);
          font-weight: 700;
          line-height: 0.95;
          color: #fff;
          margin: 0 0 0.5rem;
          letter-spacing: -0.03em;
        }

        .fc-year {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.05em;
          margin-left: 2px;
          vertical-align: super;
          font-family: 'DM Sans', sans-serif;
        }

        .fc-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.75rem;
        }

        .fc-subtitle {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
        }

        .fc-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .fc-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25);
          padding: 3px 9px;
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 100px;
        }

        /* RIGHT COLUMN */
        .fc-right {
          position: relative;
          height: 100vh;
        }

        .fc-image-stack {
          position: absolute;
          inset: 1.5rem;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
        }

        .fc-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: opacity;
        }

        .fc-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0,0,0,0.4) 0%,
            rgba(0,0,0,0.1) 60%,
            rgba(0,0,0,0) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .fc-divider {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0.5px;
          background: rgba(255,255,255,0.08);
        }

        /* Title wrapper heights per item */
        .fc-title-wrap {
          height: calc(clamp(52px, 6vw, 88px) * 2.5);
          width: 100%;
          position: relative;
        }
      `}</style>

      <div className="fc-root">
        <section className="fc-section" ref={sectionRef}>

          {/* LEFT */}
          <div className="fc-left" ref={leftColRef}>
            <div className="fc-label">
              <span>Featured Work</span>
            </div>

            {projects.map((project, i) => (
              <div className="fc-item" key={project.id}>
                <div className="fc-title-wrap">
                  <div
                    className="fc-project-title"
                    ref={(el) => (titleRefs.current[i] = el)}
                  >
                    <div className="fc-number">
                      {project.id} / 0{projects.length}
                    </div>
                    <h2 className="fc-name">
                      {project.title}
                      <span className="fc-year">{project.year}</span>
                    </h2>
                    <div className="fc-meta">
                      <span className="fc-subtitle">{project.subtitle}</span>
                      <div className="fc-tags">
                        {project.tags.map((t) => (
                          <span className="fc-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="fc-right" ref={rightColRef}>
            <div className="fc-divider" />
            <div className="fc-image-stack">
              {projects.map((project, i) => (
                <img
                  key={project.id}
                  className="fc-image"
                  src={project.image}
                  alt={project.title}
                  ref={(el) => (imageRefs.current[i] = el)}
                />
              ))}
              <div className="fc-image-overlay" />
            </div>
          </div>

        </section>
      </div>
    </>
  );
}