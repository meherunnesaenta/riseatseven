import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import L from "../../assets/hero-logo/L.png";
import uksocial from "../../assets/hero-logo/uksocial.png";
import thedrum from "../../assets/hero-logo/thedrum.png";
import global from "../../assets/hero-logo/global.png";
import R from "../../assets/hero-logo/R.png";
import misile from "../../assets/hero/misile.png";
import redbull from "../../assets/hero/redbull.png";
import table from "../../assets/hero/table.jpg";

const BG_IMAGES = [
  { src: misile },
  { src: redbull },
  { src: table },
];

const AWARDS = [
  { src: L },
  { src: global },
  { src: thedrum },
  { src: uksocial },
  { src: R },
];

export default function Hero() {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const subRef = useRef(null);
  const footerRef = useRef(null);
  const inlineImgRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const intervalRef = useRef(null);

  // Initial entrance animation
  useEffect(() => {
    gsap.set(imageRefs.current, { opacity: 0 });
    gsap.set(imageRefs.current[0], { opacity: 1 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(badgeRef.current, { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.7 })
      .fromTo(
        headingRef.current?.querySelectorAll(".hw") || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(
        inlineImgRef.current,
        { opacity: 0, scale: 0.7, rotate: -8 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.55 },
        "-=0.4"
      )
      .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
      .fromTo(footerRef.current?.children || [], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2");

    return () => tl.kill();
  }, []);

  // Background image crossfade loop
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const prev = currentRef.current;
      const next = (prev + 1) % BG_IMAGES.length;

      gsap.to(imageRefs.current[prev], { opacity: 0, duration: 1.4, ease: "power2.inOut" });
      gsap.to(imageRefs.current[next], { opacity: 1, duration: 1.4, ease: "power2.inOut" });

      if (inlineImgRef.current) {
        gsap.to(inlineImgRef.current, {
          scale: 0.7,
          rotate: -8,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            inlineImgRef.current.src = BG_IMAGES[next].src;
            gsap.to(inlineImgRef.current, {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.6,
              ease: "back.out(1.2)",
            });
          },
        });
      }

      currentRef.current = next;
      setCurrent(next);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <style>{`
        /* Google Fonts - Inter (মূল সাইটের মতো) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap');

        /* রুট ভেরিয়েবল - মূল সাইট থেকে নেওয়া */
        :root {
          --font-sans-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-weight-medium: 500;
          --font-weight-bold: 700;
          --font-weight-black: 800;
          --tracking-tight: -0.035em;
          --leading-0-9: 0.9;
          --color-white: #ffffff;
        }

        .h7-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          font-family: var(--font-sans-primary);
          background-color: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* ব্যাকগ্রাউন্ড ইমেজ - মূল সাইটের স্টাইল */
        .h7-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .h7-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          will-change: opacity;
          filter: blur(8px) brightness(0.65) saturate(1.1);
          transform: scale(1.05);
        }

        /* মূল সাইটের মতো গ্রেডিয়েন্ট ওভারলে */
        .h7-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 1;
        }

        /* কন্টেন্ট এরিয়া */
        .h7-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 1.5rem 2rem;
          gap: 1.5rem;
          flex: 1;
          justify-content: center;
        }

        /* ব্যাজ সেকশন - টাইট ট্র্যাকিং সহ */
        .h7-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          will-change: opacity, transform;
        }

        .h7-badge-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: -0.025em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          text-wrap: balance;
        }

        /* অ্যাওয়ার্ড লোগো রো - মূল সাইটের মতো */
        .h7-awards-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .h7-award-item {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.2s;
        }

        .h7-award-item:hover {
          opacity: 1;
        }

        /* হেডিং - রেসপনসিভ সাইজ মূল সাইটের মতো */
        .h7-heading {
          margin: 0;
          line-height: 0.9;
          color: var(--color-white);
          font-weight: var(--font-weight-black);
          letter-spacing: var(--tracking-tight);
          will-change: opacity, transform;
        }

        .h7-heading .hw {
          display: block;
          font-size: clamp(3rem, 8vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #fff;
        }

        /* মিডিয়া কুয়েরি - মূল সাইটের responsive ব্রেকপয়েন্ট */
        @media (min-width: 768px) {
          .h7-heading .hw {
            font-size: clamp(3.75rem, 10vw, 6rem);
            line-height: 1;
          }
        }

        @media (min-width: 1024px) {
          .h7-heading .hw {
            font-size: clamp(4.6875rem, 12vw, 7rem);
            line-height: 0.9;
          }
        }

        @media (min-width: 1280px) {
          .h7-heading .hw {
            font-size: clamp(5rem, 14vw, 8.5rem);
          }
        }

        /* ইনলাইন ইমেজ - মূল সাইটের মতো স্টাইল */
        .h7-inline-img {
          width: clamp(60px, 8vw, 100px);
          height: clamp(60px, 8vw, 100px);
          border-radius: 18px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
          will-change: transform, opacity;
          flex-shrink: 0;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.4);
        }

        /* .line2 - ফ্লেক্স লেআউট ঠিক রাখার জন্য */
        .h7-heading .line2 {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.25em;
        }

        /* সাবহেডিং */
        .h7-sub {
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 500;
          letter-spacing: var(--tracking-tight);
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          text-wrap: balance;
          will-change: opacity, transform;
        }

        /* ফুটার - মূল সাইটের মতো দুভাগে ভাগ করা */
        .h7-footer {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1.5rem 2rem 2rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .h7-footer-text {
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: normal;
          color: rgba(255, 255, 255, 0.75);
          max-width: 380px;
          line-height: 1.5;
          text-wrap: pretty;
          will-change: opacity, transform;
        }

        .h7-footer-text strong {
          font-weight: 600;
          color: #fff;
        }

        .h7-footer-right {
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          text-align: right;
          line-height: 1.5;
          will-change: opacity, transform;
        }

        .h7-footer-right strong {
          font-weight: 600;
          color: #fff;
        }

        /* ডটস ইন্ডিকেটর */
        .h7-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .h7-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          transition: all 0.3s ease;
        }

        .h7-dot.active {
          background: #fff;
          transform: scale(1.25);
        }

        /* মোবাইল অ্যাডজাস্টমেন্ট */
        @media (max-width: 768px) {
          .h7-footer {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            padding: 1rem 1.5rem 1.5rem;
          }
          
          .h7-footer-right {
            text-align: left;
          }
          
          .h7-award-item {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>

      <div className="h7-root" ref={containerRef}>
        
        <div className="h7-bg">
          {BG_IMAGES.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt=""
              className="h7-bg-img"
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
          <div className="h7-bg-overlay" />
        </div>

        {/* কন্টেন্ট */}
        <div className="h7-content">
          {/* অ্যাওয়ার্ড ব্যাজ */}
          <div className="h7-badge" ref={badgeRef}>
            <span className="h7-badge-label">
              #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
            </span>
            <div className="h7-awards-row">
              {AWARDS.map((a, index) => (
                <img className="h7-award-item" key={index} src={a.src} alt="award" />
              ))}
            </div>
          </div>

          <h1 className="h7-heading" ref={headingRef}>
            <span className="hw" style={{ fontWeight: 500 }}>We Create</span>
            <span className="hw line2" style={{ fontWeight: 500 }}>
              Category
              <img
                ref={inlineImgRef}
                className="h7-inline-img"
                src={BG_IMAGES[0].src}
                alt="feature"
                style={{ fontWeight: 'normal' }}  // ইমেজের জন্য ওয়েট নরমাল
              />
              Leaders
            </span>
          </h1>

          {/* সাবহেডিং */}
          <p className="h7-sub" ref={subRef}>on every searchable platform</p>

          {/* ডটস ইন্ডিকেটর */}
          <div className="h7-dots">
            {BG_IMAGES.map((_, i) => (
              <div key={i} className={`h7-dot ${current === i ? "active" : ""}`} />
            ))}
          </div>
        </div>

      
        <div className="h7-footer" ref={footerRef}>
          <p className="h7-footer-text">
            Organic media planners creating, distributing & optimising{" "}
            <strong>search-first</strong> content for SEO, Social, PR, AI and LLM search
          </p>
          <p className="h7-footer-right">
            <strong>4 Global Offices serving</strong><br />
            UK, USA (New York) & EU
          </p>
        </div>
      </div>
    </div>
  );
}