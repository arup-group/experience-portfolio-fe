import React, { Component } from "react";
import { observer } from "mobx-react";
import { Formik, useField, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import EditingToggle from "./EditingToggle";

// set some resuable inputs
const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <h5>{label}</h5>
      <label htmlFor={props.id || props.name}></label>
      <input type="text" {...field} {...props} />

      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

// set some reusable array inputs
const CustomArrayInput = ({ label, objKey, values, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <h5>{label}</h5>
      <FieldArray
        name={field.name}
        render={(arrayHelpers) => (
          <>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
            <ul>
              {values[objKey].length > 0 ? (
                values[objKey].map((item, index) => (
                  <li key={index}>
                    <Field name={`${objKey}.${index}`} />
                    <button
                      type="button"
                      onClick={() => {
                        arrayHelpers.remove(index);
                      }}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        arrayHelpers.insert(index, "");
                      }}
                    >
                      +
                    </button>
                  </li>
                ))
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    arrayHelpers.push("");
                  }}
                >
                  {`Add ${label.toLowerCase()}`}
                </button>
              )}
            </ul>
          </>
        )}
      />
    </>
  );
};

// set non editable fields
const DisplayStaticInformation = ({
  currentUser: {
    JobTitle,
    DisciplineName,
    LocationName,
    StartDate,
    careerStart,
    nationality,
    qualifications,
    professionalAssociations,
    committees,
    publications,
  },
  isEditing,
}) => {
  return (
    <>
      <h5>Profession:</h5>
      <p>{JobTitle}</p>
      <p>{DisciplineName}</p>
      <h5>Location:</h5>
      <p>{LocationName}</p>
      <h5>Joined Arup:</h5>
      <p>{StartDate.slice(0, 10)}</p>
      <h5>Career Start:</h5>
      {careerStart === null || careerStart === "" ? (
        <p>No career start added</p>
      ) : (
        <p>{careerStart.slice(0, 10)}</p>
      )}
      <h5>Years of experience:</h5>
      <p>
        {Math.ceil(
          Math.abs(new Date() - new Date(careerStart)) / 1000 / 31556952
        )}
      </p>
      <h5>Qualifications</h5>
      {qualifications.length < 1 ? (
        <p>No qualifications added</p>
      ) : (
        <ul>
          {qualifications.map((qualification, index) => {
            return <li key={index}>{qualification}</li>;
          })}
        </ul>
      )}
      <h5>Publications</h5>
      {publications.length < 1 ? (
        <p>No publications added</p>
      ) : (
        <ul>
          {publications.map((publication, index) => {
            return <li key={index}>{publication}</li>;
          })}
        </ul>
      )}
      <h5>Professional Associations</h5>
      {professionalAssociations.length < 1 ? (
        <p>No professional associations added</p>
      ) : (
        <ul>
          {professionalAssociations.map((profAssociation, index) => {
            return <li key={index}>{profAssociation}</li>;
          })}
        </ul>
      )}
      <h5>Committees</h5>
      {committees.length < 1 ? (
        <p>No committees added</p>
      ) : (
        <ul>
          {committees.map((committee, index) => {
            return <li key={index}>{committee}</li>;
          })}
        </ul>
      )}
      <h5>Nationality</h5>
      {nationality !== null || nationality !== "" ? (
        <p>{nationality}</p>
      ) : (
        <p>Please add your nationality</p>
      )}
    </>
  );
};

class ProfInfo extends Component {
  state = {
    isEditing: false,
  };
  handleEditing = () => {
    this.setState((currentState) => {
      return { isEditing: !currentState.isEditing };
    });
  };
  render() {
    const {
      StaffID,
      careerStart,
      nationality,
      qualifications,
      professionalAssociations,
      committees,
      publications,
    } = this.props.currentUser.currentUser[0];
    return (
      <section className="profInfo" style={{ textAlign: "left" }}>
        <h3>
          Professional Info
          <EditingToggle
            isEditing={this.state.isEditing}
            handleEditing={this.handleEditing}
          />
        </h3>
        {this.state.isEditing ? (
          <Formik
            initialValues={{
              careerStart: careerStart === null ? "" : careerStart,
              qualifications: qualifications.length < 1 ? [] : qualifications,
              publications: publications.length < 1 ? [] : publications,
              professionalAssociations:
                professionalAssociations.length < 1
                  ? []
                  : professionalAssociations,
              committees: committees.length < 1 ? [] : committees,
              nationality: nationality === null ? "" : nationality,
            }}
            validationSchema={Yup.object({
              careerStart: Yup.date().required("Required"),
              qualifications: Yup.array().of(
                Yup.string().required("Cannot be empty")
              ),
              publications: Yup.array().of(
                Yup.string().required("Cannot be empty")
              ),
              professionalAssociations: Yup.array().of(
                Yup.string().required("Cannot be empty")
              ),
              committees: Yup.array().of(
                Yup.string().required("Cannot be empty")
              ),
              nationality: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              this.props.currentUser
                .editUserMetaData(StaffID, values)
                .then(() => {
                  resetForm();
                  setSubmitting(false);
                  this.setState({ isEditing: false });
                });
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <CustomTextInput
                  label="careerStart"
                  name="careerStart"
                  type="date"
                />
                <CustomArrayInput
                  name="qualifications"
                  label={"Qualifications"}
                  objKey={"qualifications"}
                  values={values}
                />
                <CustomArrayInput
                  name="publications"
                  label={"Publications"}
                  objKey={"publications"}
                  values={values}
                />
                <CustomArrayInput
                  name="professionalAssociations"
                  label={"Professional Associations"}
                  objKey={"professionalAssociations"}
                  values={values}
                />
                <CustomArrayInput
                  name="committees"
                  label={"Committees"}
                  objKey={"committees"}
                  values={values}
                />
                <CustomTextInput
                  label="Nationality"
                  name="nationality"
                  type="text"
                  placeholder="Insert nationality"
                />
                <p></p>
                <button type="submit">
                  {isSubmitting ? "Loading..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <DisplayStaticInformation
            currentUser={this.props.currentUser.currentUser[0]}
            isEditing={this.state.isEditing}
          />
        )}
      </section>
    );
  }
}

export default observer(ProfInfo);
