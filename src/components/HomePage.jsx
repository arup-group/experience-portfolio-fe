import React from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "@reach/router";

function HomePage() {
  return (
    <div>
      <Header />
      <AboutEP />
      <Link to="/alex"> Personal CV </Link>
      <Footer />
    </div>
  );
}

export default HomePage;
