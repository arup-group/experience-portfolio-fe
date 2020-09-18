import React, { Component } from "react";

import { observer } from "mobx-react";

class ProjList extends Component {
  render() {
    const arrayProjects = this.props.fullDescProjList.fullProjList;
    return (
      <div className="projectsList">
        <ul></ul>
      </div>
    );
  }
}

export default observer(ProjList);
