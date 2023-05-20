import React from 'react';
import { serverSiteMap, clientLogo } from '../constant';

const ServersView = () => {
  return (
    <>
      <div className='bg-laserAsh/10 relative md:h-[200px] py-4 md:py-0'>
        <div className='md:absolute md:-top-1/3 text-center px-[8%] py-1 max-w-xl left-0 right-0 mx-auto'>
          <h3 className='font-bold text-3xl mb-5 '>
            Huge Global Network of Fast VPN
          </h3>
          <p className='text-gray-500 text-md'>
            See <span className='font-semibold'>LaslesVPN </span> everywhere to
            make it easier for you when you move locations.
          </p>
        </div>
      </div>

      <div className='relative md:h-[500px] md:p-0 p-2 '>
        <div className='md:absolute md:-top-8 text-center py-1 md:left-0 md:right-0 mx-auto'>
          <img src={serverSiteMap} alt='' className='mx-auto' />
        </div>
      </div>
      {/* <div className='border'> */}
      <div className='mx-auto overflow-x-scroll '>
        <img src={clientLogo} alt='' className='mx-auto' />
      </div>
      {/* </div> */}
    </>
  );
};

export default ServersView;
