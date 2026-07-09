import { FaArrowRight } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiChestnutLeaf, GiCrown, GiEmeraldNecklace } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineMuseum } from "react-icons/md";
import { RiMusic2Line } from "react-icons/ri";

const EventOccassion = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-6 text-center sm:text-left'>
        <div className='flex flex-col items-center sm:items-start gap-3'>
          <GiChestnutLeaf className='text-green-500 text-3xl animate-pulse' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-green-700 font-bold text-2xl md:text-3xl lg:text-4xl'>
              Unforgettable Events, Perfectly Curated
            </h3>
            <p className='text-gray-600 text-sm md:text-lg lg:text-xl max-w-lg leading-relaxed'>
              From intimate gatherings to grand celebrations, Tea Resorts &
              Museum offers the perfect setting for every occasion.
            </p>
          </div>
        </div>

        <button className='bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group px-6 py-2.5 whitespace-nowrap'>
          <span className='uppercase text-sm'>Enquiry Now</span>
          <FaArrowRight className='text-sm transition-transform duration-200 group-hover:translate-x-1' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8'>
        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-wedding.jpg'
              alt='Wedding'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <GiEmeraldNecklace className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Wedding
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              Make your special day truly magical with our beautiful venues.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-corporate.jpg'
              alt='Corporate'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <FaPeopleGroup className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Corporate
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              Host successful meetings and conferences in our serene
              environment.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-private.jpg'
              alt='Private'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <GiCrown className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Private Party
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              Celebrate birthdays and special moments with your loved ones.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-cultural.jpg'
              alt='Cultural'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <RiMusic2Line className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Cultural
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              Experience local music, dance, and traditional celebrations.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-exhibition.jpg'
              alt='Exhibitions'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <MdOutlineMuseum className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Exhibitions
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              Ideal venue for product launches and brand promotions.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl rounded-2xl overflow-visible relative flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer'>
          <figure className='h-40 w-full'>
            <img
              src='/asset/event-occassion.jpg'
              alt='Special'
              className='w-full h-full object-cover rounded-2xl'
            />
          </figure>
          <div className='absolute top-32 bg-green-900 text-white p-3 rounded-full shadow-lg z-10'>
            <ImSpoonKnife className='text-2xl' />
          </div>
          <div className='card-body pt-8 pb-4 items-center px-4'>
            <h3 className='card-title text-base md:text-lg font-bold text-green-900'>
              Special
            </h3>
            <p className='text-gray-600 text-xs md:text-xl leading-relaxed mb-2'>
              From romantic dinners to festive gatherings, we create memories.
            </p>
            <button className='px-6 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
              <span className='uppercase'>Learn more</span>
              <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOccassion;
