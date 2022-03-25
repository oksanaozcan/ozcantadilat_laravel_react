import axios from "axios";
import { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('/api/posts')
    .then(res => {
      setPosts(res.data.data);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">      
      <div className="row">       
        {
          posts.map(item => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mt-2">
              <div className="card">
                <img className="card-img-top" src={item.images[0].preview_url} alt={item.title}/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>      
          ))
        }                 
      </div>
    </div>
  )
}

export default PostsPage;