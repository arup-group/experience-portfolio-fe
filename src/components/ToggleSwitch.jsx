import React, { Component } from "react";
import Switch from "react-switch";
import { observer } from "mobx-react";

class ToggleSwitch extends Component {
  state = { checked: true };

  handleChange = (checked) => {
    this.setState({ checked });
    this.props.fullDescProjList.fullProjList[
      this.props.index
    ].toggleProjectVisibility(checked);
  };

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        height={20}
        width={50}
      />
    );
  }
}

export default observer(ToggleSwitch);
