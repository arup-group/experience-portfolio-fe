import React from "react";
import AboutEP from "./AboutEP";
import { Link } from "@reach/router";
import { observer } from "mobx-react";
import { StyledSection } from "../styling/styledGlobal";

// The instance of MsalAuthProvider defined in a separate file
import { authProvider } from "../api/auth-provider";

// External utils
import { AzureAD } from "react-aad-msal";

function HomePage(props) {
  const { currentUser } = props.currentUser;
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      {({ login, logout, authenticationState }) => {
        console.log(login, logout, authenticationState);
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
      }}
    </AzureAD>
  );
}

export default observer(HomePage);
