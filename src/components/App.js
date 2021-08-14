import { Fragment } from "react";

import './App.css';

import { Header } from "./Header/Header";
import { UserList } from "./UserList/UserList"
import { Footer } from "./Footer/Footer"
   
function App() {
  return (
    <Fragment>
      <Header />
      <UserList />
      <Footer />
    </Fragment>
  );
}

export default App;
