import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SinglePostPage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [images, setImages] = useState({});

  const getPost = () => {
    axios.get(`/api/posts/${postId}`)
    .then(res => {
      setPost(res.data.data)
      setImages(res.data.data.images[0])
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getPost();
  }, []);

  return(
    <div className="container">
      <h1 className="text-center">{post.title}</h1>
      <h4 className="text-center">Created At {post.created_at}; 444 comments</h4>
      <img src={images.url} alt={post.title} className="w-100" style={{ height: '30rem', objectFit: 'cover', alignSelf: 'center' }}/>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <div className="dropdown-divider"></div>
      <h4>Comments:</h4>
    </div>
  )
}

export default SinglePostPage;