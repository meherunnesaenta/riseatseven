// src/pages/Home.jsx
import React from 'react';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import RiseAtSeven from '../../components/Home/RiseAtSeven';
import WhatsNew from '../../components/Home/WhatsNew';
import Brand from '../../components/Home/Brand';
import FeatureCard from '../../components/Home/FeatureCard';
import AgencySection from '../../components/Home/AgencySection';
import OurServices from '../../components/Home/Ourservices';
import MarqueeBanner from '../../components/Home/Marqueebanner';
import LegacySection from '../../components/Home/LegacySection';
import HeroSection from '../../components/Home/HeroSection';

const Home = () => {
  return (
    <div className="bg-grey-100">
      <Navbar />

      {/* Hero */}
      <HeroSection></HeroSection>

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
        <LegacySection></LegacySection>
    
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