import React, { useState } from 'react';
import "../assets/css/Contact.css";
import Navbar from '../components/Navbar';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For now, let's just show the alert
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <br></br><br></br>
      <h1>Contact Us</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        {isSubmitted && (
          <div className="alert alert-success" role="alert">
            Successfully submitted!
          </div>
        )}
      </form>
    </>
  );
};

export default Contact;
