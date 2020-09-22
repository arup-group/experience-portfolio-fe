import React, { Component } from "react";
import { observer } from "mobx-react";
import { Draggable } from "react-beautiful-dnd";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import { FullDescriptionProject } from "../models/Projects";
import { applySnapshot } from "mobx-state-tree";

// const fullDescriptionProject = FullDescriptionProject.create({});

class ProjectCard extends Component {
  componentDidMount() {
    console.log("mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    const CustomTextInput = ({ label, ...props }) => {
      const [field, meta] = useField(props);
      return (
        <>
          <label htmlFor={props.id || props.name}> {label}</label>
          <input type="text" {...field} {...props} />
          {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
      );
    };
    const {
      JobNameLong,
      ScopeOfWorks,
      Town,
      EndDate,
      ProjectCode,
      experience,
      CountryName,
    } = this.props.projectInfo;

    return (
      // <Draggable
      //   key={`${props.projId}`}
      //   draggableId={`${props.projId}`}
      //   index={props.index}
      // >
      //   {(provided) => (
      <li
        key={this.props.projId}
        className="indvProject"
        // {...provided.draggableProps}
        // {...provided.dragHandleProps}
        // ref={provided.innerRef}
      >
        <h3>{JobNameLong}</h3>
        <h5>
          {Town}, {CountryName}
        </h5>
        <h6> Completed/Projected Completion : {EndDate}</h6>
        <p>{ScopeOfWorks[0]}</p>
        <Formik
          initialValues={{
            ScopeOfWorks: ScopeOfWorks.length < 1 ? [] : ScopeOfWorks[0],
          }}
          // validationSchema={Yup.object({
          //   ScopeOfWorks: Yup.string().required("Required"),
          // })}
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
        <p>{experience}</p>
        <Formik
          initialValues={{ experience: experience === null ? "" : experience }}
          validationSchema={Yup.object({
            experience: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values, ProjectCode, this.props.StaffID);
            console.log(
              this.props.fullDescProjList.fullProjList[this.props.index]
            );

            this.props.fullDescProjList.fullProjList[this.props.index]
              .addExperienceToProject(ProjectCode, values, this.props.StaffID)
              .then(() => {
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
      </li>
      //   )}
      // </Draggable>
    );
  }
}

export default observer(ProjectCard);
