import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import PostCard from "../../components/posts/PostCard";

const PostsPage = () => {
  const [title, setTitle] = useState('');
 
  const [data, setData] = useState({
    data: [],
    meta: {
      current_page: 0,
      per_page: 0,
      total: 0
    }
  });
  
  const getData = async (pageNumber=1, filters=null) => {
    await axios.post(`/api/posts?page=${pageNumber}`, filters)
    .then(res => {
      setData(res.data)            
    })
    .catch(err => console.log(err.res))
  }

  const onSubmitFilter = async (pageNumber) => {
   
    if (title === '') {
      getData(pageNumber)
    } else {     
      let filters = {
        title: title
      }
      getData(pageNumber, filters)
    }
  }

  useEffect(() => {
    getData();
  }, [])
   
  return (
    <div className="container">    
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline w-50 d-flex" 
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitFilter(data.meta.current_page)}}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" name='title' aria-label="Search"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </div>      
      </div>  
      <div className="row">       
        {
          data.data ?

          data.data.map(item => (            
            <PostCard key={item.id} item={item} />    
          )) 
          :
          '...Loading...'
        }                 
      </div>
      <div className="row mt-2">      
        <div>
          <Pagination
            activePage={data.meta.current_page ? data.meta.current_page : 0}
            itemsCountPerPage={data.meta.per_page ? data.meta.per_page : 0 }
            totalItemsCount={data.meta.total ? data.meta.total : 0}
            onChange={(pageNumber) => {
              onSubmitFilter(pageNumber)
            }}
            pageRangeDisplayed={8}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First Page"
            lastPageText="Last Lage"
          />
        </div>       
      </div>
    </div>
  )
}

export default PostsPage;