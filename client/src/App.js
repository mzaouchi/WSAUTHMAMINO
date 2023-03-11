import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Mamino from './Components/Mamino';
import NavAuth from './Components/NavAuth';
import PrivateRoute from './Components/PrivateRoute';
import Profil from './Components/Profil';
import Register from './Components/Register';

function App() {
  return (
    <div>
        <NavAuth/>
        <Mamino/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        </Routes>
    </div>
  );
}

export default App;
