import DiningBanner from "../component/DiningBanner";
import DiningBottom from "../component/DiningBottom";
import DiningMenu from "../component/DiningMenu";
import DiningSignatureDishes from "../component/DiningSignatureDishes";

const Dining = () => {
  return (
    <div>
      <DiningBanner></DiningBanner>
      <DiningMenu></DiningMenu>
      <DiningSignatureDishes></DiningSignatureDishes>
      <DiningBottom></DiningBottom>
    </div>
  );
};

export default Dining;
