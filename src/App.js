import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnAuthRouter from './routers/UnAuthRouter';


function App() {
  const {auth} = useContext(AuthContext);
  return (
    <div className="App">
      {auth ? <AuthRouter/> : <UnAuthRouter/>}
    </div>
  );
}

export default App;

