import { createContext, useState } from 'react';
export const authState = createContext()

function AuthContextProvider({children}) {
    const [loading,setLoading] = useState(false)
    const [isAuth,setAuth] = useState(true);
    // console.log('isAuth:', isAuth)
    const [token,setToken] = useState(null);

    // Mobile Cart and WhishList
    const [wishData,setWishData] = useState([]);
    const [cartData,setCartItemCont] = useState([]);
    // console.log('cartData:', cartData)


    // Furnitures Cart and WhishList
    const [wishDataFurn,setWishDataFurn] = useState([]);
    const [cartDataFurn,setCartItemContFurn] = useState([]);

    // Furnitures Cart and WhishList
    const [wishDataFit,setWishDataFit] = useState([]);
    const [cartDataFit,setCartItemContFit] = useState([]);
    // console.log('cartDataFit:', cartDataFit)


    // console.log('data:', data)
    
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
        <authState.Provider value={{wishData,setWishData,cartData,setCartItemCont,wishDataFurn,cartDataFurn,setCartItemContFurn,setWishDataFurn,wishDataFit,cartDataFit,setCartItemContFit,setWishDataFit,loginUser,logoutUser,handleLoading,handleToken,loading,token,isAuth}}>{children}</authState.Provider>
    )
}

export default AuthContextProvider;