import React from 'react';
import {Routes,Route} from 'react-router-dom';
import AdminPage from '../AllPages/AdminPage/Admin';
import FitnessEquip from '../AllPages/AdminPage/Fitness';
import Furniture from '../AllPages/AdminPage/Furniture';
import Mobiles from '../AllPages/AdminPage/Mobiles';
import Cart from '../AllPages/Cart/Cart';
import WishList from '../AllPages/Cart/WishList';
import Home from '../AllPages/HomePage/Home';
import Login from '../AllPages/Login';
import ProductFitness from '../AllPages/Products/ProductsFitness';
import ProductFurn from '../AllPages/Products/ProductsFurn';
import ProductMob from '../AllPages/Products/ProductsMob';
import Signup from '../AllPages/SignUp';

function AllRoutes(){
    return(
        
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/productMob' element={
                    // <PrivateRoute>
                        <ProductMob/>
                    // </PrivateRoute>
        }/>
        <Route path='/productFurn' element={
                    // <PrivateRoute>
                        <ProductFurn/>
                    // </PrivateRoute>
        }/>
        <Route path='/productFitness' element={
                    // <PrivateRoute>
                        <ProductFitness/>
                    // </PrivateRoute>
        }/>
        <Route path='/admin' element={
                        <AdminPage/>
        }/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/mobiles' element={<Mobiles/>}/> 
        <Route path='/furnitures' element={<Furniture/>}/> 
        <Route path='/fitness' element={<FitnessEquip/>}/> 
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