import React from 'react'
import jsPDF from 'jspdf'

const PrivacyPolicy = () => {

    const downloaderpdf=()=>{
            const doc = new jsPDF()
            doc.text("Privacy Policy", 10, 10)
            // Add the rest of your content here as doc.text calls.
            doc.save('PrivacyPolicy.pdf');
    };
  return (
    <div>
      <div className="container mt-4 ">
        <h1 className="text-center" style={{textDecoration:'underline'}}>Privacy Policy</h1>
        <p>Last Updated: 2023</p>

        <h2 className="text-muted">Introduction</h2>
        <p className="mx-5">
          Welcome to [Your Company Name]'s Mobile Service Center Application
          (the "App"). At [Your Company Name], we are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our App.
        </p>
        <p className="mx-5">
          By accessing or using the App, you agree to the terms of this Privacy
          Policy. If you do not agree with the practices described in this
          Privacy Policy, please do not use the App.
        </p>
        <h2 className="text-muted">Information We Collect</h2>
        <ul className="mx-5">
          <li>
            <strong>Information You Provide:</strong>&nbsp; When you use our
            App, you may provide us with personal information, including but not
            limited to your name, contact information, device information, and
            any other information you voluntarily submit.
          </li>
          <li>
            <strong>Automatically Collected Information: </strong>&nbsp; We may
            automatically collect certain information about your device,
            including your IP address, device type, operating system, and usage
            information
          </li>
        </ul>
        <h2 className="text-muted">How We Use Your Information</h2>
        <p>
          <strong className="mx-3">
            We may use the information we collect for various purposes,
            including but not limited to:
          </strong>
          <br />
          <br />
          <ul className="mx-5">
            <li>
              We may use the information we collect for various purposes,
              including but not limited to:
            </li>
            <li>Personalizing your experience within the App.</li>
            <li>Sending you updates, promotions, and other communications.</li>
            <li>Analyzing usage patterns and improving our services.</li>
          </ul>
        </p>
        <h2 className="text-muted">Security</h2>
        <p className="mx-5">
          We take reasonable measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          please be aware that no data transmission over the internet is
          entirely secure, and we cannot guarantee the security of your
          information.
        </p>
        <h2 className="text-muted">Contact Us</h2>
        <p className="mx-5">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal information, please contact us at
          Mobile Care.
        </p>
      </div>
      <div className="text-center pb-2">
        <button
          className="btn btn-outline-primary align-items-center text-center"
          onClick={downloaderpdf}
        >
          Dowload PDF
        </button>
      </div>
    </div>
  )
}

export default PrivacyPolicy