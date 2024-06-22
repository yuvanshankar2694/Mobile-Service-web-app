import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import Staffback from '../components/Services/Staffback';
import { Link } from 'react-router-dom';
const Staffs = () => {

    const [staffs,setstaffs]=useState([]);
    useEffect(()=>{
        Staffback.getAllStaff().then((response)=>{
            setstaffs(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    })

    const getAllStaff=()=>{
        Staffback.getAllStaff().then((response)=>{
            setstaffs(response.data);
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

const deletestaff = (staffsId) => {
  Staffback.deleteStaffById(staffsId)
    .then((response) => {
      getAllStaff()
    })
    .catch((error) => {
      console.log(error)
    })
}
  return (
    <div>
      <div className="d-flex">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="container pt-5 mx-5">
          <h3 className="text-center">Our Staff's</h3>

          <Link to="/add-staffs" className="btn btn-outline-success">
            Add Staff
          </Link>
          <br />
          <br />
          <div className="row">
            <div className="col">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead className="text-center">
                      <tr className="text-center">
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {staffs.map((staffMobile) => (
                        <tr key={staffMobile.id}>
                          <td>{staffMobile.id}</td>
                          <td>{staffMobile.email}</td>
                          <td>{staffMobile.password}</td>
                          <td>
                            <Link
                              className="btn btn-outline-warning"
                              to={`/edit-staffs/${staffMobile.id}`}
                            >
                              Update
                            </Link>&ensp;
                            <Link
                              className="btn btn-outline-danger"
                              onClick={() => deletestaff(staffMobile.id)}
                            >
                              DELETE
                            </Link>
                          </td>
                          
                        </tr>
                      ))}
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

export default Staffs