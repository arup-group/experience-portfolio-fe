import React, { Component } from "react";

// import KeywordsMenu from "./KeywordsMenu";

import { observer } from "mobx-react";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioTable from "./PortfolioTable";

class PortfolioPage extends Component {
  render() {
    const { portfolioStaff, projects } = this.props.currentUser;
    console.log(portfolioStaff);
    return (
      <>
        <div className="PortfolioPage">
          Portfolio Page
          <section>
            <PortfolioFilters
              currentUser={this.props.currentUser}
              fullDescProjList={this.props.fullDescProjList}
            />
            {/* <KeywordsMenu currentUser={this.props.currentUser} /> */}
          </section>
          <section>
            {/* <ul>
              {portfolioStaff.length > 0 &&
                portfolioStaff.map((staff) => {
                  return (
                    <li key={staff.StaffID}>
                      {staff.StaffName} Project count: {staff.ProjectCount}{" "}
                      Total hours: {staff.TotalHrs}
                    </li>
                  );
                })}
            </ul> */}
            <PortfolioTable
              portfolioStaff={portfolioStaff}
              currentUser={this.props.currentUser}
            />
            <ul>
              {projects.length > 0 &&
                projects.map((project) => {
                  return <li key={project}>{project}</li>;
                })}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default observer(PortfolioPage);
