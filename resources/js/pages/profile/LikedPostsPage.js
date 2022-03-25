import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LikedPostsPage = () => {
  const [likedPosts, setLikedPosts] = useState([]);

  const getLikedPosts = () => {
    axios.get('/api/profile/likedposts')
    .then(res => {
      setLikedPosts(res.data.data);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getLikedPosts();
  }, [])

  return (
    <div className="container">
      <h1>Liked Posts</h1>
      <div className="list-group">  
      {
        likedPosts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`} className="list-group-item list-group-item-action">
            <img style={{ width: '60px', height: '60px' }} src={post.images[0].preview_url}/> {post.title}
          </Link>
        ))
      }             
      </div>
    </div>
  )
}

export default LikedPostsPage;