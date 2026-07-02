import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { RiHomeGearLine } from "react-icons/ri";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className='w-full bg-green-900 text-white overflow-hidden'>
      {/* 🟢 Centered content */}
      <div className='max-w-7xl w-full px-3 mx-auto flex flex-col lg:flex-row justify-between items-center py-2 gap-2'>
        {/* Left side */}
        <div className='flex flex-col md:flex-row items-center gap-2 text-sm text-center md:text-left'>
          <div className='flex items-center gap-2'>
            <MdOutlineLocationOn />
            <RiHomeGearLine />
          </div>

          <p className='break-words'>Experience, Nature, Heritage & Serenity</p>
        </div>

        {/* Right side */}
        <div className='flex flex-col lg:flex-row items-center gap-3'>
          {/* Phone */}
          <div className='flex items-center gap-2 text-sm'>
            <MdOutlinePhone />
            <p>Call:+88 01712345678</p>
          </div>

          {/* Social Icons */}
          <div className='flex gap-3 text-lg flex-wrap justify-center'>
            <FaFacebookF className='hover:text-blue-500 cursor-pointer' />
            <FaYoutube className='hover:text-red-500 cursor-pointer' />
            <FaTwitter className='hover:text-sky-400 cursor-pointer' />
            <FaInstagram className='hover:text-pink-500 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
