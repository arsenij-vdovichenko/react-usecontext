import { useState } from 'react';
import './App.css'
import UserList from "./component/UserList"
import Test from './component/Test';
// function App() {
//   const [count, setCount] = useState(0)

//   const initialUserList = [
//   {
//     id: 1,
//     name: "Юрій",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Олена",
//     age: 22,
//   },
//   {
//     id: 3,
//     name: "Андрій",
//     age: 30,
//   },
// ];

// const [userList, setUseList] = useState(initialUserList)

// const deleteHandle = (userId) =>{
//   setUseList((prev)=>prev.filter(user =>user.id !== userId))
// }

//   return (
//     <>
//      <UserList data={UserList} onDelete={deleteHandle}/>
//     </>
//   )
// }

// export default App


function App() {
  
  return (
    <>
     <UserList/>
     <Test/>
    </>
  )
}

export default App