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
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8'>
        <div className='lg:col-span-3 p-4'>
          <div className='flex items-center gap-2'>
            <GiChestnutLeaf className='text-green-500 text-3xl animate-pulse flex-shrink-0' />
            <h3 className='text-green-700 font-bold text-3xl md:text-4xl'>
              Get in Touch
            </h3>
          </div>
          <p className='mt-4 leading-relaxed text-gray-600'>
            Our friendly team is always ready to assist you with any inqueries,
            booking or special requirements.
          </p>

          <div className='mt-6 space-y-4'>
            <div className='flex items-start gap-3'>
              <VscLocation className='text-green-600 bg-base-300 rounded-full p-2 text-4xl flex-shrink-0' />
              <div>
                <h6 className='font-semibold text-[18px]'>Visit Us</h6>
                <p className='text-sm text-gray-600'>
                  Tea Resort & Museum <br /> Sreemangal MouloviBazar 3210,
                  Bangladesh
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <IoCallOutline className='text-green-600 bg-base-300 rounded-full p-2 text-4xl flex-shrink-0' />
              <div>
                <h6 className='font-semibold text-[18px]'>Call Us</h6>
                <p className='text-sm text-gray-600'>+880 12345678</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <MdOutlineMail className='text-green-600 bg-base-300 rounded-full p-2 text-4xl flex-shrink-0' />
              <div>
                <h6 className='font-semibold text-[18px]'>Email Us</h6>
                <p className='text-sm text-gray-600'>info@tearesort.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col p-4'>
          <img
            src='/asset/contact-getintouch.jpg'
            alt='Contact'
            className='w-full h-48 object-cover rounded-xl mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800 px-2'>Find Us</h3>
          <p className='text-gray-600 text-base leading-relaxed px-2 mb-4'>
            Nestled in the heart of lush tea gardens. Our resort is easily
            accessible.
          </p>
          <div className='mt-auto p-2'>
            <button className='bg-green-900 text-white w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-800 transition uppercase'>
              GET direction <FaArrowRight />
            </button>
          </div>
        </div>

        <div className='lg:col-span-4 p-4'>
          <div className='p-8 bg-white border border-gray-100 rounded-2xl shadow-sm'>
            <div className='flex items-center gap-2 mb-2'>
              <GiChestnutLeaf className='text-green-800 text-3xl' />
              <h2 className='text-3xl font-bold text-green-900'>
                Send Us a Message
              </h2>
            </div>
            <p className='text-gray-600 mb-8'>Fill out the form below.</p>

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
              </div>
              <input
                type='tel'
                placeholder='Phone Number'
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              />
              <textarea
                placeholder='Your Message *'
                rows='4'
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600'
              ></textarea>

              <button className='bg-green-900 w-full text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-800 transition uppercase'>
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
