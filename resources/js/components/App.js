import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NoMatchPage from "../pages/NoMatchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useState, useEffect } from "react";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('x_xsrf_token') === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  },[isAuth])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isAuth={isAuth} setIsAuth={setIsAuth}/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />          
          <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />} />          
          <Route path="register" element={<RegisterPage setIsAuth={setIsAuth} />} />          
          {/* <Route path="forgotpassword" element={<ForgorPasswordPage />} />           */}
          <Route element={<ProtectedRoutes/>}>
            <Route path="profile" element={<ProfilePage/>}/>
          </Route>
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
