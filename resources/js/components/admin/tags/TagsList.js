import { Eye, Pencil, Trash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TagsList = ({tags, deleteTag, getTags}) => {

  const onDeleteTag = (id) => {
    deleteTag(id);
    getTags();
  }
  
  return(
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Tag</th>
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
            tags.map(item => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.created_at}</td>
                <td>5555</td>
                <td>4444</td>
                <td><Link to={`${item.id}`}><Eye size={20} color="#6610f2"/></Link></td>
                <td><Link to={`edit/${item.id}`}><Pencil size={20} color="#6610f2"/></Link></td>
                <td><button onClick={() => onDeleteTag(item.id)} type="button" className="btn btn-link"><Trash size={20} color="#dc3545"/></button></td>
              </tr>   
            ))
          }
          
        </tbody>
      </table>
    </>
  )
}

export default TagsList;