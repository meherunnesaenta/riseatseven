import { useEffect, useRef, useState } from "react";
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
    result: "An extra 3m clicks regionally through SEO",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=900&fit=crop",
    color: "#cb7b3a",
  },
  {
    id: "02",
    title: "Dojo — B2B",
    subtitle: "Growth Marketing",
    year: "[2021-2025]",
    tags: ["Fintech", "Campaigns", "SEO"],
    result: "A B2B success story for Dojo card machines",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=900&fit=crop",
    color: "#fdd8c4",
  },
  {
    id: "03",
    title: "Magnet Trade - B2B",
    subtitle: "Content & SEO",
    year: "[2023-2024]",
    tags: ["Trade", "B2B", "Performance"],
    result: "A full service SEO success story 170%+ increase",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=900&fit=crop",
    color: "#d8c4fd",
  },
  {
    id: "04",
    title: "Leading E Sim brand globally",
    subtitle: "Social & Creative",
    year: "[2023-2025]",
    tags: ["Esims", "Global", "Strategy"],
    result: "Increasing brand and non brand visibility UK/ES",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=900&fit=crop",
    color: "#cb7b3a",
  },
  {
    id: "05",
    title: "JD Sports",
    subtitle: "E-commerce & Retail",
    year: "[2025]",
    tags: ["Retail", "Campaigns", "SEO"],
    result: "65% up YoY in clicks for JDSports FR, IT, ES",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=900&fit=crop",
    color: "#3a8ccb",
  },
  {
    id: "06",
    title: "Parkdean Resorts",
    subtitle: "Travel & Hospitality",
    year: "[2019-2025]",
    tags: ["Travel", "SEO", "Content"],
    result: "Dominating Google and AI search",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
    color: "#d2b59d",
  },
];

export default function FeatureCard() {
  const sectionRef = useRef(null);
  const rightColRef = useRef(null);
  const leftColRef = useRef(null);
  const imageRefs = useRef([]);
  const titleRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalItems = projects.length;

      // Each project title scrolls in from bottom and out to top
      titleRefs.current.forEach((el, i) => {
        if (!el) return;

        if (i === 0) {
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

        tl.to(titleRefs.current[i], { yPercent: -100, opacity: 0 }, 0);
        tl.fromTo(
          titleRefs.current[nextIndex],
          { yPercent: 80, opacity: 0 },
          { yPercent: 0, opacity: 1 },
          0
        );
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

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
          padding: 2rem 2rem 0;
          z-index: 10;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .fc-label {
            padding: 3rem 3rem 0;
          }
        }

        .fc-label span {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        @media (min-width: 1024px) {
          .fc-label span {
            font-size: 12px;
          }
        }

        /* Each project scroll block */
        .fc-item {
          height: 100vh;
          display: flex;
          align-items: flex-end;
          padding: 0 1.5rem 2rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .fc-item {
            padding: 0 3rem 3.5rem;
          }
        }

        .fc-title-wrap {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .fc-project-title {
          position: absolute;
          bottom: 0;
          left: 0;
          will-change: transform, opacity;
          width: 100%;
        }

        .fc-number {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.3);
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .fc-number {
            font-size: 11px;
            margin-bottom: 0.25rem;
          }
        }

        .fc-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 8vw, 88px);
          font-weight: 700;
          line-height: 0.95;
          color: #fff;
          margin: 0 0 0.5rem;
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .fc-name {
            font-size: clamp(52px, 6vw, 88px);
          }
        }

        .fc-year {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.05em;
          margin-left: 2px;
          vertical-align: super;
          font-family: 'DM Sans', sans-serif;
        }

        @media (min-width: 768px) {
          .fc-year {
            font-size: 12px;
          }
        }

        .fc-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        @media (min-width: 640px) {
          .fc-meta {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
          }
        }

        .fc-subtitle {
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
        }

        @media (min-width: 768px) {
          .fc-subtitle {
            font-size: 14px;
          }
        }

        .fc-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .fc-tag {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25);
          padding: 3px 8px;
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 100px;
        }

        @media (min-width: 768px) {
          .fc-tag {
            font-size: 11px;
            padding: 3px 9px;
          }
        }

        /* RIGHT COLUMN */
        .fc-right {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .fc-image-stack {
          position: absolute;
          inset: 1rem;
          border-radius: 16px;
          overflow: hidden;
          background: #111;
        }

        @media (min-width: 768px) {
          .fc-image-stack {
            inset: 1.5rem;
          }
        }

        .fc-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: opacity;
          transition: transform 0.5s ease;
        }

        .fc-image-stack:hover .fc-image {
          transform: scale(1.05);
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

        /* Hover Overlay for Image */
        .fc-hover-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .fc-hover-overlay {
            padding: 2rem;
          }
        }

        .fc-image-stack:hover .fc-hover-overlay {
          opacity: 1;
        }

        .fc-hover-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 4vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          max-width: 80%;
        }

        @media (min-width: 768px) {
          .fc-hover-text {
            font-size: clamp(24px, 5vw, 48px);
          }
        }

        .fc-divider {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0.5px;
          background: rgba(255,255,255,0.08);
          z-index: 5;
        }

        .fc-title-wrap {
          height: calc(clamp(40px, 8vw, 88px) * 2.5);
          width: 100%;
          position: relative;
        }

        @media (min-width: 768px) {
          .fc-title-wrap {
            height: calc(clamp(52px, 6vw, 88px) * 2.5);
          }
        }

        /* Button Styles */
        .fc-button-wrapper {
          display: flex;
          justify-content: center;
          padding: 3rem 1.5rem 4rem;
        }

        @media (min-width: 768px) {
          .fc-button-wrapper {
            padding: 4rem 3rem 5rem;
          }
        }

        .fc-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          background: white;
          color: #050505;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.875rem 2rem;
          border-radius: 2rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        @media (min-width: 768px) {
          .fc-button {
            font-size: 1.125rem;
            padding: 1rem 2.5rem;
          }
        }

        .fc-button:hover {
          border-radius: 1rem;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
        }

        .fc-button-icon {
          display: inline-block;
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .fc-button:hover .fc-button-icon {
          transform: translate(3px, -3px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .fc-section {
            grid-template-columns: 1fr;
          }
          
          .fc-right {
            height: 60vh;
            margin-top: 2rem;
          }
          
          .fc-label {
            position: relative;
            top: 0;
            padding: 2rem 1.5rem 0;
          }
          
          .fc-item {
            height: auto;
            min-height: 40vh;
            padding: 2rem 1.5rem;
          }
          
          .fc-title-wrap {
            height: auto;
          }
          
          .fc-project-title {
            position: relative;
          }
        }
      `}</style>

      <div className="fc-root">
        <section className="fc-section" ref={sectionRef}>

          {/* LEFT COLUMN */}
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

          {/* RIGHT COLUMN */}
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
              <div className="fc-hover-overlay">
                <div className="fc-hover-text">
                  {projects[hoveredIndex !== null ? hoveredIndex : 0]?.result || "View Case Study"}
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* BUTTON */}
        <div className="fc-button-wrapper">
          <a href="#" className="fc-button">
            <span>Explore Our Work</span>
            <span className="fc-button-icon">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}