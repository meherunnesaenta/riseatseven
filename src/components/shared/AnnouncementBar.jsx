import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnnouncementBar = () => {
  const [hideAnnouncementBar, setHideAnnouncementBar] = useState(false);
  const announcementRef = useRef(null);
  const textRef = useRef(null);
  const textCloneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHideAnnouncementBar(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current && textCloneRef.current) {
      const ctx = gsap.context(() => {
        gsap.set(textCloneRef.current, { y: 24 });
      });
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (announcementRef.current) {
        gsap.fromTo(
          announcementRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (textRef.current && textCloneRef.current) {
      gsap.to(textRef.current, { y: -24, duration: 0.3, ease: "power2.inOut" });
      gsap.to(textCloneRef.current, { y: 0, duration: 0.3, ease: "power2.inOut" });
    }
  };

  const handleMouseLeave = () => {
    if (textRef.current && textCloneRef.current) {
      gsap.to(textRef.current, { y: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.to(textCloneRef.current, { y: 24, duration: 0.3, ease: "power2.inOut" });
    }
  };

  if (hideAnnouncementBar) return null;

  return (
    <div className="announcement-wrapper">
      <a 
        href="https://riseatseven.com/category-leaderboard/" 
        className="announcement-bar"
        ref={announcementRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="announcement-icon">🚨</span>
        <div className="announcement-text-container">
          <span className="announcement-text" ref={textRef}>
            The Category Leaderboard - Live Now
          </span>
          <span className="announcement-text announcement-text-clone" ref={textCloneRef}>
            The Category Leaderboard - Live Now
          </span>
        </div>
      </a>

      <style>{`
        .announcement-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          padding: 12px 12px 0 12px;
          background: transparent;
        }

        .announcement-bar {
          background: #a8f0dc;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 10px 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #0a0a0a;
          text-decoration: none;
          border-radius: 16px;
          transition: border-radius 0.25s ease;
          cursor: pointer;
          width: 100%;
        }

        .announcement-bar:hover {
          border-radius: 8px;
        }

        .announcement-text-container {
          position: relative;
          overflow: hidden;
          height: 20px;
        }

        .announcement-text {
          display: block;
          will-change: transform;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .announcement-text-clone {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .announcement-icon {
          font-size: 0.875rem;
        }

        @media (min-width: 1280px) {
          .announcement-text,
          .announcement-text-clone {
            font-size: 0.875rem;
          }
          .announcement-text-container {
            height: 22px;
          }
        }

        @media (max-width: 768px) {
          .announcement-wrapper {
            padding: 8px 8px 0 8px;
          }
          .announcement-bar {
            padding: 8px 0.8rem;
          }
          .announcement-text,
          .announcement-text-clone {
            font-size: 0.7rem;
          }
          .announcement-text-container {
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;