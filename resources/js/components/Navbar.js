import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BoxArrowRight } from "react-bootstrap-icons";

const Navbar = ({isAuth, setIsAuth, setIsAdmin, isAdmin}) => {
  let navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    axios.post('/logout')
    .then(res => {
      localStorage.removeItem('x_xsrf_token');      
      setIsAuth(false);
      localStorage.removeItem('role');
      setIsAdmin(false);
      navigate('/login');
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to='/'>Ozcan tadilat</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
            </li>      
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/gallery">Gallery</NavLink>
            </li>    
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/info">Info</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/posts">Posts</NavLink>
            </li>    
            {
              isAuth ?
              <>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User Name
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to='/profile'>Profile</NavLink></li>
                <li><NavLink className="dropdown-item" to='/profile'>Settings</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <div>
                    <button onClick={onLogout} type="button" className="dropdown-item">
                      <BoxArrowRight className="mb-1" size={20}/> Logout 
                    </button>                   
                  </div>            
                </li>
              </ul>
              </li>               
              </> :
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                </li>
              </>

            }           
            {
              isAdmin && 
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/admin">Admin Panel</NavLink>
              </li>
            }          
          </ul>          
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;