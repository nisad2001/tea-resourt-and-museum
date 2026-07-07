import EventOccassion from "../component/EventOccassion";
import EventsBanner from "../component/EventsBanner";
import EventUpcoming from "../component/EventUpcoming";
import EventWhyChoose from "../component/EventWhyChoose";

const Events = () => {
  return (
    <div>
      <EventsBanner></EventsBanner>
      <EventOccassion></EventOccassion>
      <EventWhyChoose></EventWhyChoose>
      <EventUpcoming></EventUpcoming>
    </div>
  );
};

export default Events;
