import { GiChestnutLeaf } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const ExperienceCherish = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12'>
      {/* First Div - Flex Box */}
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mb-8 border-b border-gray-100 pb-4 text-center sm:text-left'>
        {/* Left Side: Icon and Title */}
        <div className='flex flex-col sm:flex-row items-center gap-2'>
          <GiChestnutLeaf className='text-green-500 text-3xl animate-pulse flex-shrink-0' />
          <h3 className='text-green-700 font-bold text-3xl md:text-4xl'>
            Moments to Cherish
          </h3>
        </div>

        {/* Right Side: View Gallery Button with Arrow Icon */}
        <div>
          <button className='px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 flex items-center gap-2 group'>
            <span>View Gallery</span>
            <FaArrowRight className='text-sm transition-transform duration-200 group-hover:translate-x-1' />
          </button>
        </div>
      </div>

      {/* Second Div: Grid Configuration */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-1.jpg'
            alt='Cherish 1'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-2.jpg'
            alt='Cherish 2'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-3.jpg'
            alt='Cherish 3'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-4.jpg'
            alt='Cherish 4'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-5.jpg'
            alt='Cherish 5'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-lg shadow-sm'>
          <img
            src='/asset/experience-cherish-6.jpg'
            alt='Cherish 6'
            className='w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCherish;
