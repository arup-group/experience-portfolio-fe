import React from "react";
import { Formik, useField, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";

const CustomSelectInput = ({ label, options, objKey, ...props }) => {
  const [field, meta] = useField(props);
  const arrayOfIndividualOptions = [];
  options.forEach((option) => {
    if (!arrayOfIndividualOptions.includes(option[objKey])) {
      arrayOfIndividualOptions.push(option[objKey]);
    }
  });
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <Field as="select" {...field} {...props}>
        {arrayOfIndividualOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </Field>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

function FilterMenu(props) {
  const { StaffID } = props.currentUser.currentUser[0];
  const { fullProjList } = props.fullDescProjList;
  if (fullProjList.length < 1) return null;
  return (
    <Formik
      initialValues={{
        ClientName: fullProjList[0].ClientName,
        Confidential: fullProjList[0].Confidential,
        CountryName: fullProjList[0].CountryName,
      }}
      validationSchema={Yup.object({})}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        props.fullDescProjList.fetchProjects(StaffID, values).then(() => {
          resetForm();
          setSubmitting(false);
        });
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <h5>Filters</h5>
            <CustomSelectInput
              name="ClientName"
              id="filterClient"
              options={fullProjList}
              objKey="ClientName"
            />
            <p></p>
            <CustomSelectInput
              name="CountryName"
              id="filterCountry"
              options={fullProjList}
              objKey="CountryName"
            />
            <button type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
          <button
            type="button"
            onClick={() => {
              props.fullDescProjList.fetchProjects(StaffID);
            }}
          >
            Clear Search
          </button>
        </>
      )}
    </Formik>
  );
}

export default observer(FilterMenu);
