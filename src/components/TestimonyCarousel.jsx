import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { arr, settings } from '../constant';

const TestimonyCarousel = () => {
  return (
    <>
      <div className='hidden md:block'>
        <Slider {...settings}>{arr.map((item) => item)}</Slider>
      </div>
      <div className='block md:hidden'>
        <div className='flex flex-wrap justify-center'>
          {arr.slice(0, arr.length-3).map((item) => item)}
        </div>
      </div>
    </>
  );
};

export default TestimonyCarousel;
