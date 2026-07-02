const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img
        className='w-16 h-16 sm:w-20 md:w-24 lg:w-16 object-contain block'
        src='/asset/Tea-resort logo.png'
        alt='Logo'
      />
      <h4 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold'>
        Tea Resort and Museum
      </h4>
    </div>
  );
};

export default Logo;
