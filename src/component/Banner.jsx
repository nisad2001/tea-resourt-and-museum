import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

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
    <div className='relative '>
      <div className='carousel w-full'>
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className='carousel-item relative w-full'
          >
            <img
              src='/asset/tea-resort-banner.jpg'
              className='w-full h-42 sm:h-[220px] md:h-66 lg:h-75 object-cover'
              alt={slide.alt}
            />

            {/* Text Overlay - Responsive alignment */}
            <div className='absolute  flex items-center h-full w-full top-0 text-white px-6 sm:px-10 lg:px-20'>
              <div className='w-full flex flex-col items-center lg:items-start text-center lg:text-left'>
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
                  <p className='text-sm sm:text-base mt-1 opacity-90 leading-relaxed'>
                    A Perfect Blend of Nature, heritage and <br /> luxury
                    hospitality.
                  </p>

                  {/* Buttons Container - Centered on mobile, left on large */}
                  <div className='mt-2 flex flex-wrap justify-center lg:justify-start gap-2'>
                    <button className='btn btn-sm md:btn-md text-white bg-green-600 border-none uppercase hover:bg-green-700'>
                      Book Your Stay <ArrowIcon className='text-lg' />
                    </button>
                    <button className='btn btn-outline btn-sm md:btn-md text-white border-white uppercase hover:bg-white hover:text-black'>
                      Explore Museum
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className='absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10'>
              <a
                href={`#${slide.prev}`}
                className='btn btn-circle btn-sm md:btn-md'
              >
                ❮
              </a>
              <a
                href={`#${slide.next}`}
                className='btn btn-circle btn-sm md:btn-md'
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Thumbnail - Hidden on small screens */}
      <div className='hidden sm:flex absolute bottom-4 right-16 md:right-24 z-20 bg-white/90 backdrop-blur-xs text-black p-2 rounded-lg shadow-lg items-center gap-2 max-w-[220px] border border-gray-200/50 cursor-pointer'>
        <img
          src='/asset/tea-resort-banner.jpg'
          className='w-12 h-12 object-cover rounded-md'
          alt='Mini thumb'
        />
        <p className='text-sm text-gray-700 leading-tight line-clamp-2'>
          A unique blend of nature, heritage and luxury.
        </p>
      </div>
    </div>
  );
};

export default Banner;
