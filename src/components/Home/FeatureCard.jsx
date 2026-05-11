import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../styles/home/FeatureCard.css";

const workItems = [
  {
    id: 8366,
    title: "SIXT",
    year: "[2023-2025]",
    description: "An extra 3m clicks regionally through SEO",
    category: "Car rental",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
    colour: "#cb7b3a",
    link: "https://riseatseven.com/work/sixt/"
  },
  {
    id: 7670,
    title: "Dojo - B2B",
    year: "[2021-2025]",
    description: "A B2B success story for Dojo card machines",
    category: "Card Machines",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=dd63f860a1924655216d5eb62cf5e592",
    colour: "#fdd8c4",
    link: "https://riseatseven.com/work/dojo/"
  },
  {
    id: 19708,
    title: "Magnet Trade - B2B",
    year: "[2023-2024]",
    description: "A full service SEO success story 170%+ increase",
    category: "",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=381490e8c73ef79a1885309fd0b0c48a",
    colour: "#d8c4fd",
    link: "https://riseatseven.com/work/magnet-trade-b2b/"
  },
  {
    id: 16982,
    title: "Leading E Sim brand globally",
    year: "[2023-2025]",
    description: "Increasing brand and non brand visibility UK/ES",
    category: "Esims",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=49e33faaf74314496fd5f00b47fe926c",
    colour: "#cb7b3a",
    link: "https://riseatseven.com/work/esim-case-study/"
  },
  {
    id: 17067,
    title: "JD Sports",
    year: "[2025]",
    description: "65% up YoY in clicks for JDSports FR, IT, ES",
    category: "Trainers",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=b0de9817445481a8f52dce0b5c443bbc",
    colour: "#3a8ccb",
    link: "https://riseatseven.com/work/jd-sports-/"
  },
  {
    id: 8221,
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    description: "Dominating Google and AI search",
    category: "Easter Breaks",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=cbb1e369eeca98550153bca9743dbacb",
    colour: "#d2b59d",
    link: "https://riseatseven.com/work/parkdean-resorts-easter-breaks/"
  },
  {
    id: 301,
    title: "Pooky",
    year: "[2025]",
    description: "Driving demand for Pooky Rechargeable Lights",
    category: "Rechargeable Lights",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=a42d0ad7a0f8458c7b22b128993d1d8b",
    colour: "#39b0bd",
    link: "https://riseatseven.com/work/pooky/"
  },
  {
    id: 11781,
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    description: "Social search and multi channel content to #1",
    category: "UK holidays",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/1.JPG?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751183703&s=39124d20abc57ddd5fe8d65337b36d2d",
    colour: "#d29dd0",
    link: "https://riseatseven.com/work/parkdean-resorts-social-search/"
  },
  {
    id: 27,
    title: "Revolution Beauty",
    year: "[2022-2025]",
    description: "Building the UK's leading beauty dupe brand",
    category: "Beauty Dupes",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=1297f5bff1af8057f9908e26956825ac",
    colour: "#fecacc",
    link: "https://riseatseven.com/work/revolution-beauty/"
  },
  {
    id: 297,
    title: "Lloyds Pharmacy",
    year: "[2022-23]",
    description: "Driving category leadership for STI tests",
    category: "STI tests",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=04aee1885f0d515e965b94f9bae6727a",
    colour: "#60dcfb",
    link: "https://riseatseven.com/work/lloyds-pharmacy/"
  },
  {
    id: 8004,
    title: "PrettyLittleThing",
    year: "[2021-2023]",
    description: "Driving discovery for everything \"outfits\" for PLT",
    category: "Outfits",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=d730c3765e685a8264bc8304fc54e357",
    colour: "#fecacc",
    link: "https://riseatseven.com/work/prettylittlething/"
  }
];

