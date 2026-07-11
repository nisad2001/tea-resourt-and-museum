import { motion } from "framer-motion";
import ExperienceBanner from "../component/ExperienceBanner";
import ExperienceCards from "../component/ExperienceCards";
import ExperienceCherish from "../component/ExperienceCherish";

const Experience = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ExperienceBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ExperienceCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ExperienceCherish />
      </motion.div>
    </div>
  );
};

export default Experience;

// import ExperienceBanner from "../component/ExperienceBanner";
// import ExperienceCards from "../component/ExperienceCards";
// import ExperienceCherish from "../component/ExperienceCherish";

// const Experience = () => {
//   return (
//     <div>
//       <ExperienceBanner></ExperienceBanner>
//       <ExperienceCards></ExperienceCards>
//       <ExperienceCherish></ExperienceCherish>
//     </div>
//   );
// };

// export default Experience;
