import React from 'react';

const HeroInfoHolder = ({ children }) => {
  return (
    <div className='box-border bg-white flex flex-col-reverse md:flex-row items-center justify-center w-full md:h-[500px] px-[2%] gap-4 my-20 md:my-0 last:mt-10 first:mb-10'>
      {children}
    </div>
  );
};

export default HeroInfoHolder;
