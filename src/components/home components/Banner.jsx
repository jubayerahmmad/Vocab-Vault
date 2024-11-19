import { Carousel } from "react-responsive-carousel";
import slider01 from "../../assets/slider1.png";
import slider1 from "../../assets/slider2.png";
import slider2 from "../../assets/slider3.png";
import slider5 from "../../assets/slider4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      className="rounded-lg my-6 animate__animated animate__fadeInLeft"
      autoPlay={true}
      showArrows={true}
      interval={1500}
    >
      <div>
        <img className="rounded-lg object-cover" src={slider01} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider1} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider2} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider5} />
      </div>
    </Carousel>
  );
};

export default Banner;
