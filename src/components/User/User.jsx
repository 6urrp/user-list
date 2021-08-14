import React from "react";

import "./User.css";

const User = (props) => {
    let dateObj = new Date(props.userData.dob.date);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newDate = `${day}-${month}-${year}`;

    return (
        <div className="single-user">
            <div className="user-img">
                <img src={props.userData.picture.thumbnail} alt="" />
            </div>
            <div className="user-data">
                <p>name: {props.userData.name.first}</p>
                <p>email: {props.userData.email}</p>
                <p>date of birth: {newDate}</p>
            </div>   
        </div>
    )
}

export { User };