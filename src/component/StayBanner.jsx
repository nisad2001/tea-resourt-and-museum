import { Link, NavLink } from "react-router-dom";

const StayBanner = () => {
  return (
    <div>
      <div
        className='hero min-h-[45vh]'
        style={{ backgroundImage: "url('/asset/about-tea-resort.jpg')" }}
      >
        <div className='hero-overlay bg-black/40'></div>

        <div className='hero-content text-neutral-content w-full justify-center md:justify-start px-8 md:px-16'>
          <div className='max-w-md text-center md:text-left'>
            <h1 className='mb-5 text-4xl md:text-6xl font-bold text-white tracking-wide'>
              Stay With Us
            </h1>

            <div className='text-sm text-white flex items-center justify-center md:justify-start gap-2'>
              <Link to='/' className='hover:text-green-500 transition-colors'>
                Home
              </Link>
              <span className='text-white'>&gt;</span>
              <NavLink
                to='/stay'
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 font-bold"
                    : "text-white hover:text-green-600 transition-colors"
                }
              >
                Stay
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayBanner;
