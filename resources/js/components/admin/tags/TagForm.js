import axios from 'axios';
import { useState } from 'react';

const TagForm = ({getTags}) => {
  const [title, setTitle] = useState('');

  const store = (e) => {
    e.preventDefault();

    let data = {
      title: title.trim()
    }

    if (data.title !== '') {
      axios.post('/api/admin/tags/store', data)
      .then(res => {
        setTitle('');
        getTags();
      })
      .catch(error => console.log(error.res))
    } else {
      console.log('error: title must be required');
    }

  }

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Create New Tag</h5>
        <form onSubmit={store}>
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

export default TagForm;