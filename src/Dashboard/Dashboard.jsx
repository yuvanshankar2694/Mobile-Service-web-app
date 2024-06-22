import React from 'react'
import SideNav from './SideNav'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Assets/CSS/Dashboard.css'
const Dashboard = () => {
  const user=useSelector(selectUser);
  const adminname=user.name;
  return (
   <>
   <div className='d-flex'>
    <div className='col-auto'>
      <SideNav/>
    </div>
    <div className='container mt-4'>
        <header>
          <h2 className='text-center '>Welcome {adminname}</h2>
          <p className='text-center pt-5 fw-bold '>Welome to Mobile Care View and Click the Other Dashboard Options</p>
         
        </header>
    </div>
   </div>
   </>
  )
}

export default Dashboard