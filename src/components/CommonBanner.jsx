import me from "../assets/me.jpg";
import { useLocation } from "react-router-dom";
const CommonBanner = () => {
  const { pathname } = useLocation();

  return (
    <div className="my-6 rounded-lg bg-cyan-600 p-12">
      <div className="inset-0 flex flex-col items-center justify-center text-center text-white animate__animated animate__fadeInDown">
        {pathname === "/letsLearn" ? (
          <>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Let’s Learn Spanish
            </h2>
            <p className="text-xs lg:text-sm text-gray-200 mb-4">
              Unlock your Spanish learning journey with Vocab Vault. Explore a
              wide range of interactive <br /> lessons, quizzes, and exercises
              tailored to help you master the Spanish language.
            </p>
          </>
        ) : pathname === "/tutorials" ? (
          <>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Watch Tutorials
            </h2>
            <p className="text-xs lg:text-sm text-gray-200 mb-4">
              Explore a wide range of tutorials on various topics. From beginner
              to advanced, we've got you covered.
            </p>
          </>
        ) : (
          <>
            <div className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl text-black">
              <figure>
                <img
                  className="h-72 lg:h-96 rounded-2xl lg:rounded-none object-cover"
                  src={me}
                  alt=""
                />
              </figure>
              <div className="card-body text-left">
                <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                  About Me
                </h2>
                <p className="text-xs lg:text-base text-gray-700 mb-4 max-w-3xl tracking-widest">
                  Assalamu Alaikum, I’m <strong>Zubayer Ahmmad</strong>, a
                  21-year-old student from Bangladesh with a strong passion for
                  front-end web development.My journey into the tech world
                  started with a deep curiosity to create interactive and
                  user-friendly web applications. Currently, I am learning Front
                  end technologies, and exploring Back-end technologies to
                  broaden my skill set.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommonBanner;
