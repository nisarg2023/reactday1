import { Link, useNavigate } from "react-router-dom"

export const UserInfo = ({ user }) => {

    const navigate = useNavigate();
    return (
        <>
            <tr>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.username}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {`${user.address.street}, ${user.address.suite},${user.address.city}`}
                </td>
                <td>
                    {user.phone}
                </td>
                <td>
                    {user.website}
                </td>

                <td>
                    {user.company.name}
                </td>
                <td>
                    {/* we can also pass stae in link components  */}
                    {/* <Link to={`post/${user.id}`} >view <input type="hidden" value={user.id}/> </Link> */}
                    <button onClick={()=>{navigate('post',{state:user.id})}}>view post</button>

                </td>
            </tr>
        </>
    )
}