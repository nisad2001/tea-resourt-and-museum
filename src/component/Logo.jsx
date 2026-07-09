const Logo = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-1 text-center sm:text-left'>
      <img
        className='w-12 h-12 sm:w-14 sm:h-14 object-contain block'
        src='/asset/Tea-resort logo.png'
        alt='Logo'
      />
      <h4 className='hidden sm:block text-xs sm:text-sm md:text-base font-semibold tracking-wide leading-tight'>
        Tea Resort <br className='hidden sm:block' /> and Museum
      </h4>
    </div>
  );
};

export default Logo;
