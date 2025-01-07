import BasicType from './typescript/BasicTypes'
import './App.css'
import ObjectLiterals from './typescript/ObjectLiterals'
import BasicFuntion from './typescript/BasicFuntion'
import Counter from './components/Counter'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './components/LoginPage'
import UserPage from './components/UserPage'
import { UserForm } from './components/UserForm'

function App() {

  return (

    <AuthProvider>

      <div className='flex flex-col items-center h-svh'>
        <UserForm/>
        <div>------------------</div>
        <BasicType/>
        <div>------------------</div>
        <ObjectLiterals/>
        <div>------------------</div>
        <BasicFuntion/>
        <div>------------------</div>
        <Counter/>
        <div>------------------</div>
        <LoginPage/>
        <div>------------------</div>
        <UserPage/>
        <div>------------------</div>
        
      </div>

    </AuthProvider>
  )
}

export default App
