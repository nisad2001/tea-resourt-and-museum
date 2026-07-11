import { motion } from "framer-motion";
import StayBanner from "../component/StayBanner";
import StayBottom from "../component/StayBottom";
import StayComfort from "../component/StayComfort";

const Stay = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <StayBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <StayComfort />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <StayBottom />
      </motion.div>
    </div>
  );
};

export default Stay;

// import StayBanner from "../component/StayBanner";
// import StayBottom from "../component/StayBottom";
// import StayComfort from "../component/StayComfort";

// const Stay = () => {
//   return (
//     <div>
//       <StayBanner></StayBanner>
//       <StayComfort></StayComfort>
//       <StayBottom></StayBottom>
//     </div>
//   );
// };

// export default Stay;
