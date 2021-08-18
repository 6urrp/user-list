import React from "react";

import { showBirthDate } from "../../utilities/functions"
 
import "./UserInfo.css"

const UserInfo = (props) => {
    return (
        <div className="user-data">
                <p>name: {props.userData.name.first}</p>
                <p>email: {props.userData.email}</p>
                <p>date of birth: {showBirthDate(props.userData.dob.date)}</p>
            </div>   
    )
}

export { UserInfo };