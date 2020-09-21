import React from "react";

function EditingToggle(props) {
  return (
    <>
      <button
        disabled={props.isEditing}
        onClick={(e) => {
          e.preventDefault();
          props.handleEditing();
        }}
      >
        <span role="img" aria-label="edit image">
          📝
        </span>
      </button>
      {props.isEditing && (
        <button
          disabled={!props.isEditing}
          onClick={(e) => {
            e.preventDefault();
            props.handleEditing();
          }}
        >
          <span role="img" aria-label="cancel edit">
            ❌
          </span>
        </button>
      )}
    </>
  );
}

export default EditingToggle;
