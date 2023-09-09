import React from 'react';
import Accordion from '../components/accordoin'
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Contact Us</h1>
            <p>
              Please feel free to reach out to us with any questions or
              feedback.
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> contact@example.com
              </li>
              <li>
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 123 Main St, City, Country
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Accordion /> {/* Assuming you have a component named Accordion */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
