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

const ValueStatement = (props) => {
  const { valueStatement, StaffID } = props.currentUser.currentUser[0];
  return (
    <section className="valueStatement">
      <h3>Value Statement</h3>
      <p>{valueStatement}</p>
      <Formik
        initialValues={{
          valueStatement: "",
        }}
        validationSchema={Yup.object({
          valueStatement: Yup.string().required("Required"),
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
              label="Value Statement"
              name="valueStatement"
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

export default observer(ValueStatement);
