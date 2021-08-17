import React from "react";

import "./GridButton.css"

const GridButton = (props) => {

    return (
        <button type="Submit" id="grid-button" onClick={props.onClick}>
            <i className="fas fa-th"></i>
        </button>
    )
}

export { GridButton };