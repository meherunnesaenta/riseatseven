import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// SVG Logo Components (monochrome, like the reference)
const CapitalOneLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" height="32" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="28" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="bold">Capital</text>
    <text x="72" y="28" fontFamily="Georgia, serif" fontSize="22" fontWeight="300">One</text>
    <path d="M58 8 Q65 4 72 8" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const RedBullLogo = () => (
  <svg viewBox="0 0 80 50" fill="currentColor" height="40" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="18" rx="10" ry="13" />
    <ellipse cx="52" cy="18" rx="10" ry="13" />
    <path d="M20 28 Q40 38 60 28 Q40 22 20 28Z" />
    <text x="5" y="48" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" letterSpacing="1">Red Bull</text>
  </svg>
);

const JDLogo = () => (
  <svg viewBox="0 0 44 44" fill="currentColor" height="38" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="21" />
    <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900">JD</text>
  </svg>
);

const KrogerLogo = () => (
  <svg viewBox="0 0 100 36" fill="currentColor" height="30" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="Georgia, serif" fontSize="28" fontStyle="italic">Kroger</text>
  </svg>
);

const NikeLogo = () => (
  <svg viewBox="0 0 80 30" fill="currentColor" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 22 Q30 -5 80 8 Q60 14 20 26 Z" />
  </svg>
);

const AdidasLogo = () => (
  <svg viewBox="0 0 70 36" fill="currentColor" height="30" xmlns="http://www.w3.org/2000/svg">
    <polygon points="35,2 68,34 2,34" />
    <rect x="2" y="34" width="66" height="4" />
  </svg>
);

const SpotifyLogo = () => (
  <svg viewBox="0 0 90 28" fill="currentColor" height="26" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="13" />
    <path d="M7 10 Q14 7 22 9" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M7 14 Q14 11 20 13" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M7 18 Q13 16 19 17" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <text x="30" y="19" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold">Spotify</text>
  </svg>
);

const brands = [
  { id: 1, name: 'Capital One', Logo: CapitalOneLogo },
  { id: 2, name: 'Red Bull', Logo: RedBullLogo },
  { id: 3, name: 'JD Sports', Logo: JDLogo },
  { id: 4, name: 'Kroger', Logo: KrogerLogo },
  { id: 5, name: 'Nike', Logo: NikeLogo },
  { id: 6, name: 'Adidas', Logo: AdidasLogo },
  { id: 7, name: 'Spotify', Logo: SpotifyLogo },
];

const Brand = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth 

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 22,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Pause on hover
    const container = track.parentElement;
    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.play();
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      tweenRef.current?.kill();
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  const allBrands = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <section style={styles.section}>
      {/* Left label */}
      <div style={styles.label}>
        <span style={styles.labelLine1}>The agency</span>
        <span style={styles.labelLine2}>behind …</span>
      </div>

      {/* Marquee */}
      <div style={styles.marqueeWrapper}>
        {/* Fade edges */}
        <div style={{ ...styles.fade, ...styles.fadeLeft }} />
        <div style={{ ...styles.fade, ...styles.fadeRight }} />

        <div style={styles.marqueeViewport}>
          <div ref={trackRef} style={styles.track}>
            {allBrands.map((brand, i) => {
              const { Logo } = brand;
              return (
                <div
                  key={`${brand.id}-${i}`}
                  style={styles.logoItem}
                  title={brand.name}
                >
                  <Logo />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    padding: '32px 0',
    minHeight: '100px',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
    position: 'relative',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '110px',
    paddingLeft: '24px',
    flexShrink: 0,
    zIndex: 2,
  },
  labelLine1: {
    fontSize: '13px',
    color: '#1a1a1a',
    fontWeight: 400,
    lineHeight: '1.4',
  },
  labelLine2: {
    fontSize: '13px',
    color: '#1a1a1a',
    fontWeight: 400,
    lineHeight: '1.4',
  },
  marqueeWrapper: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  fade: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '80px',
    zIndex: 2,
    pointerEvents: 'none',
  },
  fadeLeft: {
    left: 0,
    background: 'linear-gradient(to right, #EBEBEB 0%, transparent 100%)',
  },
  fadeRight: {
    right: 0,
    background: 'linear-gradient(to left, #EBEBEB 0%, transparent 100%)',
  },
  marqueeViewport: {
    overflow: 'hidden',
    width: '100%',
  },
  track: {
    display: 'flex',
    alignItems: 'center',
    gap: '0px',
    willChange: 'transform',
    width: 'max-content',
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 48px',
    color: '#1a1a1a',
    opacity: 0.85,
    transition: 'opacity 0.2s ease',
    cursor: 'default',
    flexShrink: 0,
  },
};

export default Brand;