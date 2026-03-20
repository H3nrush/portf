import './contact.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import { useState } from 'react';

function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New project from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Project details:
${form.message}
    `;

    window.location.href = `mailto:hassanmohammadi078@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Header />

      <section id="contact">

        <h2>📩 Contact Me</h2>

        {/* Contact Info */}
        <div className="contact-info">
          <p>
            📍 You can meet me or send letters at:<br />
            <strong className='emailAddress'>16 avenue des 40 journaux, 33300 Bordeaux</strong>
          </p>

          <p>
            📧 Email me directly at:<br />
            <strong className='emailAddress'>hassanmohammadi078@gmail.com</strong>
          </p>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=16+avenue+des+40+journaux+33300+Bordeaux&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>

        {/* Form */}
        <p>Or send me a message directly 🚀</p>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message 🚀</button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default Contact;