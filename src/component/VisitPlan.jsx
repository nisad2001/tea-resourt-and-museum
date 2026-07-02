import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsCup } from "react-icons/bs";
import { MdOutlineMuseum } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const WhyChooseUs = () => {
  return (
    <div className='w-full bg-green-900 text-white px-4 pt-8 md:pt-12 pb-12 transition-all'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section: Title stays alone at the top */}
        <div className='text-center md:text-left mb-10'>
          <h1 className='text-3xl md:text-4xl text-center font-bold text-white leading-tight'>
            Why Choose Tea Resort and Museum?
          </h1>
        </div>

        {/* Bottom Section: Split into two parts */}
        <div className='flex flex-col lg:flex-row gap-6 items-center justify-between w-full overflow-hidden'>
          {/* Left Side: Grabs more space dynamically */}
          <div className='w-full lg:flex-1 flex flex-row gap-2 items-center justify-start overflow-x-auto pb-3 scrollbar-none snap-x'>
            {/* Card 1 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <MdOutlineMuseum className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                Beautiful <br /> Tea Estate
              </p>
            </div>

            {/* Card 2 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <MdOutlineMuseum className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                Luxurious <br /> Hospitality
              </p>
            </div>

            {/* Card 3 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <MdOutlineMuseum className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                World Class <br /> Museum
              </p>
            </div>

            {/* Card 4 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <BsCup className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                Authentic <br /> Tea Experience
              </p>
            </div>

            {/* Card 5 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <TfiLocationPin className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                Perfect Location <br /> & Environment
              </p>
            </div>

            {/* Card 6 */}
            <div className='flex-shrink-0 w-28 md:w-32 h-24 snap-center flex flex-col items-center justify-center text-center bg-white p-2 rounded-xl border border-gray-200/60 hover:border-amber-400 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group'>
              <AiOutlineSecurityScan className='text-green-900 w-7 h-7 mb-1 group-hover:scale-110 transition-transform duration-300' />
              <p className='font-bold text-[10px] md:text-xs leading-tight text-gray-800 whitespace-normal'>
                Security <br /> & Safe
              </p>
            </div>
          </div>

          {/* Right Side: Compact Big Card */}
          <div className='w-full lg:w-auto lg:flex-shrink-0 flex items-center justify-center min-w-0'>
            {/* এখানে cursor-pointer, hover:scale-105 এবং transition প্রোপার্টি পুরোপুরি ফিক্স করা হয়েছে */}
            <div className='w-full max-w-xs lg:w-[260px] bg-white py-5 px-4 rounded-2xl border border-gray-100 cursor-pointer transform hover:scale-105 hover:border-green-700 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out flex flex-col justify-center items-center text-center relative overflow-hidden group'>
              {/* Decorative Background Glow */}
              <div className='absolute -top-10 -right-10 w-20 h-20 bg-green-950/5 rounded-full blur-xl group-hover:bg-green-950/10 transition-all duration-500'></div>

              <MdOutlineMuseum className='text-green-900 w-10 h-10 md:w-14 md:h-14 mb-2 group-hover:scale-110 transition-transform duration-300' />
              <p className='text-black text-sm md:text-base font-medium leading-tight text-center'>
                Relax, Refresh and reconnect with Nature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
