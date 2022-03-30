import axios from "axios";
import { useEffect, useState } from "react";
import { Chat, Heart, HeartFill, Share } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import PostCard from "../../components/posts/PostCard";
import ReactTooltip from 'react-tooltip';

const SinglePostPage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [images, setImages] = useState({});
  const [comments, setComments] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const getPost = () => {
    axios.get(`/api/posts/${postId}`)
    .then(res => {
      setPost(res.data.data)
      setImages(res.data.data.images[0])
      setComments(res.data.data.comments)
      setRelatedPosts(res.data.data.related_posts)
      setLikes(res.data.data.likes)
      setCurrentUser(res.data.data.current_user)
    })
    .catch(err => console.log(err.message))
  }

  const toggleLike = (e) => {
    e.preventDefault();

    axios.post(`/api/posts/${post.id}/like`)
    .then(res => {
      getPost()    
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getPost();
  }, []);

  return(
    <div className="container">
      <h1 className="text-center">{post.title}</h1>
      <h4 className="text-center">Created At {post.created_at} | {comments.length ? comments.length : 'not'} comments</h4>
      <img src={images.url} alt={post.title} className="w-100" style={{ height: '30rem', objectFit: 'cover', alignSelf: 'center' }}/>
      <div className="dropdown-divider"></div>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

      <div className="dropdown-divider"></div>
      <div className="row justify-content-around">        
        <div className="col col-auto" data-tip="like">
          <button type="submit" className="btn btn-link" onClick={toggleLike}>
            {
              likes.find(like => like.user_id == currentUser) ?
                <HeartFill color="red" size={20} /> :
                <Heart size={20} />    
            }     
            <ReactTooltip/>{likes.length}     
            </button>
        </div>        
        <div className="col col-auto"><Chat size={20} data-tip="add comment"/><ReactTooltip /> {comments.length}</div>
        <div className="col col-auto"><Share size={20} data-tip="share"/><ReactTooltip /></div>
      </div>      
      <div className="dropdown-divider"></div>
    
      <h4>Comments:</h4>
      <h5>There will comment chat block</h5>
      <h5>There will comment chat block</h5>
      <h5>There will comment chat block</h5>

      <div className="row">

      {
        relatedPosts.map(item => (            
          <PostCard key={item.id} item={item} /> 
        ))
        }   

      </div>
    </div>
  )
}

export default SinglePostPage;