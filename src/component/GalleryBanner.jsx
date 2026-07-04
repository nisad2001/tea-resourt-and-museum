import { GiChestnutLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";

const GalleryBanner = () => {
  return (
    <div className='relative w-full h-[200px] md:h-[300px] overflow-hidden shadow-lg'>
      <img
        src='/public/asset/experience -walk.jpg'
        alt='Gallery Banner'
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start text-center sm:text-left'>
          <h1 className='text-white font-bold text-3xl md:text-5xl tracking-wide drop-shadow-md leading-tight'>
            Gallery
          </h1>

          <div className='flex items-center gap-2 mt-2 mb-3 justify-center sm:justify-start'>
            <div className='h-[2px] bg-green-500 w-12 sm:w-24 rounded-full'></div>
            <GiChestnutLeaf className='text-green-400 text-lg md:text-2xl animate-pulse flex-shrink-0' />
            <div className='h-[2px] bg-green-500 w-12 sm:w-16 rounded-full'></div>
          </div>

          <div className='flex items-center gap-2 text-xs md:text-base font-medium text-gray-200 drop-shadow-sm'>
            <Link
              to='/'
              className='transition-colors duration-200 hover:text-green-500 cursor-pointer'
            >
              Home
            </Link>

            <span className='text-gray-400 font-bold'>&gt;</span>

            <button className='transition-colors duration-200 hover:text-green-500 cursor-pointer font-semibold text-green-400'>
              Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
