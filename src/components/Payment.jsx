import React, { useState } from 'react'

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [nameOnCard, setNameOnCard] = useState('')

  const handlePayment = () => {
    // Add logic to handle payment (integrate with payment processing library)
    alert('Payment successful!')
  }
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column - Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center mb-3">
          <img
            src="https://media.istockphoto.com/id/1492903662/photo/3d-render-credit-cards-and-gold-coin-isolate-on-black-background-online-payment-concept-on.webp?b=1&s=170667a&w=0&k=20&c=ayh6VWe91q95ODMGAg0AGy34gI9IhaOKXSvjz0Jc_Oo="
            alt="paymentimage"
            className="img-fluid rounded-4 shadow"
          />
        </div>

        {/* Right Column - Payment Content */}
        <div className="col-md-6">
          <div className="card shadow rounded-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Mobile Care Payment
              </h2>
              <form>
                {/* ... (form elements as before) */}
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nameOnCard" className="form-label">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameOnCard"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary mx-5 text-center"
                  onClick={handlePayment}
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
