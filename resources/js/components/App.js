import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NoMatchPage from "../pages/NoMatchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useState, useEffect } from "react";
import ProfilePage from "../pages/ProfilePage";
import GalleryPage from "../pages/GalleryPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Navbar from "./Navbar";

const App = () => {
  const location = useLocation();

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
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <TransitionGroup component={null}>      
        <CSSTransition key={location.key} classNames="page" timeout={600} >
          <Routes>
            <Route path="/" element={<Layout/>}>    
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />          
              <Route path="gallery" element={<GalleryPage />} />          
              <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />} />          
              <Route path="register" element={<RegisterPage setIsAuth={setIsAuth} />} />          
              {/* <Route path="forgotpassword" element={<ForgorPasswordPage />} />           */}
              <Route element={<ProtectedRoutes/>}>
                <Route path="profile" element={<ProfilePage/>}/>
              </Route>
              <Route path="*" element={<NoMatchPage />} />         
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
