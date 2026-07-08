import BookAddOnService from "../component/BookAddOnService";
import BookNowBanner from "../component/BookNowBanner";
import BookSelectRoom from "../component/BookSelectRoom";

const BookNow = () => {
  return (
    <div>
      <BookNowBanner></BookNowBanner>
      <BookSelectRoom></BookSelectRoom>
      <BookAddOnService></BookAddOnService>
    </div>
  );
};

export default BookNow;
