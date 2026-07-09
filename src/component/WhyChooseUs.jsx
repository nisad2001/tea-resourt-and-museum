import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsCup } from "react-icons/bs";
import { MdOutlineMuseum, MdOutlineKingBed } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const WhyChooseUs = () => {
  return (
    <section className='w-full bg-green-900 text-white px-4 py-8 md:py-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            Why Choose Tea Resort and Museum?
          </h1>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='w-full lg:flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <MdOutlineMuseum className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                Beautiful Tea Estate
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <MdOutlineKingBed className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                Luxurious Hospitality
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <MdOutlineMuseum className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                World Class Museum
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <BsCup className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                Authentic Tea Experience
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <TfiLocationPin className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                Perfect Location & Environment
              </p>
            </div>

            <div className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'>
              <div className='text-green-900 w-10 h-10 mb-2 group-hover:scale-110 transition-transform'>
                <AiOutlineSecurityScan className='w-full h-full' />
              </div>
              <p className='font-bold text-[11px] md:text-[14px] leading-[1.4] text-gray-800'>
                Security & Safe
              </p>
            </div>
          </div>

          <div className='w-full lg:w-[280px] flex-shrink-0'>
            <div className='bg-white py-8 px-6 rounded-2xl border border-gray-100 hover:border-green-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer h-full'>
              <div className='absolute -top-10 -right-10 w-24 h-24 bg-green-950/5 rounded-full blur-xl'></div>
              <MdOutlineMuseum className='text-green-900 w-12 h-12 mb-3 animate-pulse' />
              <p className='text-black text-[15px] font-medium leading-[1.6]'>
                Relax, Refresh and reconnect with Nature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
