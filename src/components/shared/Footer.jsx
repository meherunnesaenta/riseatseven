import { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Footer() {
  const footerRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = Math.min(
            Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
            1
          );

          if (contentRef.current) {
            contentRef.current.style.opacity = Math.min(scrollProgress * 1.5, 1);
          }

          if (backgroundRef.current) {
            const heightProgress = Math.min(scrollProgress * 0.5, 0.5);
            backgroundRef.current.style.height = `${99 + heightProgress * 30}%`;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/riseatseven" },
    { name: "X", icon: "fa-brands fa-x-twitter", url: "https://x.com/riseatseven" },
    { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/company/riseatseven/" },
    { name: "YouTube", icon: "fa-brands fa-youtube", url: "https://www.youtube.com/channel/UCAjOP9BgpZPTgae-QT9HGCw" },
    { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@riseatseven" },
    { name: "Instagram", icon: "fa-brands fa-instagram", url: "https://www.instagram.com/riseatseven/" },
  ];

  const navLinks1 = [
    { name: "Services", url: "https://riseatseven.com/services/" },
    { name: "Work", url: "https://riseatseven.com/work/" },
    { name: "About", url: "https://riseatseven.com/about/" },
    { name: "Culture", url: "https://riseatseven.com/culture/" },
    { name: "Meet The Risers", url: "https://riseatseven.com/meet-the-team/" },
  ];

  const navLinks2 = [
    { name: "Testimonials", url: "https://riseatseven.com/testimonials/" },
    { name: "Blog & Resources", url: "https://riseatseven.com/blog/" },
    { name: "Webinars", url: "https://riseatseven.com/webinars/" },
    { name: "Careers", url: "https://riseatseven.com/careers/" },
  ];

  const navLinks3 = [
    { name: "Sheffield", url: "https://g.co/kgs/4Br7JaS" },
    { name: "Manchester", url: "https://g.co/kgs/9vh5imK" },
    { name: "London", url: "https://g.co/kgs/hsv6LhR" },
    { name: "New York", url: "https://g.co/kgs/NxzhAKU" },
    { name: "Contact", url: "https://riseatseven.com/contact/" },
  ];

  return (
    <>
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        
        :root {
          --color-mint: #B8F2E2;
          --color-grey-900: #1A1A18;
          --color-grey-400: #2A2A28;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        /* Footer Link Styles */
        .footer-link {
          transition: color 0.2s ease;
          color: rgba(255, 255, 255, 0.6) !important;

        }
        
        .footer-link:hover {
          text-decoration: underline;
          underline-transition: color 0.2s ease;
        }
        
        /* Social Link Styles */
        .social-link {
          transition: all 0.2s ease;
          padding: 0.1rem  !important;
          background-color: white !important;
          color: #1A1A18 !important;
          text-decoration: none;
        }
        
        .social-link:hover {
          border-radius: 0.125rem !important;
          background-color: white !important;
          color: #1A1A18 !important;
        }
        
        /* Navigation Link Styles */
        .nav-link {
          position: relative;
          overflow: hidden;
          display: inline-block;
          padding-left: 0.8rem !important;
          color: white !important;
          text-decoration: none;
        }
        
        .nav-link:hover {
          color: var(--color-mint) !important;
        }
        
        .nav-link .link-text {
          transition: transform 0.3s ease;
          display: inline-block;
        }
        
        .nav-link:hover .link-text {
          transform: translateY(-1.75rem);
        }
        
        .nav-link .link-text-duplicate {
          position: absolute;
          top: 0;
          left: 0;
          transform: translateY(1.75rem);
          transition: transform 0.3s ease;
        }
        
        .nav-link:hover .link-text-duplicate {
          transform: translateY(0);
        }
        
        /* Newsletter Input Styles */
        .newsletter-input {
          background-color: #2A2A28 !important;
          transition: all 0.2s ease;
          border: none;
          color: white;
        }
        
        .newsletter-input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(184, 242, 226, 0.3);
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        /* Submit Button Styles */
        .submit-button {
          background-color: var(--color-mint) !important;
          color: #1A1A18 !important;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .submit-button:hover {
          background-color: white !important;
          transform: rotate(90deg);
        }
        
        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .footer-content {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* Heading styles */
        .footer-heading {
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.035em;
        }
        
        @media (min-width: 1280px) {
          .footer-heading {
            line-height: 1.2;
          }
        }
        
        /* Newsletter input styles */
        .newsletter-input {
          font-size: 1.125rem;
          line-height: 1.2;
          padding: 1rem 1.25rem;
        }
        
        @media (min-width: 1024px) {
          .newsletter-input {
            font-size: 1.25rem;
            line-height: 1.2;
            padding: 1.25rem 1.5rem;
          }
        }
        
        /* Nav link text size */
        .nav-link-text {
          font-size: 1rem;
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.035em;
        }
        
        @media (min-width: 1024px) {
          .nav-link-text {
            font-size: 1rem;
            line-height: 1.2;
          }
        }
        
        /* Social link text */
        .social-link-text {
          font-size: 0.75rem;
          line-height: 1.2;
        }
        
        /* Footer legal text */
        .footer-legal-text {
          font-size: 0.75rem;
          line-height: 1.2;
          font-weight: 300;
        }
        
        @media (min-width: 768px) {
          .footer-legal-text {
            font-size: 0.75rem;
          }
        }
        
        /* Desktop Layout */
        @media (min-width: 1024px) {
          .nav-column {
            width: auto !important;
            min-width: 1/5th of the container;
          }
        }
        
        /* Tablet Layout */
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-column {
            width: calc(33.33% - 1rem) !important;
          }
          
          .footer-legal {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
        }
        
        /* Mobile Layout */
        @media (max-width: 767px) {
          .footer-wrapper {
            padding: 0 12px !important;
          }
          
          .footer-content {
            padding: 2rem 1rem 1.5rem !important;
          }
          
          .nav-column {
            width: 100% !important;
            
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 0.5rem;
          }
          
          .nav-column:first-child {
            border-top: none;
            padding-top: 0;
            margin-top: 0;
          }
          
          .footer-legal {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 0.5rem;
          }
          
          .dot-separator {
            display: none;
          }
          
          .bottom-footer {
            flex-direction: column-reverse !important;
            align-items: flex-start !important;
            gap: 1rem;
            margin-top: 1rem !important;
          }
          
          .social-links {
            margin-bottom: 0.5rem;
          }
          
          .submit-button {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .social-link {
            padding: 0.375rem 0.75rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>

      <section className="w-full relative footer-wrapper bg-black mt-8 lg:mt-0 rounded-2xl" id="footer" ref={footerRef}>
        <div className="w-full px-0 relative">
          {/* Background Effect */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none footer-background"
            ref={backgroundRef}
            style={{ height: "40%", zIndex: 0 }}
          >
            <div className="w-full h-full bg-grey-900 mx-2 rounded-3xl"></div>
          </div>

          {/* Main Content */}
          <div
            className="relative z-10 footer-content"
            ref={contentRef}
            style={{
              maxWidth: "1280px",
              padding: "1.5rem .81rem",
              
            }}
          >
            <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7">

              {/* Newsletter Column */}
              <div className="flex flex-wrap items-start justify-start col-span-12 lg:col-span-4 gap-y-3 md:gap-y-5">
                <h2 className="footer-heading text-xl text-white">
                  Stay updated with Rise news
                </h2>

                <form className="w-full relative">
                  <input
                    type="email"
                    required
                    name="email"
                    className="appearance-none transition newsletter-input rounded-full w-full h-0.5  text-white placeholder:text-white/50 placeholder:text-sm focus:outline-none"
                    placeholder="Your Email Address"
                  />
                  <div className="absolute top-0 right-0 p-2">
                    <button
                      type="submit"
                      className="w-5 h-5 lg:w-10 lg:h-10 submit-button text-md lg:text-lg rounded-full flex items-center justify-center cursor-pointer transition"
                    >
                     <IoIosArrowRoundForward className="rotate-[-40deg]" />
                    </button>
                  </div>
                </form>

                <div className="flex gap-1 flex-wrap social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-2 rounded-xl text-xs transition hover:rounded-sm bg-white text-grey-900 social-link"
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                      <IoIosArrowRoundForward className="rotate-[-40deg]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Columns */}
              <div className="flex justify-between col-span-12 flex-wrap md:flex-row lg:col-span-6 lg:col-start-6 gap-y-10">

                {/* Column 1 */}
                <div className="flex flex-col items-start gap-y-1    nav-column">
                  {navLinks1.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex text-white font-medium tracking-tight leading-tight nav-link-text nav-link"
                    >
                      <div className="relative overflow-hidden">
                        <div className="transition duration-300 transform group-hover:-translate-y-7 link-text">
                          {link.name}
                        </div>
                        <div className="transition duration-300 absolute top-0 left-0 translate-y-7 group-hover:translate-y-0 link-text-duplicate">
                          {link.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-start gap-y-1  md:w-auto nav-column">
                  {navLinks2.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex text-white font-medium tracking-tight leading-tight nav-link-text nav-link"
                    >
                      <div className="relative overflow-hidden">
                        <div className="transition duration-300 transform group-hover:-translate-y-7 link-text">
                          {link.name}
                        </div>
                        <div className="transition duration-300 absolute top-0 left-0 translate-y-7 group-hover:translate-y-0 link-text-duplicate">
                          {link.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-start gap-y-1 nav-column">
                  {navLinks3.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex text-white font-medium tracking-tight leading-tight nav-link-text nav-link"
                    >
                      <div className="relative overflow-hidden">
                        <div className="transition duration-300 transform group-hover:-translate-y-7 link-text">
                          {link.name}
                        </div>
                        <div className="transition duration-300 absolute top-0 left-0 translate-y-7 group-hover:translate-y-0 link-text-duplicate">
                          {link.name}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


            </div>
            <div className="h-10 md:h-19 lg:h-25"></div>

            <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7 ">
              {/* Logo SVG */}
              <div className="col-span-12 mt-50">
                <svg
                  className="w-full h-full object-contain fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 168 21"
                >
                  <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z" />
                  <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z" />
                  <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z" />
                  <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z" />
                  <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z" />
                  <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804ZM62.686 18.1733C59.823 18.1733 57.5823 15.7168 57.5823 12.9073C57.5823 10.0978 59.7425 7.56079 62.7124 7.56079C65.6822 7.56079 67.8972 9.90973 67.8972 12.9073C67.8972 15.9048 65.6024 18.1733 62.6867 18.1733H62.686Z" />
                  <path d="M77.5832 0.378906H74.7736V5.40144H72.75V7.96681H74.7736V20.3608H77.5832V7.96681H80.0403V5.40144H77.5832V0.378906Z" />
                  <path d="M18.3089 0.378906H15.5V3.2953H18.3089V0.378906Z" />
                  <path d="M18.3089 5.02344H15.5V19.9828H18.3089V5.02344Z" />
                  <path d="M25.8409 10.7205C24.8142 10.3959 23.5183 10.0996 23.5183 8.77603C23.5183 7.77639 24.3279 7.18256 25.2728 7.18256C26.4077 7.18256 27.0549 7.91166 27.1895 8.99178H29.9984C29.9443 6.39935 27.9727 4.61719 25.4087 4.61719C22.8447 4.61719 20.7088 6.3723 20.7088 8.93767C20.7088 14.2307 27.5412 12.6102 27.5412 15.743C27.5412 17.0389 26.6227 17.7951 25.381 17.7951C23.707 17.7951 22.9516 16.6074 22.8427 15.0681H20.0352C20.0352 17.417 21.1951 19.2269 23.4094 20.0094C24.0303 20.2252 24.6789 20.3604 25.3262 20.3604C28.1892 20.3604 30.3494 18.5248 30.3494 15.5807C30.3494 12.6366 28.296 11.476 25.8402 10.7205H25.8409Z" />
                  <path d="M39.3637 4.61719C34.9891 4.61719 31.6953 8.15514 31.6953 12.475C31.6953 16.7948 35.0432 20.3591 39.3096 20.3591C42.577 20.3591 45.3581 18.3341 46.493 15.2831H43.6842C42.8746 16.8489 41.1722 17.7944 39.4178 17.7944C36.96 17.7944 35.0709 16.0393 34.5028 13.7174H46.8975C46.9516 13.2582 46.978 12.7719 46.978 12.3133C46.978 8.10036 43.6037 4.61719 39.3637 4.61719ZM34.5028 11.5565C34.6651 9.09864 36.9059 7.18188 39.3373 7.18188C41.7688 7.18188 44.0075 9.09932 44.1705 11.5565H34.5028Z" />
                  <path d="M9.55945 12.1512C12.1519 11.2327 13.3395 9.09953 13.3395 6.39957C13.3395 4.67151 12.7728 2.88934 11.5046 1.67395C10.0998 0.297591 8.07419 0 6.18314 0H0V19.9826H2.91572V13.8069L13.3389 19.9826V16.8606L6.22575 12.5949L7.61496 12.5293C8.26222 12.5293 8.96359 12.3676 9.55809 12.1512H9.55945ZM4.91499 10.3156H2.91572V2.67359H5.99444C8.317 2.67359 10.4231 3.86192 10.4231 6.40024C10.4231 9.5865 7.50742 10.3156 4.91499 10.3156Z" />
                  <path d="M164.759 7.94414L166.061 8.71517V8.08955L165.395 7.69051C165.437 7.68172 165.48 7.66954 165.521 7.65466C165.869 7.53157 166.061 7.24209 166.061 6.84034C166.061 6.57725 165.966 6.33579 165.801 6.17753C165.583 5.9638 165.277 5.93945 165.065 5.93945H164.191V8.63807H164.758V7.94346L164.759 7.94414ZM164.908 7.22856H164.76V6.47715H165.043C165.261 6.47715 165.495 6.57251 165.495 6.84102C165.495 7.10953 165.297 7.22856 164.908 7.22856H164.908Z" />
                  <path d="M165.127 10.1622C166.714 10.1622 168 8.87583 168 7.28913C168 5.70242 166.714 4.41602 165.127 4.41602C163.54 4.41602 162.254 5.70242 162.254 7.28913C162.254 8.87583 163.54 10.1622 165.127 10.1622ZM165.127 5.22763C166.264 5.22763 167.189 6.15219 167.189 7.28913C167.189 8.42606 166.264 9.35062 165.127 9.35062C163.99 9.35062 163.066 8.42606 163.066 7.28913C163.066 6.15219 163.99 5.22763 165.127 5.22763Z" />
                </svg>
              </div>

              {/* Bottom Footer */}
              <div className="col-span-12 flex justify-between flex-col mt-10 items-end md:flex-row lg:items-center lg:mt-0 bottom-footer">
                <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3 footer-legal">
                  <span className="text-white font-light leading-tight footer-legal-text">
                    © 2025 Rise at Seven Ltd. All rights reserved
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40 dot-separator"></span>

                  <span className="text-white font-light leading-tight footer-legal-text">
                    Company Number 11955187
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40 dot-separator"></span>

                  <span className="text-white font-light leading-tight footer-legal-text">
                    VAT Registered GB 322402945
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40 dot-separator"></span>

                  <a
                    href="https://riseatseven.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-light leading-tight footer-legal-text footer-link"
                  >
                    Privacy Policy
                  </a>
                  <span className="w-1 h-1 rounded-full bg-white/40 dot-separator"></span>

                  <a
                    href="https://riseatseven.com/terms-conditions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-light leading-tight footer-legal-text footer-link"
                  >
                    Terms &amp; conditions
                  </a>
                </div>

                <div className="w-full mt-1 md:ml-auto md:text-right lg:mt-0 lg:w-auto">
                  <a
                    href="https://madebyshape.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-light leading-tight footer-legal-text footer-link"
                  >
                    Website MadeByShape
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}