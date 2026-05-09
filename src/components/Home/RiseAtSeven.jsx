import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

export default function RiseAtSeven() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current;
      const heading = headingRef.current;

      if (!heading) return;

      const headingWidth = heading.offsetWidth;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let yStart = 150;
      let yEnd = 400;
      let charYStart = -60;

      ScrollTrigger.matchMedia({
        "(max-width: 1023px)": () => {
          yStart = 100;
          yEnd = 200;
          charYStart = -60;
        },
      });

      gsap.set(heading, {
        y: yStart,
        x: headingWidth - windowWidth + windowWidth * 0.5,
      });

      gsap.to(heading, {
        x: () => {
          return -(headingWidth - window.innerWidth + 1000);
        },
        y: yEnd,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top 70%",
          end: "+=" + (headingWidth - windowWidth + windowHeight * .35),
          scrub: 0.5,
        },
      });

      const splitText = new SplitText(heading, { type: "chars" });
      const chars = splitText.chars;

      chars.forEach((char) => {
        gsap.set(char, {
          yPercent: charYStart,
          rotate: 10,
        });
      });

      gsap.to(chars, {
        yPercent: 0,
        rotate: 0,
        ease: "back.inOut(4)",
        stagger: .08,
        duration: 1.2,
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          end: "+=" + (headingWidth - windowWidth + 100),
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .rise-section {
          min-height: 100vh; 
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          padding: 0 ;
          margin: 0;
        }
        
        .rise-heading-wrapper {
          width: 100%;
          overflow: visible;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0; 
          padding: 1rem 0;
        }
        
        .rise-heading {
          font-size: clamp(3rem, 16vw, 12rem);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1;
          color: #0a0a0a;
          white-space: nowrap;
          display: inline-flex;
          flex-wrap: nowrap;
          gap: 0.05em;
        }
        
        .rise-heading > div {
          display: inline-block;
          white-space: normal;
        }
        
        .rise-heading [aria-hidden="true"] {
          display: inline-block;
          transition: none;
        }
        
        @media (max-width: 768px) {
          .rise-section {
            display: none;
            
          }
        }
        
        .rise-heading .splitText-wrapper {
          display: inline;
        }
      `}</style>

      <section className="rise-section" ref={sectionRef}>
        <div className="rise-heading-wrapper">
          <div className="rise-heading" ref={headingRef} aria-label="Ready to Rise at Seven?">
            <span aria-hidden="true">R</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">a</span>
            <span aria-hidden="true">d</span>
            <span aria-hidden="true">y</span>
            <span aria-hidden="true">&nbsp;</span>
            <span aria-hidden="true">t</span>
            <span aria-hidden="true">o</span>
            <span aria-hidden="true">&nbsp;</span>
            <span aria-hidden="true">R</span>
            <span aria-hidden="true">i</span>
            <span aria-hidden="true">s</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">&nbsp;</span>
            <span aria-hidden="true">a</span>
            <span aria-hidden="true">t</span>
            <span aria-hidden="true">&nbsp;</span>
            <span aria-hidden="true">S</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">v</span>
            <span aria-hidden="true">e</span>
            <span aria-hidden="true">n</span>
            <span aria-hidden="true">?</span>
          </div>
        </div>
      </section>
    </>
  );
}