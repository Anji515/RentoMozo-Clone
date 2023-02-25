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