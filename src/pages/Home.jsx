import { Helmet } from "react-helmet-async";
import About from "../components/home components/About";
import Banner from "../components/home components/Banner";
import FAQs from "../components/home components/FAQs";
import Success from "../components/home components/Success";
import "animate.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Vocab Vault</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Success></Success>
      <FAQs></FAQs>
    </div>
  );
};

export default Home;
