import React from "react";
import { Formik, useField, Form } from "formik";
import { observer } from "mobx-react";
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

const Photo = (props) => {
  const { StaffName, imgUrl, StaffID } = props.currentUser.currentUser[0];
  return (
    <>
      <div className="userPhoto">
        <h3>{StaffName}</h3>

        <img
          src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
          alt="placeholder"
          style={{ height: 200 }}
        />

        <br />
      </div>
    </>
  );
};

export default observer(Photo);
