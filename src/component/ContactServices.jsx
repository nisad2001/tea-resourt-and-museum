import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiBoxUnpacking } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ContactServices = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-6 bg-gray-50 rounded-2xl'>
        <div className='flex items-center gap-2'>
          <div className='text-green-900'>
            <TfiHeadphoneAlt className='w-10 h-10' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Quick Response</h3>
            <p className='text-gray-600 text-xs'>
              We aim to response to all <br /> inquiries within 24 hours
            </p>
          </div>
        </div>

        {/* Custom Packages */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <GiBoxUnpacking className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Easy Booking</h3>
            <p className='text-gray-600 text-xs'>
              Reach out to us for bookings <br /> package and special offers
            </p>
          </div>
        </div>

        {/* Experience Teams */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <FaPeopleGroup className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Pesonalized Service </h3>
            <p className='text-gray-600 text-xs'>
              We personalized to your experienced <br /> to make it truly
              memorable.
            </p>
          </div>
        </div>

        {/* Gourmet Catering */}
        <div className='flex items-center gap-2 border-r border-gray-300 pr-2'>
          <div className='text-green-900'>
            <AiOutlineSecurityScan className='w-8 h-8' />
          </div>
          <div>
            <h3 className='text-sm font-bold'>Secure & Reliable</h3>
            <p className='text-gray-600 text-xs'>
              Your information is safe <br /> and always protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactServices;
