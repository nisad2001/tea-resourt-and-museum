import { TbRadio } from "react-icons/tb";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { MdOutlineMuseum } from "react-icons/md";
import { IoNavigateOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const VisitPlan = () => {
  return (
    <div className='w-full px-4 py-8 bg-transparent'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-center'>
        {/* Helper function for cleaner code */}
        {[
          {
            icon: TbRadio,
            title: "Book Your Stay",
            desc: "Easy and secure online booking.",
          },
          {
            icon: MdOutlineMuseum,
            title: "Explore Museum",
            desc: "Discover the heritage of tea.",
          },
          {
            icon: IoNavigateOutline,
            title: "Special Package",
            desc: "Weekend, family packages & more.",
          },
          {
            icon: TfiHeadphoneAlt,
            title: "Customer Support",
            desc: "We are here to assist 24/7.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className='flex flex-row items-center gap-4 bg-white p-3 rounded-lg shadow-sm sm:bg-transparent sm:shadow-none'
          >
            <div className='flex-shrink-0'>
              <item.icon className='text-green-800 text-3xl' />
            </div>
            <div className='flex flex-col'>
              <p className='font-bold text-gray-800 text-sm md:text-base leading-tight'>
                {item.title}
              </p>
              <p className='text-gray-600 text-xs md:text-sm leading-relaxed mt-0.5'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Item 5: Green Background */}
        <div className='w-full bg-green-900 p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2 shadow-md hover:bg-green-950 transition-all'>
          <h3 className='text-sm font-bold text-white leading-tight'>
            Plan Your Visit Today!
          </h3>
          <button className='btn btn-sm text-green-900 bg-white border-none uppercase hover:bg-amber-400 flex items-center justify-center gap-1 px-4 py-1 rounded-md font-bold text-xs shadow-sm'>
            Book Now <ArrowIcon className='text-lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitPlan;
