import React from 'react'
import { Route, Routes } from 'react-router';
import LoginUser from '../components/loginUser/LoginUser';
// import Dashboard from '../pages/private/Dashboard';

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<LoginUser/>}>
               {/* <Route index element={<Product/>}/>
               <Route path="catalogue" element={<Catalogue/>}/> */}
           </Route>
       </Routes>
    )
}

export default AuthRouter;