export default function FeatureCard() {
  const containerRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const headingsContainerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  const [imagesHeight, setImagesHeight] = useState(0);
  const [headingsHeight, setHeadingsHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (imagesContainerRef.current) {
      setImagesHeight(imagesContainerRef.current.offsetHeight);
    }
    if (headingsContainerRef.current) {
      setHeadingsHeight(headingsContainerRef.current.offsetHeight);
    }
  }, []);

  // Calculate Y movement for images
  const imagesY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(imagesHeight - window.innerHeight)]
  );

  // Calculate Y movement for headings
  const headingsY = useTransform(
    scrollYProgress,
    [0, 1],
    [150, -(headingsHeight - 300)]
  );

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div
          ref={containerRef}
          className="w-full relative -my-7 flex overflow-hidden pointer-fine:overflow-visible"
          style={{ height: `${imagesHeight}px` }}
        >
          <div className="w-full py-7 top-0 h-screen-fix-110 pointer-fine:h-screen-fix pointer-fine:sticky">
            <div className="w-full h-full overflow-hidden bg-grey-900 rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">
              
              {/* Left Side - Headings (Desktop) */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-center lg:col-span-6 lg:h-[96svh] 4xl:col-span-6">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-20">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
                    Featured Work
                  </h2>
                  
                  <div className="relative flex-1 overflow-hidden hidden pr-5 lg:inline-block">
                    <div className="absolute top-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-b from-grey-900 hidden lg:flex"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-t from-grey-900 hidden lg:flex"></div>
                    
                    <motion.div 
                      ref={headingsContainerRef}
                      className="grid gap-y-2 relative z-10 2xl:gap-y-3 4xl:gap-y-5"
                      style={{ y: headingsY }}
                    >
                      {workItems.map((item) => (
                        <motion.div
                          key={item.id}
                          className="relative transition-transform duration-300"
                          animate={{
                            x: (hovering && activeItem === item.id) ? 12 : 0
                          }}
                        >
                          <a
                            href={item.link}
                            className="flex items-start gap-x-2 group"
                            onMouseEnter={() => {
                              setHovering(true);
                              setActiveItem(item.id);
                            }}
                            onMouseLeave={() => {
                              setHovering(false);
                              setActiveItem(null);
                            }}
                          >
                            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-5xl/none lg:text-6xl/none xl:text-7xl/0.9 3xl:text-7.5xl/0.9 4xl:text-8xl/0.9 font-sans-primary font-medium tracking-tight">
                              {item.title}
                            </div>
                            <div className="text-white text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {item.year}
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Right Side - Images */}
              <motion.div 
                ref={imagesContainerRef}
                className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-8"
                style={{ y: imagesY }}
              >
                <div className="mb-5 lg:hidden">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight font-sans-primary font-medium tracking-tight">
                    Featured Work
                  </h2>
                </div>

                {workItems.map((item) => (
                  <WorkCard
                    key={item.id}
                    item={item}
                    isActive={hovering && activeItem === item.id}
                    onMouseEnter={() => {
                      setHovering(true);
                      setActiveItem(item.id);
                    }}
                    onMouseLeave={() => {
                      setHovering(false);
                      setActiveItem(null);
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-3 lg:mt-7">
          <a
            href="https://riseatseven.com/work/"
            className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl bg-white text-grey-900"
          >
            <div className="relative overflow-hidden">
              <div className="transition-transform duration-300 group-hover:-translate-y-6">
                <div className="flex items-center gap-x-2">
                  <span>Explore Our Work</span>
                  <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                    <i className="fa-regular fa-sharp fa-arrow-up-right"></i>
                  </span>
                </div>
              </div>
              <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover:translate-y-0">
                <div className="flex items-center gap-x-2">
                  <span>Explore Our Work</span>
                  <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                    <i className="fa-regular fa-sharp fa-arrow-up-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// Work Card Component
function WorkCard({ item, isActive, onMouseEnter, onMouseLeave }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <a
      href={item.link}
      className="grid group rounded-2xl overflow-hidden mb-5 lg:rounded-2xl lg:mb-7 circle-mask-container relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image Container with Scale Effect */}
      <div className="col-start-1 row-start-1 transition-transform duration-700 ease-out group-hover:scale-105">
        <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
          <picture className="absolute top-0 left-0 w-full h-full">
            <img
              src={item.image}
              alt={item.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      {/* Top Badge - Desktop & Mobile */}
      {item.category && (
        <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start lg:items-end lg:p-5">
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
            <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true"></i>
            <div>{item.category}</div>
            <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true"></i>
          </div>
        </div>
      )}

      {/* Mobile Info (Visible only on mobile) */}
      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end lg:hidden">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">{item.year}</div>
          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight">
            {item.title}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70"></div>
      </div>

      {/* Hover Overlay - Full Card Mask Effect */}
      <motion.div
        className="col-start-1 row-start-1 grid-cols-12 flex flex-col items-start justify-between z-40 p-3 transition-all duration-500 lg:p-5 absolute inset-0 opacity-0 hover:opacity-100 circle-mask"
        style={{ backgroundColor: item.colour, color: "#111212" }}
        initial={false}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-sans-primary font-medium tracking-tight">
          {item.description}
        </div>
        
        <div className="w-full flex items-end justify-between">
          <div className="w-8 lg:w-24"></div>
          {item.category && (
            <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
              <i className="fa-regular fa-sharp fa-magnifying-glass" aria-hidden="true"></i>
              <div>{item.category}</div>
              <i className="fa-regular fa-sharp fa-chart-line-up" aria-hidden="true"></i>
            </div>
          )}
        </div>
      </motion.div>
    </a>
  );
}