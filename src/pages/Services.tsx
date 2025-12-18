import '../styles/services.css';
import sand from '../assets/sand.jpeg';
import sand1 from '../assets/sand 1.jpeg';
import sandg from '../assets/sand g.jpeg';
import sandgr from '../assets/sand gr.jpeg';

const products = [
  {
    name: 'River Sand',
    description: 'Premium quality river sand, perfect for concrete mixing, masonry work, and plastering. Clean, washed, and ready to use.',
    features: ['Washed & Screened', 'Multiple Grades', 'Bulk Available'],
    price: 'From R45/ton',
    image: sand
  },
  {
    name: 'Crushed Stone',
    description: 'High-quality crushed stone in various sizes. Ideal for road base, drainage, and concrete aggregate.',
    features: ['3/4" to 1.5" sizes', 'Clean & Graded', 'Durable'],
    price: 'From R38/ton',
    image: sand1
  },
  {
    name: 'Gravel Mix',
    description: 'Versatile gravel mix suitable for driveways, pathways, and landscaping projects.',
    features: ['Mixed Sizes', 'Well Compacted', 'Drainage Optimized'],
    price: 'From R42/ton',
    image: sandg
  },
  {
    name: 'Fill Sand',
    description: 'Economical fill sand for large-scale earthwork and foundation projects.',
    features: ['Bulk Orders', 'Fast Delivery', 'Cost Effective'],
    price: 'From R35/ton',
    image: sand
  },
  {
    name: 'Masonry Sand',
    description: 'Fine-grade sand specifically for brick laying, block work, and mortar applications.',
    features: ['Fine Texture', 'Consistent Quality', 'Premium Grade'],
    price: 'From R48/ton',
    image: sandgr
  },
  {
    name: 'Decorative Stone',
    description: 'Beautiful decorative aggregates for landscaping and aesthetic applications.',
    features: ['Various Colors', 'Multiple Sizes', 'Premium Quality'],
    price: 'From R55/ton',
    image: sandg
  }
];

export function Services() {
  return (
    <div className="services">

      {/* Hero Section */}
      <section className="services-header">
        <h1>Our Premium Construction Materials</h1>
        <p>High-quality sands, aggregates, and stones for all your building needs</p>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        <div className="container">
          <div className="grid-3">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <ul className="features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}><span className="bullet"></span>{feature}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Additional Services */}
      <section className="additional-services">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="grid-3">
            <div className="service-card">
              <h3>Same-Day Delivery</h3>
              <p>Order before noon for same-day delivery within our service area</p>
            </div>
            <div className="service-card">
              <h3>Bulk Discounts</h3>
              <p>Special pricing available for large orders and long-term contracts</p>
            </div>
            <div className="service-card">
              <h3>Expert Consultation</h3>
              <p>Free consultation to help you choose the right materials for your project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
