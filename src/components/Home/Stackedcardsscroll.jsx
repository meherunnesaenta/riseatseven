import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    className: "card--dark",
    tag: "Who we are",
    title: "Pioneers",
    text: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
  },
  {
    className: "card--mint",
    tag: "What we do",
    title: "Winning",
    text: "A trophy bath full of 79 awards. Voted The Drum's best agency outside of London. Official judges for Global Search Awards and Global Content Marketing Awards.",
  },
  {
    className: "card--cream",
    tag: "Our mission",
    title: "Legacy",
    text: "We're on a mission to be the first search-first agency to win a Cannes Lion — disrupting the status quo one campaign at a time.",
  },
  {
    className: "card--navy",
    tag: "Our future",
    title: "Beyond",
    text: "Building tomorrow's playbooks today. We don't follow trends — we write them. Join us as we redefine what search means for culture.",
  },
];

export default function StackedCardsScroll() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const total = CARDS.length;

  useEffect(() => {
    const cardEls = cardRefs.current;

    // Set initial stacked positions
    cardEls.forEach((card, i) => {
      gsap.set(card, {
        y: i * 14,
        rotate: (i - 1) * 3,
        scale: 1 - i * 0.04,
        zIndex: total - i,
        opacity: 1,
      });
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          const steps = total - 1;
          const step = self.progress * steps;

          cardEls.forEach((card, i) => {
            if (i === 0) {
              const p = Math.max(0, Math.min(1, step));
              gsap.set(card, {
                y: 14 * i - p * 600,
                rotate: (i - 1) * 3,
                opacity: 1 - p,
                scale: 1 - i * 0.04,
              });
            } else {
              const enter = Math.max(0, Math.min(1, step - (i - 1)));
              const baseY = i * 14;
              const targetY = (i - 1) * 14;

              gsap.set(card, {
                y: baseY - (baseY - targetY) * enter,
                rotate: (i - 1) * 3 - ((i - 1) * 3 - (i - 2) * 3) * enter,
                scale: (1 - i * 0.04) + (i * 0.04 - (i - 1) * 0.04) * enter,
                opacity: 1,
              });

              if (i < steps) {
                const exit = Math.max(0, Math.min(1, step - i));
                gsap.set(card, {
                  y: (i - 1) * 14 - exit * 600,
                  opacity: 1 - exit,
                });
              }
            }
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{  width: '100%' }}>
      {/* Section Label */}
      <p style={{
        textAlign: 'center',
        fontSize: '13px',
        letterSpacing: '0.12em',
        color: '#888',
        padding: '4rem 0 2rem',
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        margin: 0
      }}>
        Legacy In The Making
      </p>

      {/* Scroll Section */}
      <div
        style={{
          position: 'relative',
          height: `${(total + 1) * 100}vh`
        }}
        ref={sectionRef}
      >
        {/* Sticky Container */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {/* Stack Container */}
          <div style={{
            position: 'relative',
            width: '380px',
            height: '500px'
          }}>
            {CARDS.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '460px',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  willChange: 'transform, opacity',
                  cursor: 'default',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transition: 'box-shadow 0.3s ease',
                  ...(card.className === 'card--dark' && { background: '#111', color: '#fff' }),
                  ...(card.className === 'card--mint' && { background: '#7ee8c8', color: '#0a3d2a' }),
                  ...(card.className === 'card--cream' && { background: '#f5e6d0', color: '#3a2510' }),
                  ...(card.className === 'card--navy' && { background: '#1a1a2e', color: '#e0d7ff' }),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
              >
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  opacity: 0.6,
                  marginBottom: '12px',
                  fontFamily: 'sans-serif'
                }}>
                  {card.tag}
                </span>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  fontFamily: 'Georgia, Times New Roman, serif'
                }}>
                  {card.title}
                </h2>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  opacity: 0.8,
                  maxWidth: '280px',
                  fontFamily: 'sans-serif',
                  margin: 0
                }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}