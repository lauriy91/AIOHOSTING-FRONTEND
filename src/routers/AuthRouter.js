import React from 'react'
import { Route, Routes } from 'react-router';
import {PanelAdmin} from '../components/vistas/PanelAdmin'

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<PanelAdmin/>}>
           </Route>
       </Routes>
    )
}


export default AuthRouter;
