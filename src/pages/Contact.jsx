import { motion } from "framer-motion";
import ContactBanner from "../component/ContactBanner";
import ContactGetInTouch from "../component/ContactGetInTouch";
import ContactServices from "../component/ContactServices";

const Contact = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ContactGetInTouch />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ContactServices />
      </motion.div>
    </div>
  );
};

export default Contact;

// import ContactBanner from "../component/ContactBanner";
// import ContactGetInTouch from "../component/ContactGetInTouch";
// import ContactServices from "../component/ContactServices";

// const Contact = () => {
//   return (
//     <div>
//       <ContactBanner></ContactBanner>
//       <ContactGetInTouch></ContactGetInTouch>
//       <ContactServices></ContactServices>
//     </div>
//   );
// };

// export default Contact;
