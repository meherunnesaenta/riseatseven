import { useEffect, useRef, useState } from "react";

const cases = [
  {
    name: "SIXT",
    year: "2023–2025",
    tag: "Car rental",
    headline: "An extra 3m clicks regionally through SEO",
    color: "#cb7b3a",
    url: "https://riseatseven.com/work/sixt/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=7dd66f58bc995fde07eaf029a20fdfc7",
  },
  {
    name: "Dojo - B2B",
    year: "2021–2025",
    tag: "Card Machines",
    headline: "A B2B success story for Dojo card machines",
    color: "#fdd8c4",
    url: "https://riseatseven.com/work/dojo/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=bd66606297d902f69b5597cc577c024b",
  },
  {
    name: "Magnet Trade - B2B",
    year: "2023–2024",
    tag: "Trade",
    headline: "A full service SEO success story 170%+ increase",
    color: "#d8c4fd",
    url: "https://riseatseven.com/work/magnet-trade-b2b/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=9608e252248a4b2ddffaec7d45eede5b",
  },
  {
    name: "Leading E Sim brand",
    year: "2023–2025",
    tag: "Esims",
    headline: "Increasing brand and non brand visibility UK/ES",
    color: "#cb7b3a",
    url: "https://riseatseven.com/work/esim-case-study/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=71e6a673976355cd5f6f063b7fcef10d",
  },
  {
    name: "JD Sports",
    year: "2025",
    tag: "Trainers",
    headline: "65% up YoY in clicks for JDSports FR, IT, ES",
    color: "#3a8ccb",
    url: "https://riseatseven.com/work/jd-sports-/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=12d06985b7017711f29e3ce6aef304f3",
  },
  {
    name: "Parkdean Resorts",
    year: "2019–2025",
    tag: "Easter Breaks",
    headline: "Dominating Google and AI search",
    color: "#d2b59d",
    url: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=381c81d4a44783a7bda73dd07a3a04ee",
  },
  {
    name: "Pooky",
    year: "2025",
    tag: "Rechargeable Lights",
    headline: "Driving demand for Pooky Rechargeable Lights",
    color: "#39b0bd",
    url: "https://riseatseven.com/work/pooky/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=c8f7c6f6625c568f08115b06804143d2",
  },
  {
    name: "Parkdean Resorts",
    year: "2019–2025",
    tag: "UK holidays",
    headline: "Social search and multi channel content to #1",
    color: "#d29dd0",
    url: "https://riseatseven.com/work/parkdean-resorts-social-search/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=9d42dee239058b476893d2649a608a7d",
  },
  {
    name: "Revolution Beauty",
    year: "2022–2025",
    tag: "Beauty Dupes",
    headline: "Building the UK's leading beauty dupe brand",
    color: "#fecacc",
    url: "https://riseatseven.com/work/revolution-beauty/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=10365ef99515fa381664a5b9294a3098",
  },
  {
    name: "Lloyds Pharmacy",
    year: "2022–23",
    tag: "STI tests",
    headline: "Driving category leadership for STI tests",
    color: "#60dcfb",
    url: "https://riseatseven.com/work/lloyds-pharmacy/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=9c1e99f0f435b81cc6adf3917ee406f3",
  },
  {
    name: "PrettyLittleThing",
    year: "2021–2023",
    tag: "Outfits",
    headline: 'Driving discovery for everything "outfits" for PLT',
    color: "#fecacc",
    url: "https://riseatseven.com/work/prettylittlething/",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=014efbb529a579b3171f4116ce49e0e5",
  },
];

function isDarkColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}

function TagPill({ tag, textColor, bgColor }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: bgColor,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: "999px",
        color: textColor,
        fontSize: "13px",
        fontWeight: "500",
        padding: "8px 14px",
        lineHeight: "1",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      {tag}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    </div>
  );
}

