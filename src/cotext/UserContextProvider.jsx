import { useState } from "react";
import UserContext from "./UserCotext";
const UserContextProvider=({children})=>{
    const [search,setSearch]=useState('')
    
    return(
        <UserContext.Provider value={{search,setSearch}}>
           {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider