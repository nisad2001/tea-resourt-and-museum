import { AiFillSafetyCertificate } from "react-icons/ai";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { PiKeyThin } from "react-icons/pi";
import { SiFusionauth } from "react-icons/si";

const StayBottom = () => {
  return (
    <div className='bg-white text-green-900 py-4 sm:py-6 px-4'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 sm:gap-8'>
        <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 border-gray-200 py-3 sm:py-2 gap-4'>
          <PiKeyThin className='text-3xl text-green-600 flex-shrink-0' />
          <div className='flex flex-col text-left'>
            <h5 className='text-sm font-bold uppercase tracking-wider text-green-600 mb-0.5'>
              Lush Comfort & Luxury
            </h5>
            <p className='text-xs text-black leading-relaxed'>
              Well appointed rooms with modern amenities
            </p>
          </div>
        </div>

        <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 border-gray-200 py-3 sm:py-2 gap-4'>
          <LiaHospitalAltSolid className='text-3xl text-green-600 flex-shrink-0' />
          <div className='flex flex-col text-left'>
            <h5 className='text-sm font-bold uppercase tracking-wider text-green-600 mb-0.5'>
              Nature views
            </h5>
            <p className='text-xs text-black leading-relaxed'>
              Rooms with beautiful garden or hill view
            </p>
          </div>
        </div>

        <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 border-gray-200 py-3 sm:py-2 gap-4'>
          <AiFillSafetyCertificate className='text-3xl text-green-600 flex-shrink-0' />
          <div className='flex flex-col text-left'>
            <h5 className='text-sm font-bold uppercase tracking-wider text-green-600 mb-0.5'>
              Great hospitality
            </h5>
            <p className='text-xs text-black leading-relaxed'>
              Personalized service and warm hospitality
            </p>
          </div>
        </div>

        <div className='flex-1 w-full flex flex-row items-center justify-center py-3 sm:py-2 gap-4'>
          <SiFusionauth className='text-3xl text-green-600 flex-shrink-0' />
          <div className='flex flex-col text-left'>
            <h5 className='text-sm font-bold uppercase tracking-wider text-green-600 mb-0.5'>
              Safe and secure
            </h5>
            <p className='text-xs text-black leading-relaxed'>
              24/7 security for your peace of mind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayBottom;
