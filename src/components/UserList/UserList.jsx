import React from "react";

import { data } from "../data/AllUsers"
import { User } from "../User/User.jsx"

import "./UserList.css"

const UserList = () =>{
    return (
        <div className="main-container">
            {
            data.results.map((user, index) => 
                <User userData={user} key={index} />
            )
            }
        </div>
    )
};

export { UserList };