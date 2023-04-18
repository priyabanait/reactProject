import React, { useState } from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
function App() {
  const[userList,setUserList]=useState([])
  function AddUserHandler(uName, uAge){
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age:uAge, id:Math.random().toString()}]
    });
  }
  return (
    <div>
   <AddUsers onAddUser={AddUserHandler}></AddUsers>
   <UsersList users={userList}></UsersList>
   </div>
  );
}

export default App;
