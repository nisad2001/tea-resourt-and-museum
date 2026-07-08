import { CiClock2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { GiChestnutLeaf } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";

const ContactGetInTouch = () => {
  return (
    <div className=' max-w-7xl mx-auto px-4'>
      <div className='grid grid-cols-9 gap-2'>
        <div className='col-span-3  p-4'>
          <div className='flex flex-col sm:flex-row items-center gap-2'>
            <GiChestnutLeaf className='text-green-500 text-3xl animate-pulse flex-shrink-0' />
            <h3 className='text-green-700 mb-2 font-bold text-3xl md:text-4xl'>
              Get in Touch
            </h3>
          </div>
          <p className='text-4 leading-relaxed'>
            Our friendly team is always ready to assist you <br /> with any
            inqueries, booking or special requirements
          </p>
          <div className=''>
            <div className='flex items-center py-3 gap-3 pl-3'>
              <div>
                <VscLocation className='text-green-600 bg-base-300 rounded-full p-2 text-4xl' />
              </div>
              <div>
                <h6 className='font-semibold text-[18px]'>Visit Us</h6>
                <p>
                  Tea Resort & Museum <br /> Sreemangal MouloviBazar 3210
                  Bangladesh
                </p>
              </div>
            </div>
            <div className='flex items-center py-3 gap-3 pl-3'>
              <div>
                <IoCallOutline className='text-green-600 bg-base-300 rounded-full p-2 text-4xl' />
              </div>
              <div>
                <h6 className='font-semibold text-[18px]'>Call Us</h6>
                <p>+880 12345678</p>
                <p>+880 12345678</p>
              </div>
            </div>
            <div className='flex items-center py-3 gap-3 pl-3'>
              <div>
                <MdOutlineMail className='text-green-600 bg-base-300 rounded-full p-2 text-4xl' />
              </div>
              <div>
                <h6 className='font-semibold text-[18px]'>Email Us</h6>
                <p>info@tearesort.com</p>
                <p>info@tearesort.com</p>
              </div>
            </div>
            <div className='flex items-center py-3 gap-3 pl-3'>
              <div>
                <CiClock2 className='text-green-600 bg-base-300 rounded-full p-2 text-4xl' />
              </div>
              <div>
                <h6 className='font-semibold text-[18px]'>Office Hours</h6>
                <p>9:00 AM to 6:00 PM</p>
                <p>(Saturday - Thursday)</p>
              </div>
            </div>
            <div className='flex items-center py-3 gap-3 pl-3'>
              <div>
                <TbWorldWww className='text-green-600 bg-base-300 rounded-full p-2 text-4xl' />
              </div>
              <div>
                <h6 className='font-semibold text-[18px]'>Website</h6>
                <p>WWW.Tearesort.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-2 mt-30 mb-10'>
          <img
            src='/asset/contact-getintouch.jpg'
            alt='Contact'
            className='w-full h-48 object-cover rounded-xl mb-2'
          />

          <h3 className='text-2xl font-bold text-gray-800 px-4'>Find Us</h3>
          <p className='text-gray-600 text-base text-4 leading-relaxed px-4 mb-auto'>
            Nestled in the heart of lush tea gardens. Our resort is easily
            accessible and surrounded by natural beauty.
          </p>

          <div className='p-3'>
            <button className='bg-green-900 text-white p-3 rounded-xl text-[16px] font-bold flex items-center  gap-2 hover:bg-green-800 transition uppercase '>
              GET direction <FaArrowRight />
            </button>
          </div>
        </div>

        <div className='col-span-4  p-4'>
          <div className='max-w-4xl mx-auto p-8 bg-white border border-gray-100 rounded-2xl shadow-sm'>
            {/* Header */}
            <div className='flex items-center gap-2 mb-2'>
              <GiChestnutLeaf className='text-green-800 text-3xl' />
              <h2 className='text-3xl font-bold text-green-900'>
                Send Us a Message
              </h2>
            </div>
            <p className='text-gray-600 mb-8'>
              Fill out the form below, and we'll get back to you as soon as
              possible.
            </p>

            {/* Form */}
            <form className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='text'
                  placeholder='Your Name *'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                />
                <input
                  type='email'
                  placeholder='Email Address *'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                />
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>

              <textarea
                placeholder='Your Message *'
                rows='5'
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              ></textarea>

              {/* Checkbox */}
              <div className='flex items-center gap-2 text-sm text-gray-700'>
                <input type='checkbox' className='w-4 h-4' />
                <p>
                  I agree to the{" "}
                  <span className='text-green-800 font-semibold cursor-pointer'>
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className='text-green-800 font-semibold cursor-pointer'>
                    Terms of Use
                  </span>
                  .
                </p>
              </div>

              {/* Button */}
              <button className='bg-green-900 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-green-800 transition uppercase'>
                SEND MESSAGE <LuSendHorizontal />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGetInTouch;
