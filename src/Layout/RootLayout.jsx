import React from 'react';
import Navbar from '../components/shared/Navbar';
import HeroSection from '../components/Home/HeroSection';
import Brand from '../components/Home/Brand';
import AgencySection from '../components/Home/AgencySection';
import FeatureCard from '../components/Home/FeatureCard';
import OurServices from '../components/Home/OurServices';
import MarqueeBanner from '../components/Home/MarqueeBanner';
import LegacySection from '../components/Home/LegacySection';
import WhatsNew from '../components/Home/WhatsNew';
import RiseAtSeven from '../components/Home/RiseAtSeven';
import Footer from '../components/shared/Footer';


const RootLayout = () => {
  return (
    <div className="bg-gray-100">
       <Navbar></Navbar>

      <HeroSection></HeroSection>

      <Brand />
  

      <AgencySection />


      <FeatureCard />


      <OurServices />

      <MarqueeBanner />

      <LegacySection></LegacySection>

      {/* What's New */}
      <WhatsNew />

      <RiseAtSeven />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;