import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdOutlineKingBed } from "react-icons/md";
import { MdOutlineMuseum } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Welcome = () => {
  return (
    <div className='w-full m-0 px-4 pt-6 md:pt-10 pb-8'>
      <div className='flex flex-col lg:flex-row gap-12 items-center justify-between w-full'>
        {/* Left Side (Width increased to 1/3) */}
        <div className='w-full lg:w-1/3 flex flex-row items-end justify-start gap-4 text-left lg:ps-4'>
          <div className='flex-shrink-0 mb-1'>
            <img
              src='/asset/tea-leaf.png'
              alt='Tea Leaf'
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain'
            />
          </div>

          <div className='flex flex-col flex-1'>
            <p className='uppercase text-sm font-bold tracking-widest text-green-800 mb-4'>
              Welcome to
            </p>
            <h1 className='text-2xl mb-4 sm:text-3xl font-bold text-green-900 leading-tight'>
              Tea Resort & Museum
            </h1>

            <div className='flex items-center gap-2 mt-2 mb-3'>
              <div className='h-[2px] bg-green-600 w-12 rounded-full'></div>
              <GiChestnutLeaf className='text-green-600 text-sm animate-pulse' />
              <div className='h-[2px] bg-green-600 w-12 rounded-full'></div>
            </div>

            <p className='text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed '>
              Nestled in the lap of nature, our resort is surrounded by lush tea
              gardens and rolling hills. The museum showcases the rich history
              and culture of the Bangladesh tea industry.
            </p>

            <div>
              <button className='btn btn-xs sm:btn-sm text-white bg-green-900 border-none uppercase hover:bg-green-700 flex items-center gap-1 px-4 rounded-md shadow-sm transition-all w-fit cursor-pointer'>
                Discover More <ArrowIcon className='text-lg' />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side (Width decreased to 2/3) */}
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
              <h3 className='text-base font-bold text-gray-800 mt-1'>
                Luxurious Stay
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed px-1'>
                Comfortable rooms with modern amenities and garden view.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[11px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  View rooms{" "}
                  <ArrowIcon className='text-base transition-transform group-hover:translate-x-1' />
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
              <h3 className='text-base font-bold text-gray-800 mt-1'>
                Tea Museum
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed px-1'>
                Explore the heritage and oldest tools of tea industry.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[11px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  Explore Museum{" "}
                  <ArrowIcon className='text-base transition-transform group-hover:translate-x-1' />
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
              <h3 className='text-base font-bold text-gray-800 mt-1'>
                Tea Garden Experience
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed px-1'>
                Tap plackign factory tour testing and memoreable moments.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[11px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  Explore experiences{" "}
                  <ArrowIcon className='text-base transition-transform group-hover:translate-x-1' />
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
              <h3 className='text-base font-bold text-gray-800 mt-1'>
                Delicious Dining
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed px-1'>
                Enjoy traditional and international cuisines with a tea twist at
                our resort's restaurant.
              </p>
              <div className='mt-auto pt-3'>
                <button className='text-green-900 font-bold flex items-center justify-center gap-1 uppercase text-[11px] tracking-wider hover:text-green-700 transition-colors group cursor-pointer'>
                  View Menu{" "}
                  <ArrowIcon className='text-base transition-transform group-hover:translate-x-1' />
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
