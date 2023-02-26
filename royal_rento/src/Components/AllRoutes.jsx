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
import PrivateRoute from './PrivateRoute';
import ProductEss from './../AllPages/Products/ProductEss';
import ProductBikes from './../AllPages/Products/ProductBike';
import ProductApp from './../AllPages/Products/ProductApp';
import Cart from './../AllPages/Cart/Cart';
import Checkout from './../AllPages/CheckOut/Checkout';
import SingleUserPage from '../AllPages/Products/SingleProductPage';
import SingleProductFurn from '../AllPages/Products/SingleProductFurn';

function AllRoutes(){
    return(
        
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/loginadmin' element={<LoginAdmin/>} />
        <Route path='/loginuser' element={<LoginUser/>} /> 
        <Route path='/productMob' element={
                    <PrivateRoute>
                        <ProductMob/>
                    </PrivateRoute>
        }/>
        <Route path='/productFurn' element={
                    <PrivateRoute>
                        <ProductFurn/>
                    </PrivateRoute>
        }/>
        <Route path='/productFitness' element={
                    <PrivateRoute>
                        <ProductFitness/>
                    </PrivateRoute>
        }/>
        <Route path='/productEss' element={
                    <PrivateRoute>
                        <ProductEss/>
                    </PrivateRoute>
        }/>
        <Route path='/productBike' element={
                    <PrivateRoute>
                        <ProductBikes/>
                    </PrivateRoute>
        }/>
        <Route path='/productApp' element={
                    <PrivateRoute>
                        <ProductApp/>
                    </PrivateRoute>
        }/>
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
                <PrivateRoute>
                    <SingleUserPage/>
                </PrivateRoute>
        }/> 
        <Route path='/productFurn/:id' element={
                <PrivateRoute>
                    <SingleProductFurn/>
                </PrivateRoute>
        }/> 
        <Route path='/productFitness/:id' element={
                <PrivateRoute>
                    <SingleProductFurn/>
                </PrivateRoute>
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
        <PrivateRoute>
            <Cart/>
        </PrivateRoute> 
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