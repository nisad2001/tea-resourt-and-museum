import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

const AboutNature = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
        {/* Left Side Division */}
        <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left'>
          <GiChestnutLeaf className='text-green-600 text-xl animate-pulse mb-2' />

          <h1 className='text-2xl sm:text-3xl font-semibold leading-tight'>
            The Perfect blend of <br />
            <span className='text-green-900 text-3xl sm:text-4xl lg:text-4xl font-bold block mt-1'>
              Nature, Heritage & Hospitality
            </span>
          </h1>

          {/* Divider line adjusted for responsiveness */}
          <div className='flex items-center gap-2 mt-3 mb-4 justify-center md:justify-start w-full'>
            <div className='h-[2px] bg-green-600 w-24 sm:w-64 rounded-full'></div>
            <GiChestnutLeaf className='text-green-600 text-xl animate-pulse flex-shrink-0' />
            <div className='h-[2px] bg-green-600 w-16 sm:w-30 rounded-full'></div>
          </div>

          <p className='text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-lg md:max-w-2xl'>
            Nestled in the lap of nature, Tea Resort & Museum is surrounded by
            lush tea gardens and rolling hills. The museum showcases the rich
            history and culture of the Bangladesh tea industry.
          </p>

          <div>
            <button className='btn btn-sm sm:btn-md text-white bg-green-900 border-none uppercase hover:bg-green-700 flex items-center gap-1 px-5 rounded-md shadow-sm transition-all w-fit cursor-pointer'>
              Discover More <ArrowIcon className='text-xl' />
            </button>
          </div>
        </div>

        {/* Right Side Division */}
        <div className='flex-1 w-full'>
          <img
            src='/asset/tea-resort-banner.jpg'
            alt='Tea Resort Banner'
            className='w-full h-auto rounded-lg shadow-md object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutNature;
