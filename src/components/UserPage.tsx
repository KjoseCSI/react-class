import { useState } from "react"
import useUser from "../hooks/useUser"
import UserRow from "./UserRow"


export default function UserPage() {
    
    const { users, handlePageClick } =  useUser()

    

  return (
    <>
        <h1>Usuarios</h1>

    <nav aria-label="Page navigation example">
    <ul className="inline-flex -space-x-px text-sm">
        <li>
        <button onClick={() => handlePageClick(1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</button>
        </li>
        <li>
        <button onClick={() => handlePageClick(2)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</button>
        </li>

    </ul>
    </nav>


        <table>
            <thead>
                <td>Avatar</td>
                <td>Nombre</td>
                <td>Email</td>
                
            </thead>
            <tbody>
                { users.map( user => (
                    <UserRow key={user.id} user={user} />
                )) }

            </tbody>


        </table>
    </>
  )
}
