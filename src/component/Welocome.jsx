import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdBedroomParent } from "react-icons/md";

const Welcome = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4 py-12'>
      <div className='flex flex-col lg:flex-row gap-8 items-center justify-between'>
        <div className='w-full lg:w-1/4 text-center lg:text-left'>
          <h3 className='uppercase text-[12px] font-bold text-green-800 mb-2'>
            Welcome to
          </h3>
          <h1 className='text-[28px] sm:text-[36px] font-bold text-green-900 leading-tight mb-4'>
            Tea Resort & Museum
          </h1>

          <div className='flex items-center justify-center lg:justify-start gap-2 mb-4'>
            <div className='h-[2px] bg-green-600 w-12'></div>
            <GiChestnutLeaf className='text-green-600' />
            <div className='h-[2px] bg-green-600 w-12'></div>
          </div>

          <p className='text-gray-600 mb-6'>
            Nestled in the lap of nature, our resort is surrounded by lush tea
            gardens and rolling hills. The museum showcases the rich history.
          </p>

          <button className='btn btn-sm text-white bg-green-900 border-none uppercase px-6'>
            Discover More <ArrowIcon className='text-lg' />
          </button>
        </div>

        <div className='w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full px-4 pt-4'>
              <img
                src='/public/asset/stay-room.jpg'
                alt='Room'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdBedroomParent className='text-2xl' />
            </div>
            <div className='card-body mt-6 items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Luxury Stay
              </h3>
              <p className='text-gray-600 text-xs'>
                Experience comfort with a view.
              </p>
              <div className='card-actions justify-center mt-2'>
                <button className='btn btn-xs btn-outline text-green-900 hover:bg-green-900 hover:text-white'>
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full px-4 pt-4'>
              <img
                src='/public/asset/museum.jpg'
                alt='Room'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdBedroomParent className='text-2xl' />
            </div>
            <div className='card-body mt-6 items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Tea Museum
              </h3>
              <p className='text-gray-600 text-xs'>
                Enjoy peace in our garden area.
              </p>
              <div className='card-actions justify-center mt-2'>
                <button className='btn btn-xs btn-outline text-green-900 hover:bg-green-900 hover:text-white'>
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full px-4 pt-4'>
              <img
                src='/public/asset/tea-garden-experience.jpg'
                alt='Room'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdBedroomParent className='text-2xl' />
            </div>
            <div className='card-body mt-6 items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Tea Garden
              </h3>
              <p className='text-gray-600 text-xs'>
                Perfect for family vacations.
              </p>
              <div className='card-actions justify-center mt-2'>
                <button className='btn btn-xs btn-outline text-green-900 hover:bg-green-900 hover:text-white'>
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full px-4 pt-4'>
              <img
                src='/public/asset/tea-delicious-dining.jpg'
                alt='Room'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdBedroomParent className='text-2xl' />
            </div>
            <div className='card-body mt-6 items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Dining
              </h3>
              <p className='text-gray-600 text-xs'>
                Cozy and elegant for travelers.
              </p>
              <div className='card-actions justify-center mt-2'>
                <button className='btn btn-xs btn-outline text-green-900 hover:bg-green-900 hover:text-white'>
                  View Details
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
