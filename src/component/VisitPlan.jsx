import { TbRadio } from "react-icons/tb";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdOutlineMuseum } from "react-icons/md";
import { IoNavigateOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const VisitPlan = () => {
  return (
    <div className='w-full px-4 py-8 bg-transparent'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch justify-center w-full'>
        {/* Item 1 */}
        <div className='w-full flex flex-col sm:flex-row items-center gap-3 justify-center text-center sm:text-left'>
          <div className='flex-shrink-0'>
            <TbRadio className='text-green-800 text-3xl' />
          </div>
          <div className='flex flex-col items-center sm:items-start'>
            <p className='font-bold text-gray-800 text-sm md:text-base mb-0.5'>
              Book Your Stay
            </p>
            <p className='text-gray-600 text-xs md:text-sm leading-snug max-w-[200px] sm:max-w-none'>
              Easy and Secure online booking for rooms & package
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className='w-full flex flex-col sm:flex-row items-center gap-3 justify-center text-center sm:text-left'>
          <div className='flex-shrink-0'>
            <MdOutlineMuseum className='text-green-800 text-3xl' />
          </div>
          <div className='flex flex-col items-center sm:items-start'>
            <p className='font-bold text-gray-800 text-sm md:text-base mb-0.5'>
              Explore Museum
            </p>
            <p className='text-gray-600 text-xs md:text-sm leading-snug max-w-[200px] sm:max-w-none'>
              Discover the rich heritage of Bangladesh tea
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className='w-full flex flex-col sm:flex-row items-center gap-3 justify-center text-center sm:text-left'>
          <div className='flex-shrink-0'>
            <IoNavigateOutline className='text-green-800 text-3xl' />
          </div>
          <div className='flex flex-col items-center sm:items-start'>
            <p className='font-bold text-gray-800 text-sm md:text-base mb-0.5'>
              Special Package
            </p>
            <p className='text-gray-600 text-xs md:text-sm leading-snug max-w-[200px] sm:max-w-none'>
              Weekend Getaway, Family Package, and more
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className='w-full flex flex-col sm:flex-row items-center gap-3 justify-center text-center sm:text-left'>
          <div className='flex-shrink-0'>
            <TfiHeadphoneAlt className='text-green-800 text-3xl' />
          </div>
          <div className='flex flex-col items-center sm:items-start'>
            <p className='font-bold text-gray-800 text-sm md:text-base mb-0.5'>
              Customer Support
            </p>
            <p className='text-gray-600 text-xs md:text-sm leading-snug max-w-[200px] sm:max-w-none'>
              we are here to assist you 24/7
            </p>
          </div>
        </div>

        {/* Item 5: Green Background */}
        <div className='w-full max-w-[240px] mx-auto bg-green-900 p-2 rounded-xl flex flex-col items-center justify-center text-center gap-1 shadow-sm transition-all duration-300 hover:bg-green-950 min-h-0 md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto'>
          <h3 className='text-xs md:text-sm font-bold text-white leading-tight'>
            Plan Your Visit Today!
          </h3>
          <button className='btn btn-xs text-green-900 bg-white border-none uppercase hover:bg-amber-400 hover:text-gray-900 flex items-center justify-center gap-1 px-3 py-0.5 rounded-md font-semibold tracking-wider transition-all cursor-pointer w-fit text-[10px] md:text-xs shadow-sm'>
            Book Now <ArrowIcon className='text-base md:text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitPlan;
