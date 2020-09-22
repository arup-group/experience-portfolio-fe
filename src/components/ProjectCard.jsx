import React, { Component } from "react";
import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

import EditingToggle from "./EditingToggle";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}> {label}</label>
      <textarea cols="50" rows="10" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

class ProjectCard extends Component {
  state = {
    isEditingScopeOfWorks: false,
    isEditingExperience: false,
    optimisticExperience: this.props.projectInfo.experience,
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

  render() {
    const {
      JobNameLong,
      ScopeOfWorks,
      Town,
      EndDate,
      ProjectCode,
      experience,
      CountryName,
    } = this.props.projectInfo;

    const { optimisticExperience } = this.state;

    return (
      <Draggable
        key={`${this.props.projId}`}
        draggableId={`${this.props.projId}`}
        index={this.props.index}
      >
        {(provided) => (
          <li
            key={this.props.projId}
            className="indvProject"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h3>{JobNameLong}</h3>
            <h5>
              {Town}, {CountryName}
            </h5>
            <h6> Completed/Projected Completion : {EndDate.slice(0, 10)}</h6>
            <h5>
              Project Scope
              <EditingToggle
                isEditing={this.state.isEditingScopeOfWorks}
                handleEditing={this.handleEditingScopeOfWorks}
              />
            </h5>
            {this.state.isEditingScopeOfWorks ? (
              <Formik
                initialValues={{
                  ScopeOfWorks: ScopeOfWorks.length < 1 ? [] : ScopeOfWorks[0],
                }}
                validationSchema={Yup.object({
                  ScopeOfWorks: Yup.array()
                    .of(Yup.string())
                    .required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  let ScopeOfWorks = [];
                  ScopeOfWorks.push(...this.props.projectInfo.ScopeOfWorks);
                  ScopeOfWorks.push(values.ScopeOfWorks);
                  this.props.fullDescProjList.FullIndividualProj.patchProjectScopeOfWorks(
                    ProjectCode,
                    {
                      ScopeOfWorks,
                    }
                  );
                  resetForm();
                  setSubmitting(false);
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
            ) : (
              <p>
                {ScopeOfWorks[0]
                  ? ScopeOfWorks[0]
                  : "Please update project scope"}
              </p>
            )}

            <h5>
              Project Experience
              <EditingToggle
                isEditing={this.state.isEditingExperience}
                handleEditing={this.handleEditingExperience}
              />
            </h5>
            {this.state.isEditingExperience ? (
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
            ) : (
              <p>
                {optimisticExperience
                  ? optimisticExperience
                  : "Please update your project experience"}
              </p>
            )}
          </li>
        )}
      </Draggable>
    );
  }
}

export default observer(ProjectCard);
