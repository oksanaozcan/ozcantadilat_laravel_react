import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

const TagEditForm = () => {
  const {tagId} = useParams();
  let navigate = useNavigate();
  const [title, setTitle] = useState('');

  const getTag = () => {
    axios.get(`/api/admin/tags/${tagId}`)
    .then(res => {
      setTitle(res.data.data.title);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getTag();
  }, []);  

  const update = (e) => {
    e.preventDefault();
    let data = {
      title: title.trim()
    }
    if (data.title !== '') {
      axios.patch(`/api/admin/tags/${tagId}`, data)
    .then(res => {
      navigate('/admin/tags');
    })
    .catch(error => console.log(error.res))
    } else {
      console.log('title have to be required');
    }  
  }

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Edit Tag</h5>
        <form onSubmit={update}>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Title of Tag" name="title" value={title} onChange={e => setTitle(e.target.value)}/>       
          </div>
          <div className="d-block">
          <button type="submit" className="btn btn-primary btn-lg btn-block mt-1 w-100">Submit</button> 
          </div>                   
        </form>    
        
      </div>
    </div>   
  )
}

export default TagEditForm;