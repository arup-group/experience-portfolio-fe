import React from "react";
import { Formik, useField, Form, Field } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";

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

function FilterMenu(props) {
  const { portfolioStaff } = props.currentUser.currentUser[0];
  // const { fullProjList } = props.fullDescProjList;
  return (
    <Formik
      initialValues={{
        includeConfidential: "",
        PercentComplete: 0,
        StartDateAfter: "",
        EndDateBefore: "",
        EndDateAfter: "",
      }}
      validationSchema={Yup.object({})}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        props.currentUser.fetchPortfolioStaff(values).then(() => {
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
            <CustomRangeInput
              label="Min Project Completion"
              name="PercentComplete"
              min="0"
              max="100"
              step="5"
              type="range"
            />
            <p></p>
            <CustomCheckboxInput
              name="includeConfidential"
              label="Include Confidential"
              options={[{ key: "Yes", value: "true" }]}
            />
            <button type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
          <button
            type="button"
            onClick={() => {
              // props.fullDescProjList.fetchPortfolioProjects();
              props.fullDescProjList.clearNoResultError();
              resetForm();
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
