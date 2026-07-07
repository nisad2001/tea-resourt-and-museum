import { CiHospital1 } from "react-icons/ci";
import { MdOutlineMuseum } from "react-icons/md";
import { SiFusionauth } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

const DiningBottom = () => {
  return (
    <div>
      <div className='bg-green-900 text-white py-8 px-4'>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 sm:gap-0'>
          {/* Item 1 */}
          <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 sm:border-r border-white/30 py-4 sm:py-2 last:border-r-0 gap-2'>
            <SlLocationPin className='text-2xl text-amber-500' />
            <p className='text-sm font-medium text-center'>
              Lush Green Location
            </p>
          </div>

          {/* Item 2 */}
          <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 sm:border-r border-white/30 py-4 sm:py-2 last:border-r-0 gap-2'>
            <CiHospital1 className='text-2xl text-amber-500' />
            <p className='text-sm font-medium text-center'>
              World-Class Hospitality
            </p>
          </div>

          {/* Item 3 */}
          <div className='flex-1 w-full flex flex-row items-center justify-center border-b sm:border-b-0 sm:border-r border-white/30 py-4 sm:py-2 last:border-r-0 gap-2'>
            <MdOutlineMuseum className='text-2xl text-amber-500' />
            <p className='text-sm font-medium text-center'>
              Rich Heritage Museum
            </p>
          </div>

          {/* Item 4 */}
          <div className='flex-1 w-full flex flex-row items-center justify-center py-4 sm:py-2 last:border-r-0 gap-2'>
            <SiFusionauth className='text-2xl text-amber-500' />
            <p className='text-sm font-medium text-center'>
              Authentic Tea Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningBottom;
