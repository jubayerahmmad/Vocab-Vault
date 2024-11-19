import homeAbout from "../../assets/home-aboutus.jpg";

const About = () => {
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center ">About Us</h1>
      <div className="p-6 rounded-lg my-8 border-2 space-y-4 lg:flex items-center gap-6 animate__animated animate__fadeInDown">
        <div className="">
          <img
            className="rounded-lg animate__animated animate__fadeInLeft animate__delay-1s"
            src={homeAbout}
            alt=""
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-4xl font-bold animate__animated animate__fadeInDown animate__delay-1s">
            Our Mission
          </h3>
          <p className="animate__animated animate__fadeInDown animate__delay-1s">
            At <strong className="text-cyan-500">Vocab Vault</strong>, our
            mission is to make language learning engaging, accessible, and
            effective. We believe that vocabulary is the cornerstone of
            mastering any language, and we are dedicated to helping learners
            expand their word bank in Spanish while keeping the process fun and
            interactive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
