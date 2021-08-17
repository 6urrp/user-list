import { useState } from "react";

import { data } from "../data/AllUsers"
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { ListButton } from "../ListButton/ListButton";
import { GridButton } from "../GridButton/GridButton";

import "./UserList.css"
import { UserListGrid } from "../UserListGrid/UserListGrid";

const UserList = () => {

    const [selected, setSelected] = useState(true);

    const onListClick = () => {
        setSelected(true);
        console.log("Aaa")
    }

    const onGridClick = () => {
        console.log("grid")
        setSelected(false);
    }

    return (
        <div className="main-container">
            <div className="btn-container">
                <ListButton onClick={onListClick}/>
                <GridButton onClick={onGridClick}/>
            </div>
            <div class="flex-container">
            {
            data.results.map((user, index) => !selected 
                ? (
                <div className="single-grid-user" key={index}>
                    <UserListGrid userGridData={user}/>
                </div>
                )
                : 
                (
                <div className="single-user" key={index}>
                    <Avatar userLogo={user}/>
                    <UserInfo userData={user}/>
                </div>
                ))
            }
            </div>
        </div>
    )
};

export { UserList };