import React from 'react';
import HangingCard from './HangingCard.jsx';
import {
  facebook,
  instagram,
  twitter,
  laslesLogo,
  footerMenu,
} from '../constant';
import Button from './Button.jsx';

const Footer = () => {
  return (
    <div className='px-[2%] md:px-[10%] bg-laserAsh relative border py-4'>
      <div className='hidden md:block md:-translate-y-20'>
        <HangingCard>
          <div className='pl-[8%]'>
            <h3 className='text-extrabold text-3xl w-2/3 mb-2'>
              Subscribe Now for Get Special Features!
            </h3>
            <p className='text-sm text-gray-400'>
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div className=' flex items-center pr-[8%]'>
            <Button>Subscribe Now</Button>
          </div>
        </HangingCard>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col gap-4 mb-4 md:mb-0'>
          <div>
            <img src={laslesLogo} alt='facebook' className='float-left' />
          </div>

          <p className='text-laserMediumAsh/70 w-full md:w-3/4'>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
          <div className='hidden md:block'>
            <div>
              <img src={facebook} alt='facebook' className='float-left' />
              <img src={twitter} alt='twitter' className='float-left' />
              <img src={instagram} alt='instagram' className='float-left' />
            </div>
            <p className=' clear-left text-laserMediumAsh/70'>
              &copy;2020LaslesVPN
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 mb-4 md:mb-0'>
          <p className='text-2xl font-bold'>{footerMenu[0].title}</p>
          {footerMenu[0].menu.map((item) => (
            <p className='text-laserMediumAsh/70' key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-2 mb-4 md:mb-0'>
          <p className='text-2xl font-bold'>{footerMenu[1].title}</p>
          {footerMenu[1].menu.map((item) => (
            <p className='text-laserMediumAsh/70' key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className='flex flex-col gap-2 mb-4 md:mb-0'>
          <p className='text-2xl font-bold'>{footerMenu[2].title}</p>
          {footerMenu[2].menu.map((item) => (
            <p className='text-laserMediumAsh/70' key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className='block md:hidden my-4 text-center'>
          <div className='flex justify-center'>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={instagram} alt='instagram' />
          </div>
          <p className=' clear-left text-laserMediumAsh/70 text-center'>
            &copy;2020LaslesVPN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
