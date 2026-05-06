import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AgencySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const desktopBtnsRef = useRef(null);
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
        desktopBtnsRef.current?.querySelectorAll(".as-btn") || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="as-root" ref={sectionRef}>
      <div className="as-container">
        
        {/* DESKTOP: Left + Right layout */}
        <div className="as-desktop-layout">
          
          {/* Left Column - Tagline */}
          <div className="as-left">
            <p ref={subtitleRef}>
              A global team of search-first content marketers
              engineering semantic relevancy &amp; category
              signals for both the internet and people
            </p>
          </div>

          {/* Right Column - Heading + Desktop Buttons */}
          <div className="as-right">
            <h1 className="as-heading" ref={headingRef}>
              <div className="as-line">
                <span className="word">Driving</span>
                <span className="word">Demand</span>
                <span className="word">&</span>

                
              </div>
              <div className="as-line">
                <span className="word">Discovery</span>
                <img
                  ref={imgRef}
                  className="as-inline-img"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                  alt=""
                />
              </div>
            </h1>

            {/* DESKTOP BUTTONS with FLIP ANIMATION */}
            <div className="as-desktop-buttons" ref={desktopBtnsRef}>
              <a href="https://riseatseven.com/about/" className="as-btn as-btn-white">
                <div className="as-btn-inner">
                  <div className="as-btn-text-wrapper">
                    <span className="as-btn-text">Our Story</span>
                    <span className="as-btn-text as-btn-text-hover">Our Story</span>
                  </div>
                  <span className="as-arrow">↗</span>
                </div>
              </a>
              <a href="https://riseatseven.com/services/" className="as-btn as-btn-transparent">
                <div className="as-btn-inner">
                  <div className="as-btn-text-wrapper">
                    <span className="as-btn-text">Our Services</span>
                    <span className="as-btn-text as-btn-text-hover">Our Services</span>
                  </div>
                  <span className="as-arrow">↗</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE BUTTONS with FLIP ANIMATION */}
        <div className="as-mobile-buttons">
          <a href="https://riseatseven.com/about/" className="as-btn as-btn-white">
            <div className="as-btn-inner">
              <div className="as-btn-text-wrapper">
                <span className="as-btn-text">Our Story</span>
                <span className="as-btn-text as-btn-text-hover">Our Story</span>
              </div>
              <span className="as-arrow">↗</span>
            </div>
          </a>
          <a href="https://riseatseven.com/services/" className="as-btn as-btn-transparent">
            <div className="as-btn-inner">
              <div className="as-btn-text-wrapper">
                <span className="as-btn-text">Our Services</span>
                <span className="as-btn-text as-btn-text-hover">Our Services</span>
              </div>
              <span className="as-arrow">↗</span>
            </div>
          </a>
        </div>

      </div>

      <style jsx>{`
        /* ROOT STYLES */
        .as-root {
          width: 100%;
           background:  '#EBEBEB',
          padding: 3rem 1rem;
        }

        @media (min-width: 768px) {
          .as-root {
            padding: 5rem 1.75rem;
          }
        }

        @media (min-width: 1280px) {
          .as-root {
            padding: 6rem 1.75rem;
          }
        }

        .as-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* DESKTOP LAYOUT */
        .as-desktop-layout {
          display: flex;
          flex-direction: column-reverse;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .as-desktop-layout {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1.25rem;
          }
        }

        /* LEFT COLUMN */
        .as-left {
          width: 100%;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .as-left {
            width: auto;
            max-width: 24rem;
            margin-bottom: 0;
            margin-top: 0.5rem;
          }
        }

        @media (min-width: 1280px) {
          .as-left {
            max-width: 36rem;
          }
        }

        .as-left p {
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 1;
          color: #111111;
          margin: 0;
          text-align: left;
        }

        @media (min-width: 1024px) {
          .as-left p {
            font-size: 1.25rem;
          }
        }

        /* RIGHT COLUMN */
        .as-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .as-right {
            max-width: 40rem;
          }
        }

        @media (min-width: 1280px) {
          .as-right {
            max-width: 48rem;
          }
        }

        /* HEADING */
        .as-heading {
          margin: 0;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.25em;
        }

        .as-line {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: .23rem;
          line-height: 0.8;
        }

        .word {
          font-size: 3rem;
          font-weight: 500;
          color: #111111;
          display: inline-block;
        }

        @media (min-width: 768px) {
          .word {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1024px) {
          .word {
            font-size: 4.5rem;
          }
        }

        @media (min-width: 1280px) {
          .word {
            font-size: 5rem;
          }
        }

        /* IMAGE */
        .as-inline-img {
          width: 50px;
          height: 50px;
          border-radius: 15%;
          object-fit: cover;
          display: inline-block;
          background: rgba(0,0,0,0.05);
          flex-shrink: 0;
          margin-left: 0.25rem;
        }

        @media (min-width: 768px) {
          .as-inline-img {
            width: 56px;
            height: 56px;
          }
        }

        @media (min-width: 1024px) {
          .as-inline-img {
            width: 64px;
            height: 64px;
          }
        }

        /* BUTTONS CONTAINER */
        .as-desktop-buttons {
          display: none;
          padding-top: 1rem;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .as-desktop-buttons {
            display: flex;
          }
        }

        .as-mobile-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          width: 100%;
          margin-top: 1.5rem;
        }

        @media (min-width: 768px) {
          .as-mobile-buttons {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .as-mobile-buttons .as-btn {
            flex: 1;
          }
        }

        /* BUTTON BASE */
        .as-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          cursor: pointer;
          
          border: none;
          overflow: hidden;
        }

        .as-btn-inner {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* FLIP ANIMATION WRAPPER */
        .as-btn-text-wrapper {
          position: relative;
          display: inline-block;
          overflow: hidden;
          height: 1.2rem;
        }

        .as-btn-text {
          display: inline-block;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.2;
          text-transform: capitalize;
          transition: transform 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .as-btn-text-hover {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
        }

        /* HOVER FLIP EFFECT */
        .as-btn:hover .as-btn-text {
          transform: translateY(-100%);
        }

        .as-btn:hover .as-btn-text-hover {
          transform: translateY(0);
        }

        /* BUTTON VARIANTS */
        .as-btn-white {
          background: white;
          color: #111111;
        }

        .as-btn-white:hover {
          border-radius: 0.75rem;
        }

        .as-btn-transparent {
          background: transparent;
          color: #111111;
        }

        /* ARROW */
        .as-arrow {
          font-size: 0.875rem;
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .as-btn:hover .as-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}