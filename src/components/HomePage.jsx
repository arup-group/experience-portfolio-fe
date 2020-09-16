import React from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "@reach/router";

const HomePage = ({ staffMeta }) => {
  if (staffMeta) {
    const StaffID = staffMeta.StaffID;
  }
  return (
    <div>
      <Header staffMeta={staffMeta} />
      <AboutEP />
      <Link to="/"> Personal CV </Link>
      <Footer />
    </div>
  );
};

export default HomePage;
