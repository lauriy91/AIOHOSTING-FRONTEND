import React from 'react'
import { Route, Routes } from 'react-router';
// import LoginUser from '../components/loginUser/LoginUser';
import { Home } from '../components/vistas/Home';

const AuthRouter = () => {
    return (
       <Routes >
           {/* <Route path="/" element={<LoginUser/>}/>, */}
           <Route path="/" element={<Home/>}/>
       </Routes>
    )
}

export default AuthRouter;
