import React, { Component } from "react";
import { observer } from "mobx-react";
import PorfolioCVToggle from "./PorfolioCVToggle";

class PortfolioTable extends Component {
  renderTableHeader = (headersArray) => {
    return headersArray.map((header) => {
      return <th key={header}> {header} </th>;
    });
  };

  renderTableData = (portfolioStaffArray) => {
    const { currentUser } = this.props.currentUser;
    return portfolioStaffArray.map((staff, index) => {
      const { StaffName, ProjectCount, TotalHrs } = staff;
      return (
        <tr key={StaffName}>
          <td>{StaffName} </td>
          <td>{ProjectCount} </td>
          <td>{TotalHrs} </td>
          <td>
            {" "}
            <PorfolioCVToggle
              portfolioStaff={portfolioStaffArray}
              index={index}
              currentUser={this.props.currentUser}
            />{" "}
          </td>
        </tr>
      );
    });
  };
  render() {
    const headers = [
      "Staff Name",
      " Project Count",
      "Total hours",
      "Create CV",
    ];
    const { portfolioStaff } = this.props;
    console.log(portfolioStaff);

    return (
      <div>
        <h3> Results table</h3>
        <table id="staff">
          <tbody>
            <tr>{this.renderTableHeader(headers)}</tr>
            {this.renderTableData(portfolioStaff)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default observer(PortfolioTable);
