// ClientMarquee.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo1 from "../../assets/client-logos/logo1.png";
import logo2 from "../../assets/client-logos/logo2.png";
import logo3 from "../../assets/client-logos/logo3.png";
import logo4 from "../../assets/client-logos/logo4.png";
import logo5 from "../../assets/client-logos/logo5.png";
import logo6 from "../../assets/client-logos/logo6.png";
import logo7 from "../../assets/client-logos/logo7.png";
import logo8 from "../../assets/client-logos/logo8.png";
import logo9 from "../../assets/client-logos/logo9.png";
import logo10 from "../../assets/client-logos/logo10.png";
import logo11 from "../../assets/client-logos/logo11.png";

gsap.registerPlugin(ScrollTrigger);


// Client logos data 
const clientLogos = [
  {
    id: 1,
    type: "image",
    image: logo1
  },
  {
    id: 2,
    type: "image", 
    image: logo2
  },
  {
    id: 3,
    type: "image",
    image: logo3
  },
  {
    id: 4,
    type: "image",
    image:logo4
  },
  {
    id: 5,
    type: "image",
    image: logo5
  },
  {
    id: 6,
    type: "image",
    image: logo6
  },
  {
    id: 7,
    type: "image",
    image: logo7
  },
  {
    id: 8,
    type: "image",
    image: logo8
  },
  {
    id: 9,
    type: "image",
    image: logo9
  },
  {
    id: 10,
    type: "image",
    image: logo10
  },
  {
    id: 11,
    type: "image",
    image: logo11
  }
];


