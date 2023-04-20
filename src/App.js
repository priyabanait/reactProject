import React, { Fragment, useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
function App() {
  const[userList,setUserList]=useState([])
  function AddUserHandler(uName, uAge,uCollege){
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge,college:uCollege, id:Math.random().toString()}]
    });
  }
  return (
    <Fragment>
   <AddUsers onAddUser={AddUserHandler}></AddUsers>
   <UsersList users={userList}></UsersList>
   </Fragment>
  );
}

export default App;
