
import React from 'react';
import '../../App.css';
import FrontSection from '../front-section/front-section';
import Cards from '../Cards/card';
import Footer from '../footer/footer';

function Home() {
  return (
    <>
      <FrontSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;