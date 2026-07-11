import { motion } from "framer-motion";
import AboutBanner from "../component/AboutBanner";
import AboutBottom from "../component/AboutBottom";
import AboutNature from "../component/AboutNature";

const AboutUs = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AboutNature />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <AboutBottom />
      </motion.div>
    </div>
  );
};

export default AboutUs;

// import AboutBanner from "../component/AboutBanner";
// import AboutBottom from "../component/AboutBottom";
// import AboutNature from "../component/AboutNature";

// const AboutUs = () => {
//   return (
//     <div>
//       <AboutBanner></AboutBanner>
//       <AboutNature></AboutNature>
//       <AboutBottom></AboutBottom>
//     </div>
//   );
// };

// export default AboutUs;
