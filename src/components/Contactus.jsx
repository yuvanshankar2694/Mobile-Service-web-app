import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/CSS/Contact.css'
const Contactus = () => {
  return (
    <div>
      <div className="container mt-4">
        <h3 className="text-center pb-3">Contact us </h3>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="col-12 d-flex align-items-center text-center mx-5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/263/872/large_2x/contact-us-customer-support-concept-vector.jpg"
                  alt=""
                  className="image-center rounded mx-5 "
                  style={{ width: '400px', height: '400px' }}
                />
                <h2 className=" mx-5  text-left">
                  We'd love to <br />
                  &ensp;
                  <span className="text-success mx-3">&nbsp;hear from you</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="align-items-center text-center">
          <h3 className="text-center">Need Help?</h3>
          <Link className="mx-4 whatsapp-link">
            <i class="bi bi-whatsapp mx-2 fs-5"></i>
            What's App
          </Link>
          <Link className="whatsapp-link">
            <i class="bi bi-chat-dots mx-2 fs-5"></i>
            Live Chat
          </Link>
        </div>
        <br />
        <br />

        {/* Reach us */}
        <div className="text-center">
          <h3>Reach us</h3>
          <br />
          <div className="row">
            <div className="col-4">
              <h4>Connect with us:</h4>
              <p>
                For support or any questions: call us on Cashify customer
                support number - 7290068900 or Email us at support@mobilecare.in
                for Sell Queries.
              </p>
            </div>
            <div className="col-4">
              <h4>Corporate Office:</h4>
              <p>
                mobilecare 1st Floor, Plot No.35, Sector 44, Gurugram, Haryana
                122003
              </p>
            </div>
            <div className="col-4">
              <h4>Registered Office for Manak</h4>
              <p>
                Manak Waste Management Pvt Ltd. B-39, 1st Floor, Middle Circle,
                Connaught Place, New Delhi-110001
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <h4>Connect with us:</h4>
              <p>
                For Buy Phone related queries: Call us on +91-9319697452 or
                Email us at store@mobilecare.in. For Warranty/Returns related
                queries: Call us on +91-8448797261 or Email us at
                return@mobilecare.in
              </p>
            </div>
            <div className="col-4">
              <h4>Corporate Office:</h4>
              <p>
                Cashify 1st Floor, Plot No.35, Sector 44, Gurugram, Haryana
                122003
              </p>
            </div>
            <div className="col-4">
              <h4>Registered Office for RFPL:</h4>
              <p>
                Retail Fiesta Private Limited | 498/17, Sector - 17, Gurugram -
                122001, India
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <h3>Our Team</h3>
          <br />
          <div className="row">
            <div className="col-4">
              <div className="card pt-2 shadow rounded">
                <div className="card-body">
                  <h4>Customer Inquiry</h4>
                  <div className="d-flex">
                    <i class="bi bi-person-video3 mx-3"></i>

                    <p>
                      For any customer inquiry or assistance regarding model,
                      price or service issues. support@mobilecare.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card pt-2 shadow">
                <div className="card-body">
                  <h4>Address of CEO :</h4>
                  <div className="d-flex">
                    <i class="bi bi-person-vcard"></i>
                    <p>
                      For any feedback, complaints, escalations or suggestions,
                      drop an email directly to the CEO at CEO@mobilecare.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card pt-2 shadow">
                <div className="card-body">
                  <h4>Bulk Selling</h4>
                  <div className="d-flex">
                    <i class="bi bi-cash-coin"></i>
                    <p>
                      In case you want to sell anything in bulk (more than 4
                      items) and want a customized quote. manoj.k@cashify.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <div className="card pt-2 shadow">
                <div className="card-body">
                  <h4>Mobile Care Partner Program</h4>
                  <div className="d-flex">
                    <i class="bi bi-globe mx-2"></i>
                    <p>
                      If you're a professional buyer and want to get affiliated
                      to Cashify Partner Program, please drop an email at
                      partner@cashify.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card pt-2 shadow">
                <div className="card-body">
                  <h4>Business Inquiry</h4>
                  <div className="d-flex">
                    <i class="bi bi-question-circle ps-0"></i>
                    <p className='ps-1'>
                      For any Press & Media Inquiries or Partnership
                      Opportunities including the Exchange Programs &
                      Buyback/Trade-in programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 pb-2">
              <div className="card pt-2 shadow">
                <div className="card-body">
                  <h4>Job Enquiry</h4>
                  <div className="d-flex">
                    <i class="bi bi-tools"></i>
                    <p>
                      To explore a career opportunity with Cashify, please feel
                      free to send your resume. jobs@mobilecare.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center pb-3">
          <Link to="/home " className="btn btn-outline-warning ">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contactus