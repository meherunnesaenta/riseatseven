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
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Brand - আসল সাইটে এখানে কোনো অতিরিক্ত প্যাডিং/মার্জিন নেই */}
      <Brand />

      {/* Agency Section */}
      <div className="py-12 xl:py-24">
        <AgencySection />
      </div>

      {/* Feature Card */}
      <div className="pb-12 xl:pb-24">
        <FeatureCard />
      </div>

      {/* Our Services */}
      <div className="pb-12 xl:pb-24">
        <OurServices />
      </div>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Stacked Cards Scroll */}
      <div className="pb-12 xl:pb-24">
        <StackedCardsScroll />
      </div>

      {/* What's New */}
      <div className="pb-12 xl:pb-24">
        <WhatsNew />
      </div>

      {/* Rise at Seven Section */}
      <RiseAtSeven />

      {/* Footer */}
      <div className="mt-8 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;