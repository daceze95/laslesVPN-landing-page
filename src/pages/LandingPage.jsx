import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import ChoosePlan from '../components/ChoosePlan.jsx';
import ServersView from '../components/ServersView.jsx';
import Carousel from '../components/Carousel.jsx';
import Footer from '../components/Footer.jsx';

const LandingPage = () => {
  return (
    <div className='max-w-[1440px]'>
      <NavBar />
      <Hero />
      <ChoosePlan />
      <ServersView />
      <Carousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
