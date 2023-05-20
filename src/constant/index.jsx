import clientLogo from '../assets/clientLogo-img.svg';
import close from '../assets/close.svg';
import customListDisc from '../assets/customListDisc-icon.svg';
import facebook from '../assets/facebook-logo.svg';
import giftBox from '../assets/giftBox-img.svg';
import goodTick from '../assets/goodTick-icon.svg';
import heroPage from '../assets/heroPage-img.svg';
import instagram from '../assets/instagram-logo.svg';
import laslesLogo from '../assets/laslesVPN-logo.svg';
import location from '../assets/location-icon.svg';
import lowerHeroPage from '../assets/lowerHeroPage-img.svg';
import menu from '../assets/menu-icon.svg';
import server from '../assets/server-icon.svg';
import serverSiteMap from '../assets/serverSiteMap-img.svg';
import starRating from '../assets/starRating-icon.svg';
import testifier1 from '../assets/testifier-1.svg';
import testifier2 from '../assets/testifier-2.svg';
import testifier3 from '../assets/testifier-3.svg';
import twitter from '../assets/twitter-logo.svg';
import userIcon from '../assets/user-icon.svg';

const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Help'];
const heroCard = [
  { img: userIcon, title: 'Users', count: '90+' },
  { img: location, title: 'Locations', count: '30+' },
  { img: server, title: 'Servers', count: '50+' },
];
const lowerHeroList = [
  'Powerful online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.',
];

const ChoosePlanDetails = [
  {
    plan: 'Free Plan',
    details: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    plan: 'Standard Plan',
    details: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
    ],
    price: 9,
  },
  {
    plan: 'Premium Plan',
    details: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anyware',
      'Get New Features',
    ],
    price: 12,
  },
];

/*=============== Carousel settings ==================*/
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '20px',
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const imgArr = Array(6).fill('');

const obj = {
  img: [testifier1, testifier2, testifier3],
  name: ['John Doe', 'Jane Doe', 'John Smith'],
  country: ['USA', 'UK', 'Canada'],
  rating: [4.5, 4.0, 4.5],
  review: [
    'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    'I like it because I like to travel far and still can connect with high speed',
    'This is very unusual for my business that currently requires a virtual private network that has high security',
  ],
};

const arr = imgArr.map((item, index) => (
  <div
    className='w-80 md:h-60 py-4 px-2 m-2 md:m-4  border rounded-lg min-h-[230px]'
    key={`${obj.name[index]}_${index}`}
  >
    <div className='flex justify-between w-full mb-2'>
      <div className='flex-1'>
        <img
          src={obj.img[index % obj.img.length]}
          alt=''
          className='float-left mr-2'
        />
        <h3 className='font-bold'>{obj.name[index % obj.name.length]}</h3>
        <p>{obj.country[index % obj.country.length]}</p>
      </div>
      <div className='flex items-center gap-1'>
        <p>{obj.rating[index % obj.rating.length]}</p>
        <img src={starRating} alt='' />
      </div>
    </div>
    <p className=''>&quot;{obj.review[index % obj.review.length]}&quot;.</p>
  </div>
));

const footerMenu = [
  {
    title: 'Product',
    menu: ['Download', 'Pricing', 'Location', 'Server', 'Countries', 'Blog']
  },
  {
    title: 'Engage',
    menu: ['LaslesVPN', 'FAQ', 'Tutorial', 'About Us', 'Privacy Policy', 'Terms of Service']
  },
  {
    title: 'Earn Money',
    menu: ['Affiliate', 'Become a Partner']
  }
]

export {
  clientLogo,
  close,
  customListDisc,
  facebook,
  giftBox,
  goodTick,
  heroPage,
  instagram,
  laslesLogo,
  lowerHeroPage,
  menu,
  serverSiteMap,
  starRating,
  testifier1,
  testifier2,
  testifier3,
  twitter,
  navItems,
  heroCard,
  lowerHeroList,
  ChoosePlanDetails,
  arr,
  settings,
  footerMenu,
};
