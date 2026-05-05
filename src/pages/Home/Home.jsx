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


const Home = () => {
  return (
      <div>
    
      <Navbar />
      <Hero></Hero>
      <Brand></Brand>
      <AgencySection></AgencySection>
      <FeatureCard></FeatureCard>
      <StackedCardsScroll></StackedCardsScroll>
      <WhatsNew></WhatsNew>
      <RiseAtSeven />
      <Footer />
      </div>
  );
};

export default Home;