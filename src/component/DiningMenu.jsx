import { BsCupHot } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GiChestnutLeaf, GiGasStove, GiMushroomHouse } from "react-icons/gi";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdOutlineMuseum, MdRestaurantMenu } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { CiFaceFrown } from "react-icons/ci";

const DiningMenu = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto py-4'>
      <div className='flex flex-col lg:flex-row gap-8 items-center justify-between'>
        <div className='w-full lg:w-1/3 text-center lg:text-left'>
          <GiChestnutLeaf className='text-green-600 text-xl animate-pulse mb-2 mx-auto lg:mx-0' />
          <h1 className='text-3xl sm:text-4xl font-bold text-green-900 mt-1 mb-4'>
            Taste the finest flavour of bangladesh
          </h1>

          <p className='text-gray-600 mb-6 text-sm md:text-base leading-relaxed'>
            A tea Resort & museum we offer a delightful culinary experience that
            blend Authentic Bangladesh flavour with international cuisine
            crafted with the freshest local source ingredients.
          </p>
          <button className='btn btn-sm text-white bg-green-900 border-none uppercase'>
            View Menu <ArrowIcon className='text-lg' />
          </button>
        </div>

        <div className='w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full'>
              <img
                src='/asset/about-tea-resort.jpg'
                alt='Breakfast'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdRestaurantMenu className='text-2xl' />
            </div>
            <div className='card-body  items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Main Restaurent
              </h3>
              <p className='text-gray-600 text-xs'>
                A cozy indoor dining with a wide range of local & international
                dishing
              </p>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full'>
              <img
                src='/asset/experience-cherish-4.jpg'
                alt='Lunch'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <MdOutlineMuseum className='text-2xl' />
            </div>
            <div className='card-body  items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Garden Terrace
              </h3>
              <p className='text-gray-600 text-xs'>
                Enjoy your meal amidest lush green tea garden and refreshing
                breezes
              </p>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full'>
              <img
                src='/asset/stay-cottage.jpg'
                alt='Dinner'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <SiMusicbrainz className='text-2xl' />
            </div>
            <div className='card-body  items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Tea Lounge
              </h3>
              <p className='text-gray-600 text-xs'>
                Reluxe with a cup of premium teaand tight snacks in a peaceful
                ambience
              </p>
            </div>
          </div>

          <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative items-center text-center hover:scale-105 transition-all duration-300 cursor-pointer'>
            <figure className='h-40 w-full'>
              <img
                src='/asset/tea-museum.jpg'
                alt='Snacks'
                className='w-full h-full object-cover rounded-2xl'
              />
            </figure>
            <div className='absolute top-32 left-1/2 transform -translate-x-1/2 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
              <GiMushroomHouse className='text-2xl' />
            </div>
            <div className='card-body  items-center'>
              <h3 className='card-title text-lg font-bold text-green-900'>
                Private Dining
              </h3>
              <p className='text-gray-600 text-xs'>
                Perfect for special occassions and private events with
                personalized service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full lg:max-w-7xl mx-auto shadow-xl bg-base-300 p-8 rounded-lg mt-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          <div className='flex items-center gap-4 lg:border-r-2 border-gray-400'>
            <div className='text-green-900'>
              <FaCanadianMapleLeaf className='w-10 h-10' />
            </div>
            <div>
              <h3 className='text-sm font-bold'>Fresh and Local</h3>
              <p className='text-gray-600 text-xs'>
                We use locally sourced fresh and ingredient
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4 lg:border-r-2 border-gray-400'>
            <div className='text-green-900'>
              <GiGasStove className='w-10 h-10' />
            </div>
            <div>
              <h3 className='text-sm font-bold'>Expert chefs</h3>
              <p className='text-gray-600 text-xs'>
                Our experienced chefs craft every dish with passion
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4 lg:border-r-2 border-gray-400'>
            <div className='text-green-900'>
              <BsCupHot className='w-10 h-10' />
            </div>
            <div>
              <h3 className='text-sm font-bold'>Diverse Menu</h3>
              <p className='text-gray-600 text-xs'>
                From Local delicasis to internationals favourites
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4 lg:border-r-2 border-gray-400'>
            <div className='text-green-900'>
              <FaCanadianMapleLeaf className='w-10 h-10' />
            </div>
            <div>
              <h3 className='text-sm font-bold'>Healthy & Hygenic</h3>
              <p className='text-gray-600 text-xs'>
                We ensure the highest standard Hygine
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='text-green-900'>
              <CiFaceFrown className='w-10 h-10' />
            </div>
            <div>
              <h3 className='text-sm font-bold'>Memoreabel Experience</h3>
              <p className='text-gray-600 text-xs'>
                Great foon great ambience unforgottable moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningMenu;
