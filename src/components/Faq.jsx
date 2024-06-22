import React from 'react'
import { Link } from 'react-router-dom'
const Faq = () => {
  return (
    <div>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          {/* Question 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse1"
                aria-expanded="true"
                aria-controls="faqCollapse1"
              >
                Question 1: What are your operating hours?
              </button>
            </h2>
            <div
              id="faqCollapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="faqHeading1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Our operating hours are from Monday to Friday, 9:00 AM to 5:00
                PM.
              </div>
            </div>
          </div>
          <br />
          {/* Question 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse2"
                aria-expanded="false"
                aria-controls="faqCollapse2"
              >
                Question 2: How can I schedule a service appointment?
              </button>
            </h2>
            <div
              id="faqCollapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can schedule a service appointment by logging into your
                account on our website or by calling our customer service at
                (123) 456-7890.
              </div>
            </div>
          </div>
          <br />
          {/* Add more questions and answers here */}
          {/* Question 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse3"
                aria-expanded="false"
                aria-controls="faqCollapse3"
              >
                Question 3: Do you offer warranty services?
              </button>
            </h2>
            <div
              id="faqCollapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we offer warranty services for all our repairs. Please
                refer to our warranty policy for more details.
              </div>
            </div>
          </div>
          <br />
          {/* Question 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse4"
                aria-expanded="false"
                aria-controls="faqCollapse4"
              >
                Question 4: How long does a typical repair take?
              </button>
            </h2>
            <div
              id="faqCollapse4"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The repair time can vary depending on the issue. Our technicians
                will provide you with an estimated completion time when you
                submit your device for repair.
              </div>
            </div>
          </div>
          <br />
          {/* Question 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse5"
                aria-expanded="false"
                aria-controls="faqCollapse5"
              >
                Question 5: How can I track the status of my repair?
              </button>
            </h2>
            <div
              id="faqCollapse5"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading5"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can track the status of your repair by logging into your
                account on our website and navigating to the "My Repairs"
                section.
              </div>
            </div>
          </div>
          <br />
          {/* Question 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse6"
                aria-expanded="false"
                aria-controls="faqCollapse6"
              >
                Question 6: What payment methods do you accept?
              </button>
            </h2>
            <div
              id="faqCollapse6"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading6"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We accept payment via credit card, debit card, PayPal, and cash
                at our service center.
              </div>
            </div>
          </div>
          <br />
          {/* Question 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse7"
                aria-expanded="false"
                aria-controls="faqCollapse7"
              >
                Question 7: Are there any fees for diagnostic services?
              </button>
            </h2>
            <div
              id="faqCollapse7"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading7"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We offer free diagnostic services for all devices brought to our
                service center.
              </div>
            </div>
          </div>
          <br />
          {/* Question 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading8">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse8"
                aria-expanded="false"
                aria-controls="faqCollapse8"
              >
                Question 8: Do you provide pickup and delivery services?
              </button>
            </h2>
            <div
              id="faqCollapse8"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading8"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we offer pickup and delivery services for a nominal fee.
                Please contact our customer service for more information.
              </div>
            </div>
          </div>
          <br />
          {/* Question 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading9">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse9"
                aria-expanded="false"
                aria-controls="faqCollapse9"
              >
                Question 9: Can I cancel my repair request?
              </button>
            </h2>
            <div
              id="faqCollapse9"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading9"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can cancel your repair request before our technicians
                begin working on your device. Please contact us as soon as
                possible to initiate the cancellation process.
              </div>
            </div>
          </div>
          <br />
          {/* Question 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading10">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse10"
                aria-expanded="false"
                aria-controls="faqCollapse10"
              >
                Question 10: How can I contact customer support?
              </button>
            </h2>
            <div
              id="faqCollapse10"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading10"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact our customer support team by email at
                support@example.com or by phone at (123) 456-7890.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='text-center mb-3'>
        <Link to="/home" className="btn btn-outline-warning ">
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default Faq