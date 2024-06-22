// import React, { useState } from 'react'  

const BookService = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission logic here

      // For demonstration purposes, set isServiceBooked to true after submission
      // Replace this with your actual logic for handling form submission
       alert('Service booked successfully!')
    }
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column - Image */}
        <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
          <img
            src="https://media.istockphoto.com/id/495700810/photo/mobile-phone-repair.jpg?s=612x612&w=0&k=20&c=CFB5sO0Ph6IBQy-NyxRxLmNK7Js79AaNsVQKoOLz-Lw="
            alt="Book Service"
            className="img-fluid rounded-5"
          />
        </div>

        {/* Right Column - Book Service Content */}
        <div className="col-md-6">
          <h2>Book Service</h2>
          <form onSubmit={handleSubmit}>
            {/* ... (rest of the form elements as before) */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                name="number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="serviceType" className="form-label">
                Service Type
              </label>
              <select
                className="form-select"
                id="serviceType"
                name="serviceType"
              >
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="additionalComments" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="additionalComments"
                name="additionalComments"
                rows="4"
              ></textarea>
              <input type="checkbox" id="terms" name="terms" className="pt-3" />
              <label htmlFor="terms">&nbsp;Terms and Conditions</label>
            </div>
            <button
              type="submit"
              className="btn btn-outline-warning text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookService
