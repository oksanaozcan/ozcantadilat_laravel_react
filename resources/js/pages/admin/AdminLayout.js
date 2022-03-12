import {Outlet} from 'react-router-dom';
import Asidebar from '../../components/Asidebar';

const AdminLayout = () => {    
  return (

    <div className="container">
      <div className="row mt-1">
        <div className="col-2 bg-dark text-light">
          <Asidebar/>
        </div>
        <div className="col">
          <Outlet/>
        </div>    
      </div>  
    </div>
  );
}

export default AdminLayout;