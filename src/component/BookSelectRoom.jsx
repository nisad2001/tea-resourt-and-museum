import { FaUser } from "react-icons/fa";
import { GiChestnutLeaf } from "react-icons/gi";
import { ImMeter } from "react-icons/im";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineDateRange, MdOutlineSecurity } from "react-icons/md";

const BookSelectRoom = () => {
  return (
    <div className='relative mt-10 lg:-mt-24 z-10 px-4 max-w-7xl mx-auto'>
      <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
        <div className='flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center'>
          <div className='w-full lg:col-span-9 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm lg:shadow-none'>
            <div className='flex items-center gap-2 mb-6'>
              <MdOutlineDateRange className='text-green-600 text-2xl' />
              <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-800'>
                1. Choose Your Dates
              </h3>
            </div>

            <form className='flex flex-col md:flex-row flex-wrap gap-4'>
              <div className='w-full md:flex-1'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Check-in
                </label>
                <input
                  type='date'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none transition-all'
                />
              </div>

              <div className='w-full md:flex-1'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Check-out
                </label>
                <input
                  type='date'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none transition-all'
                />
              </div>

              <div className='w-full md:flex-1'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Guest
                </label>
                <select className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none transition-all bg-white'>
                  <option value='' disabled selected>
                    Select guests
                  </option>
                  <option value='1'>1 Guest</option>
                  <option value='2'>2 Guests</option>
                  <option value='3'>3 Guests</option>
                  <option value='4'>4+ Guests</option>
                </select>
              </div>

              <div className='w-full mt-2'>
                <button
                  type='submit'
                  className='w-full bg-green-900 text-white py-3 rounded-md hover:bg-green-800 transition-colors duration-200 font-semibold uppercase tracking-wide cursor-pointer'
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>

          <div className='w-full lg:col-span-3 bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='flex gap-3 items-center mb-4'>
              <div className='p-2 bg-green-50 rounded-full'>
                <MdOutlineSecurity className='text-green-600 text-2xl' />
              </div>
              <h3 className='text-gray-800 text-sm font-bold'>
                Best Rate Guarantee
              </h3>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Book directly with us to get the best available rates, exclusive
              offers, and personalized services.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <div className='flex items-center gap-2 mb-8'>
          <GiChestnutLeaf className='text-green-400 text-lg md:text-2xl animate-pulse flex-shrink-0' />
          <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-800'>
            2. Select Your Room
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'>
            <div className='h-48 overflow-hidden'>
              <img
                src='/public/asset/book-room-1.jpg'
                alt='Room'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-5'>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                Deluxe Garden Room
              </h2>
              <p className='text-gray-500 text-sm mb-4'>
                Comfortable room with garden view and modern amenities
              </p>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-5'>
                <div className='flex items-center gap-1'>
                  <FaUser className='text-green-600' /> <span>2 Guests</span>
                </div>
                <div className='flex items-center gap-1'>
                  <IoBedOutline className='text-green-600' />{" "}
                  <span>King Bed</span>
                </div>
                <div className='flex items-center gap-1'>
                  <ImMeter className='text-green-600' />{" "}
                  <span>
                    35 m<sup className='text-xs'>2</sup>
                  </span>
                </div>
              </div>
              <div className='border-t pt-4 mb-4'>
                <p className='text-gray-700'>
                  From{" "}
                  <span className='text-green-900 text-xl font-bold'>
                    BDT 6500
                  </span>
                  <span className='text-gray-500 text-sm'> /night</span>
                </p>
              </div>
              <button className='bg-green-900 py-3 rounded-lg w-full uppercase text-white font-semibold hover:bg-green-800 transition-colors cursor-pointer'>
                Select Room
              </button>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'>
            <div className='h-48 overflow-hidden'>
              <img
                src='/public/asset/book-room-2.jpg'
                alt='Room'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-5'>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                Premium Valley Room
              </h2>
              <p className='text-gray-500 text-sm mb-4'>
                Speciou room with valley view and private balcony
              </p>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-5'>
                <div className='flex items-center gap-1'>
                  <FaUser className='text-green-600' /> <span>2 Guests</span>
                </div>
                <div className='flex items-center gap-1'>
                  <IoBedOutline className='text-green-600' />{" "}
                  <span>King Bed</span>
                </div>
                <div className='flex items-center gap-1'>
                  <ImMeter className='text-green-600' />{" "}
                  <span>
                    35 m<sup className='text-xs'>2</sup>
                  </span>
                </div>
              </div>
              <div className='border-t pt-4 mb-4'>
                <p className='text-gray-700'>
                  From{" "}
                  <span className='text-green-900 text-xl font-bold'>
                    BDT 8500
                  </span>
                  <span className='text-gray-500 text-sm'> /night</span>
                </p>
              </div>
              <button className='bg-green-900 py-3 rounded-lg w-full uppercase text-white font-semibold hover:bg-green-800 transition-colors cursor-pointer'>
                Select Room
              </button>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'>
            <div className='h-48 overflow-hidden'>
              <img
                src='/public/asset/book-room-3.jpg'
                alt='Room'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-5'>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                Tea Garden Suite
              </h2>
              <p className='text-gray-500 text-sm mb-4'>
                Luxury suite with seperate living area and scenic view
              </p>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-5'>
                <div className='flex items-center gap-1'>
                  <FaUser className='text-green-600' /> <span>2 Guests</span>
                </div>
                <div className='flex items-center gap-1'>
                  <IoBedOutline className='text-green-600' />{" "}
                  <span>King Bed</span>
                </div>
                <div className='flex items-center gap-1'>
                  <ImMeter className='text-green-600' />{" "}
                  <span>
                    35 m<sup className='text-xs'>2</sup>
                  </span>
                </div>
              </div>
              <div className='border-t pt-4 mb-4'>
                <p className='text-gray-700'>
                  From{" "}
                  <span className='text-green-900 text-xl font-bold'>
                    BDT 12,500
                  </span>
                  <span className='text-gray-500 text-sm'> /night</span>
                </p>
              </div>
              <button className='bg-green-900 py-3 rounded-lg w-full uppercase text-white font-semibold hover:bg-green-800 transition-colors cursor-pointer'>
                Select Room
              </button>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer'>
            <div className='h-48 overflow-hidden'>
              <img
                src='/public/asset/book-room-4.jpg'
                alt='Room'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-5'>
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                Private Villa
              </h2>
              <p className='text-gray-500 text-sm mb-4'>
                Private villa with pool, living area and personalized service.
              </p>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-5'>
                <div className='flex items-center gap-1'>
                  <FaUser className='text-green-600' /> <span>2 Guests</span>
                </div>
                <div className='flex items-center gap-1'>
                  <IoBedOutline className='text-green-600' />{" "}
                  <span>King Bed</span>
                </div>
                <div className='flex items-center gap-1'>
                  <ImMeter className='text-green-600' />{" "}
                  <span>
                    35 m<sup className='text-xs'>2</sup>
                  </span>
                </div>
              </div>
              <div className='border-t pt-4 mb-4'>
                <p className='text-gray-700'>
                  From{" "}
                  <span className='text-green-900 text-xl font-bold'>
                    BDT 22,000
                  </span>
                  <span className='text-gray-500 text-sm'> /night</span>
                </p>
              </div>
              <button className='bg-green-900 py-3 rounded-lg w-full uppercase text-white font-semibold hover:bg-green-800 transition-colors cursor-pointer'>
                Select Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSelectRoom;