export default function ClientMarquee() {
  const marqueeTrackRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  // Create 4 copies of logos for seamless loop
  const allLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    // CSS-based infinite marquee animation (right to left)
    if (marqueeTrackRef.current) {
      const track = marqueeTrackRef.current;
      const totalWidth = track.scrollWidth / 2;
      
      // Set CSS animation - continuous right to left
      track.style.animation = `marquee-scroll ${totalWidth / 50}s linear infinite`;
      
      animationRef.current = track.style.animation;
    }

    // Scroll animation: moves RIGHT when scrolling UP, moves LEFT when scrolling DOWN
    // This creates a parallax effect opposite to scroll direction
    if (scrollContainerRef.current) {
      ScrollTrigger.matchMedia({
        '(pointer: fine)': () => {
          // Calculate total width for the scroll end position
          const track = marqueeTrackRef.current;
          const totalWidth = track ? track.scrollWidth / 2 : 5000;
          
          // Scroll animation - moves in OPPOSITE direction of scroll
          // When scroll down (positive Y) -> move left (negative X)
          // When scroll up (negative Y) -> move right (positive X)
          scrollAnimationRef.current = gsap.to(scrollContainerRef.current, {
            x: () => {
              // Move up to 5% of total width in opposite direction
              // This creates a speed effect
              return -(totalWidth * 0.08);
            },
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: 1.2, // Smooth scrubbing
              invalidateOnRefresh: true,
            },
            ease: "none",
          });
        },
        '(pointer: coarse)': () => {
          // Touch devices - no scroll effect
          if (scrollAnimationRef.current) {
            scrollAnimationRef.current.kill();
          }
          gsap.set(scrollContainerRef.current, { x: 0 });
        }
      });
    }

    // Handle window resize - restart animation
    const handleResize = () => {
      if (marqueeTrackRef.current) {
        const track = marqueeTrackRef.current;
        const totalWidth = track.scrollWidth / 2;
        track.style.animation = `none`;
        // Force reflow
        track.offsetHeight;
        track.style.animation = `marquee-scroll ${Math.max(totalWidth / 50, 30)}s linear infinite`;
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (marqueeTrackRef.current) {
        marqueeTrackRef.current.style.animation = 'none';
      }
      if (scrollAnimationRef.current) {
        scrollAnimationRef.current.kill();
      }
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === scrollContainerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const LogoItem = ({ logo, index }) => {
    return (
      <div className="logo-item">
        <div className="logo-inner">
          {logo.type === "svg" ? (
            <div 
              className="aspect-20/9"
              dangerouslySetInnerHTML={{ __html: logo.svg }}
            />
          ) : (
            <div className="aspect-20/9">
              <img 
                src={logo.image} 
                alt={`Client logo ${logo.id}`}
                loading="lazy"
                className="logo-image"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="client-marquee-root">
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .client-marquee-root {
          overflow-x: hidden;
          width: 100%;
         
        }

        .client-marquee-section {
          width: 100%;
          padding-top: 1.5rem;
        }

        @media (min-width: 768px) {
          .client-marquee-section {
            padding-top: 2rem;
          }
        }

        @media (min-width: 1280px) {
          .client-marquee-section {
            padding-top: 3rem;
          }
        }

        .client-marquee-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          .client-marquee-container {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }
        }

        .client-marquee-grid {
          display: grid;
          grid-template-columns: repeat(20, 1fr);
          width: 100%;
          gap: 0.5rem;
        }

        /* Label Column */
        .client-marquee-label-col {
          grid-column: span 20;
          display: flex;
          align-items: center;
        }

        @media (min-width: 768px) {
          .client-marquee-label-col {
            grid-column: span 4;
          }
        }

        @media (min-width: 1024px) {
          .client-marquee-label-col {
            grid-column: span 3;
          }
        }

        @media (min-width: 1280px) {
          .client-marquee-label-col {
            grid-column: span 2;
          }
        }

        .client-marquee-label {
          color: #1a1a1a;
          font-size: 0.875rem;
          line-height: 1.2;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.025em;
          margin: 0;
        }

        @media (min-width: 640px) {
          .client-marquee-label {
            max-width: 8rem;
          }
        }

        /* Marquee Column */
        .client-marquee-marquee-col {
          grid-column: span 20;
          position: relative;
        }

        @media (min-width: 768px) {
          .client-marquee-marquee-col {
            grid-column: span 16;
          }
        }

        @media (min-width: 1024px) {
          .client-marquee-marquee-col {
            grid-column: span 17;
          }
        }

        @media (min-width: 1280px) {
          .client-marquee-marquee-col {
            grid-column: span 18;
          }
        }

        /* Marquee Wrapper */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .marquee-scroll-container {
          display: flex;
          position: relative;
          z-index: 0;
          overflow: visible;
          width: 100%;
          will-change: transform;
        }

        .marquee-track {
          display: flex;
          flex-shrink: 0;
          will-change: transform;
        }

        .logo-item {
          width: 4rem;
          padding: 0.75rem;
          position: relative;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .logo-item {
            width: 5rem;
            padding: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .logo-item {
            width: 6rem;
            padding: 1.25rem 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .logo-item {
            width: 7rem;
            padding: 1.5rem;
          }
        }

        .logo-inner {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-inner svg,
        .logo-inner img {
          width: 100%;
          height: auto;
          object-fit: contain;
          color: #1a1a1a;
          fill: #1a1a1a;
        }

        .logo-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Aspect ratio container */
        .aspect-20\\/9 {
          aspect-ratio: 20 / 9;
          width: 100%;
          height: auto;
        }

        /* Pure blur effects - no background color, just blur */
/* Blur effects - stronger gradient fade */
.section-blur {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 6rem;
  z-index: 2;
  pointer-events: none;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.section-blur--left {
  left: 0;
  background: linear-gradient(to right, rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.3), transparent);
  mask: linear-gradient(to right, black, transparent);
  -webkit-mask: linear-gradient(to right, black, transparent);
}

.section-blur--right {
  right: 0;
  background: linear-gradient(to left, rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.3), transparent);
  mask: linear-gradient(to left, black, transparent);
  -webkit-mask: linear-gradient(to left, black, transparent);
}

@media (min-width: 640px) {
  .section-blur {
    width: 8rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  .section-blur--left {
    background: linear-gradient(to right, rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.2), transparent);
  }
  .section-blur--right {
    background: linear-gradient(to left, rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.2), transparent);
  }
}

@media (min-width: 1024px) {
  .section-blur {
    width: 10rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

/* Label Column with border separator */
.client-marquee-label-col {
  grid-column: span 20;
  display: flex;
  align-items: center;
  position: relative;
}

/* Add a subtle border separator on the right side of label */
.client-marquee-label-col::after {
  content: '';
  position: absolute;
  right: -0.5rem;
  top: 10%;
  height: 80%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.15), transparent);
}

@media (min-width: 768px) {
  .client-marquee-label-col {
    grid-column: span 4;
  }
  .client-marquee-label-col::after {
    right: -0.75rem;
  }
}

@media (min-width: 1024px) {
  .client-marquee-label-col {
    grid-column: span 3;
  }
}

@media (min-width: 1280px) {
  .client-marquee-label-col {
    grid-column: span 2;
  }
  .client-marquee-label-col::after {
    right: -1rem;
  }
}

/* Optional: Add a soft border-right for the column */
.client-marquee-label {
  color: #1a1a1a;
  font-size: 0.875rem;
  line-height: 1.2;
  font-family: system-ui, -apple-system, 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: -0.025em;
  margin: 0;
  padding-right: 1rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
      `}</style>

      <section className="client-marquee-section">
        <div className="client-marquee-container">
          <div className="client-marquee-grid">
            {/* Label Column */}
            <div className="client-marquee-label-col">
              <h2 className="client-marquee-label">The agency behind ...</h2>
            </div>

            {/* Marquee Column */}
            <div className="client-marquee-marquee-col">
              <div className="marquee-wrapper">
                {/* Left Blur Effect */}
                <div className="section-blur section-blur--left" />
                
                {/* Right Blur Effect */}
                <div className="section-blur section-blur--right" />
                
                {/* Scroll Container with horizontal movement */}
                <div 
                  className="marquee-scroll-container js-container-74" 
                  ref={scrollContainerRef}
                >
                  {/* Marquee Track with infinite scroll */}
                  <div 
                    className="marquee-track" 
                    ref={marqueeTrackRef}
                  >
                    {allLogos.map((logo, index) => (
                      <LogoItem  key={`${logo.id}-${index}`} logo={logo} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}