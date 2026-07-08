import {
  MdOutlineConfirmationNumber,
  MdOutlineFreeCancellation,
  MdOutlinePayment,
} from "react-icons/md";
import { PiHeadset } from "react-icons/pi";

const BookAddOnService = () => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='border border-gray-200 rounded-2xl p-6 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform duration-300'>
          <h3 className='text-2xl font-bold mb-4'>
            3. Add-on Service (Optional)
          </h3>
          <div className='space-y-3'>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-2'>
                <input type='checkbox' className='accent-green-900' /> Breakfast
                (per person)
              </p>
              <p>BDT 800</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-2'>
                <input type='checkbox' className='accent-green-900' /> Airport
                Transfer (one way)
              </p>
              <p>BDT 1500</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-2'>
                <input type='checkbox' className='accent-green-900' /> Tea
                Garden Tour
              </p>
              <p>BDT 700</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-2'>
                <input type='checkbox' className='accent-green-900' /> Museum
                Garden Tour
              </p>
              <p>BDT 600</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='flex items-center gap-2'>
                <input type='checkbox' className='accent-green-900' />
                Extra Bed
              </p>
              <p>BDT 1200</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border border-gray-200 rounded-2xl p-6 shadow-sm cursor-pointer hover:scale-[1.02] transition-transform duration-300'>
          <h3 className='text-2xl font-bold mb-4'>4. Booking Summary</h3>
          <div className='space-y-3 mb-6'>
            <div className='flex justify-between'>
              <p>Check-in</p> <p>-</p>
            </div>
            <div className='flex justify-between'>
              <p>Check-Out</p> <p>-</p>
            </div>
            <div className='flex justify-between'>
              <p>Guest</p> <p>2 Adults</p>
            </div>
            <div className='flex justify-between'>
              <p>Room</p> <p>-</p>
            </div>
            <div className='flex justify-between'>
              <p>Add-ons</p> <p>-</p>
            </div>
          </div>
          <div className='w-full border-t border-gray-300 my-4'></div>
          <div className='flex justify-between mb-4'>
            <p className='font-bold'>Total Amount</p>
            <p className='text-green-900 text-2xl font-bold'>BDT 0</p>
          </div>
          <button className='bg-green-900 rounded-lg w-full p-3 text-white font-semibold hover:bg-green-800 transition'>
            Proceed To Booking
          </button>
        </div>

        {/* Card 3 */}
        <div className='border border-gray-200 rounded-2xl p-6 shadow-sm space-y-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300'>
          <div className='flex items-center gap-4'>
            <MdOutlineFreeCancellation className='w-10 h-10 text-green-600 flex-shrink-0' />
            <div>
              <h5 className='font-bold'>Free Cancellation</h5>
              <p className='text-sm text-gray-600'>
                Cancel free upto 48 hours before Check-in
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <MdOutlinePayment className='w-10 h-10 text-green-600 flex-shrink-0' />
            <div>
              <h5 className='font-bold'>Secure Payment</h5>
              <p className='text-sm text-gray-600'>
                Your payment information is safe with us
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <MdOutlineConfirmationNumber className='w-10 h-10 text-green-600 flex-shrink-0' />
            <div>
              <h5 className='font-bold'>Instant Confirmation</h5>
              <p className='text-sm text-gray-600'>
                You'll receive instant booking confirmation
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <PiHeadset className='w-10 h-10 text-green-600 flex-shrink-0' />
            <div>
              <h5 className='font-bold'>24/7 Support</h5>
              <p className='text-sm text-gray-600'>
                We are here to help you anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAddOnService;
