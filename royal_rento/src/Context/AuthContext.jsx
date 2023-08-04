import { createContext, useState } from 'react';
export const authState = createContext()

function AuthContextProvider({children}) {
    const [loading,setLoading] = useState(false)
    const [isAuth,setAuth] = useState(false);
    const [token,setToken] = useState(null);
    const [userName,setUser] = useState('');
    const [user,setShowUser]=useState(false)
    // console.log('user',user)
    // console.log('userName',userName)

    //Cart and WhishList
    const [wishData,setWishData] = useState([]);
    const [cartData,setCartItemCont] = useState([]);
    // console.log('cartData:', cartData)


    const [dataInput,SetDataInput]= useState([])
    
    const loginUser=(val1)=>{
        setAuth(val1)
    }
    
    const logoutUser=(val)=>{
        setAuth(val)
    }

    const handleLoading=(val2)=>{
        setLoading(val2)
    }
      
    const handleToken=(val3)=>{
        setToken(val3);
    }
    return(
        <authState.Provider value={{user,wishData,setWishData,userName,user,setUser,setShowUser,cartData,setCartItemCont,loginUser,logoutUser,handleLoading,handleToken,loading,token,isAuth,dataInput,SetDataInput}}>{children}</authState.Provider>
    )
}

export default AuthContextProvider;