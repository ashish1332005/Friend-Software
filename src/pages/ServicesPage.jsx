import React from 'react';
import PageHero from '../components/PageHero';
import Services from '../sections/Services';
import ContactCTA from '../sections/ContactCTA';

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services built to move your business forward."
        description="From marketing campaigns to websites, mobile apps, and business systems, we deliver practical solutions with speed, polish, and measurable impact."
      />
      <Services />
      <ContactCTA />
    </>
  );
};

export default ServicesPage;
