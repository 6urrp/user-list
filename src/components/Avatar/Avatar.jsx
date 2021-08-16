import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
    return (
        <div className="user-img">
            <img src={props.userLogo.picture.thumbnail} alt="user-logo" />
        </div>
    )
}

export { Avatar };