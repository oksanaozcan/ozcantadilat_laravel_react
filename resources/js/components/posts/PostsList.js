import { Eye, Pencil, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PostsList = ({posts, deletePost, getPosts}) => {

  const onDeletePost = (id) => {
    deletePost(id);
    getPosts();
  }
  
  return(
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Prev_img</th>           
            <th scope="col">Title</th>           
            <th scope="col">Created_at</th>           
            <th scope="col">N# posts</th>           
            <th scope="col">N# images</th>           
            <th scope="col">Details</th>           
            <th scope="col">Edit</th>           
            <th scope="col">Delete</th>           
          </tr>
        </thead>
        <tbody>
          {
            posts.map(item => (
              <tr key={item.id}>
                <th>
                  {
                    item.images.map(img => (
                      <img
                        style={{ width: '50px', height: '50px' }} 
                        key={img.preview_url}                           
                        src={img.preview_url} 
                        alt={item.title}              
                      />      
                    ))
                  }
                </th>               
                <th>{item.title}</th>               
                <td>{item.created_at}</td>
                <td>5555</td>
                <td>4444</td>
                <td><Link to={`${item.id}`}><Eye size={20} color="#6610f2"/></Link></td>
                <td><Link to={`edit/${item.id}`}><Pencil size={20} color="#6610f2"/></Link></td>
                <td><button onClick={() => onDeletePost(item.id)} type="button" className="btn btn-link"><Trash size={20} color="#dc3545"/></button></td>
              </tr>   
            ))
          }
          
        </tbody>
      </table>
    </>
  )
}

export default PostsList;