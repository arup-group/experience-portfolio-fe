import React, { Component } from "react";

// React Components
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import ValueStatement from "./ValueStatement";
import AllIndvProjs from "./AllIndvProjs";

import { observer } from "mobx-react";

import { StyledCVPage } from "../styling/styledCVPage";

class PersonalCVPage extends Component {
  render() {
    return (
      <>
        <StyledCVPage>
          <Photo currentUser={this.props.currentUser} />
          <ProfInfo currentUser={this.props.currentUser} />
          <IntroParag currentUser={this.props.currentUser} />
          <ValueStatement currentUser={this.props.currentUser} />
          <AllIndvProjs
            currentUser={this.props.currentUser}
            fullDescProjList={this.props.fullDescProjList}
            fullDescriptionProject={this.props.fullDescriptionProject}
            staffKeywordList={this.props.staffKeywordList}
          />
        </StyledCVPage>
      </>
    );
  }
}

export default observer(PersonalCVPage);
