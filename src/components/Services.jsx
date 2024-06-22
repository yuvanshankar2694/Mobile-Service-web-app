import React from 'react'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div>
      <div className="container text-center">
        <section id="service">
          <div className="row">
            <h2 className="text-center pt-4"> Services Available</h2>
            <p className="text-center">
              At Your Mobile Service Center , we are committed to delivering
              top-notch mobile repair and service solutions to meet all your
              smartphone needs. Our experienced technicians are dedicated to
              bringing your devices back to life with efficiency and precision.
              Explore our wide range of services tailored to keep your mobile
              devices running smoothly
            </p>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image3.jdomni.in/banner/28072020/63/C5/49/2A1C5E1D7090DE7A4381705D83_1595940247744.jpg?output-format=webp"
                  className="card-img-top img-fluid rounded"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Display Failure</h5>
                  <div className="card-text">
                    Our experts repair any mobile display that looks active but
                    does not respond to any touch commands.
                  </div>
                  <Link
                    to="/display-failure"
                    className="btn btn-outline-success text-center"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image3.jdomni.in/banner/28072020/43/DA/E1/6414644FDE3B8FAC87FF822F1D_1595940268900.jpg?output-format=webp"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Liquid Damage</h5>
                  <div className="card-text">
                    It does not matter whether it is one splash, one spill or
                    full immersion in pool, we can still repair it.
                  </div>
                  <Link to="/liquid-damage" className="btn btn-outline-success">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image2.jdomni.in/banner/29052020/D5/69/BF/9AD053CB99003D6EE71140A5F8_1590747116492.jpg?output-format=webp"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Signal/Charging Issues
                  </h5>
                  <div className="card-text">
                    From minor charging issues to major signal detection faults,
                    we fix all your mobile worries in no time.
                  </div>
                  <Link
                    to="/signal-charging"
                    className="btn btn-outline-success"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>{' '}
          <br />
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image3.jdomni.in/banner/29052020/B3/19/B2/64C3799B6479A29132384DD69D_1590747275650.jpg?output-format=webp"
                  className="card-img-top img-fluid rounded"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Damaged Mobile</h5>
                  <div className="card-text">
                    Damaged screen to broken integral part, we cover all major
                    damages that can strike even from minor falls.
                  </div>
                  <Link
                    to="/damaged-mobile"
                    className="btn btn-outline-success"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image3.jdomni.in/banner/29052020/C5/B3/46/6C383C5681619E2574FBBCB281_1590748056460.jpg?output-format=webp"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Power Issues</h5>
                  <div className="card-text">
                    We can fix all complex faults including mobile battery not
                    charging, not turning on or keep restarting.
                  </div>
                  <Link to="/power-issues" className="btn btn-outline-success ">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card shadow">
                <img
                  src="https://image2.jdomni.in/banner/29052020/8A/8F/1E/7BF93F47B9D2CF79E7E501E76E_1590747882294.jpg?output-format=webp"
                  alt=""
                  className="image-rounded"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    MotherBoard Replacement
                  </h5>
                  <div className="card-text">
                    We assist any motherboard repair or replacement service for
                    all mobile phones at reasonable rates.
                  </div>
                  <Link to="/mother-board" className="btn btn-outline-success">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container text-center">
          <Link className="btn btn-outline-warning my-3" to="/about">
            About
          </Link>
          &nbsp;&nbsp;
          <Link className="btn btn-outline-warning my-3" to="/home">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services