import React from "react";

function Contact() {
  return (
    <div className="contact-container" id="contactUs">
      <div className="contact-con1 p-2">
        <div>
          <img src="./images/buddify.png" alt="#" className="logo" />
        </div>
        <p className="contact-para">
          Subscribe to our newsletter and stay update on the latest features and
          releases.
        </p>
        <div>
          <input
            type="email"
            placeholder="Your email address"
            name="email"
            required
            className="contact-input"
          />
          <button type="button" className="contact-button px-3">
            Join
          </button>
        </div>
        <p className="contact-para">
          By Subscribing. you agree to our privacy and consent to receive update
          from our company.
        </p>
      </div>
      <div className="contact-con2 p-2">
        <ul className="list-items">
          <li className="my-2">Home</li>
          <li className="my-2">About Us</li>
          <li className="my-2">But Why</li>
          <li className="my-2">Testimonials</li>
          <li className="my-2">Contact Us</li>
        </ul>
      </div>
      <div className="contact-con3 p-2">
        <h2>Follow Us</h2>
        <ul className="list-items">
          <li className="my-2">Facebook</li>
          <li className="my-2">Instagram</li>
          <li className="my-2">Twitter</li>
          <li className="my-2">Linkedin</li>
          <li className="my-2">YouTube</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
