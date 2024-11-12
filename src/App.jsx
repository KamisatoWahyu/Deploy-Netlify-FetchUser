import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './store/data';
import { useEffect } from 'react';

function App(){
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchUsers())
  },[])

  return(
    <div className="container">
      <h1>Users Data</h1>
        <table className='table table-striped table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default App;