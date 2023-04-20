import { useEffect, useState } from "react"
import { UserInfo} from "../user/components/UserInfo"




export const Users =()=>{
    
    const [users ,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    },[])

    return(
        <>
        <table>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>user name</td>
                <td>email</td>
                <td>address</td>
                <td>phone</td>
                <td>website</td>
                <td>company</td>
                <td>more info</td>
                
                


            </tr>
       
        {users.map((user) =>{
            
            return(                

                <UserInfo key={user.id} user={user}/>

            )
        })}
         </table>
        </>
    )
}