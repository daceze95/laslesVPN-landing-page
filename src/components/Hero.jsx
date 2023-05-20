import React from 'react';
import {
  heroPage,
  lowerHeroPage,
  heroCard,
  lowerHeroList,
  customListDisc,
} from '../constant';
import Button from './Button.jsx';
import HeroInfoHolder from './HeroInfoHolder.jsx';
import HangingCard from './HangingCard.jsx';

const Hero = () => {
  return (
    <div className='md:px-[10%]'>
      <HeroInfoHolder>
        <div className='pt-[8%] flex flex-col gap-10 h-[350px]'>
          <p className='text-4xl '>
            Want anything to be easy with{' '}
            <span className='font-extrabold'>LaslesVPN</span>
          </p>
          <p className='text-md text-laserMediumAsh'>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
        <div className=''>
          <img src={heroPage} alt='' />
        </div>
      </HeroInfoHolder>

      <HangingCard>
        {heroCard.map((item) => (
          <div
            className='flex flex-col md:flex-row items-center flex-1 w-2/6 justify-center border border-y-0 border-l-0 border-r-slate-200 last:border-r-0 md:px-10'
            key={item.title}
          >
            <div className='mr-2 mb-2 md:mr-4 md:mb-0 '>
              <img src={item.img} alt='' />
            </div>
            <div className='text-center md:text-left'>
              <p>{item.count}</p>
              <p className='text-laserMediumAsh/70'>{item.title}</p>
            </div>
          </div>
        ))}
      </HangingCard>

      <HeroInfoHolder>
        <div className='mt-14 md:mt-0'>
          <img src={lowerHeroPage} alt='' />
        </div>
        <div className='flex flex-col gap-10 h-[350px]'>
          <p className='md:font-bold text-4xl '>
            We Provide Many Features You Can Use
          </p>
          <p className='text-md text-laserMediumAsh'>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <div className=''>
            <ul>
              {/* className={`list-image-[url(${customListDisc})]`}> */}
              {lowerHeroList.map((item) => (
                <div className='flex py-2' key={item}>
                  <img src={customListDisc} alt='' className='mr-2' />
                  <li className=''>{item}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </HeroInfoHolder>
    </div>
  );
};

export default Hero;
