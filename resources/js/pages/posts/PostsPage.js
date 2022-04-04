import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import PostCard from "../../components/posts/PostCard";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(null);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(null);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [searchText, setSearchText] = useState(''); 

  const filterPosts = (e) => {
    e.preventDefault();
    let data = {
      title: searchText.trim()
    }    
    if (data.title !== '') {
      handlePageChange(1, data);
    }
  }

  const handlePageChange = (pageNumber=activePage, data=null) => { 
    axios.post(`/api/posts?page=${pageNumber}`, data)
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
        <div className="col">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline w-50 d-flex" onSubmit={filterPosts}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" name='title' value={searchText} onChange={(e) => setSearchText(e.target.value)} aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>      
      </div>  
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
          onChange={(activePage) => handlePageChange(activePage)}
          itemClass="page-item"
          linkClass="page-link"          
        />   
      </div>
    </div>
  )
}

export default PostsPage;