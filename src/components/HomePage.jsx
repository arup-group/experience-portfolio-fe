import React from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "@reach/router";
import { observer } from "mobx-react";

function HomePage(props) {
  return (
    <div>
      <Header currentUser={props.currentUser} />
      <AboutEP />
      <Link to={`/alex`}> Personal CV </Link>
      <Footer />
    </div>
  );
}

export default observer(HomePage);
