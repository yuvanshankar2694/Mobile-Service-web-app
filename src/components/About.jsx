import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className=" container d-flex align-items-center justify-content-center vh-100">
      <section id="about">
        <div className="row">
          <div class="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              class="img-fluid pt-5 mt-5 px-2"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h2>ABOUT US</h2>
            <h3 className="display-5 text-primary">Mobile Care</h3>
            <p>
              Welcome to our mobile service center! We are a dedicated team of
              experts in mobile device repair and maintenance.
            </p>
            <p>
              Our mission is to provide top-notch services and solutions for all
              your mobile device needs. With years of experience, we have
              successfully repaired thousands of devices, from smartphones to
              tablets.
            </p>
            <p>
              With [5] years of experience in the industry, we have successfully
              repaired thousands of devices, including smartphones, tablets, and
              more. Our commitment to quality service and customer satisfaction
              has made us a trusted choice for mobile device repair in the [Your
              Location] area.
            </p>
            <p>What sets us apart:</p>
            <ul>
              <li>
                Expert Technicians: Our technicians are certified and
                experienced in repairing a wide range of mobile devices.
              </li>
              <li>
                Quick Turnaround: We understand the importance of your device,
                so we strive for fast turnaround times.
              </li>
              <li>
                Quality Parts: We use high-quality replacement parts to ensure
                the longevity of your device.
              </li>
              <li>
                Customer-Focused: Your satisfaction is our priority, and we're
                here to answer any questions you have.
              </li>
            </ul>
            <Link className="btn btn-outline-warning my-3 " to="/services">
              Services
            </Link>&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-outline-warning my-3" to="/home">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About