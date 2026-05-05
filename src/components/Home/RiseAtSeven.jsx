import React, { useEffect, useState } from 'react';

const RiseAtSeven = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "Ready to Rise at Seven?";
  
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-center px-4">
        {text.split('').map((char, idx) => {
          // Calculate wave offset based on scroll and letter position
          const waveY = Math.sin(scrollProgress * Math.PI * 4 + idx * 0.3) * (scrollProgress * 50);
          const rotation = Math.sin(scrollProgress * Math.PI * 7 + idx * 0.2) * (scrollProgress * 40);
          
          return (
            <span
              key={idx}
              className="inline-block transition-all duration-100"
              style={{
                transform: `translateY(${waveY}px) rotateX(${rotation}deg)`,
                display: 'inline-block',
                marginRight: char === ' ' ? '0.5rem' : '0',
                color: `hsl(${200 + waveY * 2}, 70%, 55%)`,
                textShadow: `0 0 ${10 + scrollProgress * 20}px rgba(255,51,102,${0.3 + scrollProgress * 0.7})`
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RiseAtSeven;