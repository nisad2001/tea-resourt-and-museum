import Banner from "../../component/Banner";
import VisitPlan from "../../component/VisitPlan";
import Welocome from "../../component/Welocome";
import WhyChooseUs from "../../component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welocome></Welocome>
      <WhyChooseUs></WhyChooseUs>
      <VisitPlan></VisitPlan>
    </div>
  );
};

export default Home;
