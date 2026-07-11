import { motion } from "framer-motion";
import EventOccassion from "../component/EventOccassion";
import EventsBanner from "../component/EventsBanner";
import EventUpcoming from "../component/EventUpcoming";
import EventWhyChoose from "../component/EventWhyChoose";

const Events = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <EventsBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <EventOccassion />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <EventWhyChoose />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <EventUpcoming />
      </motion.div>
    </div>
  );
};

export default Events;
// import EventOccassion from "../component/EventOccassion";
// import EventsBanner from "../component/EventsBanner";
// import EventUpcoming from "../component/EventUpcoming";
// import EventWhyChoose from "../component/EventWhyChoose";

// const Events = () => {
//   return (
//     <div>
//       <EventsBanner></EventsBanner>
//       <EventOccassion></EventOccassion>
//       <EventWhyChoose></EventWhyChoose>
//       <EventUpcoming></EventUpcoming>
//     </div>
//   );
// };

// export default Events;
