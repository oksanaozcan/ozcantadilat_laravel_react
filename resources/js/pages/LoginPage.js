import LogoLink from "../components/LogoLink";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">        
          <LogoLink/>     
          <LoginForm/>          
        </div>
      </div>      
    </div>  
  )
}

export default LoginPage;