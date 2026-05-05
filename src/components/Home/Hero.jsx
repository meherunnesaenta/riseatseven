import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85",
  "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600&q=85",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=85",
];

const INLINE_IMG =
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=200&q=80";

const AWARDS = [
  { label: "GLOBAL\nSEARCH\nAWARDS" },
  { label: "THE\nDRUM" },
  { label: "UK SOCIAL\nMEDIA\nAWARDS" },
  { label: "CONTENT\nAWARDS" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const subRef = useRef(null);
  const footerRef = useRef(null);
  const inlineImgRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const intervalRef = useRef(null);

  // Initial entrance animation
  useEffect(() => {
    gsap.set(imageRefs.current, { opacity: 0 });
    gsap.set(imageRefs.current[0], { opacity: 1 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(badgeRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(
        headingRef.current.querySelectorAll(".hw"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        inlineImgRef.current,
        { opacity: 0, scale: 0.7, rotate: -8 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.55 },
        "-=0.4"
      )
      .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
      .fromTo(footerRef.current.children, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2");

    return () => tl.kill();
  }, []);

  // Background image crossfade loop
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const prev = currentRef.current;
      const next = (prev + 1) % BG_IMAGES.length;

      gsap.to(imageRefs.current[prev], { opacity: 0, duration: 1.4, ease: "power2.inOut" });
      gsap.to(imageRefs.current[next], { opacity: 1, duration: 1.4, ease: "power2.inOut" });

      currentRef.current = next;
      setCurrent(next);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .h7-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* BG IMAGES */
        .h7-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .h7-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: opacity;
          filter: blur(3px) brightness(0.55) saturate(1.1);
          transform: scale(1.04);
        }

        .h7-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.18) 0%,
            rgba(0,0,0,0.28) 40%,
            rgba(0,0,0,0.55) 100%
          );
          z-index: 1;
        }

        /* CONTENT */
        .h7-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 6rem 2rem 2rem;
          gap: 1.25rem;
          flex: 1;
          justify-content: center;
        }

        /* AWARD BADGE */
        .h7-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          will-change: opacity, transform;
        }

        .h7-badge-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
        }

        .h7-awards-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .h7-laurel {
          color: rgba(255,255,255,0.55);
          font-size: 22px;
          line-height: 1;
        }

        .h7-award-item {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          text-align: center;
          line-height: 1.5;
          border: 0.5px solid rgba(255,255,255,0.2);
          padding: 4px 8px;
          border-radius: 4px;
          white-space: pre-line;
        }

        /* HEADING */
        .h7-heading {
          margin: 0;
          line-height: 1.0;
          color: #fff;
          will-change: opacity, transform;
        }

        .h7-heading .hw {
          display: block;
          font-size: clamp(56px, 8.5vw, 128px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #fff;
          will-change: transform, opacity;
        }

        .h7-heading .line2 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25em;
        }

        /* INLINE IMAGE */
        .h7-inline-img {
          width: clamp(60px, 6vw, 90px);
          height: clamp(60px, 6vw, 90px);
          border-radius: 14px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
          will-change: transform, opacity;
          flex-shrink: 0;
        }

        /* SUBLINE */
        .h7-sub {
          font-size: clamp(15px, 1.5vw, 20px);
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.01em;
          margin: 0;
          will-change: opacity, transform;
        }

        /* FOOTER */
        .h7-footer {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1.5rem 3rem 2rem;
        }

        .h7-footer-text {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          max-width: 360px;
          line-height: 1.6;
          will-change: opacity, transform;
        }

        .h7-footer-text strong {
          font-weight: 600;
          color: #fff;
        }

        .h7-footer-right {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          text-align: right;
          line-height: 1.6;
          will-change: opacity, transform;
        }

        /* DOTS */
        .h7-dots {
          display: flex;
          gap: 6px;
          margin-top: 1rem;
        }

        .h7-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: background 0.4s, transform 0.4s;
        }

        .h7-dot.active {
          background: #fff;
          transform: scale(1.3);
        }
      `}</style>

      <div className="h7-root" ref={containerRef}>

        {/* BACKGROUND IMAGE STACK */}
        <div className="h7-bg opacity-80">
          {BG_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h7-bg-img"
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
          <div className="h7-bg-overlay" />
        </div>

        {/* MAIN CONTENT */}
        <div className="h7-content">

          {/* Award badge */}
          <div className="h7-badge" ref={badgeRef}>
            <span className="h7-badge-label">#1 Most Recommended<br />Content Marketing Agency</span>
            <div className="h7-awards-row">
              <span className="h7-laurel">⟨</span>
              {AWARDS.map((a) => (
                <span className="h7-award-item" key={a.label}>{a.label}</span>
              ))}
              <span className="h7-laurel">⟩</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="h7-heading" ref={headingRef}>
            <span className="hw">We Create</span>
            <span className="hw line2">
              Category
              <img
                ref={inlineImgRef}
                className="h7-inline-img"
                src={INLINE_IMG}
                alt="client"
              />
              Leaders
            </span>
          </h1>

          {/* Subline */}
          <p className="h7-sub" ref={subRef}>on every searchable platform</p>

          {/* Dots indicator */}
          <div className="h7-dots">
            {BG_IMAGES.map((_, i) => (
              <div key={i} className={`h7-dot${current === i ? " active" : ""}`} />
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="h7-footer" ref={footerRef}>
          <p className="h7-footer-text">
            Organic media planners creating, distributing &amp; optimising{" "}
            <strong>search-first</strong> content for SEO, Social, PR, Ai and LLM search
          </p>
          <p className="h7-footer-right">
            4 Global Offices serving<br />
            UK, USA (New York) &amp; EU
          </p>
        </div>

      </div>
    </>
  );
}