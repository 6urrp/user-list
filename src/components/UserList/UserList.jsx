import React from "react";

import { data } from "../data/AllUsers"
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo"

import "./UserList.css"

const UserList = () =>{
    return (
        <div className="main-container">
            {
            data.results.map((user, index) => 
                <div className="single-user" key={index}>
                    <Avatar userLogo={user}/>
                    <UserInfo userData={user}/>
                </div>
            )
            }
        </div>
    )
};

export { UserList };