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
import UsersAdminPage from "../pages/admin/UsersAdminPage";
import CommentsAdminPage from "../pages/admin/CommentsAdminPage";
import CategoriesAdminPage from "../pages/admin/categories/CategoriesAdminPage";
import CategoryDetailsPage from "../pages/admin/categories/CategoryDetailsPage";
import CategoryEditPage from "../pages/admin/categories/CategoryEditPage";
import TagsAdminPage from "../pages/admin/tags/TagsAdminPage";
import TagDetailsPage from "../pages/admin/tags/TagDetailsPage";
import TagEditPage from "../pages/admin/tags/TagEditPage";
import PostsPage from "../pages/PostsPage";
import PostsAdminPage from "../pages/admin/posts/PostsAdminPage";
import PostEditPage from "../pages/admin/posts/PostEditPage";
import PostDetailsPage from "../pages/admin/posts/PostDetailsPage";
import PostCreatePage from "../pages/admin/posts/PostCreatePage";

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
              <Route path="posts" element={<PostsPage />} />          
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
                  <Route path="users" element={<UsersAdminPage/>}/>
                  <Route path="comments" element={<CommentsAdminPage/>}/>
                  <Route path="categories">
                    <Route index element={<CategoriesAdminPage/>}/>
                    <Route path=":categoryId" element={<CategoryDetailsPage/>}/>
                    <Route path="edit/:categoryId" element={<CategoryEditPage/>}/>
                  </Route>
                  <Route path="tags">
                    <Route index element={<TagsAdminPage/>}/>
                    <Route path=":tagId" element={<TagDetailsPage/>}/>
                    <Route path="edit/:tagId" element={<TagEditPage/>}/>
                  </Route>    
                  <Route path="posts">
                    <Route index element={<PostsAdminPage/>}/>
                    <Route path="create" element={<PostCreatePage/>}/>
                    <Route path=":postId" element={<PostDetailsPage/>}/>
                    <Route path="edit/:postId" element={<PostEditPage/>}/>
                  </Route>                     
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
