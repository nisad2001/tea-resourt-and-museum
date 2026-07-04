import { GiChestnutLeaf } from "react-icons/gi";

const ExperienceBanner = () => {
  return (
    <div className='relative w-full h-[260px] md:h-[400px] overflow-hidden shadow-lg'>
      <img
        src='/asset/tea-garden-experience.jpg'
        alt='Tea Garden Experience'
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:items-start text-center sm:text-left'>
          <h1 className='text-white font-bold text-3xl md:text-5xl tracking-wide drop-shadow-md leading-tight'>
            Our Unique <br className='hidden sm:block' />{" "}
            <span className='text-green-400'>Experiences</span>
          </h1>

          <div className='flex items-center gap-2 mt-3 mb-3 justify-center sm:justify-start'>
            <div className='h-[2px] bg-green-500 w-12 sm:w-24 rounded-full'></div>
            <GiChestnutLeaf className='text-green-400 text-xl md:text-2xl animate-pulse flex-shrink-0' />
            <div className='h-[2px] bg-green-500 w-12 sm:w-16 rounded-full'></div>
          </div>

          <p className='text-gray-200 text-xs sm:text-base md:text-lg max-w-sm sm:max-w-xl leading-relaxed drop-shadow-sm'>
            Immerse yourself in the world of tea and nature, create
            unforgettable memories with our exclusive experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBanner;