function WorkCard({ item, isHoveredFromLeft }) {
  const [hovered, setHovered] = useState(false);
  const textColor = isDarkColor(item.color) ? "#ffffff" : "#111212";
  const isActive = hovered || isHoveredFromLeft;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "28px",
        cursor: "pointer",
        textDecoration: "none",
        position: "relative",
        transition: "transform 0.3s ease",
        transform: isActive ? "scale(0.98)" : "scale(1)",
      }}
    >
      {/* Image Container */}
      <div
        style={{
          gridColumn: "1",
          gridRow: "1",
          aspectRatio: "4/3",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: isActive ? "scale(1.08)" : "scale(1)",
          }}
        />
      </div>

      {/* Tag Pill - Top Right */}
      <div
        style={{
          gridColumn: "1",
          gridRow: "1",
          padding: "16px",
          zIndex: "3",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          pointerEvents: "none",
        }}
      >
        <TagPill tag={item.tag} textColor="#ffffff" bgColor="rgba(255,255,255,0.2)" />
      </div>

      {/* Mobile Info Overlay */}
      <div
        style={{
          gridColumn: "1",
          gridRow: "1",
          zIndex: "3",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "20px",
          position: "relative",
          pointerEvents: "none",
        }}
        className="mobile-info-overlay"
      >
        <div
          style={{
            position: "absolute",
            inset: "0px",
            background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 70%)",
            zIndex: "-1",
            borderRadius: "20px",
          }}
        />
        <div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: "500",
              marginBottom: "6px",
              opacity: "0.8",
            }}
          >
            {item.year}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: "clamp(24px, 5vw, 32px)",
              fontWeight: "500",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
            }}
          >
            {item.name}
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        style={{
          gridColumn: "1",
          gridRow: "1",
          zIndex: "4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px",
          background: item.color,
          color: textColor,
          opacity: isActive ? "1" : "0",
          transition: "opacity 0.35s ease",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            fontSize: "clamp(22px, 3vw, 38px)",
            fontWeight: "500",
            letterSpacing: "-0.03em",
            lineHeight: "1.2",
          }}
        >
          {item.headline}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <TagPill tag={item.tag} textColor={textColor} bgColor="rgba(255,255,255,0.15)" />
        </div>
      </div>
    </a>
  );
}

