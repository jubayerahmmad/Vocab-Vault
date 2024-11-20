import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import slider6 from "../../assets/slider6.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      className="rounded-lg my-6 animate__animated animate__fadeInLeft"
      autoPlay={true}
      showArrows={true}
      interval={2200}
      infiniteLoop={true}
    >
      <div>
        <img className="rounded-lg object-cover" src={slider1} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider2} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider3} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider4} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider5} />
      </div>
      <div>
        <img className="rounded-lg object-cover" src={slider6} />
      </div>
    </Carousel>
  );
};

export default Banner;
