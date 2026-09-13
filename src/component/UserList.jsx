// function UserList({data}){
// console.log(data);



//     return( 
        
//         <ul>{data.map((user)=>{
//                 return(<li key={user.id}>
//                     <h2>{user.name}</h2>
//                     <h2>{user.age}</h2>
//                     <button onClick={()=>onDelete(user.id)} type="button">delete</button>
//                 </li>)
//             })}
//         </ul>
        
//     )
// }

// export default UserList

import { UserContext } from "./UserContext"
import { useContext } from "react"

function UserList(){
    const {userList, deleteHandle} = useContext(UserContext)




    return( 
        
        
        <ul>{userList.map((user)=>{
                return(<li key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                    <button onClick={()=>deleteHandle(user.id)} type="button">delete</button>
                </li>)
            })}</ul>
    )
}

export default UserList