import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

const SinglePostPage = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const [images, setImages] = useState({});
  const [comments, setComments] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const getPost = () => {
    axios.get(`/api/posts/${postId}`)
    .then(res => {
      setPost(res.data.data)
      setImages(res.data.data.images[0])
      setComments(res.data.data.comments)
      setRelatedPosts(res.data.data.related_posts)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getPost();
  }, []);

  return(
    <div className="container">
      <h1 className="text-center">{post.title}</h1>
      <h4 className="text-center">Created At {post.created_at} | {comments.length ? comments.length : 'not'} comments</h4>
      <img src={images.url} alt={post.title} className="w-100" style={{ height: '30rem', objectFit: 'cover', alignSelf: 'center' }}/>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <div className="dropdown-divider"></div>
    
      <h4>Comments:</h4>
      <h5>There will comment chat block</h5>
      <h5>There will comment chat block</h5>
      <h5>There will comment chat block</h5>

      <div className="row">

      {
        relatedPosts.map(item => (            
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mt-2">
            <Link to={`/posts/${item.id}`}>              
              <div className="card">
                <img style={{ width: '100%', height: '250px', objectFit: 'cover' }} className="card-img-top" src={item.images[0].url} alt={item.title}/>
                <div className="card-body">
                  <div className="d-flex justify-content-end">  
                    <small className="bg-secondary text-white p-1 rounded">{item.category_id}</small>                                                                                 
                  </div>                   
                  <h5 className="card-title">{item.title}</h5>                       
                  <p className="card-text">{item.content}</p>       
                  <div className="d-flex">
                    {
                      item.tags.map(tag => (  
                        <div key={tag.id} className='m-1'>
                          <small className="bg-info text-white p-1 rounded"># {tag.title}</small> 
                        </div>                                                  
                      ))
                    }
                  </div>                                                
                </div>      
              </div>      
            </Link>                       
          </div>               
        ))
        }   

      </div>
    </div>
  )
}

export default SinglePostPage;