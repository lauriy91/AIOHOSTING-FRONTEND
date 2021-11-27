import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnAuthRouter from './routers/UnAuthRouter';
import {DescripcionAlojamiento} from './components/vistas/DescripcionAlojamiento'

function App() {
  
  {/*}
  const {auth} = useContext(AuthContext);
    
    <div className="App">
      {auth ? <AuthRouter/> : <UnAuthRouter/>}      
    </div>
  {*/}

  return (

    <>
    <DescripcionAlojamiento/>
    </>    

  );
}

export default App;

