import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const UserDetailsPage = () => {
  const {userId} = useParams();
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const show = () => {
    axios.get(`/api/users/${userId}`)
    .then(res => {
      setUser(res.data.data);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    show()
  }, []);

  const deleteUser = () => {
    axios.delete(`/api/users/${user.id}`)    
    navigate('/admin/users');   
  }

  return (
    <div className="container">
      <div className="row page">
        <div className="col align-self-start">
          <h4 className="pt-1">List of posts with this category</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <nav aria-label="Page navigation example" className="mt-1">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col align-self-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.created_at}</h6>
              <p className="card-text">{user.email}</p>
              <p className="card-text">{user.role}</p>            
            </div>
          </div>
        </div>
        <div className="col align-self-end">
          <div className="d-flex w-75 mb-4 justify-content-around">
            <Link to={`/admin/users/edit/${user.id}`} className="btn btn-primary btn-lg">Edit</Link>
            <button type="button" className="btn btn-danger btn-lg" onClick={deleteUser}>Delete</button>
          </div>          
        </div>
      </div>
    </div>    
  )
}

export default UserDetailsPage;