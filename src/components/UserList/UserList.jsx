import { Component } from "react";

import { getUsers } from "../data/AllUsers"
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { ListButton } from "../ListButton/ListButton";
import { GridButton } from "../GridButton/GridButton";

import "./UserList.css"
import { UserListGrid } from "../UserListGrid/UserListGrid";

// const UserList = () => {

//     const [selected, setSelected] = useState(true);

//     const onListClick = () => {
//         setSelected(true);
//     }

//     const onGridClick = () => {
//         setSelected(false);
//     }

//     return (
//         <div className="main-container">
//             <div className="btn-container">
//                 <ListButton onClick={onListClick}/>
//                 <GridButton onClick={onGridClick}/>
//             </div>
//             <div class="flex-container">
//             {
//             data.results.map((user, index) => !selected 
//                 ? (
//                 <div className="single-grid-user" key={index}>
//                     <UserListGrid userGridData={user}/>
//                 </div>
//                 )
//                 : 
//                 (
//                 <div className="single-user" key={index}>
//                     <Avatar userLogo={user}/>
//                     <UserInfo userData={user}/>
//                 </div>
//                 ))
//             }
//             </div>
//         </div>
//     )
// };


class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: true,
            users: []
        }
    }

    onListClick = () => this.setState({selected: true})

    onGridClick = () => this.setState({selected: false})


    componentDidMount () {
        getUsers()
            .then(users => {
                this.setState({users: users})
            })
    }

    render () {
        return (
            <div className="main-container">
                <div className="btn-container">
                    <ListButton onClick={this.onListClick}/>
                    <GridButton onClick={this.onGridClick}/>
                </div>
                <div className="flex-container">
                {
                this.state.users.map((user, index) => !(this.state.selected) 
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
        
    }
}

export { UserList };