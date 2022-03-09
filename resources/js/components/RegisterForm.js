import { Link, useNavigate } from "react-router-dom";
import { Envelope, Lock, Person } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios";

const RegisterForm = ({setIsAuth}) => {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const submitRegister = (e) => {
    e.preventDefault();

    let data = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      password_confirmation: password_confirmation.trim()
    }

    if (data.name !== '' && data.email !== '' && data.password !== '' && data.password === data.password_confirmation) {
      axios.get('/sanctum/csrf-cookie')
      .then(response => {
        axios.post('/register', data)
        .then(res => {
          localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
          setIsAuth(true);
          navigate('/');          
        })
        .catch(error => error.res)      
      })
      .catch(error => console.log(error.response));
    } else {
      console.log('name, email, password must be required && password must be confirmed')
    } 
  }

  return (
    <div className="card">
      <div className="card-body">
        <p>Register a new membership</p>
        <form onSubmit={submitRegister}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Full Name" name="name" value={name} onChange={e => setName(e.target.value)}/>   
            <span className="input-group-text">
              <Person className="text-muted"/>                    
            </span>        
          </div>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>   
            <span className="input-group-text">
              <Envelope className="text-muted"/>            
            </span>        
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>  
            <span className="input-group-text">
              <Lock className="text-muted"/>            
            </span>            
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>  
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