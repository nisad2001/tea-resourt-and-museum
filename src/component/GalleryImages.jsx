const GalleryImages = () => {
  return (
    <div className='my-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 mb-10'>
        <button className='px-5 py-2 rounded-sm font-medium bg-green-600 text-white border-green-600 shadow-md'>
          All
        </button>
        <button className='px-5 py-2 rounded-sm font-medium bg-white text-gray-600 border border-gray-200 hover:text-green-600 hover:border-green-600'>
          Resort
        </button>
        <button className='px-5 py-2 rounded-sm font-medium bg-white text-gray-600 border border-gray-200 hover:text-green-600 hover:border-green-600'>
          Museum
        </button>
        <button className='px-5 py-2 rounded-sm font-medium bg-white text-gray-600 border border-gray-200 hover:text-green-600 hover:border-green-600'>
          Nature
        </button>
        <button className='px-5 py-2 rounded-sm font-medium bg-white text-gray-600 border border-gray-200 hover:text-green-600 hover:border-green-600'>
          Dining
        </button>
        <button className='px-5 py-2 rounded-sm font-medium bg-white text-gray-600 border border-gray-200 hover:text-green-600 hover:border-green-600'>
          Events
        </button>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/about-tea-resort.jpg'
            alt='Gallery 1'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experienc-tea-tasting.jpg'
            alt='Gallery 2'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/stay-villa.jpg'
            alt='Gallery 3'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-1.jpg'
            alt='Gallery 4'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-2.jpg'
            alt='Gallery 5'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-3.jpg'
            alt='Gallery 6'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-4.jpg'
            alt='Gallery 7'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-5.jpg'
            alt='Gallery 8'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='overflow-hidden rounded-xl shadow-sm cursor-pointer'>
          <img
            src='/asset/experience-cherish-6.jpg'
            alt='Gallery 9'
            className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
