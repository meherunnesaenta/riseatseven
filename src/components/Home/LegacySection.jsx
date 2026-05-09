import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const LegacySection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const itemsRef = useRef([]);
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    {
      id: 0,
      bgColor: "bg-black",
      bgClass: "bg-black",
      textColor: "text-white",
      headingColor: "text-white",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg",
      imageWebp: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=42bab5d18e9b50941a53e67e251f6c9f",
      title: "Pioneers",
      description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      description2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo."
    },
    {
      id: 1,
      bgColor: "bg-mint",
      bgClass: "bg-mint",
      textColor: "text-grey-900",
      headingColor: "text-grey-900",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG",
      imageWebp: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=adefb293215e963a4d99827a8910457b",
      title: "Award Winning",
      description: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
      description2: null
    },
    {
      id: 2,
      bgColor: "bg-white",
      bgClass: "bg-white",
      textColor: "text-grey-900",
      headingColor: "text-grey-900",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png",
      imageWebp: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=7e53aac87fca12e41a4aa3b3d4961e31",
      title: "Speed",
      description: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
      description2: null
    }
  ];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize Swiper for mobile
  useEffect(() => {
    if (isMobile && swiperRef.current && !swiperInstanceRef.current) {
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 700,
        breakpoints: {
          640: {
            slidesPerView: 1.55,
          },
        },
        pagination: {
          el: `.js-pagination-43`,
          type: 'progressbar',
        },
      });
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, [isMobile]);

  // GSAP Scroll Animation for Desktop
  useEffect(() => {
    if (isMobile || !triggerRef.current) return;

    const items = itemsRef.current;

    gsap.to(items, {
      yPercent: -100,
      rotate: -50,
      stagger: 1,
      ease: 'power2.inOut',
      duration: 3,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 30%',
        end: 'bottom -50%',
        scrub: true,
        onEnter: () => {
          window.dispatchEvent(new CustomEvent('component-header', { detail: { hideHeaderOverride: true } }));
        },
        onLeave: () => {
          window.dispatchEvent(new CustomEvent('component-header', { detail: { hideHeaderOverride: false } }));
        },
        onLeaveBack: () => {
          window.dispatchEvent(new CustomEvent('component-header', { detail: { hideHeaderOverride: false } }));
        },
        onEnterBack: () => {
          window.dispatchEvent(new CustomEvent('component-header', { detail: { hideHeaderOverride: true } }));
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  const Card = ({ data, rotateAngle = 0, isDesktop = false }) => {
    const getBgStyles = () => {
      switch(data.bgClass) {
        case 'bg-black':
          return { backgroundColor: '#000000', color: '#ffffff' };
        case 'bg-mint':
          return { backgroundColor: '#7ee8c8', color: '#1a1a1a' };
        case 'bg-white':
          return { backgroundColor: '#ffffff', color: '#1a1a1a' };
        default:
          return { backgroundColor: '#000000', color: '#ffffff' };
      }
    };

    const bgStyles = getBgStyles();

    return (
      <div 
        className="w-full flex-col text-center rounded-2xl grid p-7 lg:items-center lg:rounded-3xl lg:aspect-square xl:py-10 xl:px-14"
        style={{
          ...bgStyles,
          display: 'grid',
          borderRadius: '16px',
          padding: '28px 20px',
          transform: isDesktop ? `rotate(${rotateAngle}deg)` : 'none'
        }}
      >
        <div className="col-start-1 row-start-1 flex flex-col text-center lg:items-center gap-y-3 md:gap-y-5">
          
          {/* Image Container */}
          <div className="rounded-xl overflow-hidden w-full aspect-4/3 relative lg:aspect-1/1 lg:rounded-2xl lg:w-48 4xl:w-56">
            <picture>
              <source type="image/webp" srcSet={data.imageWebp} />
              <img 
                src={data.image}
                alt={data.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity"
                style={{ opacity: 1 }}
                loading="lazy"
                onLoad={(e) => e.target.style.opacity = '1'}
              />
            </picture>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-y-4">
            <h2 
              className="inline-flex flex-wrap text-balance relative text-center justify-center text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight"
              style={{ color: bgStyles.color }}
            >
              {data.title}
            </h2>
            
            <div className="w-full">
              <p className="text-sm font-sans-primary leading-normal text-pretty mb-5 lg:text-base" style={{ color: bgStyles.color, marginBottom: data.description2 ? '20px' : '0' }}>
                {data.description}
              </p>
              {data.description2 && (
                <p className="text-sm font-sans-primary leading-normal text-pretty mb-0 lg:text-base" style={{ color: bgStyles.color }}>
                  {data.description2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Mobile View
  const MobileView = () => (
    <div className="w-full py-10 px-4 md:px-7 gap-y-3 md:gap-y-5">
      <div className="flex justify-center mb-3">
        <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
          Legacy In The Making
        </h2>
      </div>

      <div className="w-full swiper js-carousel-43" ref={swiperRef}>
        <div className="!ease-smooth flex swiper-wrapper">
          {cardsData.map((card) => (
            <div key={card.id} className="!flex !h-auto swiper-slide">
              <Card data={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full relative mt-3">
        <div className="w-full swiper-pagination js-pagination-43"></div>
      </div>
    </div>
  );

  // Desktop View
  const DesktopView = () => (
    <div className="w-full relative hidden lg:flex js-trigger-43" ref={triggerRef} style={{ height: '300vh' }}>
      <div className="w-full h-screen-fix h-svh sticky top-0 left-0 overflow-hidden">
        
        {/* Header */}
        <div className="absolute top-0 left-0 w-full flex justify-center mt-10 3xl:mt-16">
          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
            Legacy In The Making
          </h2>
        </div>

        {/* Cards */}
        {cardsData.map((card, index) => (
          <div 
            key={card.id}
            ref={(el) => itemsRef.current[index] = el}
            className="w-full h-full absolute left-0 flex items-center justify-center top-8 js-item-43"
            style={{ zIndex: cardsData.length - index }}
          >
            <div className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl">
              <Card data={card} rotateAngle={4 + (index * 4)} isDesktop={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Mobile - visible below lg */}
      <div className="lg:hidden">
        <MobileView />
      </div>

      {/* Desktop - visible lg and above */}
      <div className="hidden lg:flex">
        <DesktopView />
      </div>

      {/* Global Styles */}
      <style jsx>{`
        .w-full {
          width: 100%;
        }
        .h-svh {
          height: 100vh;
        }
        .sticky {
          position: sticky;
        }
        .top-0 {
          top: 0;
        }
        .left-0 {
          left: 0;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .absolute {
          position: absolute;
        }
        .relative {
          position: relative;
        }
        .flex {
          display: flex;
        }
        .grid {
          display: grid;
        }
        .hidden {
          display: none;
        }
        .items-center {
          align-items: center;
        }
        .justify-center {
          justify-content: center;
        }
        .flex-col {
          flex-direction: column;
        }
        .text-center {
          text-align: center;
        }
        .rounded-2xl {
          border-radius: 16px;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .object-cover {
          object-fit: cover;
        }
        .transition-opacity {
          transition: opacity 0.3s ease;
        }
        
        @media (min-width: 1024px) {
          .lg\\:flex {
            display: flex;
          }
          .lg\\:hidden {
            display: none;
          }
          .lg\\:items-center {
            align-items: center;
          }
          .lg\\:rounded-3xl {
            border-radius: 24px;
          }
          .lg\\:aspect-square {
            aspect-ratio: 1 / 1;
          }
          .lg\\:w-48 {
            width: 12rem;
          }
        }

        /* Swiper Styles */
        .swiper {
          width: 100%;
          overflow: hidden;
        }
        .swiper-wrapper {
          display: flex;
        }
        .swiper-slide {
          flex-shrink: 0;
          height: auto;
          display: flex;
        }
        .swiper-pagination-progressbar {
          background: rgba(0, 0, 0, 0.1);
          height: 3px;
          border-radius: 3px;
        }
        .swiper-pagination-progressbar-fill {
          background: #000;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default LegacySection;