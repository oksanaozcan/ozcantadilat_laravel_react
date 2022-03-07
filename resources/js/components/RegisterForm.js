import { Link } from "react-router-dom";
import { Envelope, Lock, Person, Persone } from "react-bootstrap-icons";

const RegisterForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p>Register a new membership</p>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Full Name"/>   
            <span className="input-group-text">
              <Person className="text-muted"/>                    
            </span>        
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email"/>   
            <span className="input-group-text">
              <Envelope className="text-muted"/>            
            </span>        
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password"/>  
            <span className="input-group-text">
              <Lock className="text-muted"/>            
            </span>            
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Confirm Password"/>  
            <span className="input-group-text">
              <Lock className="text-muted"/>            
            </span>            
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign Up</button> 
          </div>          
        </form>       
        <p className="mb-0 mt-2">
          <Link to="/login" className="text-center">I already have a membership</Link>
        </p>
      </div>   
    </div>
  )
}

export default RegisterForm;