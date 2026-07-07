import { FaPeopleGroup } from "react-icons/fa6";
import { GiBoxUnpacking } from "react-icons/gi";
import { LiaCrownSolid } from "react-icons/lia";
import { PiMosque } from "react-icons/pi";
import { TbBuildingEstate } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const EventWhyChoose = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-2'>
      <h1 className='text-green-900 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center py-10 leading-tight'>
        Why choose us for your Events ?
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-6 bg-gray-50 rounded-2xl'>
        {/* Scenic Location */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <LiaCrownSolid className='w-10 h-10' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Scenic Location</h3>
            <p className='text-gray-600 text-xs'>
              Breathtaking view and natural surroundings.
            </p>
          </div>
        </div>

        {/* Custom Packages */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <GiBoxUnpacking className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Custom Packages</h3>
            <p className='text-gray-600 text-xs'>
              Tailored package to suit your event needs.
            </p>
          </div>
        </div>

        {/* Experience Teams */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <FaPeopleGroup className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Experience Teams</h3>
            <p className='text-gray-600 text-xs'>
              Professional team ensuring flawless execution.
            </p>
          </div>
        </div>

        {/* Gourmet Catering */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <PiMosque className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Gourmet Catering</h3>
            <p className='text-gray-600 text-xs'>
              Delicious food crafted with fresh local ingredients.
            </p>
          </div>
        </div>

        {/* Modern Amenities */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <TbBuildingEstate className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Modern Amenities</h3>
            <p className='text-gray-600 text-xs'>
              State-of-the art facilities for your comfort.
            </p>
          </div>
        </div>

        {/* Complete Support */}
        <div className='flex items-center gap-2'>
          <div className='text-green-900'>
            <TfiHeadphoneAlt className='w-10 h-10' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Complete Support</h3>
            <p className='text-gray-600 text-xs'>
              End to end support from planning to celebration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWhyChoose;
