import {Link, Outlet, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BoxArrowRight } from "react-bootstrap-icons";
import ReactTooltip from 'react-tooltip';

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
            <div>
            <button 
              data-tip 
              data-for='logout-btn'  
              onClick={onLogout} type="button" 
              className="btn btn-secondary"
            >
              <BoxArrowRight className="mb-1" size={20}/> Logout 
            </button>
            <ReactTooltip id='logout-btn' place="bottom"><span>Logout</span></ReactTooltip>
            </div>
            
          </li>    
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;