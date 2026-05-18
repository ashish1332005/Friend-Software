import React from 'react';
import Hero from '../sections/Hero';
import Clients from '../sections/Clients';
import Services from '../sections/Services';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import ERPProducts from '../sections/ERPProducts';
import ContactCTA from '../sections/ContactCTA';


const HomePage = () => {
  return (
    <>
      <Hero />
        <Services />
      <Clients />
      <About />
           <ERPProducts />
      <Portfolio />
 
      <ContactCTA />
    </>
  );
};

export default HomePage;
