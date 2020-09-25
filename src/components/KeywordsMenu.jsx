import React, { Component } from "react";
import Select from "react-select";

import { observer } from "mobx-react";

class KeywordsMenu extends Component {
  state = {
    initialKeywordGroupName: [],
    storedKeywordGroupName: [],
    storedKeywords: [],
    initialKeywordCodes: [],
    storedKeywordCodes: [],
  };
  componentDidMount() {
    const { keywordList } = this.props;
    const initialKGN = keywordList.map((keyword) => {
      const valueAndLabel = Object.values(keyword)[0].KeywordGroupName;
      const kwValueAndLabel = Object.values(keyword)[0].Keywords;
      const keywordCodeValueAndLabel = Object.values(keyword)[0].KeywordCodes;
      return {
        value: valueAndLabel,
        label: valueAndLabel,
        isFixed: true,
        keywords: kwValueAndLabel.map((keyword, index) => {
          return {
            value: keyword,
            label: keyword,
            isFixed: true,
            keywordCode: keywordCodeValueAndLabel[index],
          };
        }),
      };
    });
    this.setState({
      initialKeywordGroupName: initialKGN,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.storedKeywordGroupName.length !==
      prevState.storedKeywordGroupName.length
    ) {
      this.setState({ storedKeywords: this.updateStoredKeyword() });
    }
    if (
      this.state.initialKeywordCodes.length !==
      prevState.initialKeywordCodes.length
    ) {
      this.state.initialKeywordCodes.forEach(({ keywordCode }) => {
        this.setState({ storedKeywordCodes: this.updateSotredKeywordCode() });
      });
    }
    if (
      this.state.storedKeywordCodes.length !==
      prevState.storedKeywordCodes.length
    ) {
      this.props.handleKeywordCodes(this.state.storedKeywordCodes);
    }
  }
  updateStoredKeyword = () => {
    const storageKeywords = [];
    this.state.storedKeywordGroupName.forEach((storedKeywordGroupName) => {
      const { keywords } = storedKeywordGroupName;
      storageKeywords.push(...keywords);
    });
    return storageKeywords;
  };
  updateSotredKeywordCode = () => {
    const storageKeywordCodes = [];
    this.state.initialKeywordCodes.forEach((storedKeywordCode) => {
      const { keywordCode } = storedKeywordCode;
      storageKeywordCodes.push(keywordCode);
    });
    return storageKeywordCodes;
  };
  render() {
    console.log(this.state.initialKeywordCodes);
    // if (this.state.initialKeywordGroupName.length < 1) return null;
    return (
      <>
        <Select
          name="KeywordGroupName"
          closeMenuOnSelect={false}
          isMulti
          onChange={(options) => {
            if (options !== null) {
              this.setState({ storedKeywordGroupName: options });
            } else {
              this.setState({ initialKeywordGroupName: [] });
            }
          }}
          options={this.state.initialKeywordGroupName}
        />
        {this.state.storedKeywordGroupName.length > 0 && (
          <div>
            Then select keywords:
            <Select
              name="Keywords"
              closeMenuOnSelect={false}
              isMulti
              onChange={(options) => {
                if (options !== null) {
                  this.setState({ initialKeywordCodes: options });
                }
              }}
              options={this.state.storedKeywords}
            />
          </div>
        )}
      </>
    );
  }
}
export default observer(KeywordsMenu);
