import "./App.css";
import Navigation from "./component/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profil from "./pages/profil/Profil";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/actions/users";
import { useEffect } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import AdminNav from "./component/navigation/AdminNav";

function App() {
  // const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const token = localStorage.getItem("token");
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(current());
  //   }
  // }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* {isAuth ? <Route path="/profil" element={<Profil />} /> : null} */}
        {/* <PrivateRoute  path="/profil" component={Profil}  /> */}
        <Route element={<PrivateRoute/>}>
          <Route path="/profil" element={<Profil/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
