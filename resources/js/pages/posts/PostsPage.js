import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../../components/posts/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect (()=> {
    axios.post(`/api/posts`)
    .then(res => {
      setPosts(res.data.data)
    }) 

  }, [])

  return (
    <div className="container">    
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline w-50 d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" name='title' aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>      
      </div>  
      <div className="row">       
        {
          posts.map(item => (            
            <PostCard key={item.id} item={item} />    
          ))
        }                 
      </div>
      <div className="row mt-2">       
       
      </div>
    </div>
  )
}

export default PostsPage;