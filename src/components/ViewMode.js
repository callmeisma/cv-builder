import React from "react";

const ModeButton = (props) => {
  if (props.editMode) {
    return (
      <button className="btn-preview" onClick={props.changeMode}>
        Preview
      </button>
    );
  } else {
    return (
      <button className="btn-edit" onClick={props.changeMode}>
        Edit
      </button>
    );
  }
};

export default ModeButton;
