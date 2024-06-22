import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../redux/userSlice'
// import { Password } from '@mui/icons-material'
// import toast,{Toaster} from 'react-hot-toast'
// import { Link } from 'react-router-dom'
const AdminLogin = () => {
  const [adminname, setAdminname] = useState('')
  const [adminpass, setAdminpass] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const handleLogin = () => {
    if (adminname.trim() === '' || adminpass.trim() === '') {
      setError('Please enter both admin name and password.')
    } else {
      dispatch(login(adminname))

      window.location.href = '/dashboard'
    }
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {/*--------------------- Login Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/*------------------------- Left Box ---------------------------*/}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: '#103cbe' }}
          >
            <div className="featured-image mb-3">
              <img
                src="https://i.gifer.com/RCwW.gif"
                className="img-fluid rounded-2"
                alt=""
                style={{ width: 250 }}
              />
            </div>
            <p
              className="text-white fs-2"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 600,
              }}
            >
              Admin Login
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: '17rem',
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              Only Admin Can Login
            </small>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2 className="text-center">Welcome Admin👋</h2>
                <p className="text-center">Admi Login Only</p>
              </div>
              <form action="" onSubmit={submitForm}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Enter Name"
                    value={adminname}
                    onChange={(e) => setAdminname(e.target.value)}
                    id="username"
                    name="username"
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    value={adminpass}
                    onChange={(e) => setAdminpass(e.target.value)}
                    name="password"
                    id="password"
                  />
                </div>
                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />

                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Remember Me</small>
                    </label>
                  </div>
                </div>
                <div className="input-group mb-4">
                  <button
                    className="btn btn-lg btn-primary w-100 fs-6"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  {error && <p className="error-message">{error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
