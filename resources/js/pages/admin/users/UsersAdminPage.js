import axios from 'axios';
import {useState, useEffect} from 'react';
import UsersList from "../../../components/users/UsersList";
import UserForm from "../../../components/users/UserForm";

const UsersAdminPage = ({roles}) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get('/api/users')
    .then(res => {
      setUsers(res.data.data);
    })
  }
  
  useEffect(() => {
    getUsers()
  }, []);

  const deleteUser = (id) => {
    axios.delete(`/api/users/${id}`)
    .then(res => {})
    .catch(error => console.log(error.res))
  }

  return (
    <div className="container">
      <div className="row">
      <div className="col-6 col-md-4">
          Info
        </div>
        <div className="col-12 col-md-8">
          <UserForm getUsers={getUsers} roles={roles}/>
        </div>        
      </div>
      <div className="row">
        <div className="col-12">
          <UsersList users={users} deleteUser={deleteUser} getUsers={getUsers}/>
        </div>       
      </div>
      <div className="row align-items-end">        
        <div className="col-md-6 offset-md-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default UsersAdminPage;