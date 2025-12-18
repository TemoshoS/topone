import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Specials } from './pages/Specials';
import { Contact } from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />

        <main className="main-content">
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/specials" element={<Specials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div>
                <h3 className="footer-title">Premium Sands & Aggregates</h3>
                <p className="footer-text">Your trusted partner for quality construction materials.</p>
              </div>
              <div>
                <h4 className="footer-subtitle">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/specials">Specials</a></li>
                </ul>
              </div>
              <div>
                <h4 className="footer-subtitle">Contact</h4>
                <ul className="footer-list">
                  <li>(555) 123-4567</li>
                  <li>info@premiumsands.com</li>
                  <li>1234 Industrial Drive</li>
                  <li>Construction City, ST 12345</li>
                </ul>
              </div>
              <div>
                <h4 className="footer-subtitle">Hours</h4>
                <ul className="footer-list">
                  <li>Mon-Fri: 7:00 AM - 6:00 PM</li>
                  <li>Sat: 8:00 AM - 4:00 PM</li>
                  <li>Sun: Closed</li>
                  <li className="footer-emergency">24/7 Emergency Service</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Premium Sands & Aggregates. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
