import React from "react";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/CommonBanner";

const Tutorials = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorials | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>
    </div>
  );
};

export default Tutorials;
