import { GiChestnutLeaf } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const DiningBanner = () => {
  return (
    <div>
      <div className='relative w-full h-[300px] sm:h-80 flex items-center overflow-hidden'>
        <img
          src='/asset/dining-banner.jpg'
          alt='Dining'
          className='absolute w-full h-full object-cover'
        />

        <div className='absolute w-full h-full bg-black/40'></div>

        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 text-white text-center md:text-left flex flex-col items-center md:items-start'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2]'>
            Dining
          </h1>

          <div className='flex items-center gap-2 mt-3 mb-3 justify-center md:justify-start'>
            <div className='h-[2px] bg-green-500 w-8 sm:w-18 rounded-full'></div>
            <GiChestnutLeaf className='text-green-500 text-xl animate-pulse flex-shrink-0' />
            <div className='h-[2px] bg-green-500 w-8 sm:w-12 rounded-full'></div>
          </div>

          <h4 className='text-lg sm:text-xl font-medium mb-4 opacity-90'>
            A Culinary Journey
          </h4>

          <div className='flex items-center gap-2 text-sm'>
            <NavLink to='/' className='hover:text-green-400 transition-colors'>
              Home
            </NavLink>
            <span className='text-white font-bold'>&gt;</span>
            <button className='font-semibold text-green-400'>Dining</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningBanner;
