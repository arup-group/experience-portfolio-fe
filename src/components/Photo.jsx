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
  const { StaffName, imgURL, StaffID } = props.currentUser.currentUser[0];

  let selectedPhoto = "";

  const handleChange = (event) => {
    selectedPhoto = event.target.files[0];
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(selectedPhoto);
    const fileImg = new FormData();
    fileImg.append("image", selectedPhoto, selectedPhoto.name);
    props.currentUser.postUserImage(StaffID, fileImg).then(() => {
      console.log("File uploaded");
    });
  };
  return (
    <>
      <div className="userPhoto">
        <h3>{StaffName}</h3>
        {imgURL === "" ? (
          <img
            src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg"
            alt="placeholder"
            style={{ height: 200 }}
          />
        ) : (
          <img src={imgURL} alt={StaffName} style={{ height: 200 }} />
        )}
        <form className="form" id="photo">
          <input type="file" id="imgURL" onChange={handleChange} />
          <button type="submit" onClick={handleClick}>
            Upload Image
          </button>
        </form>
        <br />
      </div>
    </>
  );
};

export default observer(Photo);
