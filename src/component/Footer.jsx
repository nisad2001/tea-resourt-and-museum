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
    <footer className='w-full bg-green-950 text-white/90 pt-8 pb-4 px-5 border-t border-green-900'>
      <div className='max-w-7xl mx-auto flex flex-col gap-8 pb-6 border-b border-white/10'>
        {/* Column 1: Logo & Socials */}
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left gap-3'>
          <NavLink to='/'>
            <Logo />
          </NavLink>
          <p className='text-sm leading-relaxed text-white/70 max-w-sm'>
            A perfect destination for nature, heritage and unforgettable
            memories.
          </p>
          <div className='flex gap-3 mt-2'>
            {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href='#'
                  className='p-2 rounded-full border border-white/30 hover:border-white hover:bg-white hover:text-green-950 transition-all duration-300'
                >
                  <Icon className='text-sm' />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Grid Container for Links */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left'>
          {/* Quick Links */}
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold uppercase tracking-wider text-white text-sm mb-1'>
              Quick Links
            </h3>
            <div className='flex flex-col gap-1.5 text-xs sm:text-sm text-white/70'>
              {[
                "Home",
                "About Us",
                "Stay",
                "Museum",
                "Experience",
                "Gallery",
                "Dining",
                "Events",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "")}`}
                  className='hover:text-amber-400 transition-colors'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold uppercase tracking-wider text-white text-sm mb-1'>
              Policies
            </h3>
            <div className='flex flex-col gap-1.5 text-xs sm:text-sm text-white/70'>
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
                  className='hover:text-amber-400 transition-colors'
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className='flex flex-col gap-2 col-span-2 sm:col-span-1'>
            <h3 className='font-bold uppercase tracking-wider text-white text-sm mb-1'>
              Contact Us
            </h3>
            <div className='flex flex-col gap-2 text-xs sm:text-sm text-white/70 items-center sm:items-start'>
              <div className='flex items-center gap-2'>
                <MdOutlinePhone className='text-amber-400' /> +880 1712 345 678
              </div>
              <div className='flex items-center gap-2'>
                <MdOutlineMail className='text-amber-400' /> info@tearesort.com
              </div>
              <div className='flex items-start gap-2 text-left'>
                <MdOutlineLocationOn className='text-amber-400 mt-0.5' />{" "}
                Sreemangal, Moulvibazar
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className='flex flex-col gap-3 col-span-2 sm:col-span-1'>
            <h3 className='font-bold uppercase tracking-wider text-white text-sm mb-1'>
              Newsletter
            </h3>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full bg-white/10 text-white text-xs px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-amber-400'
            />
            <button className='w-full bg-green-800 hover:bg-green-700 text-white text-xs py-2 uppercase tracking-wider rounded transition-all'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='pt-4 text-center text-[10px] sm:text-xs text-white/50'>
        © 2026 Tea Resort & Museum. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
