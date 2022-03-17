import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const PostDetailsPage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [images, setImages] = useState([]);
  let navigate = useNavigate();

  const show = () => {
    axios.get(`/api/posts/${postId}`)
    .then(res => {
      setPost(res.data.data);
      setImages(res.data.data.images);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    show()      
  }, []);

  const deletePost = () => {
    axios.delete(`/api/posts/${post.id}`)    
    navigate('/admin/posts');   
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

          <div>
            {
              images.map(img => (
                <div key={img.url}>
                  <img   
                   style={{ width: '100%', height: '20%' }}                           
                  src={img.url} 
                  alt={post.title}              
                />
                {/* <img                              
                  src={img.preview_url} 
                  alt={post.title}              
                />             */}
                </div>                
              ))
            }          
          </div>
          
          <div className="card">         
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{post.created_at}</h6>

              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              <p className="card-text">text</p>            
            </div>
          </div>
        </div>
        <div className="col align-self-end">
          <div className="d-flex w-75 mb-4 justify-content-around">
            <Link to={`/admin/posts/edit/${post.id}`} className="btn btn-primary btn-lg">Edit</Link>
            <button type="button" className="btn btn-danger btn-lg" onClick={deletePost}>Delete</button>
          </div>          
        </div>
      </div>
    </div>    
  )
}

export default PostDetailsPage;