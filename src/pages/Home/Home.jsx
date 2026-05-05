import React from 'react';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import RiseAtSeven from '../../components/Home/RiseAtSeven';
import WhatsNew from '../../components/Home/WhatsNew';
import StackedCardsScroll from '../../components/Home/Stackedcardsscroll';


const Home = () => {
  return (
      <div>
    
      <Navbar />
      <StackedCardsScroll></StackedCardsScroll>
      <WhatsNew></WhatsNew>
      <RiseAtSeven />
      <Footer />
      </div>
  );
};

export default Home;