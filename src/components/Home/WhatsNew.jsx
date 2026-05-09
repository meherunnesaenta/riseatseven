import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const WhatsNew = () => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
      author: "Ray Saddiq",
      authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
      readTime: "3 mins",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8",
      link: "/blog/rise-at-seven-appoints-new-senior-ops-lead",
      category: null
    },
    {
      id: 2,
      title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
      author: "Ray Saddiq",
      authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
      readTime: "2 mins",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e809ec791a3a4026cf5673426e4d3395",
      link: "/blog/rise-at-seven-announces-new-global-hq-in-manchester",
      category: null
    },
    {
      id: 3,
      title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
      author: "Carrie Rose",
      authorImage: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
      readTime: "2 mins",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371",
      link: "/blog/global-operations-director-promotion",
      category: "News"
    }
  ];

  useEffect(() => {
    if (swiperRef.current && !swiperInstanceRef.current) {
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        slidesPerView: 1.15,
        spaceBetween: 15,
        loop: false,
        slidesOffsetBefore: 15,
        speed: 700,
        pagination: {
          el: '.js-pagination-64',
          type: 'progressbar',
        },
        breakpoints: {
          768: {
            slidesPerView: 2.15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesOffsetBefore: 0,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
          }
        }
      });
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeadingVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const AnimatedLetter = ({ letter, index, isVisible }) => (
    <span 
      className="inline-flex flex-col relative h-full"
      style={{
        animation: isVisible ? `letterFloat 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s forwards` : 'none',
        opacity: 0,
        transform: 'translateY(20px)',
        display: 'inline-block'
      }}
    >
      <span className="block relative w-full h-full">
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    </span>
  );

  const BlogCard = ({ post, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageProgress, setImageProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    const imgRef = useRef(null);

    // Progressive image loading with width transition
    useEffect(() => {
      if (imgRef.current) {
        const img = imgRef.current;
        if (img.complete) {
          setImageLoaded(true);
          setImageProgress(100);
        } else {
          img.onload = () => {
            setImageLoaded(true);
            let progress = 0;
            const interval = setInterval(() => {
              progress += 10;
              setImageProgress(progress);
              if (progress >= 100) clearInterval(interval);
            }, 30);
          };
        }
      }
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (cardRef.current) observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div 
        ref={cardRef}
        className="w-full flex flex-col items-start gap-y-5 group/card"
        style={{
          animation: isVisible ? `slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s forwards` : 'none',
          opacity: 0,
          transform: 'translateY(30px)'
        }}
      >
        <a 
          href={post.link}
          className="w-full flex flex-col items-start gap-y-5 no-underline"
        >
          <div className="w-full relative rounded-2xl lg:rounded-3xl overflow-hidden">
            {/* Image Container with hover effects */}
            <div className="relative aspect-square overflow-hidden">
              
              {/* Progressive Loading Bar */}
              {!imageLoaded && (
                <div className="absolute inset-0 z-30 bg-gray-100">
                  <div 
                    className="h-full bg-gray-200 transition-all duration-300 ease-out"
                    style={{ width: `${imageProgress}%` }}
                  />
                </div>
              )}

              {/* Blur Background Layer - Slides up from bottom on hover */}
              <div 
                className="absolute inset-0 z-10 transition-all duration-700 ease-out group-hover/card:blur-xl group-hover/card:scale-110"
                style={{
                  transform: 'scale(1)',
                }}
              >
                <img 
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay - Slides up from bottom on hover */}
              <div 
                className="absolute inset-0 z-15 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-500 ease-out"
                style={{
                  transform: 'translateY(100%)',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(100%)';
                  e.currentTarget.style.opacity = '0';
                }}
              />

              {/* Main Image Layer */}
              <div className="absolute inset-0 z-5 transition-all duration-700 ease-out group-hover/card:scale-110">
                <img 
                  ref={imgRef}
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Category Badge */}
              {post.category && (
                <div className="absolute top-3 left-3 z-20">
                  <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-y-3">
            <div className="flex items-start gap-1 mt-1 flex-wrap">
              <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-700 bg-white border border-gray-100">
                <div className="inline-flex items-center justify-center -ml-1.5">
                  <div className="rounded-full overflow-hidden -mr-1 w-5 h-5 ring-2 ring-white">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>{post.author}</div>
              </div>

              <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-700 bg-white border border-gray-100">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>{post.readTime}</div>
              </div>
            </div>

            <h3 className="text-left text-gray-900 text-2xl xl:text-3xl 4xl:text-4xl font-sans-primary font-medium tracking-tight m-0 transition-colors duration-300 group-hover/card:text-gray-600">
              {post.title}
            </h3>
          </div>
        </a>
      </div>
    );
  };

  const ExploreButton = ({ mobile = false }) => (
    <a 
      href="https://riseatseven.com/blog/" 
      target="_blank"
      rel="noopener noreferrer"
      className={`group/btn inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-sans-primary font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none text-base px-6 py-3 rounded-3xl transition-all duration-300 hover:rounded-xl bg-white text-gray-900 flex-row-reverse no-underline ${
        mobile ? 'w-full' : 'md:w-auto'
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 group-hover/btn:-translate-y-6">
          <div className="flex items-center gap-x-2">
            <span>Explore More Thoughts</span>
            <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-6 group-hover/btn:translate-y-0">
          <div className="flex items-center gap-x-2">
            <span>Explore More Thoughts</span>
            <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
          
          {/* Header Section */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative flex flex-col text-left justify-start text-gray-900 text-6xl/0.9 md:text-7xl/none lg:text-7xl/none 2xl:text-8xl/0.9 font-sans-primary font-medium tracking-tight m-0">
                  <div className="w-full" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
                    <div className="flex flex-wrap text-left justify-start items-center">
                      <div className="inline mr-2">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                          {["W","h","a","t","'","s"].map((letter, idx) => (
                            <AnimatedLetter key={idx} letter={letter} index={idx} isVisible={headingVisible} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Heading Image with Hover Zoom Effect */}
                      <div className="inline shrink-0 flex relative overflow-hidden mr-2 group/image" style={{ borderRadius: '15%' }}>
                        <div 
                          className="w-full h-full relative transition-all duration-700 ease-out group-hover/image:scale-110" 
                          style={{ borderRadius: '15%' }}
                        >
                          <img 
                            src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                            alt="FOS25 3380" 
                            className="w-full h-full object-cover transition-all duration-700"
                            style={{ borderRadius: '15%', width: '90px', height: 'auto' }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="inline mr-2">
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                          {["N","e","w"].map((letter, idx) => (
                            <AnimatedLetter key={idx} letter={letter} index={idx + 6} isVisible={headingVisible} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>

              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <ExploreButton />
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="col-span-12 lg:px-7">
            <div className="w-full overflow-hidden" ref={swiperRef}>
              <div className="swiper-wrapper">
                {blogPosts.map((post, index) => (
                  <div key={post.id} className="swiper-slide !h-auto py-2">
                    <BlogCard post={post} index={index} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full relative py-3 mt-5 px-4 md:px-7">
              <div className="w-full relative">
                <div className="w-full swiper-pagination js-pagination-64"></div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:hidden px-4 md:px-7">
            <ExploreButton mobile />
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes letterFloat {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .swiper-slide {
          height: auto !important;
        }
        
        .swiper-pagination-progressbar {
          background: rgba(0, 0, 0, 0.1) !important;
          height: 3px !important;
          border-radius: 3px !important;
          overflow: hidden;
        }
        
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: #000 !important;
          border-radius: 3px;
          transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .font-sans-primary {
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* Additional hover effects */
        .group\\/card:hover .absolute\\:z-15 {
          transform: translateY(0%) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default WhatsNew;