import React from "react";
import AboutEP from "./AboutEP";
import Footer from "./Footer";
import { Link } from "@reach/router";
import { observer } from "mobx-react";
import { StyledSection } from "../styling/styledGlobal";

function HomePage(props) {
  const { currentUser } = props.currentUser;
  return (
    <StyledSection>
      <AboutEP />
      {currentUser.length !== 0 && (
        <Link to={`/${currentUser[0].StaffID}`}> Personal CV </Link>
      )}
      <br />
      {currentUser.length !== 0 && (
        <Link to={`/portfolio`}> Team Portfolio </Link>
      )}
      <Footer />
    </StyledSection>
  );
}

export default observer(HomePage);
