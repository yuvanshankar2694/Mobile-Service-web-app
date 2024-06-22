import React from 'react'
import { Link } from 'react-router-dom'
const Iphone7 = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-8">
          <div className="card shadow">
            <div className="card-body">
              <img
                src="https://s3n.cashify.in/cashify/product/img/xhdpi/csh-jwihkccb-gqpj.png"
                alt=""
              />
              <span className="fs-5">Iphone 7</span>
              <p className="mx-5 pt-3">Pick your Service</p>
              <table>
                <thead>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.beta.cashify.in//repair/b30c316c2cb84a4592219db871e964b5.webp"
                        alt=""
                      />
                      Screen &ensp;$249 &nbsp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.beta.cashify.in//repair/b30c316c2cb84a4592219db871e964b5.webp"
                        alt=""
                      />
                      Battery &ensp; $200 &nbsp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/63cd8d65ae1d49c4a88164d3093be808.png"
                        alt=""
                      />
                      Receiver &ensp; $199 &nbsp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                </thead>
                <tbody>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/cf48e143753742ae9660efbfc8f81536.png"
                        alt=""
                      />
                      Mic &ensp;$99 &ensp;&nbsp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/855a0fdc1e884399aa4fe2b7b7bec2ef.png"
                        alt=""
                      />
                      AU'JACK &ensp;$99 &ensp;{' '}
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/4df66e98a0aa466f8ea851b84cfd0c80.png"
                        alt=""
                      />
                      Speaker &ensp;$99 &ensp; &nbsp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                </tbody>
                <tbody>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/f9f0faead4c9486189e7fc5211cefc65.png"
                        alt=""
                      />
                      F CAM &ensp;$99 &ensp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                  <th>
                    <tr>
                      <img
                        src="https://s3n.cashify.in/estore/f9f0faead4c9486189e7fc5211cefc65.png"
                        alt=""
                      />
                      B CAM &ensp;$99 &ensp;
                      <button className="btn btn-sm btn-outline-info">
                        ADD
                      </button>
                    </tr>
                  </th>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card shadow">
            <div className="card-body">
              <p className="text-center fs-3">Price Summary</p>
              <hr />
              <p className="text-center">No Service Selected</p>
              <hr />
              <input type="checkbox" name="check" />
              &nbsp;
              <span>
                I agree with <Link>Terms And Conditions</Link>
              </span>
              <p></p>
              <button className="btn btn-outline-dark disabled">
                Book Now
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="col-12">
            <div className="card shadow text-center">
              <div
                className="card-body  rounded-3"
                style={{ background: '#D9F4F1' }}
              >
                <span className="text-center fw-bold fs-4 mx-5">4.6K+</span>{' '}
                &ensp;
                <span className="text-center fw-bold fs-4">4.3+</span>&ensp;
                <br />
                &ensp;&ensp;
                <span className="">Device Repaired</span> &ensp; &ensp;
                <span>Rated Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iphone7