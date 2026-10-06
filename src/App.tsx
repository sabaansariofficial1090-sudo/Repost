import {
  ArrowRight,
  Search,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
  Zap,
} from "lucide-react";

function App() {
  const categories = [
    "Trending",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Accessories",
  ];

  const products = [
    {
      name: "Trending Pick",
      category: "Featured",
      price: "₹499",
    },
    {
      name: "Smart Lifestyle",
      category: "Electronics",
      price: "₹799",
    },
    {
      name: "Everyday Essential",
      category: "Lifestyle",
      price: "₹599",
    },
    {
      name: "Modern Accessory",
      category: "Accessories",
      price: "₹399",
    },
  ];

  return (
    <div className="site">

      {/* NAVBAR */}

      <header className="navbar">
        <div className="logo">
          <span className="logo-dot" />
          REPOST
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#trending">Trending</a>
          <a href="#why-us">Why Us</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={19} />
          </button>

          <button className="icon-button" aria-label="Shopping bag">
            <ShoppingBag size={19} />
          </button>
        </div>
      </header>


      {/* HERO */}

      <section className="hero" id="home">

        <video
          className="hero-video"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="hero-overlay" />

        <div className="hero-grid" />

        {/* 3D CSS OBJECTS */}

        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <div className="hero-content">

          <div className="eyebrow">
            <Sparkles size={15} />
            TRENDING • CURATED • PREMIUM
          </div>

          <h1>
            Discover What's
            <span> Trending.</span>
          </h1>

          <p>
            Explore products people are talking about,
            carefully curated for your everyday lifestyle.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Shop Now
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Explore Collection
            </button>

          </div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>

      </section>


      {/* CATEGORIES */}

      <section className="section categories" id="categories">

        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>

          <button className="text-button">
            View all
            <ArrowRight size={17} />
          </button>
        </div>


        <div className="category-grid">

          {categories.map((category, index) => (
            <div
              className="category-card"
              key={category}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >

              <div className="category-number">
                0{index + 1}
              </div>

              <div className="category-name">
                {category}
              </div>

              <ArrowRight className="category-arrow" size={20} />

            </div>
          ))}

        </div>

      </section>


      {/* TRENDING PRODUCTS */}

      <section className="section products" id="trending">

        <div className="section-heading">

          <div>
            <span className="section-label">DISCOVER</span>
            <h2>Trending Now</h2>
          </div>

          <button className="text-button">
            View all
            <ArrowRight size={17} />
          </button>

        </div>


        <div className="product-grid">

          {products.map((product) => (
            <article className="product-card" key={product.name}>

              <div className="product-image">

                <div className="product-glow" />

                <Sparkles size={30} />

                <span>COMING SOON</span>

              </div>

              <div className="product-info">

                <div>
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                </div>

                <strong>{product.price}</strong>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* WHY US */}

      <section className="section trust-section" id="why-us">

        <div className="section-heading centered">
          <span className="section-label">WHY REPOST</span>

          <h2>
            Shopping made
            <span> simple.</span>
          </h2>

          <p>
            We focus on discovering useful, interesting and
            trending products without making your shopping complicated.
          </p>
        </div>


        <div className="trust-grid">

          <div className="trust-card">
            <ShieldCheck size={25} />
            <span>01</span>
            <h3>Secure Shopping</h3>
            <p>
              A simple and secure experience from browsing to checkout.
            </p>
          </div>

          <div className="trust-card">
            <Truck size={25} />
            <span>02</span>
            <h3>Fast Delivery</h3>
            <p>
              Get your favourite products delivered conveniently.
            </p>
          </div>

          <div className="trust-card">
            <Zap size={25} />
            <span>03</span>
            <h3>Trending Finds</h3>
            <p>
              Discover products selected around what's trending.
            </p>
          </div>

          <div className="trust-card">
            <Headphones size={25} />
            <span>04</span>
            <h3>Easy Support</h3>
            <p>
              We're here to help whenever you need us.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="final-cta">

        <div className="cta-glow" />

        <Sparkles size={24} />

        <span>FIND YOUR NEXT FAVOURITE</span>

        <h2>
          Something worth
          <br />
          discovering.
        </h2>

        <button className="primary-btn">
          Start Shopping
          <ArrowRight size={18} />
        </button>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="logo">
            <span className="logo-dot" />
            REPOST
          </div>

          <p>
            Discover what's trending.
          </p>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Repost. All rights reserved.
          </span>

          <span>
            Crafted for modern shopping.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;
