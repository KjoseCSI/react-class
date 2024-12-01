import { createContext, PropsWithChildren, useContext, useState } from "react";


enum StateTest {
    'checking',
    'login',
    'closed',
    'authenticated'
}

export const AuthContext = createContext({});

export const useAuthContext = () =>  useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren ) => {

    const [state, setstate] = useState<StateTest>(StateTest.checking)
    return(
        <AuthContext.Provider value={{
            stateValue:state

        }} >
            {children}

        </AuthContext.Provider>
    )
}
