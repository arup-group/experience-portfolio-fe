import React, { Component } from "react";
import { observer } from "mobx-react";

class PortfolioTable extends Component {
  renderTableHeader = (headersArray) => {
    return headersArray.map((header) => {
      return <th key={header}> {header} </th>;
    });
  };

  renderTableData = (portfolioStaffArray) => {
    return portfolioStaffArray.map((staff) => {
      const { StaffName, ProjectCount, TotalHrs } = staff;
      return (
        <tr key={StaffName}>
          <td>{StaffName} </td>
          <td>{ProjectCount} </td>
          <td>{TotalHrs} </td>
        </tr>
      );
    });
  };
  render() {
    const headers = ["Staff Name", " Project Count", "Total hours"];
    const { portfolioStaff } = this.props;

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
