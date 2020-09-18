import React from "react";
import { observer } from "mobx-react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

// set some resuable inputs at the start
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

const ProfInfo = (props) => {
  const {
    StaffID,
    StaffName,
    Email,
    LocationName,
    StartDate,
    JobTitle,
    GradeLevel,
    DisciplineName,
    imgURL,
    careerStart,
    highLevelDescription,
    valueStatement,
    nationality,
    qualifications,
    professionalAssociations,
    committees,
    publications,
  } = props.currentUser.currentUser[0];

  // set non repeated fields
  const ConstantFields = () => {
    return (
      <>
        <h3>Professional Info</h3>
        <h5>Profession:</h5>
        <p>{JobTitle}</p>
        <p>{DisciplineName}</p>
        <h5>Location:</h5>
        <p>{LocationName}</p>
        <h5>Joined Arup:</h5>
        <p>{StartDate}</p>
        <h5>Years of experience:</h5>
        <p></p>
      </>
    );
  };

  return (
    <section className="profInfo">
      <Formik
        initialValues={{
          qualifications: qualifications === null ? "" : qualifications,
          publications: publications === null ? "" : publications,
          nationality: nationality === null ? "" : nationality,
        }}
        validationSchema={Yup.object({
          qualifications: Yup.string().required("Required"),
          publications: Yup.string().required("Required"),
          nationality: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          props.currentUser.editUserMetaData(StaffID, values);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <ConstantFields />
            <CustomTextInput
              label="Qualifications"
              name="qualifications"
              type="text"
              placeholder="Insert qualification"
            />
            <CustomTextInput
              label="Publications"
              name="publications"
              type="text"
              placeholder="Insert publications"
            />
            <CustomTextInput
              label="Nationality"
              name="nationality"
              type="text"
              placeholder="Insert nationality"
            />
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      {/* <h3> Professional Info </h3>
      <h5> Profession: </h5> <p>{JobTitle}</p> <p>{DisciplineName}</p>
      <h5> Location: </h5> <p>{LocationName}</p>
      <h5> Joined Arup: </h5>
      <p> {StartDate} </p>
      <h5> Years of experience: </h5>
      <p> </p>
      <h5> Qualifications: </h5>
      <p> {qualifications} </p>
      <h5> Publications: </h5>
      <p> {publications} </p>
      <h5> Nationality: </h5>
      <p> {nationality} </p> */}
    </section>
  );
};

export default observer(ProfInfo);
