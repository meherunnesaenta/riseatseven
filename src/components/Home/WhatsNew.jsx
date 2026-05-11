import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../styles/home/WhatsNew.css";

// (styles moved to src/styles/home/WhatsNew.css)



/* ─── data ─────────────────────────────────────────────────────────────────── */
const POSTS = [
  {
    id: 1,
    href: '/blog/rise-at-seven-appoints-new-senior-ops-lead',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=a7c05433e9c5ff58c01dbad0164b5ff6',
    category: null,
    author: 'Ray Saddiq',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89',
    readTime: '3 mins',
    title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead',
  },
  {
    id: 2,
    href: '/blog/rise-at-seven-announces-new-global-hq-in-manchester',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=81c38fa222db977d60bc5b6ed4f402cb',
    category: null,
    author: 'Ray Saddiq',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89',
    readTime: '2 mins',
    title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion',
  },
  {
    id: 3,
    href: '/blog/global-operations-director-promotion',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=4bb8ba4f9412f8466dff404f1461d4e9',
    category: 'News',
    author: 'Carrie Rose',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967',
    readTime: '2 mins',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  },
];

/* ─── sub-components ────────────────────────────────────────────────────────── */

/** Mirrors the original animated letter spans produced by GSAP SplitText */
function AnimatedWord({ letters, startIndex, visible }) {
  return (
    <div aria-hidden="true" style={{ position: 'relative', display: 'inline-block' }}>
      {letters.map((ch, i) => (
        <span
          key={i}
          className="inline-flex flex-col relative h-full"
          style={
            visible
              ? {
                  animation: `letterFloat 0.55s cubic-bezier(0.4,0,0.2,1) ${(startIndex + i) * 0.04}s both`,
                }
              : { opacity: 0, transform: 'translateY(20px)' }
          }
        >
          <span className="block relative w-full h-full">{ch}</span>
        </span>
      ))}
    </div>
  );
}

function ExploreButton({ fullWidth = false }) {
  return (
    <a
      href="https://riseatseven.com/blog/"
      className={`explore-btn group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none text-base px-6 py-3 bg-white text-gray-900 flex-row-reverse no-underline ${fullWidth ? 'w-full' : 'md:w-auto'}`}
      style={{ fontFamily: 'inherit' }}
    >
      <div className="relative overflow-hidden" style={{ height: '1.4em' }}>
        <div className="explore-top flex items-center gap-x-2">
          <span>Explore More Thoughts</span>
          <span className="text-xs mt-0.5" aria-hidden="true">↗</span>
        </div>
        <div className="explore-bottom absolute top-0 left-0 flex items-center gap-x-2">
          <span>Explore More Thoughts</span>
          <span className="text-xs mt-0.5" aria-hidden="true">↗</span>
        </div>
      </div>
    </a>
  );
}

