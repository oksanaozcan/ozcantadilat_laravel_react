import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const TagDetailsPage = () => {
  const {tagId} = useParams();
  const [tag, setTag] = useState({});
  let navigate = useNavigate();

  const show = () => {
    axios.get(`/api/admin/tags/${tagId}`)
    .then(res => {
      setTag(res.data.data);
    })
    .catch(error => console.log(error.res))
  }

  const deleteTag = () => {
    axios.delete(`/api/admin/tags/${tag.id}`)    
    navigate('/admin/tags');   
  }

  useEffect(() => {
    show()
  }, []);

  return (
    <div className="container">
      <div className="row page">
        <div className="col align-self-start">
          <h4 className="pt-1">List of posts with this tags</h4>
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
              <h5 className="card-title">{tag.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{tag.created_at}</h6>
              <p className="card-text">text</p>
              <p className="card-text">text</p>            
            </div>
          </div>
        </div>
        <div className="col align-self-end">
          <div className="d-flex w-75 mb-4 justify-content-around">
            <Link to={`/admin/tags/edit/${tag.id}`} className="btn btn-primary btn-lg">Edit</Link>
            <button type="button" className="btn btn-danger btn-lg" onClick={deleteTag}>Delete</button>
          </div>          
        </div>
      </div>
    </div>    
  )
}

export default TagDetailsPage;