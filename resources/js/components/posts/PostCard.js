import { Chat, Heart, HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PostCard = ({item}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mt-2">
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
            <div className="dropdown-divider"></div>
            <div className="d-flex justify-content-between">
              <div>
                {
                  item.likes.find(like => like.user_id == item.current_user) ?
                  <HeartFill color="red"/> :
                  <Heart/> 
                }              
                {item.likes.length}
              </div>
              <div><Chat/> {item.comments}</div>
            </div>                                             
          </div>      
        </div>      
      </Link>                       
    </div>
  )
}

export default PostCard;

// className="col-sm-12 col-md-6 col-lg-4 mt-2"