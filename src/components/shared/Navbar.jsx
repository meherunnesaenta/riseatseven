import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { label: "Services", hasDropdown: true, href: "/services/" },
  { label: "Industries", hasDropdown: true, href: "/services/b2b-marketing/" },
  { label: "International", hasDropdown: true, href: "/international/" },
  { label: "About", hasDropdown: true, href: "/about/" },
  { label: "Work", href: "/work/", badge: "25" },
  { label: "Careers", href: "/careers/" },
  { label: "Blog", href: "/blog/" },
  { label: "Webinar", href: "/webinars/" },
];

// Rise at Seven Original SVG Logo
const RiseLogo = ({ scrolled }) => (
  <svg className="w-32 md:w-40 h-auto" viewBox="0 0 168 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
    <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" fill={scrolled ? "#0a0a0a" : "#ffffff"}/>
  </svg>
);

// Announcement Bar Component
// const AnnouncementBar = ({ announcementRef, hideAnnouncementBar }) => {
//   const textRef = useRef(null);
//   const textCloneRef = useRef(null);

//   useEffect(() => {
//     if (textRef.current && textCloneRef.current) {
//       const ctx = gsap.context(() => {
//         gsap.set(textCloneRef.current, { y: 24 });
//       });
//       return () => ctx.revert();
//     }
//   }, []);

//   const handleMouseEnter = () => {
//     if (textRef.current && textCloneRef.current) {
//       gsap.to(textRef.current, { y: -24, duration: 0.3, ease: "power2.inOut" });
//       gsap.to(textCloneRef.current, { y: 0, duration: 0.3, ease: "power2.inOut" });
//     }
//   };

//   const handleMouseLeave = () => {
//     if (textRef.current && textCloneRef.current) {
//       gsap.to(textRef.current, { y: 0, duration: 0.3, ease: "power2.inOut" });
//       gsap.to(textCloneRef.current, { y: 24, duration: 0.3, ease: "power2.inOut" });
//     }
//   };

//   if (hideAnnouncementBar) return null;

