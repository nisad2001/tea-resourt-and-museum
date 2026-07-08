import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Logo from "./Logo";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { SiBackstageCasting } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='w-full bg-[#0a2e1d] text-white pt-10 pb-5 px-5'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8'>
          <div className='lg:col-span-2 flex flex-col gap-3 items-start'>
            <NavLink to='/'>
              <Logo />
            </NavLink>
            <p className='text-sm text-gray-300 max-w-xs'>
              A perfect destination for nature, heritage and unforgettable
              memories.
            </p>
            <div className='flex gap-2 mt-2'>
              {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href='#'
                    className='w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white hover:text-[#0a2e1d] transition-all'
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <h3 className='font-bold text-sm mb-4 uppercase'>Quick Links</h3>
            <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-300'>
              {[
                "Home",
                "Gallery",
                "About Us",
                "Dining",
                "Stay",
                "Events",
                "Museum",
                "Contact",
                "Experience",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className='hover:text-amber-400'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <h3 className='font-bold text-sm mb-4 uppercase'>Useful Links</h3>
            <div className='flex flex-col gap-2 text-sm text-gray-300'>
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Booking Policy",
                "Cancellation Policy",
                "FAQ",
              ].map((item) => (
                <Link key={item} to='#' className='hover:text-amber-400'>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className='lg:col-span-1'>
            <h3 className='font-bold text-sm mb-4 uppercase'>Contact Us</h3>
            <div className='flex flex-col gap-2 text-sm text-gray-300'>
              <div className='flex items-center gap-2'>
                <MdOutlinePhone /> +880 1712 345 678
              </div>
              <div className='flex items-center gap-2'>
                <MdOutlineMail /> info@tearesort.com
              </div>
              <div className='flex items-center gap-2'>
                <TbWorld /> www.tearesort.com
              </div>
              <div className='flex items-start gap-2'>
                <MdOutlineLocationOn className='mt-1' /> Sreemangal, Moulvibazar
              </div>
            </div>
          </div>

          {/* Newsletter & Payments Container */}
          <div className='lg:col-span-1'>
            <div className='flex flex-row gap-6'>
              {/* Newsletter Div */}
              <div className='flex-1'>
                <h3 className='font-bold text-sm mb-4 uppercase'>Newsletter</h3>
                <p className='text-xs text-gray-300 mb-2'>
                  Subscribe to get updates & offers
                </p>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full p-2 text-black text-sm mb-2 rounded'
                />
                <button className='w-full bg-[#1a4a35] hover:bg-[#2a6a4f] py-2 text-xs uppercase'>
                  Subscribe
                </button>
              </div>

              {/* Payment Div */}
              <div className='flex-none'>
                <h3 className='font-bold text-sm mb-4 uppercase'>We Accept</h3>
                <div className='flex flex-row gap-2 text-2xl text-white'>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <SiBackstageCasting />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='text-center text-xs text-gray-500 border-t border-gray-700 pt-5'>
          © 2026 Tea Resort & Museum. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
