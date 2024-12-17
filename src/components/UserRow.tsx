import { User } from "../interfaces/reques.response"


interface Props {
    user: User;
}

export default function UserRow( {user}:Props ) {
  return (
    <tr>
        <td>
            <img src={user.avatar} />

        </td>
        <td>
            <span>{user.first_name} {user.last_name} </span>
        </td>
        <td>
            <span>{user.email} </span>
        </td>
    </tr>
  )
}
