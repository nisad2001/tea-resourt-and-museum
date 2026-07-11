import { motion } from "framer-motion";
import BookAddOnService from "../component/BookAddOnService";
import BookNowBanner from "../component/BookNowBanner";
import BookSelectRoom from "../component/BookSelectRoom";

const BookNow = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <BookNowBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <BookSelectRoom />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <BookAddOnService />
      </motion.div>
    </div>
  );
};

export default BookNow;

// import BookAddOnService from "../component/BookAddOnService";
// import BookNowBanner from "../component/BookNowBanner";
// import BookSelectRoom from "../component/BookSelectRoom";

// const BookNow = () => {
//   return (
//     <div>
//       <BookNowBanner></BookNowBanner>
//       <BookSelectRoom></BookSelectRoom>
//       <BookAddOnService></BookAddOnService>
//     </div>
//   );
// };

// export default BookNow;
