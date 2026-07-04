import { AiOutlineSecurityScan } from "react-icons/ai";
import { BsCup } from "react-icons/bs";
import { MdOutlineMuseum, MdOutlineKingBed } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";

const WhyChooseUs = () => {
  const features = [
    { icon: <MdOutlineMuseum />, title: "Beautiful\nTea Estate" },
    { icon: <MdOutlineKingBed />, title: "Luxurious\nHospitality" },
    { icon: <MdOutlineMuseum />, title: "World Class\nMuseum" },
    { icon: <BsCup />, title: "Authentic\nTea Experience" },
    { icon: <TfiLocationPin />, title: "Perfect Location\n& Environment" },
    { icon: <AiOutlineSecurityScan />, title: "Security\n& Safe" },
  ];

  return (
    <section className='w-full bg-green-900 text-white px-4 py-8 md:py-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
            Why Choose Tea Resort and Museum?
          </h1>
        </div>

        {/* Features Container */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          {/* Grid Section: 2 cols mobile, 3 cols tablet, 6 cols desktop */}
          <div className='w-full lg:flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {features.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer group h-32'
              >
                <div className='text-green-900 w-8 h-8 mb-2 group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>
                <p className='font-bold text-[11px] md:text-[12px] leading-[1.4] text-gray-800 whitespace-pre-line'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Big Highlight Card */}
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
