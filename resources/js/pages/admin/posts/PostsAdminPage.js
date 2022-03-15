import axios from 'axios';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Plus } from 'react-bootstrap-icons';
import PostsList from "../../../components/posts/PostsList";

const PostsAdminPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('/api/posts')
    .then(res => {
      setPosts(res.data.data);
    })
  }
  
  useEffect(() => {
    getPosts()
  }, []);

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
    .then(res => {})
    .catch(error => console.log(error.res))
  }

  return (
    <div className="container">
      <div className="row mt-1">
        <div className="col-6 col-md-4">
          Info
        </div>
        <div className="col-12 col-md-8">
          <Link to='create'><button type='button' className='btn btn-success'><Plus size={20} color="#fff"/>Create New Post</button></Link>
        </div>        
      </div>
      <div className="row">
        <div className="col-12">
          <PostsList posts={posts} deletePost={deletePost} getPosts={getPosts}/>
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

export default PostsAdminPage;