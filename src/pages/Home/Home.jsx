// src/pages/Home.jsx
import React from 'react';
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

      {/* Hero */}
      <Hero />

      {/* Brand */}
      <Brand />

      {/* Agency Section */}

        <AgencySection />
     

      {/* Feature Card */}
      
        <FeatureCard />


      {/* Our Services */}
   
        <OurServices />
   

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Stacked Cards Scroll */}
        <StackedCardsScroll />
    
      {/* What's New */}
        <WhatsNew />
      

      {/* Rise at Seven Section */}
      <RiseAtSeven />

      {/* Footer */}
        <Footer />
    </div>
  );
};

export default Home;