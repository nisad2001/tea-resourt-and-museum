import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

const Banner = () => {
  return (
    <div className='relative'>
      <div className='carousel w-full'>
        {/* Slide 1 */}
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            src='/asset/tea-resort-banner.jpg'
            className='w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover'
            alt='Tea Resort Banner 1'
          />
          {/* Left Aligned Text Overlay */}
          <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black/40 pl-10 md:pl-20 text-white'>
            <div className='text-left max-w-[75%] sm:max-w-md md:max-w-lg'>
              <h2 className='text-xs sm:text-xl md:text-3xl font-bold leading-tight'>
                Experience the <br className='hidden sm:inline' /> Heart Of
              </h2>
              <h4
                className='text-base sm:text-2xl md:text-4xl text-green-500 mt-0.5 md:mt-1'
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Bangladesh Tea Culture
              </h4>
              <p className='text-[9px] sm:text-xs md:text-base mt-0.5 md:mt-2 opacity-90 leading-tight'>
                A Perfect Blend of Nature, heritage and <br /> luxury
                hospitality.
              </p>
              <div className='mt-1.5 md:mt-4 flex gap-2'>
                <button className='btn btn-xs sm:btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'>
                  Book Your Stay <ArrowIcon className='text-xs sm:text-xl' />
                </button>
                <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                  Explore Museum
                </button>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className='absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href='#slide4'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❮
            </a>
            <a
              href='#slide2'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            src='/asset/tea-resort-banner.jpg'
            className='w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover'
            alt='Tea Resort Banner 2'
          />
          {/* Left Aligned Text Overlay */}
          <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black/40 pl-10 md:pl-20 text-white'>
            <div className='text-left max-w-[75%] sm:max-w-md md:max-w-lg'>
              <h2 className='text-xs sm:text-xl md:text-3xl font-bold leading-tight'>
                Experience the <br className='hidden sm:inline' /> Heart Of
              </h2>
              <h4
                className='text-base sm:text-2xl md:text-4xl text-green-500 mt-0.5 md:mt-1'
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Bangladesh Tea Culture
              </h4>
              <p className='text-[9px] sm:text-xs md:text-base mt-0.5 md:mt-2 opacity-90 leading-tight'>
                A Perfect Blend of Nature, heritage and <br /> luxury
                hospitality.
              </p>
              <div className='mt-1.5 md:mt-4 flex gap-2'>
                <button className='btn btn-xs sm:btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'>
                  Book Your Stay <ArrowIcon className='text-xs sm:text-xl' />
                </button>
                <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                  Explore Museum
                </button>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className='absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href='#slide1'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❮
            </a>
            <a
              href='#slide3'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            src='/asset/tea-resort-banner.jpg'
            className='w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover'
            alt='Tea Resort Banner 3'
          />
          {/* Left Aligned Text Overlay */}
          <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black/40 pl-10 md:pl-20 text-white'>
            <div className='text-left max-w-[75%] sm:max-w-md md:max-w-lg'>
              <h2 className='text-xs sm:text-xl md:text-3xl font-bold leading-tight'>
                Experience the <br className='hidden sm:inline' /> Heart Of
              </h2>
              <h4
                className='text-base sm:text-2xl md:text-4xl text-green-500 mt-0.5 md:mt-1'
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Bangladesh Tea Culture
              </h4>
              <p className='text-[9px] sm:text-xs md:text-base mt-0.5 md:mt-2 opacity-90 leading-tight'>
                A Perfect Blend of Nature, heritage and <br /> luxury
                hospitality.
              </p>
              <div className='mt-1.5 md:mt-4 flex gap-2'>
                <button className='btn btn-xs sm:btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'>
                  Book Your Stay <ArrowIcon className='text-xs sm:text-xl' />
                </button>
                <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                  Explore Museum
                </button>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className='absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href='#slide2'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❮
            </a>
            <a
              href='#slide4'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            src='/asset/tea-resort-banner.jpg'
            className='w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px] object-cover'
            alt='Tea Resort Banner 4'
          />
          {/* Left Aligned Text Overlay */}
          <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black/40 pl-10 md:pl-20 text-white'>
            <div className='text-left max-w-[75%] sm:max-w-md md:max-w-lg'>
              <h2 className='text-xs sm:text-xl md:text-3xl font-bold leading-tight'>
                Experience the <br className='hidden sm:inline' /> Heart Of
              </h2>
              <h4
                className='text-base sm:text-2xl md:text-4xl text-green-500 mt-0.5 md:mt-1'
                style={{ fontFamily: "'Alex Brush', cursive" }}
              >
                Bangladesh Tea Culture
              </h4>
              <p className='text-[9px] sm:text-xs md:text-base mt-0.5 md:mt-2 opacity-90 leading-tight'>
                A Perfect Blend of Nature, heritage and luxury hospitality.
              </p>
              <div className='mt-1.5 md:mt-4 flex gap-2'>
                <button className='btn btn-xs sm:btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'>
                  Book Your Stay <ArrowIcon className='text-xs sm:text-xl' />
                </button>
                <button className='btn btn-outline btn-xs sm:btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                  Explore Museum
                </button>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className='absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
            <a
              href='#slide3'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❮
            </a>
            <a
              href='#slide1'
              className='btn btn-circle btn-xs sm:btn-sm md:btn-md'
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className='hidden sm:flex absolute bottom-4 right-16 md:right-24 z-20 bg-white/90 backdrop-blur-xs text-black p-2 rounded-lg shadow-lg items-center gap-2 max-w-[180px] md:max-w-[220px] border border-gray-200/50 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out'>
        <img
          src='/asset/tea-resort-banner.jpg'
          className='w-12 h-12 object-cover rounded-md'
          alt='Mini thumb'
        />
        <div className='flex flex-col min-w-0'>
          <span className='text-[10px] sm:text-xs text-gray-500 line-clamp-2 leading-tight'>
            A unique blend of nature, heritage and luxury in the lap of nature.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
