import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Home/Login/Login";
import Navigation from "../components/Home/Navigation/Navigation";
import HomePage from "../components/Home/HomePage/HomePage";
import Register from "../components/Home/Register/Register";
import Footer from "../components/Home/Footer/Footer";
import style from "../src/App.module.css";
import Catalog from "../components/Home/Catalog/Catalog";
import Detail from "../components/Home/Detail/Detail";
import UserContext from "../contexts/uresContext";
import { useState } from "react";
import * as eventService from "../servises/eventService";
import Path from "../path/path";

function App() {
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const handleUser = async (email, password) => {
    const result = await eventService.login(email, password)
    setUser(result);

    navigate(Path.Home);

  };

  const handleUserRegister = async (email, password) => {
    const result = await eventService.register(email, password)
    setUser(result);

    navigate(Path.Home);

  };

  const valuesToProvide = {
    email: user.email,
    _id: user._id,
    accessToken: user.accessToken,
    authenticated: !!user.accessToken,
  }

  return (
    <UserContext.Provider value={valuesToProvide}>
      <div className={style.main}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login handleUser={handleUser} />} />
          <Route path="/register" element={<Register handleUserRegister={handleUserRegister} />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path={`/catalog/detail/:id`} element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
