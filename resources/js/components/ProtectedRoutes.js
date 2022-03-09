import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem('x_xsrf_token') === null ? false : true;
  return isAuth ? <Outlet/> : <LoginPage/>
}

export default ProtectedRoutes;