import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ITEMS = [
  { type: "text", value: "Chasing Customers" },
  { type: "image", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80" },
  { type: "text", value: "Not Algorithms" },
  { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80" },
  { type: "text", value: "Chasing Customers" },
  { type: "image", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80" },
  { type: "text", value: "Not Algorithms" },
  { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80" },
  { type: "text", value: "Chasing Customers" },
  { type: "image", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80" },
  { type: "text", value: "Not Algorithms" },
  { type: "image", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80" },
];

export default function MarqueeBanner() {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const anim1Ref = useRef(null);
  const anim2Ref = useRef(null);

  useEffect(() => {
    const speed = 38; // px per second

    const startMarquee = (el, direction = -1) => {
      if (!el) return null; 
      const totalWidth = el.scrollWidth / 2;
      const duration = totalWidth / speed;

      const startX = direction === -1 ? 0 : -totalWidth;
      const endX = direction === -1 ? -totalWidth : 0;

      gsap.set(el, { x: startX });

      return gsap.to(el, {
        x: endX,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            if (direction === -1) {
              return (((val % totalWidth) - totalWidth) % totalWidth) + "px";
            } else {
              return ((val % totalWidth) + "px");
            }
          },
        },
      });
    };

    anim1Ref.current = startMarquee(track1Ref.current, -1);
    anim2Ref.current = startMarquee(track2Ref.current, 1);

    return () => {
      anim1Ref.current?.kill();
      anim2Ref.current?.kill();
    };
  }, []);

  const renderItem = (item, i) => {
    if (item.type === "text") {
      return (
        <span key={i} className="mq-word">
          {item.value}
        </span>
      );
    }
    return (
      <span key={i} className="mq-img-wrap">
        <img src={item.src} alt="" className="mq-img" />
      </span>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800;900&display=swap');

        .mq-section {
          background: #ECEAE3;
          overflow: hidden;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .mq-row {
          overflow: hidden;
          width: 100%;
        }

        .mq-track {
          display: inline-flex;
          align-items: center;
          gap: 0;
          white-space: nowrap;
          will-change: transform;
        }

        .mq-word {
          font-size: clamp(56px, 9vw, 130px);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #0a0a0a;
          line-height: 1;
          padding: 0 0.25em;
          display: inline-block;
        }

        .mq-img-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.2em;
          vertical-align: middle;
        }

        .mq-img {
          width: clamp(64px, 7vw, 110px);
          height: clamp(64px, 7vw, 110px);
          border-radius: 14px;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div className="mq-section">

        {/* ROW 1 — left to right */}
        <div className="mq-row">
          <div className="mq-track" ref={track1Ref}>
            {[...ITEMS, ...ITEMS].map((item, i) => renderItem(item, i))}
          </div>
        </div>

      </div>
    </>
  );
}