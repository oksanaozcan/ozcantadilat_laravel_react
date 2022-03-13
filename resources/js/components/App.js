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
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import AdminLayout from "../pages/admin/AdminLayout";
import DashboardPage from "../pages/admin/DashboardPage";
import ImagesAdminPage from "../pages/admin/ImagesAdminPage";
import PostsAdminPage from "../pages/admin/PostsAdminPage";
import UsersAdminPage from "../pages/admin/UsersAdminPage";
import CommentsAdminPage from "../pages/admin/CommentsAdminPage";
import CategoriesAdminPage from "../pages/admin/CategoriesAdminPage";
import TagsAdminPage from "../pages/admin/TagsAdminPage";

const App = () => {
  const location = useLocation();

  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('x_xsrf_token') === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  },[isAuth])

  const checkUserRole = (role) => {
    if (role == 0) {      
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }  

  useEffect(() => {
    if (localStorage.getItem('role') === '0') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  },[isAdmin])

  return (
    <>     
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} isAdmin={isAdmin}/>
      <TransitionGroup component={null}>      
        <CSSTransition key={location.key} classNames="page" timeout={600} >
          <Routes>
            <Route path="/" element={<Layout/>}>    
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />          
              <Route path="gallery" element={<GalleryPage />} />          
              <Route path="login" element={<LoginPage setIsAuth={setIsAuth} checkUserRole={checkUserRole}/>} />          
              <Route path="register" element={<RegisterPage setIsAuth={setIsAuth} />} />          
              {/* <Route path="forgotpassword" element={<ForgorPasswordPage />} />           */}
              <Route element={<ProtectedRoutes/>}>
                <Route path="profile" element={<ProfilePage/>}/>
              </Route>
              <Route element={<AdminProtectedRoutes isAdmin={isAdmin}/>}>               
                <Route path='admin' element={<AdminLayout/>}>
                  <Route index element={<DashboardPage/>}/>
                  <Route path="images" element={<ImagesAdminPage/>}/>
                  <Route path="posts" element={<PostsAdminPage/>}/>
                  <Route path="users" element={<UsersAdminPage/>}/>
                  <Route path="comments" element={<CommentsAdminPage/>}/>
                  <Route path="categories" element={<CategoriesAdminPage/>}/>
                  <Route path="tags" element={<TagsAdminPage/>}/>
                </Route>               
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
