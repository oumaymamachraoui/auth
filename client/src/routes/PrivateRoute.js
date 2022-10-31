import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';


const PrivateRoute = ({children}) => {
    // const isAuth = useSelector((state)=> state.userReducer.isAuth)
//     const token = localStorage.getItem("token")
//     // let auth = {'token':true}
// return (
//     token ? <Outlet/> : <Navigate to='/login'/>
//   )
const load = useSelector((state) => state.userReducer.load);
const {user: isAuth} = useSelector((state) => state.userReducer.isAuth);
const token = localStorage.getItem("token")
return load ? <p>loooadi</p> : isAuth  ? children : <Navigate to="/" />;
}

export default PrivateRoute