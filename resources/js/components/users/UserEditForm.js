import axios from 'axios';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const UserEditForm = ({roles}) => {
  const {userId} = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const getUser = () => {
    axios.get(`/api/users/${userId}`)
    .then(res => {
      setName(res.data.data.name);
      setEmail(res.data.data.email);
      setRole(res.data.data.role);
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
      email: email.trim(),
      user_id: userId,
      role: role
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
          <div className="form-group mb-3">
            <input type="hidden" className="form-control" name="user_id" value={userId}/>       
          </div>

          <div className='form-group  mt-2 mb-3'>          
            <label className="form-label">Select Role</label>
            <select className="form-select" 
              name='role' 
              value={role} 
              onChange={e => setRole(e.target.value)}
            >               
              {
                roles.map((item,i) => (
                  <option key={uuidv4()} value={i}>{item}</option>
                ))
              }      
            </select> 
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