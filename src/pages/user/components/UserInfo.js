import { Link } from "react-router-dom"

export const UserInfo = ({ user }) => {

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
                    <Link to={`post/${user.id}`} >view <input type="hidden" value={user.id}/> </Link>

                </td>
            </tr>
        </>
    )
}