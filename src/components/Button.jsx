import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='flex-grow-0 text-xs bg-laserRed text-white py-2 px-10 rounded-md text-center shadow-xl shadow-laserRed/50'>
      {children}
    </button>
  );
};

export default Button;
