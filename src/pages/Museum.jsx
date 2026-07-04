import { Link } from "react-router-dom";

const Museum = () => {
  return (
    <div className='w-full'>
      {/* Title */}
      <h1 className='text-green-900 font-bold text-6xl text-center my-4'>
        This is the museum
      </h1>

      {/* Image Container - Full width, fixed height */}
      <div className='w-full'>
        <img
          src='/asset/museum.jpg'
          alt='Museum'
          className='w-full h-[350px] object-cover shadow-md'
        />
      </div>

      {/* Content Section - Below the image */}
      <div className='flex flex-col items-center justify-center my-8 gap-4'>
        {/* Text */}
        <p className='text-gray-800 text-2xl font-semibold'>
          Welcome to the Museum Gallery
        </p>

        {/* Buttons Links */}
        <div className='flex gap-4'>
          {/* Home Button */}
          <Link
            to='/'
            className='px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md border border-gray-300 hover:bg-green-600 hover:text-white hover:border-transparent transition duration-200'
          >
            Home
          </Link>

          {/* Museum Button */}
          <button className='px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition duration-200'>
            Museum
          </button>
        </div>
      </div>
    </div>
  );
};

export default Museum;
