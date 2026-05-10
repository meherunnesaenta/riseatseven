import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeBanner() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const marqueeAnimationRef = useRef(null);
  const scrollAnimationRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    // ফাংশন যা সব marquee আইটেম রিটার্ন করবে
    const getMarqueeItems = () => {
      return gsap.utils.toArray(trackRef.current.children);
    };

    // ১. MARQUEE EFFECT - সবসময় ডানে/বামে ঘুরতে থাকবে (infinite horizontal loop)
    const startMarqueeEffect = () => {
      const items = getMarqueeItems();
      if (!items.length) return null;

      // টোটাল প্রস্থ ক্যালকুলেট করি
      let totalWidth = 0;
      items.forEach(item => {
        totalWidth += item.offsetWidth;
        const style = getComputedStyle(item);
        totalWidth += parseFloat(style.marginLeft) || 0;
        totalWidth += parseFloat(style.marginRight) || 0;
      });

      const speed = 0.8; // গতি (পিক্সেল/সেকেন্ড)
      const duration = totalWidth / speed;

      // শুরুতে সব আইটেমকে ০ পজিশনে সেট করি
      gsap.set(items, { x: 0 });

      // ইনফিনিট লুপ অ্যানিমেশন (সবসময় বাম দিকে যাবে)
      const animation = gsap.to(items, {
        x: -totalWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const parsed = parseFloat(x);
            // মডুলার ম্যাথ ব্যবহার করে সীমাহীন লুপ তৈরি করি
            return (((parsed % totalWidth) - totalWidth) % totalWidth) + "px";
          },
        },
      });

      return animation;
    };

    // Marquee effect শুরু করি
    marqueeAnimationRef.current = startMarqueeEffect();

    // ২. SCROLL EFFECT - স্ক্রোল করলে পুরো container একটু move হবে
    ScrollTrigger.matchMedia({
      '(pointer: fine)': () => {
        // শুধু মাউজ ইউজারদের জন্য (ডেস্কটপ)
        scrollAnimationRef.current = gsap.to(containerRef.current, {
          xPercent: -20, // স্ক্রোল করলে 20% বামে সরে যাবে
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 100%',
            end: 'bottom -100%',
            scrub: 1.2, // smooth scrolling
            invalidateOnRefresh: true,
          },
          ease: "none",
        });
      },
      '(pointer: coarse)': () => {
        // টাচ ডিভাইসে (মোবাইল/ট্যাবলেট) স্ক্রল ইফেক্ট বন্ধ
        if (scrollAnimationRef.current) {
          scrollAnimationRef.current.kill();
        }
        gsap.set(containerRef.current, { xPercent: 0 });
      }
    });

    // রিসাইজ হলে marquee রিক্যালকুলেট করি
    const handleResize = () => {
      if (marqueeAnimationRef.current) {
        marqueeAnimationRef.current.kill();
        marqueeAnimationRef.current = startMarqueeEffect();
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // ক্লিনআপ
    return () => {
      if (marqueeAnimationRef.current) marqueeAnimationRef.current.kill();
      if (scrollAnimationRef.current) scrollAnimationRef.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // আইটেম তৈরি করি (original HTML এর প্যাটার্ন অনুসারে)
  const createMarqueeItems = () => {
    const items = [];
    const contentPairs = [
      { 
        text: "Chasing Consumers", 
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=f220bffc8303450846250315e3fcb457" 
      },
      { 
        text: "Not Algorithms", 
        img: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=cb2016613a41d1153d28e086f39c0c72" 
      }
    ];

    // Original HTML এর মত ৮-১০ বার রিপিট করি যাতে seamless loop হয়
    for (let repeat = 0; repeat < 10; repeat++) {
      for (let i = 0; i < contentPairs.length; i++) {
        const pair = contentPairs[i];
        items.push(
          <div 
            key={`${repeat}-${i}`}
            className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5"
            style={{ flexShrink: 0 }}
          >
            <h2 className="marquee-heading">
              {pair.text}
            </h2>
            <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <img 
                    src={pair.img}
                    alt={pair.text}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    return items;
  };

  return (
    <div className="marquee-global-wrapper">
      <section className="w-full py-0">
        <div className="w-full px-0">
          <a 
            href="https://riseatseven.com/contact/"
            className="w-full relative overflow-hidden block"
            onMouseEnter={() => {
              // কাস্টম কার্সর ইফেক্টের জন্য (যদি লাগে)
              const event = new CustomEvent('component-cursor-button', { 
                detail: { active: true, text: 'Send Us Your Brief' } 
              });
              window.dispatchEvent(event);
            }}
            onMouseLeave={() => {
              const event = new CustomEvent('component-cursor-button', { 
                detail: { active: false, text: false, url: false } 
              });
              window.dispatchEvent(event);
            }}
          >
            {/* কন্টেইনার - স্ক্রল ইফেক্ট এখানে apply হবে */}
            <div 
              ref={containerRef}
              className="w-[120vw] flex relative z-0 overflow-hidden"
              style={{ transform: 'translate(0%, 0%)' }}
            >
              {/* ট্র্যাক - marquee effect এখানে apply হবে */}
              <div 
                ref={trackRef}
                className="flex"
              >
                {createMarqueeItems()}
              </div>
            </div>
          </a>
        </div>
      </section>

      <style>{`
        .marquee-global-wrapper {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        .marquee-heading {
          display: inline-flex;
          flex-wrap: wrap;
          text-align: left;
          justify-content: start;
          color: #1a1a1a;
          font-family: system-ui, -apple-system, 'Inter', 'Segoe UI', sans-serif;
          font-weight: 500;
          letter-spacing: -0.025em;
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 0.9;
          margin: 0;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .marquee-heading {
            font-size: clamp(3.5rem, 8vw, 6rem);
          }
        }

        @media (min-width: 1024px) {
          .marquee-heading {
            font-size: clamp(4rem, 6vw, 7rem);
          }
        }

        @media (min-width: 1280px) {
          .marquee-heading {
            font-size: 8rem;
          }
        }

        .shrink-0 {
          flex-shrink: 0;
        }
        
        .overflow-hidden {
          overflow: hidden;
        }
        
        .relative {
          position: relative;
        }
        
        .absolute {
          position: absolute;
        }
        
        .top-0 {
          top: 0;
        }
        
        .left-0 {
          left: 0;
        }
        
        .w-full {
          width: 100%;
        }
        
        .h-full {
          height: 100%;
        }
        
        .object-cover {
          object-fit: cover;
        }
        
        .rounded-2xl {
          border-radius: 1rem;
        }
        
        .gap-x-4 {
          column-gap: 1rem;
        }
        
        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        
        .pb-3 {
          padding-bottom: 0.75rem;
        }
        
        .w-\\[20vw\\] {
          width: 20vw;
        }

        @media (min-width: 768px) {
          .md\\:w-\\[15vw\\] {
            width: 15vw;
          }
        }

        @media (min-width: 1024px) {
          .lg\\:pt-5 {
            padding-top: 1.25rem;
          }
          .lg\\:pb-10 {
            padding-bottom: 2.5rem;
          }
          .lg\\:gap-x-10 {
            column-gap: 2.5rem;
          }
          .lg\\:px-5 {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
          .lg\\:rounded-3xl {
            border-radius: 1.5rem;
          }
          .lg\\:w-\\[12vw\\] {
            width: 12vw;
          }
          .lg\\:mb-10 {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}