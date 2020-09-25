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
      <h1>Welcome to the Arup Experience Portfolio</h1>
      <br />

      {currentUser.length !== 0 && (
        <Link to={`/${currentUser[0].StaffID}`}>
          <button>Generate a Personal CV</button>
        </Link>
      )}
      {currentUser.length !== 0 && (
        <Link to={`/portfolio`}>
          <button>Generate a Team Portfolio</button>
        </Link>
      )}
      <AboutEP />
      <br />
    </StyledSection>
  );
}

export default observer(HomePage);
