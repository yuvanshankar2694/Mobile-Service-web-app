import React, { useEffect, useState } from 'react'
import SideNav from './SideNav'
import Staffback from '../components/Services/Staffback'
import {  useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AddStaffs = () => {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const history=useNavigate()

   const {id}= useParams();

    const saveAndUpdateStaff=(e)=>{
        e.preventDefault();
        const staff={email,password}

        if(id)
        {
            Staffback.updateStaffById(id,staff).then((response)=>{
              history('/staffs')
            }).catch(error=>{
              console.log(error)
            })
        }else{
            Staffback.createStaff(staff)
              .then((response) => {
                console.log(response.data)
                history('/staffs')
              })
              .catch((error) => {
                console.log(error)
              })
        }
        
    }
    // update staff
    useEffect(() => {
      Staffback.getStaffById(id)
        .then((response) => {
          setemail(response.data.email)
           setpassword(response.data.password)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

 const  title=()=>{
      if(id)
      {
        return <h2 className='text-center'>UPDATE STAFF'S</h2>
      }
      else{
        return <h2 className='text-center'>ADD STAFF'S</h2>
      }
    }
  return (
    <div>
      <div className="d-flex">
        <div className="col-auto">
          <SideNav />
        </div>
        <div className="container pt-5 mx-5">
          <div className="card shadow">
            <div className="card-body">
              {title()}
              <form action="">
                <div className="form-group mb-2 align-items-center">
                  <label htmlFor="" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="" className="form-label">
                    Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <br />
                <button
                  className="btn btn-outline-primary "
                  onClick={(e) => saveAndUpdateStaff(e)}
                >
                  Add Staff
                </button>
                &ensp;
                <Link to="/staffs" className="btn btn-outline-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStaffs