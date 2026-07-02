import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to='/'
          end
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/stay'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Stay
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/museum'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Museum
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/experience'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Experience
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/gallery'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Gallery
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/dining'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Dining
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/event'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Event
        </NavLink>
      </li>

      <li>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? "text-green-900 font-bold border-b-4 pb-4 border-b-green-900"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='w-full bg-base-100 shadow-sm'>
      <div className='navbar max-w-7xl mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow uppercase'
            >
              {nav}
            </ul>
          </div>

          <a>
            <Logo />
          </a>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 uppercase'>{nav}</ul>
        </div>

        <div className='navbar-end '>
          <NavLink to='/book' className='btn uppercase rounded-sm bg-green-900'>
            <FaCalendarDays />
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
