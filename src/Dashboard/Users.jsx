import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import UsersBack from '../components/Services/UsersBack'

const Users = () => {


  const [users, setusers] = useState([])

useEffect(() => {
  UsersBack.getAllUsers().then((response)=>{
    setusers(response.data)
    console.log(response.data)
  }).catch(error=>{
    console.log(error)
  })
}, [])


const getAllUsers=()=>{
  UsersBack.getAllUsers().then((response)=>{
    setusers(response.data)
    console.log(response.data)
  }).catch(error=>{
    console.log(error);
  })
}

const deleteuser=(userId)=>{
  UsersBack.deleteuserById(userId).then((response)=>{
    getAllUsers();
  }).catch(error=>{
    console.log(error);
  })
}
  return (
    <div>
      <div className="d-flex">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="container pt-5 mx-5">
          <h2 className="text-center pb-5">Mobile Service Users</h2>
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className='text-center'>
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                      {
                        users.map(
                          usersmobile=>
                          <tr key={usersmobile.id}>
                            <td>{usersmobile.id}</td>
                            <td>{usersmobile.name}</td>
                            <td>{usersmobile.email}</td>
                            <td>{usersmobile.password}</td>
                            <td>
                              <button className='btn btn-outline-danger' onClick={()=>deleteuser(usersmobile.id)}>Delete</button>
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users