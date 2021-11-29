import React from 'react'
import { Route, Routes } from 'react-router';
import Auth from '../pages/public/Auth';
import LoginUser from '../components/loginUser/LoginUser';
import {ResultadosBusqueda} from '../components/vistas/ResultadosBusqueda'
import { Home } from '../components/vistas/Home';

const UnAuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginUser/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/resultado" element={<ResultadosBusqueda/>}/>
        </Routes>
    )
}

export default UnAuthRouter;
