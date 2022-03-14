import {Outlet} from 'react-router-dom';
import MyProSidebar from '../../components/MyProSidebar';

const AdminLayout = () => {    
  return (
    <div className='container'>
      <div className="row page">
        <div className="col-2">
          <MyProSidebar/>
        </div>      
        <div className="col-10">        
          <Outlet/>        
        </div>
    </div>    
    </div>
    
  )
}

export default AdminLayout;