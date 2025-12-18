import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, Users, Truck, Shield } from 'lucide-react';
import '../styles/about.css';

import truck from '../assets/sand machine.jpeg';
import machine from '../assets/sand machine.jpeg';
import machine2 from '../assets/sand truck 2.jpeg';

export function About() {
  return (
    <div className="about">
      {/* Company Story */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h1>Our Story</h1>
              <p>
                Founded over 2 years ago, Premium Sands & Aggregates has been serving the construction industry with top-quality materials and exceptional service. What started as a small family business has grown into one of the region's most trusted suppliers of sand and aggregate materials.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our success. We work tirelessly to ensure that every load meets the highest standards and arrives on time, every time.
              </p>
              <p>
                Today, we serve contractors, builders, landscapers, and homeowners across the region, delivering premium materials for projects of all sizes.
              </p>
            </div>
            <div className="story-image">
              <ImageWithFallback
                src={truck}
                alt="Our construction team"
                className="image-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p>
            To provide the construction industry with the highest quality sand and aggregate materials, delivered with reliability and backed by unmatched customer service. We're committed to building lasting relationships with our clients through integrity, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="grid-4">
            <div className="why-card">
              <div className="icon-bg"><CheckCircle className="icon" /></div>
              <h3>Quality Guaranteed</h3>
              <p>All our materials are tested and certified to meet industry standards</p>
            </div>
            <div className="why-card">
              <div className="icon-bg"><Truck className="icon" /></div>
              <h3>Fast Delivery</h3>
              <p>Modern fleet ensures timely delivery to your job site</p>
            </div>
            <div className="why-card">
              <div className="icon-bg"><Users className="icon" /></div>
              <h3>Expert Team</h3>
              <p>Knowledgeable staff ready to help with your project needs</p>
            </div>
            <div className="why-card">
              <div className="icon-bg"><Shield className="icon" /></div>
              <h3>Trusted Service</h3>
              <p>2+ years of reliable service in the industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Facilities */}
      <section className="about-fleet">
        <div className="container">
          <h2 className="text-center">Our Fleet & Facilities</h2>
          <div className="fleet-grid">
            <ImageWithFallback
              src={machine}
              alt="Our delivery trucks"
              className="image-border"
            />
            <ImageWithFallback
              src={machine2}
              alt="Our warehouse facility"
              className="image-border"
            />
          </div>
          <p className="text-center mt-4">
            Our modern fleet of trucks and state-of-the-art facilities ensure we can handle orders of any size, delivered on your schedule.
          </p>
        </div>
      </section>
    </div>
  );
}
