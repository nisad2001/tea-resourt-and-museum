import { motion } from "framer-motion";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import VisitPlan from "../../component/VisitPlan";
import Welocome from "../../component/Welocome";
import WhyChooseUs from "../../component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Banner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Welocome />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VisitPlan />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;

// import Banner from "../../component/Banner";
// import Footer from "../../component/Footer";
// import VisitPlan from "../../component/VisitPlan";
// import Welocome from "../../component/Welocome";
// import WhyChooseUs from "../../component/WhyChooseUs";

// const Home = () => {
//   return (
//     <div>
//       <Banner></Banner>
//       <Welocome></Welocome>
//       <WhyChooseUs></WhyChooseUs>
//       <VisitPlan></VisitPlan>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Home;
