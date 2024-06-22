import React from 'react'
import '../Assets/CSS/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand text-capitalize text-danger"
            href="/home"
          >
            MobileCare ⚙️
          </Link>
          <div className="d-flex">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="">
                  <i class="bi bi-house-heart"></i>&nbsp; Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                  <i class="bi bi-people"></i>&nbsp; About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/adminlogin">
                  <i class="bi bi-person-check"></i>&nbsp;AdminLogin
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/services">
                  <i class="bi bi-award"></i>&nbsp; Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contactus">
                  <i class="bi bi-telephone-inbound"></i>&nbsp; Contact
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link">
                  <i class="bi bi-person-bounding-box"></i>&nbsp; Logout
                </Link>
              </li>
            </ul>
            {/* Right-aligned "Login" link */}
          </div>
        </div>
      </nav>
      {/* Carousel with Indicators and Text */}
      <div className="carousel-container">
        <div
          id="hero-carousell"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-carousell"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#hero-carousell"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#hero-carousell"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img
                src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="d-block w-100 c-img"
                alt="Slide 1"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="mt-5 fs-3 text-uppercase">
                  Your mobile, our responsibility.
                </p>
                <h1 className="display-2 fw-bolder text-capitalize pt-4">
                  The Mobile Care
                </h1>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="d-block w-100 c-img"
                alt="Slide 2"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-3 mt-5">
                  Efficient repairs, exceptional service.
                </p>
                <p className="display-2 fw-bolder text-capitalize pt-3">
                  Available for All types of Mobiles
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img
                src="https://images.unsplash.com/photo-1611433965582-de98df4da7ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="d-block w-100 c-img"
                alt="Slide 3"
              />
              <div className="carousel-caption top-0 mt-4">
                <p className="text-uppercase fs-3 mt-5">
                  Cracked screens, dead batteries – we've got you covered.
                </p>
                <p className="display-1 fw-bolder text-capitalize pt-3">
                  We Fix All
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-carousell"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousell"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br /> <br />
      <div className="container pt-4 text-center">
        <div className="row">
          <div className="col-4">
            <img
              src="https://s3n.beta.cashify.in/estore/acfe0a0b2bf84d62855a7ede5492b05c.png"
              alt=""
              className="image-price"
            />

            <div className="pt-4 d-flex align-items-center">
              <i class="bi bi-1-circle"></i>
              <h4 className="px-3 my-3">Check Price</h4>
            </div>
            <p className="px-4 text-justify">
              Select your device that needs to be repaired. Get best Pricing.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://s3n.beta.cashify.in/estore/6c3a45cf00a8427e8bb48598d7e40493.png"
              alt=""
              className="image-price"
            />
            <div className="pt-4 d-flex align-items-center">
              <i class="bi bi-2-circle"></i>
              <h4 className="px-3 my-3">Schedule Service</h4>
            </div>
            <p className="px-4">
              Book a free technician visit at your home or work at a time slot
              that best suits your convenience.
            </p>
          </div>
          <div className="col-4">
            <img
              src="https://s3n.beta.cashify.in/estore/6f46f6c953a74203bb330f736af57934.png"
              alt=""
              className="image-price align-items-center"
            />
            <div className="pt-4 d-flex align-items-center">
              <i class="bi bi-3-circle"></i>
              <h4 className="px-3 my-3">Get Device Repaired</h4>
            </div>
            <p className="px-4">
              Our super-skilled technician will be there and make it as good as
              new.
            </p>
          </div>
        </div>
      </div>
      <br />
      {/* why us */}
      <div className=" container  px-4  bg-warning rounded ">
        <div className="row">
          <h2 className="text-center pt-3">WHY US</h2>
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-bookmark-star"></i>
              <h4 className="px-3 my-3">Premium Repair</h4>
            </div>
            <p className="px-4">Top quality certified parts</p>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-person-raised-hand"></i>
              <h4 className="px-3 my-3">Instant Mobile Repair</h4>
            </div>
            <p className="px-4">
              Mobile Repair on the spot in Mobile Care store or at Home
            </p>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-phone-flip"></i>
              <h4 className="px-3 my-3">Physical Protection Warranty</h4>
            </div>
            <p className="px-4">
              Free 1 Month Screen Replacement even if it breaks for all Screen
              Repair
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-check-circle"></i>
              <h4 className="px-3 my-3">6 Months Warranty</h4>
            </div>
            <p className="px-4">
              Hassle free 6 month warranty on parts replaced
            </p>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-brilliance"></i>
              <h4 className="px-3 my-3">Skilled Technicians</h4>
            </div>
            <p className="px-4">Trained & Qualified Professionals</p>
          </div>
          <div className="col-4">
            <div className="d-flex align-items-center">
              <i class="bi bi-file-earmark-spreadsheet"></i>
              <h4 className="px-3 my-3">Guaranteed Safety</h4>
            </div>
            <p className="px-4">Total Device & Data Security</p>
          </div>
        </div>
        <br />
      </div>
      <br />
      <footer className="footer">
        <div className="container1">
          <div className="row1">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">our Services</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
                </li>
                <li>
                  <Link to="">Waranty Policy</Link>
                </li>
                <li>
                  <Link to="">Refund Policy</Link>
                </li>
                <li>
                  <Link to="">Payment Options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="">Sell Mobiles</Link>
                </li>
                <li>
                  <Link to="">Sell Laptops</Link>
                </li>
                <li>
                  <Link to="">Partner With us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-link">
                <li>
                  <Link to="https://twitter.com/home" target="_blank">
                    <i class="bi bi-twitter-x"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/home.php?ref=wizard"
                    target="_blank"
                  >
                    <i class="bi bi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/" target="_blank">
                    <i class="bi bi-youtube"></i>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p className="text-white">
              &copy; {currentYear} Mobile Care. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
