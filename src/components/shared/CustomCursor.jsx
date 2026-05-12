import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e) => {
      // Main cursor follows mouse instantly
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0,
          ease: 'power2.out'
        });
      }
      
      // Follower with slight delay
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    };

    // Handle hover on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .nb-link, .nb-cta, [role="button"]');
    
    const onMouseEnter = (e) => {
      setIsHovering(true);
      const text = e.target.getAttribute('data-cursor-text') || 
                   e.target.innerText?.slice(0, 20) || 
                   'Click';
      setCursorText(text);
    };
    
    const onMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
       
        }
        html, body {
          cursor: none !important;
        }
        a, button, .nb-link, .nb-cta {
          cursor: none !important;
          
        }
      `}</style>
      
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999]  pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%)' ,
        }}
      >
        <div className={`
          rounded-full bg-mint transition-all duration-200
          flex items-center justify-center
          ${isHovering ? 'w-20 h-20' : 'w-3 h-3'}
        `}>
          {isHovering && (
            <span className="text-grey-900 text-sm font-medium whitespace-nowrap px-4">
              {cursorText}
            </span>
          )}
        </div>
      </div>
      
      {/* Cursor Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0  z-[9998] pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={` bg-[#a8f0dc]
          rounded-full border border-mint/50 transition-all duration-300
          ${isHovering ? 'w-50 h-50 opacity-0' : 'w-8 h-8 opacity-100'}
        `} />
      </div>
    </>
  );
};

export default CustomCursor;