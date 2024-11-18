import { Link } from "react-router-dom";
import slider from "../../assets/slider.jpg";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider5 from "../../assets/slider5.jpg";
// import slider4 from "../../assets/slider4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl mt-8">
      <div id="slide1" className="carousel-item relative w-full group">
        <div className="relative w-full overflow-hidden">
          <img
            src={slider}
            className="w-full object-cover h-[450px] lg:h-[800px] transition-transform duration-1000 group-hover:scale-105"
            alt="Slider Image"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-1000 group-hover:bg-opacity-70"></div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle text-cyan-500 text-xl">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle text-cyan-500 text-xl">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full group">
        <div className="relative w-full overflow-hidden">
          <img
            src={slider1}
            className="w-full object-cover h-[450px] lg:h-[800px] transition-transform duration-1000 group-hover:scale-105"
            alt="Slider Image"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-1000 group-hover:bg-opacity-70"></div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle text-cyan-500 text-xl">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle text-cyan-500 text-xl">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full group">
        <div className="relative w-full overflow-hidden">
          <img
            src={slider2}
            className="w-full object-cover h-[450px] lg:h-[800px] transition-transform duration-1000 group-hover:scale-105"
            alt="Slider Image"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-1000 group-hover:bg-opacity-70"></div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle text-cyan-500 text-xl">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle text-cyan-500 text-xl">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full group">
        <div className="relative w-full overflow-hidden">
          <img
            src={slider5}
            className="w-full object-cover h-[450px] lg:h-[800px] transition-transform duration-1000 group-hover:scale-105"
            alt="Slider Image"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-1000 group-hover:bg-opacity-70"></div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle text-cyan-500 text-xl">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle text-cyan-500 text-xl">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
