import React from 'react';
import TestimonyCarousel from './TestimonyCarousel.jsx';

const Carousel = () => {
  return (
    <div className='px-[10%] pb-[15%]' id='testimonials'>
      <div className='py-5 '>
        <div className='text-center md:px-[8%] py-1 max-w-2xl mx-auto'>
          <h3 className='font-bold text-3xl mb-5 '>
            Trusted by Thousands of Happy Customer
          </h3>
          <p className='text-gray-500 text-md'>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
      </div>
      <TestimonyCarousel />
    </div>
  );
};

export default Carousel;
