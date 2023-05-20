import React from 'react';
import PriceCard from './PriceCard.jsx';

const ChoosePlan = () => {
  return (
    <div className='bg-laserAsh pt-[5%] pb-[10%]'>
      <div className='text-center px-[2%] md:px-[10%] pb-[5%]'>
        <h3 className='font-bold text-3xl mb-5'>Choose your Plan</h3>
        <p className='max-w-xl mx-auto text-gray-400'>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>
      <div>
        <PriceCard />
      </div>
    </div>
  );
};

export default ChoosePlan;
