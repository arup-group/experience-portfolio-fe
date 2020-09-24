import React, { Component } from "react";
import Switch from "react-switch";
import { observer } from "mobx-react";

class PorfolioCVToggle extends Component {
  state = { generateCV: true };

  handleChange = (generateCV) => {
    this.setState({ generateCV });
    this.props.portfolioStaff[this.props.index].toggleGenerateCV(generateCV);

    // const getStaffID = this.props.portfolioStaff[this.props.index].StaffID;

    console.log(this.props.currentUser.portfolioStaff[this.props.index]);
  };

  render() {
    return (
      <label>
        <span>Generate CV</span>
        <Switch onChange={this.handleChange} checked={this.state.generateCV} />
      </label>
    );
  }
}

export default observer(PorfolioCVToggle);
