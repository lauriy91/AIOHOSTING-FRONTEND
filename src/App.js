import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnAuthRouter from './routers/UnAuthRouter';
import { Home } from './components/vistas/Home';

function App() {
  
  {
  const {auth} = useContext(AuthContext);
    
    <div className="App">
      {auth ? <AuthRouter/> : <UnAuthRouter/>}
    </div>
  }

  return (

    <>
    <Home/>
    {/* <DescripcionAlojamiento/> */}
    </>    

  );
}

export default App;

