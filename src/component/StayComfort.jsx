import { useState } from "react";
import { BiTv } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { GiChestnutLeaf } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { Link } from "react-router-dom";

const StayComfort = () => {
  const [activeCategory, setActiveCategory] = useState("ALL ROOMS");

  return (
    <div className='max-w-7xl mx-auto my-10 p-6 md:p-10 bg-white shadow-md rounded-2xl border border-gray-100'>
      <div className='grid grid-cols-1 xl:grid-cols-8 gap-8 lg:gap-12 items-start'>
        {/* LEFT SIDE */}
        <div className='xl:col-span-5 flex flex-col justify-between h-full'>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <GiChestnutLeaf className='text-green-600 text-xl animate-pulse mb-1' />

            <h1 className='text-3xl sm:text-4xl font-bold text-green-900 mt-1'>
              Comfort Meets Nature
            </h1>

            <div className='flex items-center gap-2 mt-2 mb-4 justify-center md:justify-start w-full'>
              <div className='h-[2px] bg-green-600 w-24 sm:w-32 rounded-full'></div>
              <GiChestnutLeaf className='text-green-600 text-xl animate-pulse flex-shrink-0' />
              <div className='h-[2px] bg-green-600 w-16 sm:w-24 rounded-full'></div>
            </div>

            <p className='text-gray-600 mb-4 text-sm md:text-base leading-relaxed max-w-xl'>
              Whether you're here for a relaxing getaway, family vacation, or a
              peaceful retreat, our comfortable rooms and cottages offer the
              perfect stay with garden or hill views.
            </p>

            <div className='flex flex-wrap gap-2 mb-6 justify-center md:justify-start w-full'>
              <button
                onClick={() => setActiveCategory("ALL ROOMS")}
                className={`px-4 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeCategory === "ALL ROOMS"
                    ? "border-green-600 text-green-600 font-bold bg-green-50/30"
                    : "border-transparent text-gray-500 hover:text-green-600"
                }`}
              >
                All Rooms
              </button>
              <button
                onClick={() => setActiveCategory("COTTAGE")}
                className={`px-4 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeCategory === "COTTAGE"
                    ? "border-green-600 text-green-600 font-bold bg-green-50/30"
                    : "border-transparent text-gray-500 hover:text-green-600"
                }`}
              >
                Cottage
              </button>
              <button
                onClick={() => setActiveCategory("VILLA")}
                className={`px-4 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeCategory === "VILLA"
                    ? "border-green-600 text-green-600 font-bold bg-green-50/30"
                    : "border-transparent text-gray-500 hover:text-green-600"
                }`}
              >
                Villa
              </button>
              <button
                onClick={() => setActiveCategory("SUITE")}
                className={`px-4 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  activeCategory === "SUITE"
                    ? "border-green-600 text-green-600 font-bold bg-green-50/30"
                    : "border-transparent text-gray-500 hover:text-green-600"
                }`}
              >
                Suite
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2'>
            {/* Card 1 */}
            <div className='bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer'>
              <div>
                <img
                  src='/public/asset/stay-room.jpg'
                  alt='Deluxe Room'
                  className='w-full h-40 object-cover'
                />
                <div className='p-3 text-center flex flex-col items-center'>
                  <h3 className='text-sm font-bold text-gray-800 line-clamp-1 w-full'>
                    Deluxe Room
                  </h3>
                  <p className='text-green-700 text-xs font-semibold mt-1 w-full'>
                    BDT 6000/Night
                  </p>
                  <div className='flex gap-2 text-gray-500 my-3 text-base justify-center w-full'>
                    <IoWifi
                      className='hover:text-green-600 cursor-pointer'
                      title='Free Wifi'
                    />
                    <BsCupHot
                      className='hover:text-green-600 cursor-pointer'
                      title='Coffee'
                    />
                    <LuMonitor
                      className='hover:text-green-600 cursor-pointer'
                      title='Desk'
                    />
                    <BiTv
                      className='hover:text-green-600 cursor-pointer'
                      title='TV'
                    />
                  </div>
                </div>
              </div>
              <div className='p-3 pt-0'>
                <Link
                  to='/room/1'
                  className='block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xs font-medium py-2 rounded-md transition-all duration-300 uppercase tracking-wider cursor-pointer'
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer'>
              <div>
                <img
                  src='/public/asset/stay-cottage.jpg'
                  alt='Family Cottage'
                  className='w-full h-40 object-cover'
                />
                <div className='p-3 text-center flex flex-col items-center'>
                  <h3 className='text-sm font-bold text-gray-800 line-clamp-1 w-full'>
                    Family Cottage
                  </h3>
                  <p className='text-green-700 text-xs font-semibold mt-1 w-full'>
                    BDT 8000/Night
                  </p>
                  <div className='flex gap-2 text-gray-500 my-3 text-base justify-center w-full'>
                    <IoWifi
                      className='hover:text-green-600 cursor-pointer'
                      title='Free Wifi'
                    />
                    <BsCupHot
                      className='hover:text-green-600 cursor-pointer'
                      title='Coffee'
                    />
                    <LuMonitor
                      className='hover:text-green-600 cursor-pointer'
                      title='Desk'
                    />
                    <BiTv
                      className='hover:text-green-600 cursor-pointer'
                      title='TV'
                    />
                  </div>
                </div>
              </div>
              <div className='p-3 pt-0'>
                <Link
                  to='/room/2'
                  className='block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xs font-medium py-2 rounded-md transition-all duration-300 uppercase tracking-wider cursor-pointer'
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer'>
              <div>
                <img
                  src='/public/asset/stay-villa.jpg'
                  alt='Luxury Villa'
                  className='w-full h-40 object-cover'
                />
                <div className='p-3 text-center flex flex-col items-center'>
                  <h3 className='text-sm font-bold text-gray-800 line-clamp-1 w-full'>
                    Luxury Villa
                  </h3>
                  <p className='text-green-700 text-xs font-semibold mt-1 w-full'>
                    BDT 15000/Night
                  </p>
                  <div className='flex gap-2 text-gray-500 my-3 text-base justify-center w-full'>
                    <IoWifi
                      className='hover:text-green-600 cursor-pointer'
                      title='Free Wifi'
                    />
                    <BsCupHot
                      className='hover:text-green-600 cursor-pointer'
                      title='Coffee'
                    />
                    <LuMonitor
                      className='hover:text-green-600 cursor-pointer'
                      title='Desk'
                    />
                    <BiTv
                      className='hover:text-green-600 cursor-pointer'
                      title='TV'
                    />
                  </div>
                </div>
              </div>
              <div className='p-3 pt-0'>
                <Link
                  to='/room/3'
                  className='block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xs font-medium py-2 rounded-md transition-all duration-300 uppercase tracking-wider cursor-pointer'
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className='bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between cursor-pointer'>
              <div>
                <img
                  src='/public/asset/stay-suite.jpg'
                  alt='Premium Suite'
                  className='w-full h-40 object-cover'
                />
                <div className='p-3 text-center flex flex-col items-center'>
                  <h3 className='text-sm font-bold text-gray-800 line-clamp-1 w-full'>
                    Premium Suite
                  </h3>
                  <p className='text-green-700 text-xs font-semibold mt-1 w-full'>
                    BDT 18000/Night
                  </p>
                  <div className='flex gap-2 text-gray-500 my-3 text-base justify-center w-full'>
                    <IoWifi
                      className='hover:text-green-600 cursor-pointer'
                      title='Free Wifi'
                    />
                    <BsCupHot
                      className='hover:text-green-600 cursor-pointer'
                      title='Coffee'
                    />
                    <LuMonitor
                      className='hover:text-green-600 cursor-pointer'
                      title='Desk'
                    />
                    <BiTv
                      className='hover:text-green-600 cursor-pointer'
                      title='TV'
                    />
                  </div>
                </div>
              </div>
              <div className='p-3 pt-0'>
                <Link
                  to='/room/4'
                  className='block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-xs font-medium py-2 rounded-md transition-all duration-300 uppercase tracking-wider cursor-pointer'
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='xl:col-span-3 xl:h-full xl:flex xl:flex-col xl:justify-end'>
          <div className='sticky top-6 bg-green-50/50 border border-green-100 rounded-2xl p-6 shadow-sm xl:h-[472px] flex flex-col justify-between hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md transition-all duration-300 cursor-pointer'>
            <h2 className='text-xl font-bold text-green-900 pb-1.5 border-b border-green-200 text-center xl:text-left'>
              Check Availability
            </h2>
            <form className='flex-1 flex flex-col justify-between mt-3'>
              <div className='space-y-2.5'>
                <div>
                  <label className='block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider cursor-pointer'>
                    Check-In Date
                  </label>
                  <input
                    type='date'
                    className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white text-sm shadow-sm cursor-pointer'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider cursor-pointer'>
                    Check-Out Date
                  </label>
                  <input
                    type='date'
                    className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white text-sm shadow-sm cursor-pointer'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider cursor-pointer'>
                    Guests
                  </label>
                  <select className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white text-sm shadow-sm cursor-pointer'>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider cursor-pointer'>
                    Room Type
                  </label>
                  <select className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 bg-white text-sm shadow-sm cursor-pointer'>
                    <option>Deluxe Room</option>
                    <option>Family Cottage</option>
                    <option>Luxury Villa</option>
                    <option>Premium Suite</option>
                  </select>
                </div>
              </div>

              <div className='pt-3 xl:pt-0'>
                <button
                  type='submit'
                  className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-sm uppercase tracking-wider'
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayComfort;
