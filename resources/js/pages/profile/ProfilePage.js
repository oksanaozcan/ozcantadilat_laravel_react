import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [likedPosts, setLikedPosts] = useState(0);
  const [comments, setComments] = useState(0);

  const getActivityInfo = () => {
    axios.get('/api/profile')
    .then(res => {
      setLikedPosts(res.data.likedPosts);
      setComments(res.data.comments);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getActivityInfo();
  }, [])

  return (
    <div className="container">
      <h6>Liked Posts: {likedPosts}</h6>
      <h6>Comments: {comments}</h6>
      <div>
      <Link to="likedposts" className="link-secondary">Show All Liked Posts</Link> | 
      <Link to="comments" className="link-secondary">Show All My Comments</Link>
      </div>      
    </div>
  )
}

export default ProfilePage;