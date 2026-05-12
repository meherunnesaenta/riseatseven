import React, { useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import CustomCursor from '../components/shared/CustomCursor';
import HeroSection from '../components/Home/HeroSection';
import Brand from '../components/Home/Brand';
import AgencySection from '../components/Home/AgencySection';
import FeatureCard from '../components/Home/FeatureCard';
import Ourservices from '../components/Home/Ourservices';
import MarqueeBanner from '../components/Home/Marqueebanner';
import LegacySection from '../components/Home/LegacySection';
import WhatsNew from '../components/Home/WhatsNew';
import RiseAtSeven from '../components/Home/RiseAtSeven';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <div className="bg-gray-100 relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <Brand />
        <AgencySection />
        <FeatureCard />
        <Ourservices />
        <MarqueeBanner />
        <LegacySection />
        <WhatsNew />
        <RiseAtSeven />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;