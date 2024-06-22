import React, { useState } from 'react'
import '../Assets/CSS/Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import {Toaster} from 'react-hot-toast'
import { login } from '../redux/userSlice'
const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const dispatch = useDispatch()
   // const {login:userLogin}
   const handleLogin = async(e) => {
    e.preventDefault();
     if (email.trim() === '' || password.trim() === '') {
       setError('Please enter both username and password.')
     } else {
       dispatch(login(email))

       window.location.href = '/home'
     }
   }
   const submitForm = (e) => {
     e.preventDefault()
     console.log(e)
   }
   const handleSignUp = () => {
     console.log('Sign Up clicked')
   }
  return (
    <div className='bg-muted'>
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/826977121024307.60bddc997bd94.gif"
                className="img-fluid"
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
              Be Verified
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{
                width: '17rem',
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              Join experienced Designers on this platform.
            </small>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello,Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              <form action="" onSubmit={submitForm}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email address"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                    id="username"
                    name="Email"
                  />
                  {error.email && (
                    <span className="ErrorMsg">{error.username}</span>
                  )}
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    name="password"
                    id="password"
                  />
                  {error.password && (
                    <span className="ErrorMsg">{error.password}</span>
                  )}
                </div>
              </form>
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
              <div className="input-group mb-2">
                <button
                  className="btn btn-lg btn-primary w-100 fs-6"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
              <div className="row mb-2">
                <small>
                  Don't have account? <Link to="/signup" onClick={handleSignUp}>Sign Up</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login