import React from 'react'
import '../Assets/CSS/Welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
const Welcome = () => {
  //  const [bgColor, setBgColor] = useState('#3498db') // Initial background color

  //  // Function to change the background color
  //  const changeBackgroundColor = () => {
  //    // Generate a random color (you can replace this with your logic)
  //    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
  //    setBgColor(randomColor)
  //  }

  //  // Use useEffect to periodically change the background color
  //  useEffect(() => {
  //    const intervalId = setInterval(changeBackgroundColor, 2000) // Change color every 5 seconds
  //    return () => clearInterval(intervalId) // Clear the interval on component unmount
  //  }, [])
  // const history = useHistory()

  // const goToLoginPage = () => {
  //   history.push('/login')
  // }
   
  return (
    // <div
    //   style={{
    //     backgroundColor: bgColor,
    //     minHeight: '100vh',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    //   <div>
    //     <h1 className="text-white text-center animated fadeIn">
    //       Welcome to Our Website
    //     </h1>
    //     <p className="text-white text-center animated fadeIn">
    //       This is a Bootstrap welcome page with a dynamically changing
    //       background color.
    //     </p>
    //     <Link
    //       to='/login'
    //       class="btn btn-primary position-absolute top-80 start-50 translate-middle mt-3"
    //     >
    //       Get Started
    //     </Link>
    //   </div>
    // </div>
    <div>
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-iteml">
            <img
              src="https://images.unsplash.com/photo-1511282419954-ef8b90aec22b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100 c-img"
              alt="Slide 1"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 fs-3 text-uppercase">Welcome To Mobile Care</p>
              <h1 className="display-4 fw-bolder text-capitalize">
                Repair, Restore, Renew: Your Mobile, Our Expertise
              </h1>
              <Link className="btn btn-primary px-4 py-2 fs-5 mt-5" to="/login">
                Get Started
              </Link>
            </div>
          </div>
          <div className="carousel-item c-iteml">
            <img
              src="https://images.unsplash.com/photo-1607976973585-a6c285b90ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100 c-img"
              alt="Slide 2"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">Welcome to Mobile Care</p>
              <p className="display-4 fw-bolder text-capitalize">
                Your Mobile's Second Chance Starts Here
              </p>
              <button
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
                onClick={() => (window.location.href = '/login')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="carousel-item c-iteml">
            <img
              src="https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="d-block w-100 c-img"
              alt="Slide 3"
            />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">Welcome to Mobile Care</p>
              <p className="display-4 fw-bolder text-capitalize">
                Cracked Screen? We've Got You Covered.
              </p>
              <button
                className="btn btn-primary px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
                onClick={() => (window.location.href = '/login')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Welcome
