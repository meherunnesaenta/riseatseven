// FeaturedWork.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featuredWorks = [
  {
    id: 8366,
    title: "SIXT",
    year: "[2023-2025]",
    description: "An extra 3m clicks regionally through SEO",
    category: "Car rental",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
    colour: "#cb7b3a",
    link: "https://riseatseven.com/work/sixt/"
  },
  {
    id: 7670,
    title: "Dojo - B2B",
    year: "[2021-2025]",
    description: "A B2B success story for Dojo card machines",
    category: "Card Machines",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
    colour: "#fdd8c4",
    link: "https://riseatseven.com/work/dojo/"
  },
  {
    id: 19708,
    title: "Magnet Trade - B2B",
    year: "[2023-2024]",
    description: "A full service SEO success story 170%+ increase",
    category: "",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
    colour: "#d8c4fd",
    link: "https://riseatseven.com/work/magnet-trade-b2b/"
  },
  {
    id: 16982,
    title: "Leading E Sim brand globally",
    year: "[2023-2025]",
    description: "Increasing brand and non brand visibility UK/ES",
    category: "Esims",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
    colour: "#cb7b3a",
    link: "https://riseatseven.com/work/esim-case-study/"
  },
  {
    id: 17067,
    title: "JD Sports",
    year: "[2025]",
    description: "65% up YoY in clicks for JDSports FR, IT, ES",
    category: "Trainers",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
    colour: "#3a8ccb",
    link: "https://riseatseven.com/work/jd-sports-/"
  },
  {
    id: 8221,
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    description: "Dominating Google and AI search",
    category: "Easter Breaks",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
    colour: "#d2b59d",
    link: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/"
  },
  {
    id: 301,
    title: "Pooky",
    year: "[2025]",
    description: "Driving demand for Pooky Rechargeable Lights",
    category: "Rechargeable Lights",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=a42d0ad7a0f8458c7b22b128993d1d8b",
    colour: "#39b0bd",
    link: "https://riseatseven.com/work/pooky/"
  },
  {
    id: 11781,
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    description: "Social search and multi channel content to #1",
    category: "UK holidays",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=39124d20abc57ddd5fe8d65337b36d2d",
    colour: "#d29dd0",
    link: "https://riseatseven.com/work/parkdean-resorts-social-search/"
  },
  {
    id: 27,
    title: "Revolution Beauty",
    year: "[2022-2025]",
    description: "Building the UK's leading beauty dupe brand",
    category: "Beauty Dupes",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=1297f5bff1af8057f9908e26956825ac",
    colour: "#fecacc",
    link: "https://riseatseven.com/work/revolution-beauty/"
  },
  {
    id: 297,
    title: "Lloyds Pharmacy",
    year: "[2022-23]",
    description: "Driving category leadership for STI tests",
    category: "STI tests",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=04aee1885f0d515e965b94f9bae6727a",
    colour: "#60dcfb",
    link: "https://riseatseven.com/work/lloyds-pharmacy/"
  },
  {
    id: 8004,
    title: "PrettyLittleThing",
    year: "[2021-2023]",
    description: "Driving discovery for everything \"outfits\" for PLT",
    category: "Outfits",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d730c3765e685a8264bc8304fc54e357",
    colour: "#fecacc",
    link: "https://riseatseven.com/work/prettylittlething/"
  }
];

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const headingRefs = useRef([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 1024) return;
    
    if (!containerRef.current || !imagesRef.current) return;

    const container = containerRef.current;
    const images = imagesRef.current;
    const headings = headingRefs.current.filter(h => h !== null);
    
    const timer = setTimeout(() => {
      const windowHeight = window.innerHeight;
      
      // Get the exact height of the images container
      const imagesInner = images.querySelector('.fw-right-inner');
      const imagesHeight = imagesInner ? imagesInner.scrollHeight : 0;
      
      // Calculate the exact scroll distance needed
      // We only need to scroll until the last image is fully visible
      const totalScrollDistance = imagesHeight - windowHeight;
      
      if (totalScrollDistance <= 0) return;
      
      // Kill existing ScrollTriggers
      ScrollTrigger.getAll().forEach(st => st.kill());
      
      // Get the section element for proper pinning
      const section = container.closest('.fw-section');
      
      // Create the scroll trigger
      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${totalScrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const yOffset = -totalScrollDistance * progress;
          gsap.set(images, { y: yOffset });
          
          // Animate headings
          headings.forEach((heading, index) => {
            let headingProgress = 0;
            const startPoint = index * 0.09;
            if (progress > startPoint) {
              headingProgress = Math.min(1, (progress - startPoint) / 0.3);
            }
            const headingY = -60 * headingProgress;
            const headingOpacity = 1 - headingProgress * 0.5;
            gsap.set(heading, { y: headingY, opacity: headingOpacity });
          });
        },
        onRefresh: (self) => {
          // Recalculate on refresh
          const newImagesHeight = imagesInner ? imagesInner.scrollHeight : 0;
          const newScrollDistance = newImagesHeight - windowHeight;
          self.end = `+=${newScrollDistance}`;
        }
      });
      
    }, 100);
    
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHeadingHover = (workId) => {
    setHoveredId(workId);
    const event = new CustomEvent('component-cursor', {
      detail: { active: true, icon: 'fa-arrow-up-right' }
    });
    window.dispatchEvent(event);
  };

  const handleHeadingLeave = () => {
    setHoveredId(null);
    const event = new CustomEvent('component-cursor', {
      detail: { active: false }
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="fw-root">
      <style>{`
        .fw-root {
          overflow-x: hidden;
          width: 100%;
        }

        .fw-section {
          width: 100%;
          padding-bottom: 0;
        }

        .fw-container {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          .fw-container {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }
        }

        /* Scroll Container - this will be pinned */
        .fw-scroll-container {
          width: 100%;
        }

        /* Main Card */
        .fw-card {
          width: 100%;
          background: #1a1a1a;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          padding: 0 1.25rem;
          gap: 1rem;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .fw-card {
            flex-direction: row;
            padding: 0 2rem;
            height: 100vh;
          }
        }

        @media (min-width: 1280px) {
          .fw-card {
            padding: 0 2.5rem;
          }
        }

        /* Left Column */
        .fw-left {
          display: none;
          width: 50%;
          height: 100%;
          overflow-y: auto;
          scrollbar-width: none;
        }
        
        .fw-left::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 1024px) {
          .fw-left {
            display: flex;
            flex-direction: column;
            width: 50%;
          }
        }

        .fw-headings-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          z-index: 10;
          width: 100%;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .fw-headings-wrapper {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }

        .fw-label {
          color: white;
          font-size: 0.875rem;
          line-height: 1.2;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.025em;
          margin-bottom: 2rem;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .fw-label {
            font-size: 1rem;
          }
        }

        .fw-headings-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          z-index: 10;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .fw-headings-list {
            gap: 2.5rem;
          }
        }

        .fw-heading-item {
          position: relative;
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .fw-heading-item.hovered {
          transform: translateX(0.75rem);
        }

        .fw-heading-link {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          text-decoration: none;
          cursor: pointer;
        }

        .fw-heading-title {
          color: white;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          white-space: normal;
        }

        @media (min-width: 1024px) {
          .fw-heading-title {
            font-size: 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .fw-heading-title {
            font-size: 3rem;
          }
        }

        .fw-heading-year {
          color: rgba(255,255,255,0.6);
          font-size: 0.7rem;
          font-weight: 500;
          margin-top: 0.5rem;
          white-space: nowrap;
        }

        /* Right Column */
        .fw-right {
          width: 100%;
          overflow: hidden;
          height: 100%;
        }

        @media (min-width: 1024px) {
          .fw-right {
            width: 50%;
          }
        }

        .fw-right-inner {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          padding: 2rem 0;
        }

        /* Mobile Label */
        .fw-mobile-label {
          margin-bottom: 1rem;
        }

        @media (min-width: 1024px) {
          .fw-mobile-label {
            display: none;
          }
        }

        .fw-mobile-label h2 {
          color: white;
          font-size: 0.875rem;
          line-height: 1.2;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        /* Work Card */
        .fw-card-link {
          display: block;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          text-decoration: none;
          cursor: pointer;
          width: 100%;
          background: #2a2a2a;
        }

        @media (min-width: 1024px) {
          .fw-card-link {
            min-height: 360px;
          }
        }

        @media (max-width: 1023px) {
          .fw-card-link {
            aspect-ratio: 4 / 3;
          }
        }

        .fw-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: inherit;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .fw-card-link:hover .fw-image-container,
        .fw-card-link.hovered-by-heading .fw-image-container {
          transform: scale(1.05);
        }

        .fw-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Tags */
        .fw-tags {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0.75rem;
          z-index: 30;
        }

        @media (min-width: 1024px) {
          .fw-tags {
            padding: 1.25rem;
          }
        }

        .fw-tag {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          gap: 0.5rem;
          padding: 0.5rem 0.875rem;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          font-size: 0.7rem;
          font-weight: 500;
          color: white;
        }

        @media (min-width: 1024px) {
          .fw-tag {
            font-size: 0.8rem;
            padding: 0.625rem 1rem;
            gap: 0.75rem;
          }
        }

        /* Content (mobile only) */
        .fw-content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0.75rem;
          z-index: 30;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
        }

        @media (min-width: 1024px) {
          .fw-content {
            display: none;
          }
        }

        .fw-content-year {
          color: white;
          font-size: 0.7rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .fw-content-title {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        .fw-gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          z-index: 20;
          pointer-events: none;
        }

        @media (min-width: 1024px) {
          .fw-gradient-overlay {
            display: none;
          }
        }

        /* Hover overlay */
        .fw-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          z-index: 40;
          padding: 1rem;
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        @media (min-width: 1024px) {
          .fw-hover-overlay {
            padding: 1.5rem;
          }
        }

        .fw-card-link:hover .fw-hover-overlay,
        .fw-card-link.hovered-by-heading .fw-hover-overlay {
          opacity: 1;
        }

        .fw-hover-description {
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.3;
          color: #111212;
        }

        @media (min-width: 1024px) {
          .fw-hover-description {
            font-size: 1.1rem;
          }
        }

        .fw-hover-tag {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          gap: 0.5rem;
          padding: 0.4rem 0.75rem;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          font-size: 0.7rem;
          font-weight: 500;
          color: #111212;
        }

        /* Bottom Button */
        .fw-bottom-btn {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }

        .fw-explore-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: #1a1a1a;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          text-decoration: none;
          transition: border-radius 0.3s ease;
          cursor: pointer;
          border: none;
          white-space: nowrap;
        }

        .fw-explore-btn:hover {
          border-radius: 0.75rem;
        }

        .fw-btn-text-wrapper {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .fw-btn-default,
        .fw-btn-hover {
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .fw-btn-hover {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(100%);
        }

        .fw-explore-btn:hover .fw-btn-default {
          transform: translateY(-100%);
        }

        .fw-explore-btn:hover .fw-btn-hover {
          transform: translateY(0);
        }

        /* Mobile specific */
        @media (max-width: 1023px) {
          .fw-card {
            height: auto;
            min-height: auto;
          }
          
          .fw-headings-wrapper {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>

      <div className="fw-section">
        <div className="fw-container">
          <div ref={containerRef} className="fw-scroll-container">
            <div className="fw-card">
              {/* Left Column - Headings */}
              <div className="fw-left">
                <div className="fw-headings-wrapper">
                  <h2 className="fw-label">Featured Work</h2>
                  <div className="fw-headings-list">
                    {featuredWorks.map((work, index) => (
                      <div
                        key={work.id}
                        ref={(el) => headingRefs.current[index] = el}
                        className={`fw-heading-item ${hoveredId === work.id ? 'hovered' : ''}`}
                      >
                        <a
                          href={work.link}
                          className="fw-heading-link"
                          onMouseEnter={() => handleHeadingHover(work.id)}
                          onMouseLeave={handleHeadingLeave}
                        >
                          <span className="fw-heading-title">{work.title}</span>
                          <span className="fw-heading-year">{work.year}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Images */}
              <div ref={imagesRef} className="fw-right">
                <div className="fw-right-inner">
                  <div className="fw-mobile-label">
                    <h2>Featured Work</h2>
                  </div>

                  {featuredWorks.map((work) => (
                    <a
                      key={work.id}
                      href={work.link}
                      className={`fw-card-link ${hoveredId === work.id ? 'hovered-by-heading' : ''}`}
                      onMouseEnter={() => handleHeadingHover(work.id)}
                      onMouseLeave={handleHeadingLeave}
                    >
                      <div className="fw-image-container">
                        <img 
                          src={work.image} 
                          alt={work.title} 
                          loading="lazy"
                        />
                      </div>

                      {work.category && (
                        <div className="fw-tags">
                          <div className="fw-tag">
                            <span>🔍</span>
                            <span>{work.category}</span>
                            <span>📈</span>
                          </div>
                        </div>
                      )}

                      <div className="fw-content">
                        <div className="fw-content-year">{work.year}</div>
                        <div className="fw-content-title">{work.title}</div>
                      </div>

                      <div className="fw-gradient-overlay" />

                      <div 
                        className="fw-hover-overlay" 
                        style={{ backgroundColor: work.colour }}
                      >
                        <div className="fw-hover-description">{work.description}</div>
                        {work.category && (
                          <div className="fw-hover-tag">
                            <span>🔍</span>
                            <span>{work.category}</span>
                            <span>📈</span>
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="fw-bottom-btn">
            <a href="https://riseatseven.com/work/" className="fw-explore-btn">
              <div className="fw-btn-text-wrapper">
                <div className="fw-btn-default">Explore Our Work ↗</div>
                <div className="fw-btn-hover">Explore Our Work ↗</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}