import { Link } from "react-router-dom";

const CategoriesList = ({categories}) => {
  return(
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Category</th>
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
            categories.map(item => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.created_at.slice(0, 10)}</td>
                <td>5555</td>
                <td>4444</td>
                <td><Link to={`${item.id}`}>Show</Link></td>
                <td>btn</td>
                <td>btn</td>
              </tr>   
            ))
          }
          
        </tbody>
      </table>
    </>
  )
}

export default CategoriesList;