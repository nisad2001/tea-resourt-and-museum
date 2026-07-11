import { motion } from "framer-motion";
import DiningBanner from "../component/DiningBanner";
import DiningBottom from "../component/DiningBottom";
import DiningMenu from "../component/DiningMenu";
import DiningSignatureDishes from "../component/DiningSignatureDishes";

const Dining = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <DiningBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DiningMenu />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <DiningSignatureDishes />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <DiningBottom />
      </motion.div>
    </div>
  );
};

export default Dining;

// import DiningBanner from "../component/DiningBanner";
// import DiningBottom from "../component/DiningBottom";
// import DiningMenu from "../component/DiningMenu";
// import DiningSignatureDishes from "../component/DiningSignatureDishes";

// const Dining = () => {
//   return (
//     <div>
//       <DiningBanner></DiningBanner>
//       <DiningMenu></DiningMenu>
//       <DiningSignatureDishes></DiningSignatureDishes>
//       <DiningBottom></DiningBottom>
//     </div>
//   );
// };

// export default Dining;
