import { Tag, TrendingDown, Clock, Star } from 'lucide-react';
import '../styles/specials.css'; 

const specials = [
  {
    title: 'Winter Bulk Buy Special',
    discount: '20% OFF',
    description: 'Save 20% on orders of 50 tons or more. Perfect for large construction projects planning ahead for spring.',
    validUntil: 'Valid until March 31, 2025',
    featured: true
  },
  {
    title: 'River Sand Premium Pack',
    discount: '15% OFF',
    description: 'Get 15% off on premium washed river sand. Ideal for concrete work and masonry applications.',
    validUntil: 'Valid until February 28, 2025',
    featured: false
  },
  {
    title: 'First-Time Customer Offer',
    discount: 'R50 OFF',
    description: 'New customers receive R50 off their first order of R500 or more.',
    validUntil: 'Ongoing promotion',
    featured: true
  },
  {
    title: 'Contractor Package',
    discount: '25% OFF',
    description: 'Special rates for registered contractors with monthly orders. Sign up for our contractor program today.',
    validUntil: 'Ongoing program',
    featured: false
  },
  {
    title: 'Decorative Stone Bundle',
    discount: 'BUY 2 GET 1',
    description: 'Buy 2 tons of decorative stone and get 1 ton free. Mix and match different colors and sizes.',
    validUntil: 'Valid until January 31, 2025',
    featured: true
  },
  {
    title: 'Free Delivery Special',
    discount: 'FREE DELIVERY',
    description: 'Free delivery on all orders over R1,000 within a 30-mile radius.',
    validUntil: 'Valid until February 15, 2025',
    featured: false
  }
];

export function Specials() {
  return (
    <div>
      {/* Header */}
      <section className="header-section">
        <div className="container text-center">
          <h1>Special Offers & Promotions</h1>
          <p>Take advantage of our exclusive deals and save big on quality materials</p>
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="featured-promotions">
        <div className="container">
          <div className="section-title">
            <Star className="icon-star" />
            <h2>Featured Deals</h2>
            <Star className="icon-star" />
          </div>
          
          <div className="grid featured-grid">
            {specials.filter(s => s.featured).map((special, index) => (
              <div key={index} className="special-card featured-card">
                <div className="tag-icon">
                  <Tag className="icon-tag" />
                </div>
                <div className="discount">{special.discount}</div>
                <h3>{special.title}</h3>
                <p>{special.description}</p>
                <div className="valid-until">
                  <Clock className="icon-clock" />
                  <span>{special.validUntil}</span>
                </div>
                <button className="btn-learn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Promotions */}
      <section className="all-promotions">
        <div className="container">
          <div className="section-title">
            <TrendingDown className="icon-trending" />
            <h2>Current Promotions</h2>
          </div>

          <div className="grid all-grid">
            {specials.map((special, index) => (
              <div key={index} className="special-card all-card">
                <div className="discount-box">
                  <span>{special.discount}</span>
                </div>
                <div className="special-info">
                  <h3>{special.title}</h3>
                  <p>{special.description}</p>
                  <div className="valid-until">
                    <Clock className="icon-clock" />
                    <span>{special.validUntil}</span>
                  </div>
                  <button className="btn-learn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="terms-section">
        <div className="container">
          <div className="terms-box">
            <h2>Terms & Conditions</h2>
            <ul>
              <li>All promotions are subject to availability and may be modified or discontinued at any time.</li>
              <li>Discounts cannot be combined with other offers unless specifically stated.</li>
              <li>Minimum order quantities may apply to certain promotions.</li>
              <li>Free delivery offers are limited to specified service areas.</li>
              <li>Contact us for full details and to verify eligibility for any promotion.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Take Advantage?</h2>
          <p>Contact us today to claim your special offer</p>
          <a href="/contact" className="btn-cta">Contact Us Now</a>
        </div>
      </section>
    </div>
  );
}
