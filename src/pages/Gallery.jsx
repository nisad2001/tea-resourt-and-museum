import { motion } from "framer-motion";
import GalleryBanner from "../component/GalleryBanner";
import GalleryImages from "../component/GalleryImages";

const Gallery = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GalleryBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GalleryImages />
      </motion.div>
    </div>
  );
};

export default Gallery;

// import GalleryBanner from "../component/GalleryBanner";
// import GalleryImages from "../component/GalleryImages";

// const Gallery = () => {
//   return (
//     <div>
//       <GalleryBanner></GalleryBanner>
//       <GalleryImages></GalleryImages>
//     </div>
//   );
// };

// export default Gallery;
