import React from "react";

const ModeButton = (props) => {
    if (props.editMode) {
        return (
            <button onClick={props.changeMode}>Preview</button>
        );
    } else {
        return (
            <button onClick={props.changeMode}>Edit</button>
        );
    };
};

export default ModeButton;