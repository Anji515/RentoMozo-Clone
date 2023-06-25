import React from 'react';
import {Routes,Route} from 'react-router-dom';
import AdminPage from '../AllPages/AdminPage/Admin';
import FitnessEquip from '../AllPages/AdminPage/Fitness';
import Furniture from '../AllPages/AdminPage/Furniture';
import Mobiles from '../AllPages/AdminPage/Mobiles';
import WishList from '../AllPages/Cart/WishList';
import Home from '../AllPages/HomePage/Home';
import LoginAdmin from '../AllPages/Login';
import LoginUser from '../AllPages/LoginUser';
import ProductFitness from '../AllPages/Products/ProductsFitness';
import ProductFurn from '../AllPages/Products/ProductsFurn';
import ProductMob from '../AllPages/Products/ProductsMob';
import Signup from '../AllPages/SignUp';
import PrivateRoute, { PrivateRouteUser } from './PrivateRoute';
import ProductEss from './../AllPages/Products/ProductEss';
import ProductBikes from './../AllPages/Products/ProductBike';
import ProductApp from './../AllPages/Products/ProductApp';
import Cart from './../AllPages/Cart/Cart';
import Checkout from './../AllPages/CheckOut/Checkout';
import SingleUserPage from '../AllPages/Products/SingleProductPage';
import SingleProductFurn from '../AllPages/Products/SingleProductFurn';
import SearchInput from '../AllPages/HomePage/ShowOnSearch';

function AllRoutes(){
    return(
        
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>} />
        <Route path='/loginuser' element={<LoginUser/>} /> 
        <Route path='/productMob' element={<ProductMob/>}/>
        <Route path='/productFurn' element={<ProductFurn/>}/>
        <Route path='/productFitness' element={<ProductFitness/>  }/>
        <Route path='/productEss' element={<ProductEss/>}/>
        <Route path='/productBike' element={<ProductBikes/>}/>
        <Route path='/productApp' element={<ProductApp/>}/>
        <Route path='/admin' element={
                   <PrivateRoute>
                            <AdminPage/>
                    </PrivateRoute>
        }/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/mobiles' element={
        <PrivateRoute>
            <Mobiles/>
        </PrivateRoute>
        }/> 
        <Route path='/furnitures' element={
                <PrivateRoute>
                    <Furniture/>
                </PrivateRoute>
        }/> 
        <Route path='/fitness' element={
                <PrivateRoute>
                    <FitnessEquip/>
                </PrivateRoute>
        }/> 
        <Route path='/checkout' element={
                <PrivateRoute>
                    <Checkout/>
                </PrivateRoute>
        }/> 
        {/* Single Pages */}
        <Route path='/productMob/:id' element={
                <PrivateRouteUser>
                    <SingleUserPage/>
                </PrivateRouteUser>
        }/> 
        <Route path='/productFurn/:id' element={
                <PrivateRouteUser>
                    <SingleProductFurn/>
                </PrivateRouteUser>
        }/> 
        <Route path='/productFitness/:id' element={
                <PrivateRouteUser>
                    <SingleProductFurn/>
                </PrivateRouteUser>
        }/> 
        {/* <Route path='/fitness' element={
            <PrivateRoute>
                <FitnessEquip/>
            </PrivateRoute>
        }/> <Route path='/fitness' element={
            <PrivateRoute>
            <FitnessEquip/>
           </PrivateRoute>
         }/>  */}
        <Route path='/cart' element={
        <PrivateRouteUser>
            <Cart/>
        </PrivateRouteUser> 
    }/>
        <Route path='/wishlist' element={
                   <PrivateRouteUser>
                        <WishList/>
                   </PrivateRouteUser>
        }/>
        <Route path='/results' element={<SearchInput/>}/>
    </Routes>

    )
}

export default AllRoutes