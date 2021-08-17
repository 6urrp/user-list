import React from "react";

import "./ListButton.css";

const ListButton = (props) => {

    return (
        <button type="Submit" id="list-btn" onClick={props.onClick}>
            <i className="fas fa-list"></i>
        </button>
    )
}

export { ListButton };