/** Mirrors the double-image + circle-mask card structure from the original */
function BlogCard({ post, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={post.href}
      className="blog-card-link circle-mask-container w-full flex flex-col items-start gap-y-5 no-underline"
      style={
        visible
          ? { animation: `slideUp 0.55s cubic-bezier(0.4,0,0.2,1) ${index * 0.1}s both` }
          : { opacity: 0, transform: 'translateY(30px)' }
      }
    >
      {/* ── image stack (mirrors original 3-layer grid) ── */}
      <div className="w-full grid">

        {/* layer 1 – category badge (z-20) */}
        <div className="col-start-1 row-start-1 z-20 p-3" style={{ zIndex: 20 }}>
          {post.category && (
            <div className="flex flex-wrap gap-1">
              <div
                className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white"
                style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
              >
                {post.category}
              </div>
            </div>
          )}
        </div>

        {/* layer 2 – blurred circle-mask image (z-10) */}
        <div
          className="col-start-1 row-start-1 relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square"
          style={{ zIndex: 10 }}
        >
          <div className="circle-mask w-full h-full">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* layer 3 – sharp image on top (z-0, same grid cell) */}
        <div
          className="col-start-1 row-start-1 aspect-square relative rounded-2xl lg:rounded-3xl overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* ── meta + title ── */}
      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-start gap-1 mt-1 flex-wrap">
          {/* author pill */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-700 bg-white">
            <div className="inline-flex items-center justify-center -ml-1.5">
              <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div>{post.author}</div>
          </div>
          {/* read-time pill */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-700 bg-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div>{post.readTime}</div>
          </div>
        </div>

        <h2
          className="inline-flex flex-wrap text-balance text-left text-gray-900 text-2xl xl:text-3xl font-medium tracking-tight m-0"
          style={{ fontFamily: 'inherit' }}
        >
          {post.title}
        </h2>
      </div>
    </a>
  );
}

/* ─── main component ────────────────────────────────────────────────────────── */
export default function WhatsNew() {
  const swiperElRef  = useRef(null);
  const swiperInst   = useRef(null);
  const paginationRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);



  /* trigger heading animation on mount */
  useEffect(() => {
    const t = setTimeout(() => setHeadingVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* init Swiper */
  useEffect(() => {
    if (!swiperElRef.current || swiperInst.current) return;
    const raf = requestAnimationFrame(() => {
      swiperInst.current = new Swiper(swiperElRef.current, {
        modules: [Pagination],
        slidesPerView: 1.15,
        spaceBetween: 15,
        loop: true,
        slidesOffsetBefore: 15,
        speed: 700,
        pagination: {
          el: paginationRef.current,
          type: 'progressbar',
        },
        breakpoints: {
          768:  { slidesPerView: 2.15 },
          1024: { loop: false, slidesPerView: 3, spaceBetween: 15, slidesOffsetBefore: 0 },
          1280: { loop: false, slidesPerView: 3, spaceBetween: 20, slidesOffsetBefore: 0 },
        },
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      swiperInst.current?.destroy(true, true);
      swiperInst.current = null;
    };
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* ── header row ── */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

              {/* heading: "What's [img] New" */}
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2
                  className="inline-flex flex-wrap text-balance relative flex-col text-left justify-start text-gray-900 font-medium tracking-tight m-0"
                  aria-label="What's New"
                  style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.9, fontFamily: 'inherit' }}
                >
                  <div style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
                    <div className="flex flex-wrap items-center text-left justify-start" style={{ gap: '0.25em' }}>

                      {/* "What's" */}
                      <div className="inline pointer-fine:mr-0">
                        <AnimatedWord
                          letters={["W","h","a","t","'","s"]}
                          startIndex={0}
                          visible={headingVisible}
                        />
                      </div>

                      {/* inline image */}
                      <div
                        className="inline shrink-0 relative overflow-hidden"
                        style={{ borderRadius: '15%', display: 'inline-block', background: 'rgba(0,0,0,0.05)' }}
                      >
                        <img
                          src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                          alt="FOS25 3380"
                          style={{ width: 75, height: 'auto', display: 'block', objectFit: 'cover', borderRadius: '15%' }}
                        />
                      </div>

                      {/* "New" */}
                      <div className="inline pointer-fine:mr-0">
                        <AnimatedWord
                          letters={["N","e","w"]}
                          startIndex={6}
                          visible={headingVisible}
                        />
                      </div>

                    </div>
                  </div>
                </h2>
              </div>

              {/* desktop CTA */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <ExploreButton />
              </div>
            </div>
          </div>

          {/* ── swiper ── */}
          <div className="col-span-12 lg:px-7">
            {/* .swiper must be the direct element passed to new Swiper() */}
            <div className="swiper" ref={swiperElRef}>
              <div className="swiper-wrapper">
                {POSTS.map((post, i) => (
                  <div key={post.id} className="swiper-slide py-2" style={{ height: 'auto' }}>
                    <BlogCard post={post} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* pagination */}
            <div className="w-full relative py-3 mt-5 px-4 md:px-7">
              <div className="w-full relative">
                <div
                  ref={paginationRef}
                  className="whatsnew-pagination swiper-pagination"
                />
              </div>
            </div>
          </div>

          {/* mobile CTA */}
          <div className="col-span-12 md:hidden px-4 md:px-7">
            <ExploreButton fullWidth />
          </div>

        </div>
      </div>
    </section>
  );
}