import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
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

  

  const blogs = [
    {
      title: 'Why Quality Sand Matters in Construction',
      excerpt:
        'Using the right type of sand improves strength, durability, and safety in construction projects.',
      date: '12 Aug 2025',
    },
    {
      title: 'River Sand vs Crushed Sand',
      excerpt:
        'Understand the difference between river sand and crushed sand and when to use each.',
      date: '05 Aug 2025',
    },
    {
      title: 'How Fast Delivery Saves Your Project Time',
      excerpt:
        'Delays cost money. Here’s how reliable material delivery keeps your project on track.',
      date: '29 Jul 2025',
    },
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

     {/* Blog Section */}
<section className="blog">
  <div className="container">
    <h2>Latest From Our Blog</h2>
    <p className="blog-intro">
      Tips, insights, and updates from the sand & construction industry
    </p>

    <div className="grid-3">
      {blogs.map((blog, idx) => (
        <div key={idx} className="blog-card">
          <span className="blog-date">{blog.date}</span>
          <h3>{blog.title}</h3>
          <p>{blog.excerpt}</p>
          <Link to="/blog" className="blog-link">
            Read More
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
