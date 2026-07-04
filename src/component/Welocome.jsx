import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdOutlineKingBed, MdOutlineMuseum } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Welcome = () => {
  return (
    <div className='w-full m-0 px-4 pt-6 md:pt-10 pb-8 text-[16px] leading-[1.6]'>
      <div className='flex flex-col lg:flex-row gap-12 items-center justify-between w-full'>
        {/* Left Content */}
        <div className='w-full lg:w-1/3 flex flex-col items-center text-center lg:items-start lg:text-left lg:ps-4'>
          <h3 className='uppercase text-[12px] font-bold text-green-800 mb-4'>
            Welcome to
          </h3>
          <h1 className='text-[28px] sm:text-[32px] md:text-[36px] font-bold text-green-900 leading-tight mb-4'>
            Tea Resort & Museum
          </h1>

          {/* Decorative Divider */}
          <div className='flex items-center justify-center lg:justify-start gap-2 mt-2 mb-3'>
            <div className='h-[2px] bg-green-600 w-12 rounded-full'></div>
            <GiChestnutLeaf className='text-green-600 text-[14px] animate-pulse' />
            <div className='h-[2px] bg-green-600 w-12 rounded-full'></div>
          </div>

          <p className='text-gray-600 mb-4 text-[16px] leading-[1.6]'>
            Nestled in the lap of nature, our resort is surrounded by lush tea
            gardens and rolling hills. The museum showcases the rich history and
            culture of the Bangladesh tea industry.
          </p>

          <div>
            <button className='btn btn-xs sm:btn-sm text-white bg-green-900 border-none uppercase hover:bg-green-700 flex items-center gap-1 px-4 rounded-md shadow-sm transition-all w-fit cursor-pointer'>
              Discover More <ArrowIcon className='text-[18px]' />
            </button>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className='w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-center lg:pe-4'>
          {/* Card 1 */}
          <div className='relative flex flex-col bg-white rounded-xl shadow-md overflow-visible w-full max-w-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] mx-auto cursor-pointer'>
            <div className='w-full h-36 overflow-hidden rounded-t-xl'>
              <img
                src='/asset/tea-luxurious-stay.jpg'
                alt='Luxurious Stay'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
              <MdOutlineKingBed className='bg-green-900 rounded-full w-10 h-10 text-white p-2 shadow-lg border-2 border-white' />
            </div>
            <div className='flex flex-col items-center text-center pt-6 p-4 gap-2 bg-white rounded-b-xl flex-1'>
              <h3 className='text-[18px] font-bold text-gray-800 mt-1'>
                Luxurious Stay
              </h3>
              <p className='text-gray-600 text-[16px] leading-[1.6] px-1'>
                Comfortable rooms with modern amenities and garden view.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[12px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  View rooms{" "}
                  <ArrowIcon className='text-[16px] transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative flex flex-col bg-white rounded-xl shadow-md overflow-visible w-full max-w-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] mx-auto cursor-pointer'>
            <div className='w-full h-36 overflow-hidden rounded-t-xl'>
              <img
                src='/asset/tea-museum.jpg'
                alt='Tea Museum'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
              <MdOutlineMuseum className='bg-green-900 rounded-full w-10 h-10 text-white p-2 shadow-lg border-2 border-white' />
            </div>
            <div className='flex flex-col items-center text-center pt-6 p-4 gap-2 bg-white rounded-b-xl flex-1'>
              <h3 className='text-[18px] font-bold text-gray-800 mt-1'>
                Tea Museum
              </h3>
              <p className='text-gray-600 text-[16px] leading-[1.6] px-1'>
                Explore the heritage and oldest tools of tea industry.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[12px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  Explore Museum{" "}
                  <ArrowIcon className='text-[16px] transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative flex flex-col bg-white rounded-xl shadow-md overflow-visible w-full max-w-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] mx-auto cursor-pointer'>
            <div className='w-full h-36 overflow-hidden rounded-t-xl'>
              <img
                src='/asset/tea-garden-experience.jpg'
                alt='Nature Walk'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
              <GiChestnutLeaf className='bg-green-900 rounded-full w-10 h-10 text-white p-2 shadow-lg border-2 border-white' />
            </div>
            <div className='flex flex-col items-center text-center pt-6 p-4 gap-2 bg-white rounded-b-xl flex-1'>
              <h3 className='text-[18px] font-bold text-gray-800 mt-1'>
                Tea Garden Experience
              </h3>
              <p className='text-gray-600 text-[16px] leading-[1.6] px-1'>
                Tap plackign factory tour testing and memoreable moments.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[12px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  Explore experiences{" "}
                  <ArrowIcon className='text-[16px] transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className='relative flex flex-col bg-white rounded-xl shadow-md overflow-visible w-full max-w-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] mx-auto cursor-pointer'>
            <div className='w-full h-36 overflow-hidden rounded-t-xl'>
              <img
                src='/asset/tea-delicious-dining.jpg'
                alt='Tea Tasting'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
              <GiForkKnifeSpoon className='bg-green-900 rounded-full w-10 h-10 text-white p-2 shadow-lg border-2 border-white' />
            </div>
            <div className='flex flex-col items-center text-center pt-6 p-4 gap-2 bg-white rounded-b-xl flex-1'>
              <h3 className='text-[18px] font-bold text-gray-800 mt-1'>
                Delicious Dining
              </h3>
              <p className='text-gray-600 text-[16px] leading-[1.6] px-1'>
                Enjoy traditional and international cuisines with a tea twist.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[12px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  View Menu{" "}
                  <ArrowIcon className='text-[16px] transition-transform group-hover:translate-x-1' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
