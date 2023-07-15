import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import SidebarSection from '../SidebarSection';

function Home() {
    return (
      <>
        <HeroSection />
        <Cards />
        <SidebarSection />
      </>
    );
  }

  export default Home; 