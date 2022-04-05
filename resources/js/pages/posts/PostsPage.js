import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowClockwise } from "react-bootstrap-icons";
import Pagination from "react-js-pagination";
import PostCard from "../../components/posts/PostCard";
import ReactTooltip from 'react-tooltip';

const PostsPage = ({categories}) => {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
 
  const [data, setData] = useState({
    data: [],
    meta: {
      current_page: 0,
      per_page: 0,
      total: 0
    }
  });

  const resetFilters = (e) => {
    e.preventDefault();
    setTitle('');
    setCategoryId('');
    getData();
  }
  
  const getData = async (pageNumber=1, filters=null) => {
    await axios.post(`/api/posts?page=${pageNumber}`, filters)
    .then(res => {
      setData(res.data)            
    })
    .catch(err => console.log(err.res))
  }

  const onSubmitFilter = async (pageNumber) => {   
    if (title == '' && categoryId == '') {
      getData(pageNumber)
    } else {     
      let filters = {
        title: title,
        category_id: categoryId
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
            <form className="form-inline w-75 d-flex" 
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitFilter(data.meta.current_page)}}>
              <input className="form-control m-1 w-50" type="search" placeholder="Search" name='title' aria-label="Search"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <select className="form-select w-25 m-1" 
                name='category_id' 
                value={categoryId} 
                onChange={(e) => setCategoryId(e.target.value)}
              >         
                <option value={''}>No category</option>
                {
                  categories.map(item => (
                    <option key={item.id} value={item.id}>{item.title}</option>
                  ))
                }      
              </select> 
              <button className="btn btn-outline-success m-1" type="submit">Search</button>
            </form>
            <button type="button" data-tip="reset filters" className="btn btn-outline-dark"
              onClick={resetFilters}
            ><ArrowClockwise/><ReactTooltip /></button>
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