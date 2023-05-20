import React from 'react';
import { laslesLogo, navItems } from '../constant';
// import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  // const location = useLocation();
  // console.log(location)
  const style = 'ml-4';
  return (
    <header className='fixed top-0 left-0 right-0 px-[2%] md:px-[10%] z-50 bg-white '>
      <ul className='flex w-full justify-between items-center p-2'>
        <li className='font-bold text-xl'>
          <img src={laslesLogo} alt='site logo' />
        </li>
        <>
          <li className={`hidden md:block`}>
            <ul className='flex'>
              {navItems.map((item) => (
                <li className={`${style} cursor-pointer`} key={item}>
                  {/* <Link to='#testimonials'> */}
                    {item}
                    {/* </Link> */}
                </li>
              ))}
            </ul>
          </li>
          {/* {`hidden md:block`} */}
          <li className=''>
            <ul className={`${style} flex items-center gap-4`}>
              <li className={`${style} text-sm md:text-lg cursor-pointer`}>
                Login
              </li>
              <li className='bg-transparent border border-laserRed text-laserRed text-sm rounded-3xl px-4 md:px-6 py-1 cursor-pointer hover:bg-laserRed hover:text-white'>
                Sign Up
              </li>
            </ul>
          </li>
        </>
      </ul>
    </header>
  );
};

export default NavBar;
