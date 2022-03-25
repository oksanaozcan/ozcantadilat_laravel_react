import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [likedPosts, setLikedPosts] = useState(0);

  const getLikesCount = () => {
    axios.get('/api/profile')
    .then(res => {
      setLikedPosts(res.data.likedPosts);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getLikesCount();
  }, [])

  return (
    <div className="container">
      <h6>Liked Posts: {likedPosts}</h6>
      <div>
      <Link to="likedposts" className="link-secondary">Show All Liked Posts</Link>
      </div>      
    </div>
  )
}

export default ProfilePage;