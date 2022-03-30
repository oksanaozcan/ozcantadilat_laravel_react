import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import PostCard from "../../components/posts/PostCard";

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
            <PostCard key={item.id} item={item} />    
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