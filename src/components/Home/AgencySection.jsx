import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AgencySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnsRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          headingRef.current.querySelectorAll(".word"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.07 },
          "-=0.4"
        )
        .fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.8, rotate: -6 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          btnsRef.current.querySelectorAll("a"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = ["Driving", "Demand", "&", "Discovery"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

        .as-root {
          background: #ECEAE3;
          min-height: 100vh;
          display: flex;
          align-items: center;
          font-family: 'Inter', sans-serif;
          padding: 0 5vw;
        }

        .as-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          align-items: center;
          gap: 4rem;
          padding: 6rem 0;
        }

        /* LEFT */
        .as-left p {
          font-size: clamp(14px, 1.2vw, 17px);
          font-weight: 400;
          line-height: 1.65;
          color: #1a1a1a;
          max-width: 340px;
          margin: 0;
        }

        /* RIGHT */
        .as-right {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .as-heading {
          margin: 0;
          line-height: 1;
          overflow: visible;
        }

        .as-heading .line {
          display: flex;
          align-items: center;
          gap: 0.3em;
          flex-wrap: wrap;
        }

        .as-heading .word {
          font-size: clamp(52px, 6.5vw, 96px);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #111;
          font-family: 'Inter', sans-serif;
          display: inline-block;
          will-change: transform, opacity;
        }

        .as-inline-img {
          width: clamp(64px, 5.5vw, 84px);
          height: clamp(64px, 5.5vw, 84px);
          border-radius: 12px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
          will-change: transform, opacity;
          flex-shrink: 0;
        }

        /* BUTTONS */
        .as-btns {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .as-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.3rem;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          cursor: pointer;
        }

        .as-btn:hover {
          transform: scale(1.03);
        }

        .as-btn-outline {
          background: transparent;
          border: 1.5px solid rgba(0,0,0,0.25);
          color: #111;
        }

        .as-btn-outline:hover {
          background: rgba(0,0,0,0.06);
        }

        .as-btn-arrow {
          font-size: 13px;
          opacity: 0.7;
        }
      `}</style>

      <section className="as-root" ref={sectionRef}>
        <div className="as-inner">

          {/* LEFT */}
          <div className="as-left">
            <p ref={subtitleRef}>
              A global team of search-first content marketers
              engineering semantic relevancy &amp; category
              signals for both the internet and people
            </p>
          </div>

          {/* RIGHT */}
          <div className="as-right">
            <h1 className="as-heading" ref={headingRef}>
              <div className="line">
                {["Driving", "Demand", "&"].map((w) => (
                  <span className="word" key={w}>{w}</span>
                ))}
              </div>
              <div className="line">
                <span className="word">Discovery</span>
                <img
                  ref={imgRef}
                  className="as-inline-img"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                  alt="Team"
                />
              </div>
            </h1>

            <div className="as-btns" ref={btnsRef}>
              <a href="#" className="as-btn as-btn-outline">
                Our Story <span className="as-btn-arrow">↗</span>
              </a>
              <a href="#" className="as-btn as-btn-outline">
                Our Services <span className="as-btn-arrow">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}