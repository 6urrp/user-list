import React from "react";

import { showBirthDate, hideEmail } from "../../utilities/functions"

import "./UserListGrid.css";

const UserListGrid = (props) => {

    return (
        <React.Fragment>
            <div className="img-container">
                <img src={props.userGridData.picture.large} alt="" />
                <h4>{props.userGridData.name.first}</h4>
            </div>
            <div className="data-container">
                <p>Email: {hideEmail(props.userGridData.email)}</p>
                <p>Date of birth: {showBirthDate(props.userGridData.dob.date)}</p>
            </div>
        </React.Fragment>

    )
}

export { UserListGrid };