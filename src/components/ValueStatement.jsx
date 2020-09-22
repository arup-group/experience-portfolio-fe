import React, { Component } from "react";
import { observer } from "mobx-react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import EditingToggle from "./EditingToggle";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}></label>
      <textarea cols="50" rows="10" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

class ValueStatement extends Component {
  state = { isEditing: false };
  handleEditing = () => {
    this.setState((currentState) => {
      return { isEditing: !currentState.isEditing };
    });
  };
  render() {
    const { valueStatement, StaffID } = this.props.currentUser.currentUser[0];
    return (
      <section className="valueStatement">
        <h3>
          Value Statement{" "}
          <EditingToggle
            isEditing={this.state.isEditing}
            handleEditing={this.handleEditing}
          />
        </h3>
        {this.state.isEditing ? (
          <Formik
            initialValues={{
              valueStatement: valueStatement === null ? "" : valueStatement,
            }}
            validationSchema={Yup.object({
              valueStatement: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              this.props.currentUser.editUserMetaData(StaffID, values);
              setSubmitting(false);
              resetForm();
              this.setState({ isEditing: false });
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
                <p></p>
                <button type="submit">
                  {props.isSubmitting ? "Loading..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <p>
            {valueStatement
              ? valueStatement
              : "Please update your value statement"}
          </p>
        )}
      </section>
    );
  }
}

export default observer(ValueStatement);
