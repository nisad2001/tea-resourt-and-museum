import { BsCupHot } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa6";
import { GiLeafSwirl } from "react-icons/gi";
import { PiFactoryFill } from "react-icons/pi";

const ExperienceCards = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12'>
      {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Card 1: Tea Plucking */}
        <div className='bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between items-center text-center'>
          <div className='p-5 flex flex-col items-center'>
            {/* Updated Icon Container */}
            <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-sm'>
              <FaLeaf className='text-white text-xl' />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-1 leading-snug'>
              Tea Plucking <br /> Experience
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Feel the joy of plucking <br /> fresh tea leaves with <br /> our
              local experts.
            </p>
          </div>
          <img
            src='/asset/tea-garden-experience.jpg'
            alt='Tea Plucking'
            className='w-full h-48 object-cover mt-2'
          />
        </div>

        {/* Card 2: Tea Factory Tour */}
        <div className='bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between items-center text-center'>
          <div className='p-5 flex flex-col items-center'>
            {/* Updated Icon Container */}
            <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-sm'>
              <PiFactoryFill className='text-white text-xl' />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-1 leading-snug'>
              Tea Factory Tour
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              See how tea is processed <br /> from leaf to cup with modern
              machinery.
            </p>
          </div>
          <img
            src='/asset/experience-factory.jpg'
            alt='Tea Factory'
            className='w-full h-48 object-cover mt-2'
          />
        </div>

        {/* Card 3: Tea Tasting Session */}
        <div className='bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between items-center text-center'>
          <div className='p-5 flex flex-col items-center'>
            {/* Updated Icon Container */}
            <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-sm'>
              <BsCupHot className='text-white text-xl' />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-1 leading-snug'>
              Tea Tasting Session
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Taste the finest premium teas harvested straight from our estate.
            </p>
          </div>
          <img
            src='/asset/experienc-tea-tasting.jpg'
            alt='Tea Tasting'
            className='w-full h-48 object-cover mt-2'
          />
        </div>

        {/* Card 4: Nature Walk */}
        <div className='bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between items-center text-center'>
          <div className='p-5 flex flex-col items-center'>
            {/* Updated Icon Container */}
            <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3 shadow-sm'>
              <GiLeafSwirl className='text-white text-xl' />
            </div>
            <h3 className='text-gray-800 font-bold text-xl mb-1 leading-snug'>
              Nature Walk
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Explore the breathtaking beauty of <br /> lush tea gardens &
              scenic hills.
            </p>
          </div>
          <img
            src='/asset/experience -walk.jpg'
            alt='Nature Walk'
            className='w-full h-48 object-cover mt-2'
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
