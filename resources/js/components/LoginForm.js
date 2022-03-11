import { Link } from "react-router-dom";
import { Envelope, Lock } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios";

const LoginForm = ({setIsAuth, checkUserRole}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = (e) => {
    e.preventDefault();

    let data = {
      email: email.trim(),
      password: password.trim()
    }

    if (data.email !== '' && data.password !== '') {
      axios.get('/sanctum/csrf-cookie')
      .then(response => {
        axios.post('/login', data)
        .then(res => {
          localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
          setIsAuth(true)
          setEmail('');
          setPassword('');
          axios.get('/api/user')
          .then(user => {
            console.log(user)
            localStorage.setItem('role', user.data.role)
            checkUserRole(localStorage.getItem('role'))
          })
          .catch(er =>er.user)
        })
        .catch(error => error.res)      
      })
      .catch(error => console.log(error.response));
    } else {
      console.log('email && password must be required!')
    } 
  }

  return (
    <div className="card">
      <div className="card-body">
        <p>Sign in to start your session</p>
        <form onSubmit={submitLogin}>
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign In</button> 
          </div>          
        </form>
        <p className="mb-1 mt-2">
          <Link to="/forgotpassword">I forgot my password</Link>
        </p>
        <p className="mb-0 mt-2">
          <Link to="/register" className="text-center">Register a new membership</Link>
        </p>
      </div>   
    </div>
  )
}

export default LoginForm;