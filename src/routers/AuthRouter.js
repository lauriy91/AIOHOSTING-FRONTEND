import React from 'react'
import { Route, Routes } from 'react-router';
import LoginUser from '../components/loginUser/LoginUser';

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<LoginUser/>}>
           </Route>
       </Routes>
    )
}

export default AuthRouter;
