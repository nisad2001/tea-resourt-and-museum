import { GiChestnutLeaf } from "react-icons/gi";

const DiningSignatureDishes = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex gap-2 items-center justify-center mb-10'>
        <GiChestnutLeaf className='text-green-600 text-xl animate-pulse' />
        <h1 className='text-3xl sm:text-4xl font-bold text-green-900'>
          Our Signature Dishes
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dining-traditional.jpg'
              alt='Traditional Thali'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>Traditional Thali</h4>
            <p className='text-gray-600 text-sm'>
              A delightful combo of village style.
            </p>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dinign-chicken-biriyani.jpg'
              alt='Chicken Biriyani'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>Chicken Biriyani</h4>
            <p className='text-gray-600 text-sm'>
              Aromatic biriyani inspired by flavor.
            </p>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dining-premium-tea.jpg'
              alt='Premium Tea'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>Premium Tea</h4>
            <p className='text-gray-600 text-sm'>
              Finest teas from our estate.
            </p>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dining-hilsha-fish.jpg'
              alt='Hilsha Fish'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>Hilsha Fish</h4>
            <p className='text-gray-600 text-sm'>
              The pride of Bangladesh, fresh.
            </p>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dining-pudding.jpg'
              alt='Pudding'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>Nulen Gur Pudding</h4>
            <p className='text-gray-600 text-sm'>Traditional sweet treat.</p>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105'>
          <figure>
            <img
              src='/asset/dining-green-salad.jpg'
              alt='Green Salad'
              className='rounded-xl h-48 w-full object-cover'
            />
          </figure>
          <div className='card-body items-center text-center p-4'>
            <h4 className='card-title text-lg font-bold'>
              Healthy Green Salad
            </h4>
            <p className='text-gray-600 text-sm'>
              Fresh organic nutritious salad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningSignatureDishes;
