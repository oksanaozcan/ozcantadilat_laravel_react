import {NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BoxArrowRight } from "react-bootstrap-icons";
import ReactTooltip from 'react-tooltip';

const NavigateMenu = ({isAuth, setIsAuth}) => {
  let navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    axios.post('/logout')
    .then(res => {
      localStorage.removeItem('x_xsrf_token');
      setIsAuth(false);
      navigate('/login');
    })
  }

  return (
    <>
    <nav>
        <ul className='d-flex'>
          <li className='m-3 p-3'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='m-3 p-3'>
            <NavLink to="/about">About</NavLink>
          </li>        
          {
            isAuth ?
            <>
              <li className='m-3 p-3'>
                <NavLink to="/profile">Profile</NavLink>
              </li>     
              <li className='m-3 p-3'>
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
            </> :
            <>
              <li className='m-3 p-3'>
                <NavLink to="/login">Login</NavLink>
              </li>    
              <li className='m-3 p-3'>
                <NavLink to="/register">Register</NavLink>
              </li>            
            </>
          }       
        </ul>
      </nav>
    </>
  )
}

export default NavigateMenu;