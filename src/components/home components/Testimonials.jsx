import ReactStars from "react-rating-stars-component";
import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Khvicha Kvaratskhelia",
      feedback:
        "Vocab Vault has been a game-changer for my Spanish learning journey. The lessons are interactive and fun!",
      image: "https://i.ibb.co.com/nBQGPFb/Khvicha-Kvaratskhelia-1200.webp",
      rating: 5,
    },
    {
      id: 2,
      name: "Jakub Blaszczykowski",
      feedback:
        "I love how the difficulty increases progressively. It keeps me motivated to improve.",
      image: "https://i.ibb.co.com/d0sDFDX/jakub-bls.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Wojciech Szczęsny",
      feedback:
        "The app's design and simplicity make it enjoyable to learn a new language. Highly recommended!",
      image: "https://i.ibb.co.com/hRy3tBG/sejni.webp",
      rating: 5,
    },
    {
      id: 4,
      name: "Robert Lewandowski",
      feedback:
        "I appreciate the variety of words and contexts provided. This app is very effective for language learners.",
      image: "https://i.ibb.co.com/4pGdSks/lewyy.jpg",
      rating: 4,
    },
  ];

  return (
    <div className="mb-8 py-12 animate__animated animate__backInLeft animate__delay-1s">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Users Say
        </h2>

        <div className="m-6">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-cyan-100 shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4"
              >
                <div className="avatar">
                  <div className="ring-cyan-500 ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={testimonial.image} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  {testimonial.feedback}
                </p>
                <div className="mt-4 flex">
                  <ReactStars
                    isHalf={true}
                    count={5}
                    value={testimonial.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
