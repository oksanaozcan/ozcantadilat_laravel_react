import { NavLink } from "react-router-dom";

const Asidebar = () => {
  return(
    <aside className="main-sidebar layout-fixed">
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to='/admin' className="nav-link text-light">Dashboard</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to='images' className="nav-link text-light">Images</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to='posts' className="nav-link text-light">Posts</NavLink>
          </li>    
          <li className="nav-item">
            <NavLink to='users' className="nav-link text-light">Users</NavLink>
          </li>                
          <li className="nav-item">
            <NavLink to='comments' className="nav-link text-light">Comments</NavLink>
          </li>         
        </ul>
      </nav>
     
    </aside>
  )
}

export default Asidebar;