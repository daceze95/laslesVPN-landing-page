import React from 'react';

const HangingCard = ({ children }) => {
  return (
    <div className='relative'>
      <div className='flex justify-between bg-white border shadow-2xl shadow-gray-300  rounded-lg md:py-5 h-[150px] md:px-[2%]'>
        {children}
      </div>
    </div>
  );
};

export default HangingCard;
