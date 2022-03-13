
import { Outlet } from "react-router-dom";
import HomePage from "../pages/LoginPage";

const AdminProtectedRoutes = ({isAdmin}) => {
  return isAdmin ? <Outlet/> : <HomePage/>
}

export default AdminProtectedRoutes;