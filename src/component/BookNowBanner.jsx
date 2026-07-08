import { GiChestnutLeaf } from "react-icons/gi";
import { Link } from "react-router-dom";

const BookNowBanner = () => {
  return (
    <div className='relative w-full h-[200px] md:h-[400px] overflow-hidden shadow-lg'>
      <img
        src='/asset/book-resort-banner.jpg'
        alt='Gallery Banner'
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-black/40 flex justify-center'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start text-center sm:text-left mt-12'>
          <h1 className='text-white font-bold text-3xl md:text-5xl tracking-wide drop-shadow-md leading-tight'>
            Book Your Stay
          </h1>

          <div className='flex items-center gap-2 mt-2 mb-3 justify-center sm:justify-start'>
            <div className='h-[2px] bg-green-500 w-12 sm:w-24 rounded-full'></div>
            <GiChestnutLeaf className='text-green-400 text-lg md:text-2xl animate-pulse flex-shrink-0' />
            <div className='h-[2px] bg-green-500 w-12 sm:w-16 rounded-full'></div>
          </div>

          <p className='text-white text-base  leading-relaxed mb-1'>
            Relax unwind and experience the best <br /> of nature and heritage.
          </p>

          <div className='flex items-center gap-2 text-xs md:text-base font-medium text-gray-200 drop-shadow-sm mt-2'>
            <Link
              to='/'
              className='transition-all duration-200 cursor-pointer bg-green-900 px-4 py-2 rounded-sm hover:scale-105'
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowBanner;