export default function FeaturedWorkShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredNameIndex, setHoveredNameIndex] = useState(null);
  const cardRefs = useRef([]);
  const nameRefs = useRef([]);
  const trackRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightScrollRef = useRef(null);
  const isScrollingFromRight = useRef(false);
  const isScrollingFromLeft = useRef(false);

  // Update active index based on scroll position of the right panel
  useEffect(() => {
    const rightPanel = rightScrollRef.current;
    if (!rightPanel) return;

    const updateActiveIndex = () => {
      if (isScrollingFromLeft.current) return;
      
      const scrollTop = rightPanel.scrollTop;
      const cardHeight = 380;
      const newIndex = Math.min(
        Math.floor(scrollTop / cardHeight),
        cases.length - 1
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    rightPanel.addEventListener("scroll", updateActiveIndex, { passive: true });
    updateActiveIndex();
    return () => rightPanel.removeEventListener("scroll", updateActiveIndex);
  }, [activeIndex]);

  // Scroll the name list to keep the active name centered
  useEffect(() => {
    if (!trackRef.current || !leftPanelRef.current) return;
    const nameContainer = leftPanelRef.current;
    const containerHeight = nameContainer.clientHeight;
    const nameHeight = 88;
    const totalHeight = cases.length * nameHeight;
    const maxOffset = Math.max(0, totalHeight - containerHeight + 100);
    const targetOffset = activeIndex * nameHeight - containerHeight / 2 + nameHeight / 2;
    const clampedOffset = Math.min(Math.max(targetOffset, 0), maxOffset);
    
    trackRef.current.style.transform = `translateY(-${clampedOffset}px)`;
  }, [activeIndex]);

  // Sync right panel scroll when clicking on name
  const handleNameClick = (index) => {
    if (rightScrollRef.current) {
      isScrollingFromLeft.current = true;
      const cardHeight = 380;
      rightScrollRef.current.scrollTo({
        top: index * cardHeight,
        behavior: "smooth",
      });
      setActiveIndex(index);
      setTimeout(() => {
        isScrollingFromLeft.current = false;
      }, 500);
    }
  };

  // Handle hover on left side names
  const handleNameHover = (index) => {
    setHoveredNameIndex(index);
  };

  const handleNameLeave = () => {
    setHoveredNameIndex(null);
  };

  // Sync left panel scroll when user scrolls anywhere in the section
  useEffect(() => {
    const handleWindowScroll = () => {
      if (isScrollingFromRight.current || isScrollingFromLeft.current) return;
      
      const section = document.getElementById("featured-work-section");
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const scrollPercent = (window.scrollY - rect.top) / (rect.height - window.innerHeight);
      if (scrollPercent >= 0 && scrollPercent <= 1 && rightScrollRef.current) {
        const maxScroll = rightScrollRef.current.scrollHeight - rightScrollRef.current.clientHeight;
        const targetScroll = scrollPercent * maxScroll;
        rightScrollRef.current.scrollTop = targetScroll;
      }
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <>


      <section
        id="featured-work-section"
        className="featured-section-padding"
        style={{
          padding: "48px 24px 96px",
          background: "#f5f5f3",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "#111212",
            borderRadius: "28px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "calc(100vh - 120px)",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* LEFT PANEL - Sticky Names (Desktop Only) */}
          <div
            ref={leftPanelRef}
            className="desktop-only"
            style={{
              position: "sticky",
              top: "0px",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              padding: "48px 32px",
              overflow: "hidden",
              background: "#111212",
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(20px, 2vw, 28px)",
                fontWeight: "500",
                letterSpacing: "-0.03em",
                marginBottom: "56px",
                flexShrink: "0",
              }}
            >
              Featured Work
            </h2>

            <div style={{ position: "relative", flex: "1", overflow: "hidden" }}>
              {/* Gradient Fades */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "80px",
                  background: "linear-gradient(to bottom, #111212, transparent)",
                  zIndex: "20",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "80px",
                  background: "linear-gradient(to top, #111212, transparent)",
                  zIndex: "20",
                  pointerEvents: "none",
                }}
              />

              {/* Scrolling Names Track */}
              <div
                ref={trackRef}
                style={{
                  position: "relative",
                  zIndex: "5",
                  transition: "transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
                  willChange: "transform",
                }}
              >
                {cases.map((item, idx) => (
                  <div
                    key={idx}
                    className="name-item"
                    style={{
                      padding: "12px 0",
                      marginBottom: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNameClick(idx)}
                    onMouseEnter={() => handleNameHover(idx)}
                    onMouseLeave={handleNameLeave}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "12px",
                        flexWrap: "wrap",
                        opacity: idx === activeIndex ? "1" : "0.35",
                        transition: "opacity 0.35s ease",
                      }}
                    >
                      <span
                        className="name-text"
                        style={{
                          color: "#ffffff",
                          fontSize: "clamp(28px, 4vw, 52px)",
                          fontWeight: "500",
                          letterSpacing: "-0.04em",
                          lineHeight: "0.95",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "12px",
                          fontWeight: "500",
                          opacity: "0.55",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Scrollable Cards */}
          <div
            ref={rightScrollRef}
            className="custom-scrollbar"
            style={{
              padding: "32px 28px 56px",
              maxHeight: "100vh",
              overflowY: "auto",
              background: "#111212",
            }}
          >

            {cases.map((item, idx) => (
              <div key={idx} className="card-bottom-margin">
                <WorkCard 
                  item={item} 
                  isHoveredFromLeft={hoveredNameIndex === idx}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <a
            href="https://riseatseven.com/work/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              color: "#111212",
              borderRadius: "999px",
              padding: "14px 32px",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)",
              cursor: "pointer",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderRadius = "16px";
              e.currentTarget.style.transform = "scale(0.97)";
              e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(0, 0, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderRadius = "999px";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}