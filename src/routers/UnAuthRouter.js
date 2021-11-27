import React from 'react'
import { Route, Routes } from 'react-router';
import Auth from '../pages/public/Auth';
import LoginUser from '../components/loginUser';

const UnAuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginUser/>}/>
            <Route path="/auth" element={<Auth/>}/>
        </Routes>
    )
}

export default UnAuthRouter;
