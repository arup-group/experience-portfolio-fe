import React, { Component } from "react";
import { observer } from "mobx-react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import ToggleSwitch from "./ToggleSwitch";

import EditingToggle from "./EditingToggle";
import { StyledProjectCard } from "../styling/styledCVPage";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <textarea cols="60" rows="9" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

class ProjectCard extends Component {
  state = {
    isEditingScopeOfWorks: false,
    isEditingExperience: false,
    optimisticExperience: this.props.project.experience,
    optimisticScopeOfWorks: this.props.project.ScopeOfWorks,
    optimisticIndex: 0,
    wasUpdated: false,
  };

  handleEditingScopeOfWorks = () => {
    this.setState((currentState) => {
      return {
        isEditingScopeOfWorks: !currentState.isEditingScopeOfWorks,
      };
    });
  };
  handleEditingExperience = () => {
    this.setState((currentState) => {
      return {
        isEditingExperience: !currentState.isEditingExperience,
      };
    });
  };

  handleClickPrevious = (event) => {
    let counter = this.state.optimisticIndex;
    if (counter >= 1 && counter <= this.state.optimisticScopeOfWorks.length - 1)
      counter = counter - 1;
    this.setState({ optimisticIndex: counter });
    this.props.fullDescProjList.fullProjList[this.props.index].updateScopeIndex(
      counter
    );
  };

  handleClickNext = (event) => {
    let counter = this.state.optimisticIndex;
    if (counter < this.state.optimisticScopeOfWorks.length - 1)
      counter = counter + 1;
    this.setState({ optimisticIndex: counter });
    this.props.fullDescProjList.fullProjList[this.props.index].updateScopeIndex(
      counter
    );
  };

  render() {
    const {
      JobNameLong,
      ScopeOfWorks,
      Town,
      EndDate,
      StartDate,
      ProjectCode,
      experience,
      CountryName,
    } = this.props.project;

    const {
      optimisticExperience,
      optimisticScopeOfWorks,
      optimisticIndex,
    } = this.state;

    return (
      <StyledProjectCard
        key={this.props.key}
        // key={this.props.key}
        // draggableId={`${this.props.id}`}
        // index={this.props.index}
        // {...this.props.provided.draggableProps}
        // {...this.props.provided.dragHandleProps}
        // ref={this.props.provided.innerRef}
      >
        {/* {(provided) => ( */}
        <h3>{JobNameLong}</h3>
        <p className="switch">
          <ToggleSwitch
            id={this.props.id}
            index={this.props.index}
            fullDescProjList={this.props.fullDescProjList}
          />
        </p>
        <h5>
          {Town}, {CountryName}
        </h5>
        <h6> Start: {StartDate.slice(0, 10)}</h6>
        <h6> Completion: {EndDate.slice(0, 10)}</h6>
        <p></p>
        <p></p>
        <h5>
          Project Scope
          <EditingToggle
            isEditing={this.state.isEditingScopeOfWorks}
            handleEditing={this.handleEditingScopeOfWorks}
          />
        </h5>
        <button
          onClick={this.handleClickPrevious}
          disabled={this.state.optimisticIndex === 0}
        >
          {" "}
          Previous
        </button>
        <div>
          {""}
          {this.state.optimisticIndex === 0
            ? `Arup Projects description`
            : `Custom description ${this.state.optimisticIndex}`}
          {""}
        </div>
        <button
          onClick={this.handleClickNext}
          disabled={
            this.state.optimisticIndex ===
            this.state.optimisticScopeOfWorks.length - 1
          }
        >
          {" "}
          Next
        </button>{" "}
        {this.state.isEditingScopeOfWorks ? (
          <span>
            <Formik
              initialValues={{
                ScopeOfWorks: ScopeOfWorks.length < 1 ? [] : ScopeOfWorks[0],
              }}
              validationSchema={Yup.object({
                ScopeOfWorks: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                let ScopeOfWorks = [];
                ScopeOfWorks.push(...this.state.optimisticScopeOfWorks);
                ScopeOfWorks.push(values.ScopeOfWorks);
                this.props.fullDescProjList.fullProjList[
                  this.props.index
                ].patchProjectScopeOfWorks(ProjectCode, {
                  ScopeOfWorks,
                });

                resetForm();
                setSubmitting(false);

                // let scopeOfWorksOptimistic = ScopeOfWorks;
                // scopeOfWorksOptimistic.push(values.ScopeOfWorks);
                // console.log(scopeOfWorksOptimistic);
                this.setState({
                  optimisticScopeOfWorks: ScopeOfWorks,
                  optimisticIndex: ScopeOfWorks.length - 1,
                  wasUpdated: true,
                  isEditingScopeOfWorks: false,
                });
                this.props.fullDescProjList.fullProjList[
                  this.props.index
                ].updateScopeIndex(optimisticIndex);
                // this.setState({ isEditingScopeOfWorks: false });
              }}
            >
              {(props) => (
                <Form>
                  <CustomTextInput
                    label="Amend Scope of Works"
                    name="ScopeOfWorks"
                    type="text"
                    placeholder="Enter a scope description"
                  />
                  <button type="submit">
                    {props.isSubmitting ? "Loading..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </span>
        ) : (
          <span> {optimisticScopeOfWorks[optimisticIndex]}</span>
        )}
        {/* {!this.state.wasUpdated ? (
            <p> {optimisticScopeOfWorks[optimisticIndex]}</p>
          ) : (
            <p>{optimisticScopeOfWorks[0]}</p>
          )} */}
        <h5 className="twoSpans">
          Project Experience
          <EditingToggle
            isEditing={this.state.isEditingExperience}
            handleEditing={this.handleEditingExperience}
          />
        </h5>
        {this.state.isEditingExperience ? (
          <span>
            <Formik
              initialValues={{
                experience: experience === null ? "" : experience,
              }}
              validationSchema={Yup.object({
                experience: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values, ProjectCode, this.props.StaffID);
                console.log(
                  this.props.fullDescProjList.fullProjList[this.props.index]
                );

                this.props.fullDescProjList.fullProjList[this.props.index]
                  .addExperienceToProject(
                    ProjectCode,
                    values,
                    this.props.StaffID
                  )
                  .then(() => {
                    this.setState({
                      optimisticExperience: values.experience,
                    });
                    resetForm();
                    setSubmitting(false);
                    this.setState({ isEditingExperience: false });
                  });
              }}
            >
              {(props) => (
                <Form>
                  <CustomTextInput
                    label="Add project experience"
                    name="experience"
                    type="text"
                    placeholder="Add project experience"
                  />
                  <button type="submit">
                    {props.isSubmitting ? "Loading..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </span>
        ) : (
          <span>
            {optimisticExperience
              ? optimisticExperience
              : "Please update your project experience"}
          </span>
        )}
        {/* // )} */}
      </StyledProjectCard>
    );
  }
}

export default observer(ProjectCard);
