import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/CommonBanner";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>
    </div>
  );
};

export default AboutUs;
