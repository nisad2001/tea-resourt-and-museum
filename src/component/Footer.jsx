import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  MdOutlinePhone,
  MdOutlineMail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className='w-full bg-green-950 text-white/90 pt-6 pb-3 px-4 overflow-hidden border-t border-green-900'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 text-sm pb-5 border-b border-white/10'>
        {/* Column 1: Logo & Socials */}
        <div className='lg:col-span-3 flex flex-col gap-3'>
          <NavLink to='/'>
            <Logo />
          </NavLink>
          <p className='text-xs text-white/70 max-w-xs leading-relaxed'>
            A perfect destination for nature, heritage and unforgettable
            memories.
          </p>
          <div className='flex gap-2.5 mt-1'>
            {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='p-1.5 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-green-950 transition-all duration-300 transform hover:scale-110 active:scale-95'
                >
                  <Icon className='text-xs' />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className='lg:col-span-3'>
          <h3 className='font-bold uppercase tracking-wider text-white mb-3 text-xs sm:text-sm'>
            Quick Links
          </h3>
          <div className='grid grid-cols-2 gap-2 text-xs text-white/70'>
            <div className='flex flex-col gap-1.5'>
              {["Home", "About Us", "Stay", "Museum", "Experience"].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className='hover:text-amber-400 transition-colors duration-200'
                  >
                    {item}
                  </Link>
                ),
              )}
            </div>
            <div className='flex flex-col gap-1.5'>
              {["Gallery", "Dining", "Events", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className='hover:text-amber-400 transition-colors duration-200'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Useful Links */}
        <div className='lg:col-span-2'>
          <h3 className='font-bold uppercase tracking-wider text-white mb-3 text-xs sm:text-sm'>
            Useful Links
          </h3>
          <div className='flex flex-col gap-1.5 text-xs text-white/70'>
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Booking Policy",
              "Cancellation Policy",
              "FAQ",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className='hover:text-amber-400 transition-colors duration-200'
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div className='lg:col-span-2 flex flex-col gap-2'>
          <h3 className='font-bold uppercase tracking-wider text-white mb-1 text-xs sm:text-sm'>
            Contact Us
          </h3>
          <div className='flex flex-col gap-2 text-xs text-white/70'>
            <div className='flex items-start gap-2'>
              <MdOutlinePhone className='text-base text-amber-400 shrink-0 mt-0.5' />
              <p>+880 1712 345 678</p>
            </div>
            <div className='flex items-start gap-2'>
              <MdOutlineMail className='text-base text-amber-400 shrink-0 mt-0.5' />
              <p className='break-all'>info@tearesort.com</p>
            </div>
            <div className='flex items-start gap-2'>
              <TbWorld className='text-base text-amber-400 shrink-0 mt-0.5' />
              <p className='break-all'>www.tearesort.com</p>
            </div>
            <div className='flex items-start gap-2'>
              <MdOutlineLocationOn className='text-lg text-amber-400 shrink-0' />
              <p>Sreemangal, Moulvibazar, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Column 5: Newsletter & Payment */}
        <div className='lg:col-span-2 flex flex-col gap-3'>
          <div>
            <h3 className='font-bold uppercase tracking-wider text-white mb-1 text-xs sm:text-sm'>
              Newsletter
            </h3>
            <p className='text-xs text-white/70 mb-2'>
              Subscribe to get updates & offers
            </p>
            <form
              className='flex flex-col gap-1.5'
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type='email'
                placeholder='Your Email'
                className='w-full bg-white text-black text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-400'
              />
              <button className='w-full bg-green-800 hover:bg-green-700 text-white font-semibold text-xs py-1.5 uppercase tracking-wider rounded-sm transition-all duration-200 transform active:scale-95'>
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className='font-bold uppercase text-[10px] tracking-wider text-white mb-1.5'>
              We Accept
            </h4>
            <div className='flex gap-1 flex-wrap items-center bg-white/5 p-1 rounded-sm'>
              <span className='bg-white text-[9px] text-blue-900 font-bold px-1 py-0.5 rounded-xs select-none'>
                VISA
              </span>
              <span className='bg-white text-[9px] text-red-600 font-bold px-1 py-0.5 rounded-xs select-none'>
                MasterCard
              </span>
              <span className='bg-white text-[9px] text-sky-600 font-bold px-1 py-0.5 rounded-xs select-none'>
                Amex
              </span>
              <span className='bg-white text-[9px] text-pink-600 font-bold px-1 py-0.5 rounded-xs select-none'>
                bKash
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className='max-w-7xl mx-auto pt-3 text-center text-[11px] text-white/50 tracking-wide'>
        © 2026 Tea Resort & Museum. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
