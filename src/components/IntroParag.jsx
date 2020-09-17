import React from "react";
import { observer } from "mobx-react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

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

const IntroParag = (props) => {
  const { highLevelDescription, StaffID } = props.currentUser.currentUser[0];
  return (
    <section className="introParag">
      <h3>Intro Paragraph</h3>
      <p>{highLevelDescription}</p>
      <Formik
        initialValues={{
          highLevelDescription: "",
        }}
        validationSchema={Yup.object({
          highLevelDescription: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          props.currentUser.editUserMetaData(StaffID, values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {(props) => (
          <Form>
            <CustomTextInput
              label="High Level Description"
              name="highLevelDescription"
              type="text"
              placeholder="Insert description"
            />
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default observer(IntroParag);
