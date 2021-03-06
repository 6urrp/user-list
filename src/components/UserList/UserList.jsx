import { useEffect, useState } from "react";

import { getUsers } from "../data/AllUsers"
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { ListButton } from "../ListButton/ListButton";
import { GridButton } from "../GridButton/GridButton";

import "./UserList.css"
import { UserListGrid } from "../UserListGrid/UserListGrid";

const UserList = () => {

    const [selected, setSelected] = useState(true);
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users);
                setFilteredUsers(users);
            })
    }, [])

    const refreshPage = () => {
        setInputValue("")
        getUsers()
                .then(users => {
                    setUsers(users);
                    setFilteredUsers(users)
                })
    }

    const onTyping = (event) => {
        setInputValue(event.target.value);
        const filtered = users.filter(user => user.name.first.includes(event.target.value));
        setFilteredUsers(filtered);
    }

    const onListClick = () => {
        setSelected(true);
    }

    const onGridClick = () => {
        setSelected(false);
    }

    return (
        <div className="main-container">
            <button type="Submit" id="refresh-button" onClick={refreshPage}>Refresh <i className="fas fa-redo"></i></button>
            <div className="btn-container">
                <ListButton onClick={onListClick}/>
                <GridButton onClick={onGridClick}/>
            </div>
            <div>
                <input type="text" value={inputValue} onChange={onTyping} className="user-input" placeholder="Search user..." />
            </div>
            <div className="flex-container">
            {
            filteredUsers.map((user, index) => !selected 
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


// class UserList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selected: true,
//             users: []
//         }
//     }

//     onListClick = () => this.setState({selected: true})

//     onGridClick = () => this.setState({selected: false})


//     componentDidMount () {
//         getUsers()
//             .then(users => {
//                 this.setState({users: users})
//             })
//     }

//     render () {
//         return (
//             <div className="main-container">
//                 <div className="btn-container">
//                     <ListButton onClick={this.onListClick}/>
//                     <GridButton onClick={this.onGridClick}/>
//                 </div>
//                 <div className="flex-container">
//                 {
//                 this.state.users.map((user, index) => !(this.state.selected) 
//                     ? (
//                     <div className="single-grid-user" key={index}>
//                         <UserListGrid userGridData={user}/>
//                     </div>
//                     )
//                     : 
//                     (
//                     <div className="single-user" key={index}>
//                         <Avatar userLogo={user}/>
//                         <UserInfo userData={user}/>
//                     </div>
//                     ))
//                 }
//                 </div>
//             </div>
//         )
        
//     }
// }

export { UserList };