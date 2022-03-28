import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios.get('/api/profile/comments')
    .then(res => {
      setComments(res.data.data);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <div className="container">
      <h1>My Comments: </h1>
      <div className="list-group">  
      {
        comments.map(cmt => (
          <li key={cmt.id} className="list-group-item">
            <small>{cmt.created_at}</small>
            <div>{cmt.message}</div>
            <div className="dropdown-divider"></div>
            <div>
              <Link className="btn btn-link" to={`/posts/${cmt.post_id}`}>Go to post: {cmt.post_title}</Link>
            </div>
          </li>          
        ))
      }             
      </div>
    </div>
  )
}

export default CommentsPage;