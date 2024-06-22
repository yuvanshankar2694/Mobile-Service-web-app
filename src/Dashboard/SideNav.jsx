import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../Assets/CSS/SideNav.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
const SideNav = () => {
   const user = useSelector(selectUser)
   const adminname = user.name
  return (
    <div className=" sidebar d-flex flex-column justify-content-between bg-dark text-white text-center p-4 vh-100">
      <div>
        <Link to="/dashboard" className="d-flex align-items-center">
          <i class="bi bi-grid-1x2 fs-5 me-2 text-white"></i>
          <span className="fs-4 text-white no-decoration">Dashboard</span>
        </Link>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link className="nav-link text-white" to="/overview">
              {/* <i class="bi bi-speedometer me-2 fs-4"></i> */}
              <i class="bi bi-speedometer2 me-2 fs-4"></i>
              <span className="fs-5">Overview</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="nav-link text-white" to="/order">
              <i class="bi bi-table me-2 fs-4"></i>
              <span className="fs-5">Orders</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="nav-link text-white" to="/users">
              <i class="bi bi-people me-2 fs-4"></i>
              <span className="fs-5">Users</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link className="nav-link text-white" to='/staffs'>
              <i class="bi bi-flag me-2 fs-4"></i>
              <span className="fs-5">Staffs</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary" />
        <i class="bi bi-person-circle fs-5 mx-2"></i>
        <span className="fs-4">{adminname}</span>
      </div>
    </div>
  )
}

export default SideNav
