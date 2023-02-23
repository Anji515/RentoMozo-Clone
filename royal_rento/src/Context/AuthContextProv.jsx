const { createContext, useState } = require("react");

export const AuthContext = createContext();

function AuthContextProv({chidren}){

    const [isAuth,setAuth] = useState(false);

    const logIn=()=>{
        setAuth(true)
    }

    const logOut=()=>{
        setAuth(false)
    }

  return(
    <AuthContext.Provider value={{isAuth}}>{chidren}</AuthContext.Provider>
  )
}