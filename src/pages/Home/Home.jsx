// src/pages/Home.jsx
import React from 'react';
import AnnouncementBar from '../../components/shared/AnnouncementBar';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import RiseAtSeven from '../../components/Home/RiseAtSeven';
import WhatsNew from '../../components/Home/WhatsNew';
import StackedCardsScroll from '../../components/Home/Stackedcardsscroll';
import Brand from '../../components/Home/Brand';
import FeatureCard from '../../components/Home/FeatureCard';
import AgencySection from '../../components/Home/AgencySection';
import Hero from '../../components/Home/Hero';
import OurServices from '../../components/Home/Ourservices';
import MarqueeBanner from '../../components/Home/Marqueebanner';

const Home = () => {
  return (
    <div className="bg-grey-100">
      <Navbar />

      {/* Hero - py-0 */}
      <Hero />

      {/* Brand Section - pt-6 on mobile, pt-12 on desktop */}
      <div className="pt-6 xl:pt-12">
        <Brand />
      </div>

      {/* Agency Section - py-12 on mobile, py-24 on desktop */}
      <div className="py-12 xl:py-24">
        <AgencySection />
      </div>

      {/* Feature Card - pb-12 on mobile, pb-24 on desktop */}
      <div className="pb-12 xl:pb-24">
        <FeatureCard />
      </div>

      {/* Our Services - pb-12 on mobile, pb-24 on desktop */}
      <div className="pb-12 xl:pb-24">
        <OurServices />
      </div>

      {/* Marquee Banner - py-0 */}
      <MarqueeBanner />

      {/* Stacked Cards Scroll - pb-12 on mobile, pb-24 on desktop */}
      <div className="pb-12 xl:pb-24">
        <StackedCardsScroll />
      </div>

      {/* What's New - pb-12 on mobile, pb-24 on desktop */}
      <div className="pb-12 xl:pb-24">
        <WhatsNew />
      </div>

      {/* Rise at Seven Section - (আপনার চাহিদা অনুযায়ী, ডিফল্ট কোনো গ্যাপ নাও থাকতে পারে) */}
      <RiseAtSeven />

      {/* Footer - mt-8 on mobile, mt-0 on desktop,  এটার ভিতরের প্যাডিং নিজস্ব */}
      <div className="mt-8 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;