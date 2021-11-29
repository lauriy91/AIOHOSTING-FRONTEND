import React from 'react'
import { Route, Routes } from 'react-router';
import LoginUser from '../components/loginUser/LoginUser';
import {Home} from '../components/vistas/Home'
import {DescripcionAlojamiento} from '../components/vistas/DescripcionAlojamiento'
import {ResultadosBusqueda} from '../components/vistas/ResultadosBusqueda'


const Unauthrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginUser/>}/>
            <Route path="/descripcion" element={<DescripcionAlojamiento/>}/>
            <Route path="/resultado" element={<ResultadosBusqueda/>}/>
        </Routes>
    )
}


export default Unauthrouter;
