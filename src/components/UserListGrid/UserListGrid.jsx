import React from "react";

import "./UserListGrid.css";

const UserListGrid = (props) => {

    return (
        <React.Fragment>
            <div>
                <img src={props.userGridData.picture.large} alt="" />
                <h4>{props.userGridData.name.first}</h4>
            </div>
            <div>
                <p>Name:{props.userGridData.email}</p>
                <p>Date of birth:{props.userGridData.dob.date}</p>
            </div>
        </React.Fragment>

    )
}

export { UserListGrid };