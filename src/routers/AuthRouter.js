import React from 'react'
import { Route, Routes } from 'react-router';
<<<<<<< HEAD
import {LoginUser} from '../loginUser/LoginUser';
=======
import LoginUser from '../components/loginUser/LoginUser';
// import Dashboard from '../pages/private/Dashboard';
>>>>>>> 17dc4ead46768759a65b4fe0bb8b70e8abbacd9b

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<LoginUser/>}>
           </Route>
       </Routes>
    )
}

export default AuthRouter;
