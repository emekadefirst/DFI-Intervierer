import React from 'react';
import './ContactUs.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mblywqpz");

  if (state.succeeded) {
    return <p className="contact-success">Thanks for your message! 🎉</p>;
  }

  return (
    <div className="ContactContainer">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="contact-textarea"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" className="contact-button" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
