// LegacySection.jsx
import React, { useEffect, useRef, useState } from 'react';

const LegacySection = () => {
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const cardsData = [
    {
      id: 0,
      bgColor: "#000000",
      textColor: "#ffffff",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg",
      title: "Pioneers",
      description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      description2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo."
    },
    {
      id: 1,
      bgColor: "#7ee8c8",
      textColor: "#1a1a1a",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG",
      title: "Award Winning",
      description: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
      description2: null
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#1a1a1a",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png",
      title: "Speed",
      description: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
      description2: null
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // پروgressive scroll animation - একটার পর একটা
  useEffect(() => {
    if (isMobile) return;

    const cards = document.querySelectorAll('.stack-card-desktop');
    const trigger = triggerRef.current;
    
    if (!cards.length || !trigger) return;

    let ticking = false;

    const animateCards = () => {
      const rect = trigger.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Total scroll area (300vh)
      const totalScrollHeight = windowHeight * 3;
      const scrolled = -rect.top;
      
      // Progress 0 to 1
      let progress = scrolled / totalScrollHeight;
      progress = Math.min(0.99, Math.max(0, progress));
      
      // Each card has its own progress range
      // Card 0: 0% to 33% scroll - moves out first
      // Card 1: 33% to 66% scroll - moves out second  
      // Card 2: 66% to 100% scroll - moves out last
      
      cards.forEach((card, idx) => {
        // Define scroll range for each card
        const startProgress = idx * 0.33;
        const endProgress = (idx + 1) * 0.33;
        
        // Calculate card-specific progress
        let cardProgress = 0;
        if (progress >= startProgress) {
          cardProgress = (progress - startProgress) / (endProgress - startProgress);
          cardProgress = Math.min(1, Math.max(0, cardProgress));
        }
        
        // Easing for smoother motion
        const eased = Math.pow(cardProgress, 1.2);
        
        // Target transforms
        const startY = 0;
        const startRot = 0;
        const endY = -80;
        const endRot = -45;
        
        const currentY = startY + (endY - startY) * eased;
        const currentRot = startRot + (endRot - startRot) * eased;
        
        // Opacity effect
        const opacity = 1 - eased * 0.8;
        
        card.style.transform = `translateY(${currentY}vh) rotate(${currentRot}deg)`;
        card.style.opacity = opacity;
      });
      
      // Header hide/show
      const shouldHide = progress > 0.05 && progress < 0.95;
      window.dispatchEvent(new CustomEvent('component-header', { 
        detail: { hideHeaderOverride: shouldHide } 
      }));
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          animateCards();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animateCards();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const Card = ({ data, rotateAngle = 0, isDesktop = false, index = 0 }) => {
    return (
      <div 
        className="card"
        style={{
          backgroundColor: data.bgColor,
          color: data.textColor,
          transform: isDesktop ? `rotate(${rotateAngle}deg)` : 'none',
        }}
      >
        <div className="card-image">
          <img src={data.image} alt={data.title} loading="lazy" />
        </div>
        <h2 className="card-title">{data.title}</h2>
        <div className="card-description">
          <p>{data.description}</p>
          {data.description2 && <p>{data.description2}</p>}
        </div>
      </div>
    );
  };

  // Mobile Carousel (with dots and progress bar)
  const MobileCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    };

    const prevSlide = () => {
      setActiveIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX.current - touchEndX.current > 50) {
        nextSlide();
      }
      if (touchStartX.current - touchEndX.current < -50) {
        prevSlide();
      }
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    return (
      <div className="mobile-carousel">
        <div className="mobile-header">
          <h2>Legacy In The Making</h2>
        </div>
        <div 
          className="carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cardsData.map((card, idx) => (
              <div key={card.id} className="carousel-slide">
                <Card data={card} index={idx} />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {cardsData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
        <div className="carousel-progress">
          <div 
            className="progress-bar"
            style={{ width: `${((activeIndex + 1) / cardsData.length) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="legacy-section">
      {/* Mobile View */}
      <div className="mobile-view">
        <MobileCarousel />
      </div>

      {/* Desktop View - Sequential Card Animation */}
      <div className="desktop-view">
        <div className="desktop-scroll-area" ref={triggerRef}>
          <div className="desktop-sticky">
            <h2 className="desktop-title">Legacy In The Making</h2>
            <div className="desktop-cards-container">
              {cardsData.map((card, index) => (
                <div 
                  key={card.id}
                  className="stack-card-desktop"
                  style={{ 
                    zIndex: cardsData.length - index,
                    transition: 'transform 0.1s linear, opacity 0.1s linear'
                  }}
                >
                  <div className="card-wrapper">
                    <Card 
                      data={card} 
                      rotateAngle={4 + (index * 4)} 
                      isDesktop={true} 
                      index={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .legacy-section {
          width: 100%;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Mobile Styles */
        .mobile-view {
          display: block;
          background: #fefefe;
        }
        .desktop-view {
          display: none;
        }

        .mobile-carousel {
          padding: 40px 16px 60px;
          background: #fefefe;
          overflow: hidden;
        }

        .mobile-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .mobile-header h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #1a1a1a;
        }

        .carousel-container {
          overflow: hidden;
          border-radius: 24px;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.3s ease-out;
        }

        .carousel-slide {
          flex-shrink: 0;
          width: 100%;
          padding: 0 8px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          padding: 0;
        }

        .dot.active {
          width: 24px;
          border-radius: 4px;
          background: #000;
        }

        .carousel-progress {
          width: 100%;
          height: 3px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          margin-top: 16px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: #000;
          border-radius: 3px;
          transition: width 0.3s ease-out;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .mobile-view {
            display: none;
          }
          .desktop-view {
            display: block;
          }

          .desktop-scroll-area {
            height: 300vh;
            position: relative;
          }

          .desktop-sticky {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: #fefefe;
          }

          .desktop-title {
            position: absolute;
            top: 32px;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 20;
            font-size: 1.25rem;
            font-weight: 500;
            color: #1a1a1a;
            background: rgba(0, 0, 0, 0.04);
            backdrop-filter: blur(4px);
            padding: 6px 20px;
            width: fit-content;
            margin: 0 auto;
            border-radius: 40px;
          }

          .desktop-cards-container {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .stack-card-desktop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            will-change: transform, opacity;
          }

          .card-wrapper {
            width: 100%;
            max-width: 520px;
            margin: 0 auto;
            padding: 0 20px;
          }
        }

        /* Card Styles */
        .card {
          text-align: center;
          border-radius: 28px;
          padding: 32px 24px;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          width: 180px;
          height: 180px;
          margin: 0 auto 20px;
          border-radius: 20px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .card-description p {
          margin-bottom: 0.75rem;
        }

        @media (min-width: 1280px) {
          .card-wrapper {
            max-width: 600px;
          }
          .card-title {
            font-size: 2.5rem;
          }
          .card-image {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default LegacySection;