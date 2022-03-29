import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(null);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

  const handlePageChange = (pageNumber=1) => {
    axios.get(`/api/posts?page=${pageNumber}`)
      .then(res => {
        setPosts(res.data.data);
        setActivePage(res.data.meta.current_page);
        setItemsCountPerPage(res.data.meta.per_page);
        setTotalItemsCount(res.data.meta.total);
      })
      .catch(({ message }) => {
        console.error(message);
      });
  }

  useEffect(() => {
    handlePageChange();
  }, [])
  
  return (
    <div className="container">      
      <div className="row">       
        {
          posts.map(item => (            
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mt-2">
              <Link to={`${item.id}`}>              
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
      <div className="row mt-2">       
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}          
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  )
}

export default PostsPage;