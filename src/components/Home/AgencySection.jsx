import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/home/AgencySection.css";
import Button from "../shared/Button";

export default function AgencySection() {

  const sectionRef = useRef(null);

  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const desktopBtnsRef = useRef(null);
  const mobileBtnsRef = useRef(null);
  const imgRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      // Animate heading words
      .fromTo(
        wordsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.07 },
        "-=0.4"
      )
      // Animate image
      .fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8, rotate: -6 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.6 },
        "-=0.3"
      )
      // Animate desktop buttons
      .fromTo(
        desktopBtnsRef.current?.querySelectorAll(".as-btn") || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      )
      // Animate mobile buttons
      .fromTo(
        mobileBtnsRef.current?.querySelectorAll(".as-btn") || [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = ["Driving", "Demand", "&", "Discovery"];

  return (
    <section className="as-root" ref={sectionRef}>
      <div className="as-container">
        
        {/* DESKTOP: Left + Right layout */}
        <div className="as-desktop-layout">
          
          {/* Left Column - Tagline */}
          <div className="as-left">
            <p ref={subtitleRef}>
              A global team of search-first content marketers
              engineering semantic relevancy &amp; category
              signals for both the internet and people
            </p>
          </div>

          {/* Right Column - Heading + Desktop Buttons */}
          <div className="as-right">
            <h1 className="as-heading" ref={headingRef}>
              <div className="as-line">
                {words.slice(0, 3).map((word, idx) => (
                  <span 
                    key={idx}
                    className="word"
                    ref={el => wordsRef.current[idx] = el}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <div className="as-line">
                <span 
                  className="word"
                  ref={el => wordsRef.current[3] = el}
                >
                  {words[3]}
                </span>
                <img
                  ref={imgRef}
                  className="as-inline-img"
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                  alt=""
                />
              </div>
            </h1>

            {/* DESKTOP BUTTONS with FLIP ANIMATION */}
            <div className="as-desktop-buttons" ref={desktopBtnsRef}>

              <Button href="https://riseatseven.com/about/" variant="white">
                Our Story
              </Button>
              <Button href="https://riseatseven.com/services/" variant="transparent">
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* MOBILE BUTTONS with FLIP ANIMATION */}
        <div className="as-mobile-buttons" ref={mobileBtnsRef}>
          <Button href="https://riseatseven.com/work/" variant="white">
            Explore Our Work
          </Button>
          <Button href="https://riseatseven.com/about/" variant="white">
            Our Story
          </Button>
          <Button href="https://riseatseven.com/services/" variant="transparent">
            Our Services
          </Button>
        </div>

      </div>


    </section>
  );
}
