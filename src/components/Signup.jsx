import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { register } from './Services/Api'
import UsersBack from './Services/UsersBack'
// import Users from '../Dashboard/Users'
const Signup = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const history=useNavigate()


  const saveUser=(e)=>{
    e.preventDefault()
    const Users={name,email,password}
    UsersBack.createUsers(Users).then((response)=>{
      console.log(response.data)
      history('/login');
    }).catch(error=>{
      console.log(error)
    })
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
                src="https://static.vecteezy.com/system/resources/previews/011/432/528/non_2x/enter-login-and-password-registration-page-on-screen-sign-in-to-your-account-creative-metaphor-login-page-mobile-app-with-user-page-flat-illustration-vector.jpg"
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
              <form action="">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                    id="username"
                    name="username"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Enter E-mail"
                    value={email}
                    onChange={e=>setemail(e.target.value)}
                    id="mail"
                    name="email"
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Create Password"
                    value={password}
                    onChange={e=>setpassword(e.target.value)}
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
                  <div className="forgot">
                    <small>
                      <Link href="#">Forgot Password?</Link>
                    </small>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary w-100 fs-6"
                    onClick={(e)=>saveUser(e)}
                  >
                    Sign up
                  </button>
                </div>
                <div className="row">
                  <small>
                    Already a user? <Link to="/login">Login</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
