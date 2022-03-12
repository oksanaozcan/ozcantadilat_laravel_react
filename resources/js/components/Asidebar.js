
const Asidebar = () => {
  return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4 layout-fixed">
      <ul className="nav nav-treeview">
        <li className="nav-item">
          <a href="./index.html" className="nav-link active text-light">
            <i className="far fa-circle nav-icon"></i>
            <p>Dashboard v1</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index2.html" className="nav-link text-light">
            <i className="far fa-circle nav-icon"></i>
            <p>Dashboard v2</p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./index3.html" className="nav-link text-light">
            <i className="far fa-circle nav-icon"></i>
            <p>Dashboard v3</p>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Asidebar;