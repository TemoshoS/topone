import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Truck, Clock, Award } from 'lucide-react';
import '../styles/home.css';

import heroImage from '../assets/sand truck.jpeg';
import sand from '../assets/sand.jpeg';
import sandG from '../assets/sand g.jpeg';
import sandgr from '../assets/sand gr.jpeg';

export function Home() {
  const products = [
    { title: 'River Sand', desc: 'High-quality river sand perfect for construction and concrete mixing', image: sand },
    { title: 'Crushed Stone', desc: 'Various sizes of crushed stone for all your construction needs', image: sandG },
    { title: 'Gravel Mix', desc: 'Premium gravel mix for landscaping and drainage solutions', image: sandgr },
  ];

  const quickLinks = [
    { icon: Truck, title: 'Fast Delivery', desc: 'Same-day delivery available' },
    { icon: Clock, title: '24/7 Service', desc: 'Round the clock support' },
    { icon: Award, title: '2+ Years', desc: 'Industry experience' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <ImageWithFallback
          src={heroImage} 
          alt="Sand mining construction site"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Premium Quality Sands & Aggregates</h1>
          <p>Your trusted partner for construction materials</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn-yellow">View Products</Link>
            <Link to="/contact" className="btn-black">Get Quote</Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <div className="container">
          <div className="grid-4">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="quick-card">
                  <Icon className="quick-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="grid-3">
            {products.map((product, idx) => (
              <div key={idx} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} className="product-img" />
                </div>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <Link to="/services" className="btn-black">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container text-center">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free quote and consultation</p>
          <Link to="/contact" className="btn-yellow">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
}
