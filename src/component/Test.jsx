import { UserContext } from "./UserContext";
import { useContext } from "react";
function Test(){
    const data = useContext(UserContext)
    console.log(data);
    
}
export default Test