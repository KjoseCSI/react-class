import { useAuthContext } from "../context/AuthContext"


export default function LoginPage() {

const { state, logingEmailWithPassword, logout } = useAuthContext()

if (state === 2) {
  return(
    <>
      <h3>Te deslogiaron</h3>
      
    </>
  )
}
if (state === 1) {
  return(
    <>
      <h3>Te logiaron</h3>
      <button className="bg-red-500 hover:bg-blue-300 text-white rounded-2xl mt-2 p-5" onClick={()=>logout()}>Logout</button>

    </>
  )
}
  return (
    <>
    <h3>Bienvenidos a la pagina</h3>
    <h3>Ingresar</h3>
    <button onClick={()=>logingEmailWithPassword('jose12345@gmail.com','12345')} className="bg-blue-500 hover:bg-blue-300 text-white rounded-2xl mt-2 p-5">Login</button>
    <div>Su estado de Login es: {state}</div>

    </>
  )
}
