import React, { Component } from "react";

// import KeywordsMenu from "./KeywordsMenu";

import { observer } from "mobx-react";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioTable from "./PortfolioTable";

class PortfolioPage extends Component {
  state = { fetchedKeywords: false };

  componentDidMount() {
    this.props.portfolioKeywordList.fetchPortfolioKeywords().then(() => {
      this.setState({ fetchedKeywords: true });
    });
  }

  render() {
    const { portfolioStaff, projects } = this.props.currentUser;
    const { keywordList } = this.props.portfolioKeywordList;
    return (
      <>
        <div className="PortfolioPage">
          Portfolio Page
          {this.state.fetchedKeywords === true && (
            <>
              <section>
                <PortfolioFilters
                  currentUser={this.props.currentUser}
                  fullDescProjList={this.props.fullDescProjList}
                  keywordList={keywordList}
                />
                <p>
                  Staff Found: {portfolioStaff.length} Projects Found:
                  {projects.length}
                </p>
                {/* <KeywordsMenu currentUser={this.props.currentUser} /> */}
              </section>
              <section>
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
            </>
          )}
        </div>
      </>
    );
  }
}

export default observer(PortfolioPage);
