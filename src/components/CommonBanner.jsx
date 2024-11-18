// import slider4 from "../assets/slider4.jpg";
import { useLocation } from "react-router-dom";
const CommonBanner = () => {
  const { pathname } = useLocation();
  //   console.log(pathname);
  return (
    <div className="my-6 rounded-lg bg-cyan-600 p-12">
      <div className="inset-0 flex flex-col items-center justify-center text-center text-white animate__animated animate__fadeInDown">
        {pathname === "/letsLearn" ? (
          <>
            <h2 className="text-4xl lg:text-4xl font-bold mb-4">
              Let’s Learn Spanish
            </h2>
            <p className="text-gray-200 mb-4">
              Unlock your Spanish learning journey with Vocab Vault. Explore a
              wide range of interactive <br /> lessons, quizzes, and exercises
              tailored to help you master the Spanish language.
            </p>
          </>
        ) : pathname === "/tutorials" ? (
          <>
            <h2 className="text-4xl lg:text-4xl font-bold mb-4">
              Watch Tutorials
            </h2>
            <p className="text-gray-200 mb-4">
              Explore a wide range of tutorials on various topics. From beginner
              to advanced, we've got you covered.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl lg:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-200 mb-4">
              Vocab Vault is a platform dedicated to helping you learn Spanish.
              Our interactive lessons, quizzes, and exercises are designed{" "}
              <br /> to make your learning journey enjoyable and effective.
              Whether you're a beginner or <br />
              an advanced learner, we've got you covered.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CommonBanner;