//   return (
//     <div className="nb-announcement-wrapper">
//       <a 
//         href="https://riseatseven.com/category-leaderboard/" 
//         className="nb-announcement"
//         ref={announcementRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span className="nb-announcement-icon">🚨</span>
//         <div className="nb-announcement-text-container">
//           <span className="nb-announcement-text" ref={textRef}>
//             The Category Leaderboard - Live Now
//           </span>
//           <span className="nb-announcement-text nb-announcement-text-clone" ref={textCloneRef}>
//             The Category Leaderboard - Live Now
//           </span>
//         </div>
//       </a>
//     </div>
//   );
// };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hideAnnouncementBar, setHideAnnouncementBar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const announcementRef = useRef(null);
  const navRef = useRef(null);
  const hoverBgRef = useRef(null);

  // স্ক্রল ইফেক্ট
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolled(currentScrollPos > 50);
      setHideAnnouncementBar(currentScrollPos > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // এন্ট্রান্স অ্যানিমেশন
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      if (announcementRef.current) {
        tl.fromTo(
          announcementRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }
      
      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.2"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // হোভার ব্যাকগ্রাউন্ড আপডেট
  const updateHoverBackground = (e, isHovering) => {
    if (!hoverBgRef.current || !e?.target) return;

    if (isHovering) {
      const target = e.target.closest(".nb-link");
      if (!target) return;

      const container = hoverBgRef.current.parentElement;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      hoverBgRef.current.style.width = `${targetRect.width + 16}px`;
      hoverBgRef.current.style.left = `${targetRect.left - containerRect.left - 8}px`;
      hoverBgRef.current.style.opacity = "1";
    } else {
      hoverBgRef.current.style.opacity = "0";
    }
  };

  // মোবাইল মেনু টগল
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100;14..32,200;14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

        :root {
          --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --color-mint: #a8f0dc;
          --color-grey-900: #0a0a0a;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Main Wrapper - fixed position */
        .nb-main-wrapper {
          font-family: var(--font-primary);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 100;
          width: 100%;
          pointer-events: auto;
        }

        /* অ্যানাউন্সমেন্ট বার wrapper */
        .nb-announcement-wrapper {
          padding: 12px 12px 0 12px;
          width: 100%;
        }

        .nb-announcement {
          background: var(--color-mint);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 10px 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--color-grey-900);
          text-decoration: none;
          border-radius: 16px;
          transition: border-radius 0.25s ease;
          cursor: pointer;
          width: 100%;
        }

        .nb-announcement:hover {
          border-radius: 8px;
        }

        .nb-announcement-text-container {
          position: relative;
          overflow: hidden;
          height: 20px;
        }

        .nb-announcement-text {
          display: block;
          will-change: transform;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .nb-announcement-text-clone {
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .nb-announcement-icon {
          font-size: 0.875rem;
        }

        /* Navbar wrapper */
        .nb-nav-wrapper {
          padding: 0 12px;
          width: 100%;
        }

        /* মেইন Navbar */
        .nb-nav {
          background: ${scrolled ? "rgba(255,255,255,0.85)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(12px)" : "none"};
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem 0 1.5rem;
          height: 70px;
          gap: 0.5rem;
          transition: background 0.3s ease, backdrop-filter 0.3s ease;
          box-shadow: ${scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none"};
        }

        /* লোগো */
        .nb-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }

        /* নেভ লিংকস কন্টেইনার */
        .nb-links-container {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }

        /* হোভার ব্যাকগ্রাউন্ড */
        .nb-hover-bg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 38px;
          background: ${scrolled ? "#e8e8e8" : "#ffffff"};
          border-radius: 100px;
          transition: width 0.25s ease, left 0.25s ease, opacity 0.2s;
          opacity: 0;
          pointer-events: none;
        }

        /* লিংক স্টাইল */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          position: relative;
          z-index: 2;
        }

        .nb-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          text-decoration: none;
          border-radius: 100px;
          transition: color 0.2s ease;
          white-space: nowrap;
          cursor: pointer;
          color: ${scrolled ? "#0a0a0a" : "rgba(255,255,255,0.85)"};
        }

        .nb-link:hover {
          color: ${scrolled ? "#0a0a0a" : "#0a0a0a"};
        }

        .nb-link-plus {
          font-size: 0.7rem;
          font-weight: 400;
          opacity: 0.6;
        }

        .nb-badge {
          background: var(--color-mint);
          color: var(--color-grey-900);
          font-size: 0.65rem;
          font-weight: 700;
          border-radius: 20px;
          padding: 0.15rem 0.5rem;
          margin-left: 0.25rem;
          line-height: 1.2;
        }

        .nb-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          background: ${scrolled ? "#0e0e0e" : "#ffffff"};
          color: ${scrolled ? "#ffffff" : "#0e0e0e"};
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: transform 0.2s ease, background 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .nb-cta:hover {
          transform: scale(1.02);
        }

        .nb-cta-arrow {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .nb-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 101;
        }

        .nb-hamburger span {
          width: 100%;
          height: 2px;
          background: ${scrolled ? "#0a0a0a" : "#ffffff"};
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .nb-hamburger.active span:first-child {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .nb-hamburger.active span:last-child {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .nb-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(10, 10, 10, 0.96);
          backdrop-filter: blur(12px);
          z-index: 99;
          padding: 100px 24px 40px;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }

        .nb-mobile-menu.open {
          transform: translateX(0);
        }

        .nb-mobile-link {
          display: block;
          color: #ffffff;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.03em;
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nb-mobile-cta {
          display: inline-block;
          margin-top: 2rem;
          background: #ffffff;
          color: #0e0e0e;
          padding: 0.8rem 1.5rem;
          border-radius: 100px;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 1023px) {
          .nb-links-container {
            display: none;
          }
          .nb-hamburger {
            display: flex;
          }
          .nb-nav {
            padding: 0 1rem;
          }
          .nb-cta {
            display: none;
          }
        }

        @media (min-width: 1024px) and (max-width: 1280px) {
          .nb-link {
            font-size: 0.8rem;
            padding: 0.45rem 0.85rem;
          }
        }

        @media (min-width: 1280px) {
          .nb-announcement-text,
          .nb-announcement-text-clone {
            font-size: 0.875rem;
          }
          .nb-announcement-text-container {
            height: 22px;
          }
          .nb-link {
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          }
        }

        @media (max-width: 768px) {
          .nb-announcement {
            padding: 8px 0.8rem;
          }
          .nb-announcement-text,
          .nb-announcement-text-clone {
            font-size: 0.7rem;
          }
          .nb-announcement-text-container {
            height: 18px;
          }
        }
      `}</style>

      {/* Main Wrapper - সবকিছুর বাইরে */}
      <div className="nb-main-wrapper">
        
        {/* Announcement Bar - উপরে */}
        {/* <AnnouncementBar 
          announcementRef={announcementRef} 
          hideAnnouncementBar={hideAnnouncementBar}
        /> */}

        {/* Navbar Wrapper - নিচে */}
        <div className="nb-nav-wrapper">
          <nav className="nb-nav" ref={navRef}>
            <a href="/" className="nb-logo">
              <RiseLogo scrolled={scrolled} />
            </a>

            <div className="nb-links-container">
              <div className="nb-hover-bg" ref={hoverBgRef} />
              <div className="nb-links">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nb-link"
                    onMouseEnter={(e) => updateHoverBackground(e, true)}
                    onMouseLeave={(e) => updateHoverBackground(e, false)}
                  >
                    {link.label}
                    {link.hasDropdown && <span className="nb-link-plus">+</span>}
                    {link.badge && <span className="nb-badge">{link.badge}</span>}
                  </a>
                ))}
              </div>
            </div>

            <a href="/connect-with-us/" className="nb-cta">
              Get in touch
              <span className="nb-cta-arrow">↗</span>
            </a>

            <button
              className={`nb-hamburger ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span />
              <span />
            </button>
          </nav>
        </div>

        {/* মোবাইল মেনু */}
        <div className={`nb-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nb-mobile-link">
              {link.label}
              {link.badge && (
                <span className="nb-badge" style={{ marginLeft: "8px" }}>
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a href="/connect-with-us/" className="nb-mobile-cta">
            Get in touch ↗
          </a>
        </div>
      </div>
    </>
  );
}