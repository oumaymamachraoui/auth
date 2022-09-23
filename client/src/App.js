import './App.css';
import Navigation from './component/navigation/Navigation';
import {Route , Routes} from "react-router-dom"
import Home from './component/Home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profil from './pages/profil/Profil';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profil' element={<Profil/>} />
      </Routes>
    </div>
  );
}

export default App;
