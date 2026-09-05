
import {useState, useContext, createContext} from 'react'

    const AuthContext = createContext(null)


function AuthProvider ({children}){

    const [login, setlogin] = useState(null)

    function user (userData){
        setlogin(userData);
    }

    function logout(){
        setlogin(null);
    }

    return(<>
        <AuthContext.Provider value={{login, user, logout}}>
            {children}
        </AuthContext.Provider>
        
    </>)

}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}