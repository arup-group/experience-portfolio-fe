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

class IntroParag extends Component {
  state = { isEditing: false };
  handleEditing = () => {
    this.setState((currentState) => {
      return { isEditing: !currentState.isEditing };
    });
  };
  render() {
    const {
      highLevelDescription,
      StaffID,
    } = this.props.currentUser.currentUser[0];
    return (
      <section className="introParag">
        <h3>
          Intro Paragraph{" "}
          <EditingToggle
            isEditing={this.state.isEditing}
            handleEditing={this.handleEditing}
          />
        </h3>
        {this.state.isEditing ? (
          <Formik
            initialValues={{
              highLevelDescription:
                highLevelDescription === null ? "" : highLevelDescription,
            }}
            validationSchema={Yup.object({
              highLevelDescription: Yup.string().required("Required"),
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
            {(props) => (
              <Form>
                <CustomTextInput
                  label="High Level Description"
                  name="highLevelDescription"
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
          <p>{highLevelDescription}</p>
        )}
      </section>
    );
  }
}

export default observer(IntroParag);
