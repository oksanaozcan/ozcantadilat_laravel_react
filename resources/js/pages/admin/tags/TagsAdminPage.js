import axios from 'axios';
import {useState, useEffect} from 'react';
import TagsList from "../../../components/admin/tags/TagsList";
import TagForm from "../../../components/admin/tags/TagForm";

const TagsAdminPage = () => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    axios.get('/api/admin/tags')
    .then(res => {
      setTags(res.data.data);
    })
  }
  
  useEffect(() => {
    getTags()
  }, []);

  const deleteTag = (id) => {
    axios.delete(`/api/admin/tags/${id}`)
    .then(res => {})
    .catch(error => console.log(error.res))
  }

  return (
    <div className="container">
      <div className="row">
      <div className="col-6 col-md-4">
          Info
        </div>
        <div className="col-12 col-md-8">
          <TagForm getTags={getTags}/>
        </div>        
      </div>
      <div className="row">
        <div className="col-12">
          <TagsList tags={tags} deleteTag={deleteTag} getTags={getTags}/>
        </div>       
      </div>
      <div className="row align-items-end">        
        <div className="col-md-6 offset-md-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TagsAdminPage;