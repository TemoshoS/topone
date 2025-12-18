import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import '../styles/home.css';

import heroImage from '../assets/sand truck.jpeg';
import sand from '../assets/sand.jpeg';
import sandG from '../assets/sand g.jpeg';
import sandgr from '../assets/sand gr.jpeg';

export function Home() {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState('');

  const products = [
    { title: 'River Sand', desc: 'High-quality river sand perfect for construction and concrete mixing', image: sand },
    { title: 'Crushed Stone', desc: 'Various sizes of crushed stone for all your construction needs', image: sandG },
    { title: 'Gravel Mix', desc: 'Premium gravel mix for landscaping and drainage solutions', image: sandgr },
  ];




  const blogPost = {
    title: 'Why Quality Sand Matters in Construction',
    content: `
      Using high-quality sand is critical for strong, durable, and safe construction.
      Poor-quality sand can weaken concrete, cause cracks, and increase long-term costs.
      Choosing the right supplier ensures consistency, strength, and project success.
    `,
    date: '12 Aug 2025',
  };



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

          {/* Blog Section */}
          <section className="blog">
            <div className="container">
              <article className="blog-card blog-layout">

                {/* LEFT: Blog Post */}
                <div className="blog-left">
                  <span className="blog-date">{blogPost.date}</span>
                  <h3 className="blog-title">{blogPost.title}</h3>
                  <p className="blog-content">{blogPost.content}</p>
                </div>

                {/* RIGHT: Comments */}
                <div className="blog-right">
                  {comments.length === 0 && (
                    <p className="no-comments">
                      No comments yet ✨
                    </p>
                  )}

                  <ul className="comment-list">
                    {comments.map((comment, idx) => (
                      <li key={idx} className="comment-item">
                        <span className="comment-avatar">👤</span>
                        <p>{comment}</p>
                      </li>
                    ))}
                  </ul>

                  <form
                    className="comment-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!commentText.trim()) return;
                      setComments([...comments, commentText]);
                      setCommentText('');
                    }}
                  >
                    <textarea
                      placeholder="Write a comment…"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      rows={3}
                      required
                    />
                    <button type="submit" className="btn-black">
                      Post
                    </button>
                  </form>
                </div>

              </article>
            </div>
          </section>



        </div>
      </section>

    </div>
  );
}
