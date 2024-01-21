import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..."></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div className="contact-image">
      <img src="/images/contact-image.jpg" alt="Contact Us" />
    </div>
  </div>
  );
}

export default Contact;
