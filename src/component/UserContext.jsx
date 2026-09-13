import { useState, createContext } from "react";

export const UserContext = createContext(null)


  const initialUserList = [
  {
    id: 1,
    name: "Юрій",
    age: 25,
  },
  {
    id: 2,
    name: "Олена",
    age: 22,
  },
  {
    id: 3,
    name: "Андрій",
    age: 30,
  },
];

export function UserProvider({children}){
    const [userList, setUseList] = useState(initialUserList)


    const deleteHandle = (userId) =>{
   setUseList((prev)=>prev.filter(user =>user.id !== userId))
 }

 return(
    <UserContext.Provider value={{userList, deleteHandle}}>
        {children}
    </UserContext.Provider>

 )

}