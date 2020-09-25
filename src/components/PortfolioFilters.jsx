import React, { Component } from "react";
import { Formik, useField, Form, Field } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";
import KeywordsMenu from "./KeywordsMenu";
import exportFunction from "../utils/generateCvs";

const CustomSelectInput = ({ label, options, objKey, ...props }) => {
  const [field, meta] = useField(props);
  const arrayOfIndividualOptions = ["Please Select or Clear"];
  options.forEach((option) => {
    // if (!arrayOfIndividualOptions.includes(option[objKey])) {
    arrayOfIndividualOptions.push(option);
    // }
  });
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <Field as="select" {...field} {...props}>
        {arrayOfIndividualOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </Field>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const CustomCheckboxInput = ({ label, name, options, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...props}
                  value={option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </>
  );
};

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const CustomNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="number" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const CustomRangeInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
      >{`${label} ${field.value}`}</label>
      <input type="text" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

class PortfolioFilters extends Component {
  state = { storedKeywordCodes: [], storedValues: [] };
  handleKeywordCodes = (keywordCodes) => {
    this.setState({ storedKeywordCodes: keywordCodes });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { portfolioStaff } = this.props.currentUser;
    // console.log(portfolioStaff.length);
    const filteredArray = portfolioStaff.filter((staff) => {
      return staff.generateCV === true;
    });
    const searchQuery = { ...this.state.storedValues };
    delete searchQuery.GradeLevel;

    console.log(filteredArray);

    filteredArray.map((staff) => {
      console.log(this.props.fullDescProjList.fullProjList);
      console.log(staff);
      return this.props.fullDescProjList
        .fetchProjects(
          staff.StaffID,
          searchQuery,
          this.state.storedKeywordCodes
        )
        .then(() => {
          exportFunction(staff, this.props.fullDescProjList.fullProjList);
        });
    });
  };

  render() {
    return (
      <Formik
        initialValues={{
          includeConfidential: "",
          PercentComplete: 0,
          StartDateAfter: "",
          EndDateBefore: "",
          EndDateAfter: "",
          GradeLevel: "",
        }}
        validationSchema={Yup.object({})}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          this.props.currentUser
            .fetchPortfolioStaff(values, this.state.storedKeywordCodes)
            .then(() => {
              this.setState({ storedValues: values });
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <>
            <Form>
              <h5>Filters</h5>
              <p></p>
              <CustomTextInput
                label="Start Date After"
                name="StartDateAfter"
                type="date"
              />
              <p></p>
              <CustomTextInput
                label="End Date Before"
                name="EndDateBefore"
                type="date"
              />
              <p></p>
              <CustomTextInput
                label="End Date After"
                name="EndDateAfter"
                type="date"
              />
              <p></p>
              <CustomNumberInput
                label="Grade Level"
                name="GradeLevel"
                min="0"
                max="9"
                type="number"
              />
              <p></p>
              <CustomRangeInput
                label="Min Project Completion"
                name="PercentComplete"
                min="0"
                max="100"
                step="5"
                type="range"
              />
              <p></p>
              <CustomSelectInput
                label="Discipline"
                name="DisciplineName"
                id="discipline"
                options={[
                  "Architecture",
                  "BIM",
                  "Building Services - Electrical",
                  "Building Services - Mechanical",
                  "Civil Engineering",
                  "Commercial Leadership and Management",
                  "Data Strategy",
                  "Environmental Consulting",
                  "Fire",
                  "Programme and Project Management",
                  "Public Health and Plumbing Engineering",
                  "Rail",
                  "Software Development",
                  "Structural Engineering",
                ]}
              />
              <p></p>
              <CustomCheckboxInput
                name="includeConfidential"
                label="Include Confidential"
                options={[{ key: "Yes", value: "true" }]}
              />
              {this.props.keywordList.length > 0 && (
                <KeywordsMenu
                  keywordList={this.props.keywordList}
                  handleKeywordCodes={this.handleKeywordCodes}
                />
              )}

              <button type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </Form>
            <button
              type="button"
              onClick={() => {
                this.props.currentUser.clearSearch();
                resetForm();
              }}
            >
              Clear Search
            </button>
            <button onClick={this.handleClick}>Generate CVs</button>
          </>
        )}
      </Formik>
    );
  }
}

export default observer(PortfolioFilters);
