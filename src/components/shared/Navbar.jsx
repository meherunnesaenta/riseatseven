import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarqueeBanner from './MarqueeBanner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [marqueeHeight, setMarqueeHeight] = useState(0);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Get marquee banner height dynamically
    if (marqueeRef.current) {
      setMarqueeHeight(marqueeRef.current.offsetHeight);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { name: 'Services', hasPlus: true },
    { name: 'Industries', hasPlus: true },
    { name: 'International', hasPlus: true },
    { name: 'About', hasPlus: true },
    { name: 'Work', hasPlus: false },
    { name: 'Careers', hasPlus: false },
    { name: 'Blog', hasPlus: false },
    { name: 'Webinar', hasPlus: false },
    { name: 'Get In Touch', hasPlus: false, isButton: true },
  ];

  return (
    <>  
      {/* MarqueeBanner with ref - at the TOP */}
      <div ref={marqueeRef} className="relative z-40 ">
        <MarqueeBanner />
      </div>

      {/* Navbar - Fixed with dynamic top position based on marquee height */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
        style={{ top: `${marqueeHeight}px` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo - Exact Match */}
            <a href="/" className="flex-shrink-0">
              <span className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                Rise at Seven<sup className="text-sm">™</sup>
              </span>
            </a>

            {/* Desktop Menu - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`group relative text-white hover:text-[#ff3366] transition-colors duration-300 text-sm xl:text-base font-medium whitespace-nowrap ${
                    item.isButton ? 'ml-4 px-5 py-2 border border-white/30 rounded-full hover:border-[#ff3366] hover:bg-[#ff3366]/10' : ''
                  }`}
                >
                  {item.name}
                  {item.hasPlus && (
                    <span className="ml-1 text-base inline-block group-hover:rotate-180 transition-transform duration-300">
                      +
                    </span>
                  )}
                  {!item.isButton && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3366] transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-full h-screen bg-black z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                {menuItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className={`text-white text-2xl font-medium hover:text-[#ff3366] transition-all duration-300 py-2 ${
                      item.isButton ? 'px-8 py-3 border border-white/30 rounded-full hover:border-[#ff3366] hover:bg-[#ff3366]/10 mt-4' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {item.hasPlus && <span className="ml-2 text-xl">+</span>}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to push content below navbar */}
      <div style={{ height: `${marqueeHeight + 64}px` }}></div>
    </>
  );
};

export default Navbar;