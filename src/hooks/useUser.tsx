import { useEffect, useState } from "react"
import { User } from "../interfaces/reques.response";
import { loadUserAction } from "../actions/load-users";



export default function useUser() {
    const [users,setUsers] = useState<User[]>([]);
    const [userPages,setUserPages] = useState(0)


    const handlePageClick = (pageNumber: number) => {
      setUserPages(pageNumber);
    };

    /* const page = 1; */
    useEffect(() => { 
        loadUserAction(userPages).then(users => setUsers(users))
    },[userPages])

  return { users, handlePageClick }
}
