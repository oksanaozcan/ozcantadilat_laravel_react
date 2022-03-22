import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

const UserEditForm = () => {
  const {userId} = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getUser = () => {
    axios.get(`/api/users/${userId}`)
    .then(res => {
      setName(res.data.data.name);
      setEmail(res.data.data.email);
    })
    .catch(error => console.log(error.res))
  }

  useEffect(() => {
    getUser();
  }, []);  

  const update = (e) => {
    e.preventDefault();
    let data = {
      name: name.trim(),
      email: email.trim()
    }
    if (data.name !== '' && data.email !== '') {
      axios.patch(`/api/users/${userId}`, data)
    .then(res => {
      navigate('/admin/users');
    })
    .catch(error => console.log(error.res))
    } else {
      console.log('Name or Email have to be required');
    }  
  }

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Edit User</h5>
        <form onSubmit={update}>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={e => setName(e.target.value)}/>       
          </div>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>       
          </div>
          <div className="d-block">
          <button type="submit" className="btn btn-primary btn-lg btn-block mt-1 w-100">Submit</button> 
          </div>                   
        </form>            
      </div>
    </div>   
  )
}

export default UserEditForm;