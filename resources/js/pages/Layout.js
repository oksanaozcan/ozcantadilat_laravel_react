import {Link, Outlet, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BoxArrowRight } from "react-bootstrap-icons";

const Layout = () => {

  let navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    axios.post('/logout')
    .then(res => {
      navigate('/login');
    })
  }

  return (
    <div>     
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>         
          <li>
            <Link to="/login">Login</Link>
          </li>    
          <li>
            <Link to="/register">Register</Link>
          </li>    
          <li>
            <button onClick={onLogout} type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Logout">
              <BoxArrowRight className="mb-1" size={20}/> Logout  
            </button>
          </li>    
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;