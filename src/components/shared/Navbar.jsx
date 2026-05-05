import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { label: "Services", hasDropdown: true },
  { label: "Industries", hasDropdown: true },
  { label: "International", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Work", badge: "25" },
  { label: "Careers" },
  { label: "Blog" },
  { label: "Webinar" },
];

export default function Navbar() {
  const announcementRef = useRef(null);
  const navRef = useRef(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (announcementVisible) {
        tl.fromTo(
          announcementRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }

      tl.fromTo(
        navRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.55 },
        announcementVisible ? "-=0.2" : "0"
      ).fromTo(
        navRef.current.querySelectorAll(".nb-link, .nb-logo, .nb-cta"),
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04 },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nb-wrapper {
          font-family: 'Inter', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        /* ANNOUNCEMENT BAR */
        .nb-announcement {
          background: #a8f0dc;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.55rem 1rem;
          font-size: 13px;
          font-weight: 600;
          color: #0a0a0a;
          letter-spacing: 0.01em;
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
          border-radius: 8px 8px 0 0;
          will-change: opacity, transform;
        }

        .nb-announcement:hover {
          background: #90ead0;
        }

        .nb-announcement-icon {
          font-size: 14px;
        }

        .nb-announcement-close {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 16px;
          color: rgba(0,0,0,0.45);
          cursor: pointer;
          line-height: 1;
          padding: 2px 6px;
          border-radius: 4px;
          transition: color 0.15s, background 0.15s;
        }

        .nb-announcement-close:hover {
          color: #000;
          background: rgba(0,0,0,0.08);
        }

        /* MAIN NAV */
        .nb-nav {
          background: #0e0e0e;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.75rem;
          height: 64px;
          gap: 0.5rem;
          will-change: opacity, transform;
        }

        /* LOGO */
        .nb-logo {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.03em;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 1px;
          will-change: opacity, transform;
        }

        .nb-logo-registered {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          vertical-align: super;
          margin-left: 1px;
        }

        /* NAV LINKS */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 0.1rem;
          flex: 1;
          justify-content: center;
        }

        .nb-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 0.45rem 0.7rem;
          font-size: 13.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
          position: relative;
          cursor: pointer;
          will-change: opacity, transform;
        }

        .nb-link:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .nb-link-plus {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          transition: color 0.15s;
        }

        .nb-link:hover .nb-link-plus {
          color: rgba(255,255,255,0.7);
        }

        /* BADGE */
        .nb-badge {
          background: #a8f0dc;
          color: #0a0a0a;
          font-size: 9px;
          font-weight: 700;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 2px;
          right: 2px;
          letter-spacing: 0;
          line-height: 1;
        }

        /* CTA */
        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.55rem 1.25rem;
          background: #fff;
          color: #0e0e0e;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.15s;
          will-change: opacity, transform;
          cursor: pointer;
        }

        .nb-cta:hover {
          background: #e8e8e8;
          transform: scale(1.02);
        }

        .nb-cta-arrow {
          font-size: 12px;
          opacity: 0.6;
        }
      `}</style>

      <div className="nb-wrapper">

        {/* ANNOUNCEMENT BAR */}
        {announcementVisible && (
          <div className="nb-announcement" ref={announcementRef}>
            <span className="nb-announcement-icon">📣</span>
            <span>The Category Leaderboard — Live Now</span>
            <button
              className="nb-announcement-close"
              onClick={() => setAnnouncementVisible(false)}
              aria-label="Close announcement"
            >
              ×
            </button>
          </div>
        )}

        {/* MAIN NAVBAR */}
        <nav className="nb-nav" ref={navRef}>

          {/* LOGO */}
          <a href="/" className="nb-logo">
            Rise at Seven
            <span className="nb-logo-registered">®</span>
          </a>

          {/* LINKS */}
          <div className="nb-links">
            {NAV_LINKS.map((link) => (
              <a href="#" key={link.label} className="nb-link">
                {link.label}
                {link.hasDropdown && <span className="nb-link-plus">+</span>}
                {link.badge && (
                  <span className="nb-badge">{link.badge}</span>
                )}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="nb-cta">
            Get In Touch
            <span className="nb-cta-arrow">↗</span>
          </a>

        </nav>
      </div>
    </>
  );
}