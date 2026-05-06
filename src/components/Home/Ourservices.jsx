import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Digital PR",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    title: "Organic Social & Content",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  },
  {
    title: "Search & Growth Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Content Experience",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
  },
  {
    title: "Data & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Onsite SEO",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
  },
  {
    title: "Social SEO & Search",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    title: "B2B Marketing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
];

function ServiceRow({ service, index, isLeft }) {
  const rowRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    gsap.to(bgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      ease: "power2.out",
    });
    gsap.to(textRef.current, {
      color: "#ffffff",
      duration: 0.25,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    setHovered(false);
    gsap.to(bgRef.current, {
      opacity: 0,
      scale: 1.04,
      duration: 0.4,
      ease: "power2.inOut",
    });
    gsap.to(textRef.current, {
      color: "#0a0a0a",
      duration: 0.25,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      opacity: 0,
      x: -8,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  // Scroll entrance
  useEffect(() => {
    gsap.fromTo(
      rowRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        delay: (index % 2) * 0.08,
      }
    );
    // init arrow hidden
    gsap.set(arrowRef.current, { opacity: 0, x: -8 });
  }, []);

  return (
    <div
      className="sv-row"
      ref={rowRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* BG image */}
      <div className="sv-row-bg" ref={bgRef}>
        <img src={service.image} alt={service.title} />
        <div className="sv-row-bg-overlay" />
      </div>

      {/* Text */}
      <span className="sv-title" ref={textRef}>
        {service.title}
      </span>

      {/* Arrow */}
      <span className="sv-arrow" ref={arrowRef}>↗</span>
    </div>
  );
}

export default function OurServices() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const left = SERVICES.filter((_, i) => i % 2 === 0);
  const right = SERVICES.filter((_, i) => i % 2 !== 0);
  const rows = left.map((s, i) => [s, right[i]]).filter(Boolean);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

        .sv-section {
          background: #ECEAE3;
          padding: 5rem 4vw 6rem;
          font-family: 'Inter', sans-serif;
        }

        /* HEADER */
        .sv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0;
        }

        .sv-heading {
          display: flex;
          align-items: center;
          gap: 0.3em;
          font-size: clamp(36px, 5vw, 72px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0a0a0a;
          line-height: 1;
          margin: 0;
        }

        .sv-heading-img {
          width: clamp(44px, 4.5vw, 68px);
          height: clamp(44px, 4.5vw, 68px);
          border-radius: 10px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
        }

        .sv-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.65rem 1.5rem;
          border-radius: 100px;
          border: 1.5px solid rgba(0,0,0,0.22);
          background: transparent;
          color: #0a0a0a;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .sv-view-all:hover {
          background: rgba(0,0,0,0.06);
          transform: scale(1.02);
        }

        /* TOP DIVIDER */
        .sv-divider-top {
          width: 100%;
          height: 0.5px;
          background: rgba(0,0,0,0.15);
          margin: 1.5rem 0 0;
        }

        /* GRID */
        .sv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
        }

        /* Each row pair */
        .sv-grid-row {
          display: contents;
        }

        /* Single service item */
        .sv-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 1rem 1.6rem 0;
          border-bottom: 0.5px solid rgba(0,0,0,0.15);
          cursor: pointer;
          overflow: hidden;
          border-radius: 0;
          transition: padding 0.2s;
        }

        .sv-row:nth-child(odd) {
          padding-right: 3rem;
          border-right: 0.5px solid rgba(0,0,0,0.15);
        }

        .sv-row:nth-child(even) {
          padding-left: 3rem;
        }

        .sv-row:hover {
          padding-left: 1.2rem;
        }

        .sv-row:nth-child(odd):hover {
          padding-left: 1.2rem;
        }

        /* BG image */
        .sv-row-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.04);
          will-change: opacity, transform;
          z-index: 0;
          border-radius: 0;
          overflow: hidden;
        }

        .sv-row-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sv-row-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }

        /* Title */
        .sv-title {
          font-size: clamp(22px, 2.8vw, 44px);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #0a0a0a;
          line-height: 1.1;
          position: relative;
          z-index: 1;
          will-change: color;
          transition: color 0.1s;
        }

        /* Arrow */
        .sv-arrow {
          font-size: clamp(18px, 2vw, 30px);
          color: #fff;
          position: relative;
          z-index: 1;
          will-change: opacity, transform;
          flex-shrink: 0;
        }
      `}</style>

      <section className="sv-section" ref={sectionRef}>

        {/* HEADER */}
        <div className="sv-header" ref={headerRef}>
          <h2 className="sv-heading">
            Our
            <img
              className="sv-heading-img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80"
              alt="team"
            />
            Services
          </h2>
          <a href="#" className="sv-view-all">
            View All Services ↗
          </a>
        </div>

        {/* TOP DIVIDER */}
        <div className="sv-divider-top" />

        {/* SERVICES GRID */}
        <div className="sv-grid">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>

      </section>
    </>
  );
}