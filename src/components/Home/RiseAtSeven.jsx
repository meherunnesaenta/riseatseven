import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RiseAtSeven() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Single line — moves LEFT as user scrolls DOWN, RIGHT as user scrolls UP
      gsap.fromTo(
        trackRef.current,
        { x: "8%" },
        {
          x: "-8%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // CTA fade in
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "Ready to Rise at Seven?";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800;900&display=swap');

        .rs-section {
          background: #ECEAE3;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          gap: 3rem;
        }

        .rs-marquee-wrap {
          width: 100%;
          overflow: hidden;
        }

        .rs-track {
          display: inline-flex;
          align-items: center;
          gap: 0.4em;
          white-space: nowrap;
          will-change: transform;
          padding: 0.05em 0;
        }

        .rs-word {
          font-size: clamp(64px, 10.5vw, 158px);
          font-weight: 900;
          letter-spacing: -0.045em;
          color: #0a0a0a;
          line-height: 1;
          display: inline-block;
        }

        .rs-word-italic {
          font-style: italic;
        }

        .rs-word-outline {
          -webkit-text-stroke: 2.5px #0a0a0a;
          color: transparent;
        }

        /* dot separator between repeated copies */
        .rs-sep {
          display: inline-block;
          width: clamp(10px, 1.2vw, 18px);
          height: clamp(10px, 1.2vw, 18px);
          border-radius: 50%;
          background: #0a0a0a;
          flex-shrink: 0;
          margin: 0 0.6em;
        }

        .rs-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          will-change: opacity, transform;
        }

        .rs-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.9rem 2.2rem;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.15s, background 0.15s;
          letter-spacing: -0.01em;
          border: none;
        }

        .rs-btn:hover { transform: scale(1.03); }

        .rs-btn-dark {
          background: #0a0a0a;
          color: #fff;
        }
        .rs-btn-dark:hover { background: #222; }

        .rs-btn-ghost {
          background: transparent;
          color: #0a0a0a;
          border: 1.5px solid rgba(0,0,0,0.25);
        }
        .rs-btn-ghost:hover { background: rgba(0,0,0,0.05); }

        .rs-arrow { font-size: 13px; opacity: 0.6; }
      `}</style>

      <section className="rs-section" ref={sectionRef}>

        <div className="rs-marquee-wrap">
          <div className="rs-track" ref={trackRef}>

            <span className="rs-word">Ready&nbsp;to</span>
            <span className="rs-word rs-word-italic">&nbsp;Rise</span>
            <span className="rs-word">&nbsp;at&nbsp;Seven?</span>

          </div>
        </div>

      </section>
    </>
  );
}