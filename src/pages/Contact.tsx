import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>Have questions? Reach out to us directly and we’ll respond promptly.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container grid-2">
          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

              <label>Subject *</label>
              <select name="subject" value={formData.subject} onChange={handleChange} required>
                <option value="">Select a subject</option>
                <option value="quote">Request a Quote</option>
                <option value="order">Place an Order</option>
                <option value="delivery">Delivery Inquiry</option>
                <option value="product">Product Information</option>
                <option value="other">Other</option>
              </select>

              <label>Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required />

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          {/* Business Info */}
          <div className="contact-info-card">
            <h2>Get In Touch</h2>
            <div className="contact-info">
              <div className="info-item">
                <div className="icon-box"><Phone className="icon" /></div>
                <div>
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                  <p>(555) 123-4568 (Emergency Line)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Mail className="icon" /></div>
                <div>
                  <h3>Email</h3>
                  <p>info@premiumsands.com</p>
                  <p>sales@premiumsands.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><MapPin className="icon" /></div>
                <div>
                  <h3>Address</h3>
                  <p>
                    <a href="https://www.google.com/maps/search/?api=1&query=1234+Industrial+Drive+Construction+City+ST+12345" target="_blank" rel="noopener noreferrer">
                      1234 Industrial Drive, Construction City, ST 12345
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box"><Clock className="icon" /></div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                  <p>24/7 Emergency Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <div className="container">
          <h2>Find Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.364507418728!2d29.818107075515304!3d-24.434435378209873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec16c845fe8da03%3A0x4ce930872bd91aac!2sHans%20Komane%20Secondary%20School!5e1!3m2!1sen!2sza!4v1766076963713!5m2!1sen!2sza"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </section>

      {/* Quick Contact */}
      <section className="contact-cta">
        <div className="container text-center">
          <h2>Need Immediate Assistance?</h2>
          <p>Call us now for urgent orders and emergency deliveries</p>
          <a href="tel:5551234567" className="cta-button">Call (555) 123-4567</a>
        </div>
      </section>
    </div>
  );
}
