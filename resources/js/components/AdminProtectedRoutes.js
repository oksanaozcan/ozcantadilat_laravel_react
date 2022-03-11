
import { Outlet } from "react-router-dom";
import DashboardPage from "../pages/admin/DashboardPage";
import HomePage from "../pages/LoginPage";

const AdminProtectedRoutes = ({isAdmin}) => {
  return isAdmin ? <Outlet/> : <HomePage/>
}

export default AdminProtectedRoutes;