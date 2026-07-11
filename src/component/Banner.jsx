import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      prev: "slide4",
      next: "slide2",
      alt: "Tea Resort Banner 1",
    },
    {
      id: "slide2",
      prev: "slide1",
      next: "slide3",
      alt: "Tea Resort Banner 2",
    },
    {
      id: "slide3",
      prev: "slide2",
      next: "slide4",
      alt: "Tea Resort Banner 3",
    },
    {
      id: "slide4",
      prev: "slide3",
      next: "slide1",
      alt: "Tea Resort Banner 4",
    },
  ];

  return (
    <div className='relative'>
      <div className='carousel w-full'>
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className='carousel-item relative w-full'
          >
            <img
              src='/asset/tea-resort-banner.jpg'
              className='w-full h-64 sm:h-[400px] lg:h-[300px] object-cover'
              alt={slide.alt}
            />

            {/* Content Container */}
            <div className='absolute flex items-center h-full w-full top-0 text-white px-4'>
              <div className='w-full max-w-screen-xl mx-auto'>
                <div className='max-w-lg'>
                  <h2 className='text-xl sm:text-2xl md:text-3xl font-bold leading-tight'>
                    Experience the <br className='hidden sm:inline' /> Heart Of
                  </h2>
                  <h1
                    className='text-2xl sm:text-4xl md:text-5xl text-green-500 mt-1'
                    style={{ fontFamily: "'Alex Brush', cursive" }}
                  >
                    Bangladesh Tea Culture
                  </h1>
                  <p className='text-sm sm:text-base mt-2 opacity-90 leading-relaxed'>
                    A Perfect Blend of Nature, heritage and luxury hospitality.
                  </p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    <NavLink
                      to='/book'
                      className='btn btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'
                    >
                      Book Your Stay <ArrowIcon className='text-lg' />
                    </NavLink>
                    <button className='btn btn-outline btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                      Explore Museum
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className='absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between px-2'>
              <a href={`#${slide.prev}`} className='btn btn-circle'>
                ❮
              </a>
              <a href={`#${slide.next}`} className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
