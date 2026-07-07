import { FaArrowRight } from "react-icons/fa6";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import { GiChestnutLeaf } from "react-icons/gi";

const EventUpcoming = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='flex items-center gap-2 mb-4'>
        <GiChestnutLeaf className='text-green-800 text-2xl' />
        <h2 className='text-2xl font-bold text-green-900'>Upcoming Events</h2>
      </div>

      {/* Responsive Grid: sm=1, md=2, lg=4 */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Card 1 */}
        <div className='border border-gray-200 rounded-2xl p-2 bg-white shadow-sm flex flex-col lg:flex-row gap-2 hover:shadow-lg transition-shadow duration-300'>
          <div className='flex flex-row gap-1 w-full lg:w-auto justify-center'>
            <div className='flex flex-col items-center justify-center min-w-[50px] gap-0'>
              <span className='text-lg font-bold text-green-900 border-b border-gray-300 w-full text-center pb-1'>
                25
              </span>
              <span className='text-[10px] font-bold text-green-800 border-b border-gray-300 w-full text-center py-1'>
                MAY
              </span>
              <span className='text-[10px] text-gray-500 pt-1'>2024</span>
            </div>
            {/* Image centered */}
            <div className='flex-1 lg:w-24 flex items-center justify-center'>
              <img
                src='/asset/event-wedding.jpg'
                alt='Event'
                className='w-full h-20 object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <h6 className='text-gray-900 text-sm '>Tea & Culture Festival</h6>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdDateRange /> 25 May 2024
            </div>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdLocationOn /> Tea Garden Lawn
            </div>
            <button className='text-green-800 font-bold text-[11px] flex items-center gap-1 mt-1 hover:underline'>
              VIEW DETAILS <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border border-gray-200 rounded-2xl p-2 bg-white shadow-sm flex flex-col lg:flex-row gap-2 hover:shadow-lg transition-shadow duration-300'>
          <div className='flex flex-row gap-1 w-full lg:w-auto justify-center'>
            <div className='flex flex-col items-center justify-center min-w-[50px] gap-0'>
              <span className='text-lg font-bold text-green-900 border-b border-gray-300 w-full text-center pb-1'>
                15
              </span>
              <span className='text-[10px] font-bold text-green-800 border-b border-gray-300 w-full text-center py-1'>
                JUN
              </span>
              <span className='text-[10px] text-gray-500 pt-1'>2024</span>
            </div>
            {/* Image centered */}
            <div className='flex-1 lg:w-24 flex items-center justify-center'>
              <img
                src='/asset/event-corporate.jpg'
                alt='Event'
                className='w-full h-20 object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <h6 className='text-gray-900 text-sm '>
              International Tea Tasting event
            </h6>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdDateRange /> 15 June 2024
            </div>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdLocationOn /> Tea Museum Hall
            </div>
            <button className='text-green-800 font-bold text-[11px] flex items-center gap-1 mt-1 hover:underline'>
              VIEW DETAILS <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className='border border-gray-200 rounded-2xl p-2 bg-white shadow-sm flex flex-col lg:flex-row gap-2 hover:shadow-lg transition-shadow duration-300'>
          <div className='flex flex-row gap-1 w-full lg:w-auto justify-center'>
            <div className='flex flex-col items-center justify-center min-w-[50px] gap-0'>
              <span className='text-lg font-bold text-green-900 border-b border-gray-300 w-full text-center pb-1'>
                05
              </span>
              <span className='text-[10px] font-bold text-green-800 border-b border-gray-300 w-full text-center py-1'>
                JUL
              </span>
              <span className='text-[10px] text-gray-500 pt-1'>2024</span>
            </div>
            {/* Image centered */}
            <div className='flex-1 lg:w-24 flex items-center justify-center'>
              <img
                src='/asset/event-cultural.jpg'
                alt='Event'
                className='w-full h-20 object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1 w-full'>
            <h6 className='text-gray-900 text-sm '>Summer Garden Party</h6>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdDateRange /> 05 July 2024
            </div>
            <div className='flex items-center gap-1 text-[11px] text-gray-600'>
              <MdLocationOn /> Resort Garden
            </div>
            <button className='text-green-800 text-[11px] flex items-center gap-1 mt-1 hover:underline'>
              VIEW DETAILS <FaArrowRight />
            </button>
          </div>
        </div>

        {/* 4th Card */}
        <div className='bg-green-900 text-white p-4 rounded-2xl flex flex-col justify-center gap-2 hover:shadow-lg transition-shadow duration-300'>
          <h3 className='text-base font-bold'>Plan Your Event with us</h3>
          <p className='text-xs opacity-90'>
            Let us help you create and event that your guest will never forget
          </p>
          <button className='border border-white text-white px-3 py-1 rounded-lg text-[10px] flex items-center gap-1 hover:bg-white hover:text-green-900 transition w-fit'>
            GET IN TOUCH <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventUpcoming;
