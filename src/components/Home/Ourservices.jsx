import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const serviceRowsRef = useRef([]);

  // Service data
  const services = [
    {
      title: "Digital PR",
      slug: "digital-pr",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=ca4a2c3891fedbd3ca3a3d46af0e6362",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=6d24f03cd6433d18ffdc18236cf7a648"
    },
    {
      title: "Organic Social & Content",
      slug: "social",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=6dc7a97684078dc9cbe75679b4093ef5",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=3015fd51b8e01339805f2d2c04aed3cb"
    },
    {
      title: "Search & Growth Strategy",
      slug: "strategy-growth",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=624a1f990a8d128dd35cf3a6e1f44dbe",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=942bb2a9f226a995cdd5b25d64509705"
    },
    {
      title: "Content Experience",
      slug: "content-experience",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=1aebaeffe44aa88331de2609962a990e",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=f06af03bd1b7577056129b56b67c0ad2"
    },
    {
      title: "Data & Insights",
      slug: "data-insights",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=5c5ad2c6b822417723c4f682fd885ced",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=91982a1f6ee17fb2964a4bc7a76167f0"
    },
    {
      title: "Onsite SEO",
      slug: "onsite-seo",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=4a4a4154f7497d086fc695e27bf2aa17",
      imageFull: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=146948423396731ebd58e4755e3d773a"
    }
  ];

  // Split into two columns (left and right)
  const leftColumnServices = services.filter((_, i) => i % 2 === 0);
  const rightColumnServices = services.filter((_, i) => i % 2 === 1);

  useEffect(() => {
    
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.heading-word');
      words.forEach((word, i) => {
        const letters = word.querySelectorAll('.letter');
        gsap.fromTo(letters,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.1,
          }
        );
      });
    }

    // Animate button
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate each service row on scroll
    serviceRowsRef.current.forEach((row, index) => {
      if (row) {
        gsap.fromTo(row,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.05,
          }
        );
      }
    });
  }, []);

  // Service Row Component
  const ServiceRow = ({ service, index, isLeft }) => {
    const rowRef = useRef(null);
    const titleRef = useRef(null);
    const arrowRef = useRef(null);
    const bgRef = useRef(null);
    const bgImageRef = useRef(null);

    useEffect(() => {
      // Preload background image
      if (bgImageRef.current) {
        const img = new Image();
        img.src = service.imageFull;
      }
    }, [service.imageFull]);

    const handleMouseEnter = () => {
      // Animate background
      gsap.to(bgRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(bgImageRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: "power3.out",
      });
      // Animate title color
      gsap.to(titleRef.current, {
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out",
      });
      // Animate arrow
      gsap.to(arrowRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(bgRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(bgImageRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(titleRef.current, {
        color: "#1a1a1a",
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(arrowRef.current, {
        x: -10,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    };

    return (
      <div
        ref={(el) => {
          if (el) serviceRowsRef.current[index] = el;
          rowRef.current = el;
        }}
        className={`service-row ${isLeft ? 'service-row-left' : 'service-row-right'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image */}
        <div ref={bgRef} className="service-bg">
          <div ref={bgImageRef} className="service-bg-image">
            <img src={service.imageFull} alt={service.title} loading="lazy" />
          </div>
          <div className="service-bg-overlay"></div>
        </div>

        {/* Title */}
        <div ref={titleRef} className="service-title">
          {service.title}
        </div>

        {/* Arrow Icon */}
        <div ref={arrowRef} className="service-arrow">
          <i className="fa-regular fa-sharp fa-arrow-up-right"></i>
        </div>
      </div>
    );
  };

  // Split heading "Our Services" into words with letters
  const headingText = "OurServices";
  const headingWords = [
    { text: "Our", hasImage: false },
    { text: "", hasImage: true, image: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea" },
    { text: "Services", hasImage: false }
  ];

  return (
    <>
      <style >{`
        .services-section {
          width: 100%;
          padding-bottom: 3rem;
          overflow-x: hidden;
        }

        .services-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          .services-container {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }
        }

        /* Header Styles */
        .services-header {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .services-header-left {
          grid-column: span 11;
        }

        @media (min-width: 768px) {
          .services-header-left {
            grid-column: span 9;
          }
          .services-header-right {
            grid-column: span 3;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }

        .services-heading {
          display: inline-flex;
          flex-wrap: wrap;
          text-align: left;
          justify-content: start;
          color: #1a1a1a;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.025em;
          font-size: clamp(2.5rem, 8vw, 4rem);
          line-height: 0.9;
          margin: 0;
        }

        @media (min-width: 768px) {
          .services-heading {
            font-size: clamp(3rem, 6vw, 4.5rem);
          }
        }

        @media (min-width: 1024px) {
          .services-heading {
            font-size: clamp(3.5rem, 5vw, 5rem);
          }
        }

        .heading-word {
          display: inline-flex;
          flex-wrap: wrap;
          margin-right: 0.5rem;
          overflow: hidden;
        }

        .heading-image-wrapper {
          display: inline-block;
          flex-shrink: 0;
          background: rgba(0,0,0,0.05);
          overflow: hidden;
          margin-right: 0.5rem;
          border-radius: 15%;
          width: 60px;
          height: auto;
        }

        @media (min-width: 768px) {
          .heading-image-wrapper {
            width: 80px;
          }
        }

        .heading-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .letter {
          display: inline-block;
        }

        /* View All Button */
        .view-all-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          background: white;
          color: #1a1a1a;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          text-decoration: none;
          transition: border-radius 0.3s;
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }

        .view-all-btn:hover {
          border-radius: 0.75rem;
        }

        .btn-text-wrapper {
          position: relative;
          overflow: hidden;
        }

        .btn-text-default, .btn-text-hover {
          transition: transform 0.3s;
        }

        .btn-text-hover {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
        }

        .view-all-btn:hover .btn-text-default {
          transform: translateY(-100%);
        }

        .view-all-btn:hover .btn-text-hover {
          transform: translateY(0);
        }

        /* Divider */
        .divider-top {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.1);
          margin-bottom: 0;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 0.5rem;
        }

        .services-column {
          grid-column: span 12;
        }

        @media (min-width: 768px) {
          .services-column {
            grid-column: span 6;
          }
        }

        /* Service Row */
        .service-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          cursor: pointer;
          overflow: hidden;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          transition: padding 0.3s;
        }

        .service-row-left {
          padding-right: 0;
        }

        .service-row-right {
          padding-left: 0;
        }

        @media (min-width: 768px) {
          .service-row-left {
            padding-right: 3rem;
            border-right: 1px solid rgba(0,0,0,0.1);
          }
          .service-row-right {
            padding-left: 3rem;
          }
        }

        .service-row:hover {
          padding-left: 0.5rem;
        }

        /* Background Image */
        .service-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
          border-radius: 1.5rem;
          overflow: hidden;
          pointer-events: none;
        }

        .service-bg-image {
          width: 100%;
          height: 100%;
          transform: scale(1);
          transition: transform 0.6s;
        }

        .service-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        /* Title */
        .service-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-weight: 500;
          letter-spacing: -0.025em;
          color: #1a1a1a;
          position: relative;
          z-index: 1;
          transition: color 0.3s;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
        }

        @media (min-width: 1024px) {
          .service-title {
            font-size: clamp(1.8rem, 4vw, 3rem);
          }
        }

        /* Arrow */
        .service-arrow {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateX(-10px);
          font-size: 1.2rem;
          color: white;
          transition: all 0.3s;
        }

        @media (min-width: 768px) {
          .service-arrow {
            font-size: 1.5rem;
          }
        }

        /* Mobile View All Button */
        .mobile-view-all {
          grid-column: span 12;
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .mobile-view-all {
            display: none;
          }
        }
      `}</style>

      <section ref={sectionRef} className="services-section">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <div className="services-header-left" ref={headerRef}>
              <h2 ref={headingRef} className="services-heading">
                <span className="heading-word">
                  {Array.from("Our").map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                  ))}
                </span>
                <span className="heading-image-wrapper">
                  <img 
                    className="heading-image" 
                    src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea" 
                    alt=""
                  />
                </span>
                <span className="heading-word">
                  {Array.from("Services").map((letter, i) => (
                    <span key={i} className="letter">{letter}</span>
                  ))}
                </span>
              </h2>
            </div>
            <div className="services-header-right">
              <a 
                ref={buttonRef}
                href="https://riseatseven.com/services/" 
                className="view-all-btn"
              >
                <div className="btn-text-wrapper">
                  <div className="btn-text-default">View All Services ↗</div>
                  <div className="btn-text-hover">View All Services ↗</div>
                </div>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-top"></div>

          {/* Services Grid - Two Columns */}
          <div className="services-grid">
            {/* Left Column */}
            <div className="services-column">
              {leftColumnServices.map((service, i) => (
                <ServiceRow 
                  key={service.title}
                  service={service}
                  index={i}
                  isLeft={true}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="services-column">
              {rightColumnServices.map((service, i) => (
                <ServiceRow 
                  key={service.title}
                  service={service}
                  index={leftColumnServices.length + i}
                  isLeft={false}
                />
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="mobile-view-all">
              <a href="https://riseatseven.com/services/" className="view-all-btn">
                <div className="btn-text-wrapper">
                  <div className="btn-text-default">View All Services ↗</div>
                  <div className="btn-text-hover">View All Services ↗</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
