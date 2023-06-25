import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authState } from '../Context/AuthContext';


function PrivateRoute({children}) {
    const {isAuth}=useContext(authState);

    if(!isAuth){
        return <Navigate to='/loginadmin' />
    }

    return children;
}

export default PrivateRoute;

function PrivateRouteUser({children}) {
    const {user}=useContext(authState);

    if(!user){
        alert('Please login first')
        return <Navigate to='/loginuser'/>
    }

    return children;
}

export {PrivateRouteUser};