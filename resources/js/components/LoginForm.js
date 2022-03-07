import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p>Sign in to start your session</p>
        <form>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email"/>           
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password"/>            
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Button</button> 
          </div>          
        </form>
        <p className="mb-1 mt-2">
          <Link to="forgotpassword">I forgot my password</Link>
        </p>
        <p className="mb-0 mt-2">
          <Link to="register" className="text-center">Register a new membership</Link>
        </p>
      </div>   
    </div>
  )
}

export default LoginForm;