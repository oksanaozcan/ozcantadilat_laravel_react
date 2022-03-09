import LogoLink from "../components/LogoLink";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = ({setIsAuth}) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">        
          <LogoLink/>     
          <RegisterForm setIsAuth={setIsAuth}/>          
        </div>
      </div>      
    </div>  
  )
}

export default RegisterPage;