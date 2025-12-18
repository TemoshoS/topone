import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
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
              <Route path="/contact" element={<Contact />} />
            </Routes>
          
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div>
                <h3 className="footer-title">Top One Construction and General Service CC</h3>
                
              </div>
              <div>
                <h4 className="footer-subtitle">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  
                </ul>
              </div>
              <div>
                <h4 className="footer-subtitle">Contact</h4>
                <ul className="footer-list">
                  <li>+27131705511</li>
                  <li>admin@toponemining.co.za</li>
                  <li>N11 Keeromaspruit</li>
                  <li>Middleburg, Mpumalanga 1050</li>
                </ul>
              </div>
              <div>
                <h4 className="footer-subtitle">Hours</h4>
                <ul className="footer-list">
                  <li>Mon-Fri: 7:00 AM - 6:00 PM</li>
                  <li>Sat: 8:00 AM - 4:00 PM</li>
                  <li>Sun: Closed</li>
                  
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Top One Construction and General Service CC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
