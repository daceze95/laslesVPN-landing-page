import React from 'react';
import { ChoosePlanDetails, goodTick, giftBox} from '../constant';

const PriceCard = () => {
  return (
    <div className='px-[10%] bg-transparent flex flex-col md:flex-row box-border'>
      {ChoosePlanDetails.map((item) => (
        <div
          className='group border-2 border-gray-200 rounded-lg p-[5%] text-center md:mr-8  last:mr-0 mb-4 md:mb-0 bg-white min-w-[300px] flex-1 flex flex-col hover:border-laserRed'
          key={item.plan}
        >
          <div className='flex flex-col items-center gap-4 mb-10'>
            <div className='mx-auto'>
              <img src={giftBox} alt='' />
            </div>
            <h3 className='font-bold text-md'>{item.plan}</h3>
            <ul className=''>
              {item.details.map((str) => (
                <div className='flex py-1' key={str}>
                  <img src={goodTick} alt='' className='mr-2' />
                  <li className='text-sm'>{str}</li>
                </div>
              ))}
            </ul>
            <div className='text-sm flex mb-2 box-border text-gray'></div>
          </div>

          <div className='text-center mt-auto'>
            <p className='text-xl font-bold mb-1'>
              {typeof item.price == 'string' ? 'Free' : `$${item.price}`}
              {typeof item.price == 'number' ? (
                <span className='text-gray-200'> / mo</span>
              ) : null}
            </p>
            <button className='bg-transparent border border-laserRed text-laserRed rounded-3xl px-10 py-1 cursor:pointer group-hover:bg-laserRed group-hover:text-white shadow-xl shadow-laserRed/20'>
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
