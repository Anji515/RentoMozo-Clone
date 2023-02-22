import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Cart from '../AllPages/Cart/Cart';
import WishList from '../AllPages/Cart/WishList';
import Home from '../AllPages/HomePage/Home';
import Login from '../AllPages/Login';
import SignUp from '../AllPages/SignUp';

function AllRoutes(){
    return(
        
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/> 
        {/* <Route path='/products' element={
                    <PrivateRoute>
                        <Products/>
                    </PrivateRoute>
        }/> */}
        <Route path='/admin' element={''
                   // <PrivateRoute>
                        // <AdminPage/>
                   // </PrivateRoute>
        }/>
        <Route path='/signup' element={<SignUp/>}/> 
        <Route path='/cart' element={
        // <PrivateRoute>
            <Cart/>
        // </PrivateRoute> 
    }/>
        <Route path='/wishlist' element={
                //    <PrivateRoute>
                        <WishList/>
                //    </PrivateRoute>
        }/>
    </Routes>

    )
}

export default AllRoutes