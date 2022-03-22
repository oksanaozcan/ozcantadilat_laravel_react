import axios from 'axios';
import { useState } from 'react';

const UserForm = ({getUsers}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const store = (e) => {
    e.preventDefault();

    let data = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim()
    }

    if (data.title !== '' && data.email !== '') {
      axios.post('/api/users/store', data)
      .then(res => {
        setName('');
        setEmail('');
        setPassword('');
        getUsers();
      })
      .catch(error => console.log(error.res))
    } else {
      console.log('error: name or email must be required');
    }

  }

  return (
    <div className="card mt-1">
      <div className="card-body">
        <h5 className="card-title pb-1">Create New User</h5>
        <form onSubmit={store}>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={e => setName(e.target.value)}/>       
          </div>
          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>       
          </div>
          <div className="form-group mb-3">
            <input type="password" className="form-control" placeholder="Enter Password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>       
          </div>
          <div className="d-block">
          <button type="submit" className="btn btn-primary btn-lg btn-block mt-1 w-100">Submit</button> 
          </div>                   
        </form>            
      </div>
    </div>   
  )
}

export default UserForm;