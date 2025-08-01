import React from 'react';
import { Form } from 'react-router-dom';
import contact from './images/843ba4_bd3021bc6649414fa9451b5029146550~mv2.gif'
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log("Form Data:", data);
    return null;
  } catch (error) {
    console.log("Error:", error.message);
  }
};

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={contact}
            alt="Contact_image"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Contact Us</h2>
          <Form method="POST" action="/contact">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Full Name</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                required
                placeholder="Enter Your Full Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                placeholder="Enter Your Email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                required
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
