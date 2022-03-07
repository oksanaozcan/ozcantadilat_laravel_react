import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NoMatchPage from "../pages/NoMatchPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />          
          <Route path="login" element={<LoginPage />} />          
          <Route path="register" element={<RegisterPage />} />          
          {/* <Route path="forgotpassword" element={<ForgorPasswordPage />} />           */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
