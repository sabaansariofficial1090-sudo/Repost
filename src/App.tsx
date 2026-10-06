import {
  ArrowRight,
  Headphones,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Trending",
    icon: Sparkles,
    description: "What's hot right now",
  },
  {
    name: "Electronics",
    icon: Zap,
    description: "Smart everyday tech",
  },
  {
    name: "Fashion",
    icon: Sparkles,
    description: "Fresh styles & looks",
  },
  {
    name: "Home & Living",
    icon: ShieldCheck,
    description: "Upgrade your space",
  },
  {
    name: "Beauty",
    icon: Sparkles,
    description: "Everyday essentials",
  },
  {
    name: "Accessories",
    icon: ShoppingBag,
    description: "Complete your look",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "A smooth and secure shopping experience.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your orders delivered to your doorstep.",
  },
  {
    icon: Sparkles,
    title: "Trending Finds",
    description: "Discover products worth knowing about.",
  },
  {
    icon: Headphones,
    title: "Easy Support",
    description: "We're here when you need assistance.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <nav className="navbar">
        <a className="brand" href="/">
          <span className="brand-mark">R</span>
          <span className="brand-name">Repost</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#why-us">Why Repost</a>
        </div>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>

          <button className="icon-button" aria-label="Shopping bag">
            <ShoppingBag size={20} />
          </button>

          <button className="nav-cta">Shop Now</button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            src="/1791129166337.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div className="hero-overlay" />

          <div className="hero-grid" />

          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={15} />
              <span>Discover something new</span>
            </div>

            <h1>
              Discover
              <span>What's Trending.</span>
            </h1>

            <p>
              Explore products people are talking about, loving and adding to
              their everyday lives.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#products">
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a className="secondary-button" href="#categories">
                Browse Categories
              </a>
            </div>
          </div>

          <div className="hero-3d-scene" aria-hidden="true">
            <div className="cube">
              <div className="cube-face cube-front">R</div>
              <div className="cube-face cube-back">R</div>
              <div className="cube-face cube-right">R</div>
              <div className="cube-face cube-left">R</div>
              <div className="cube-face cube-top">R</div>
              <div className="cube-face cube-bottom">R</div>
            </div>

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE</span>
              <h2>Shop by Category</h2>
            </div>

            <p>
              Find something that fits your style, needs and everyday life.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  className="category-card"
                  href="#products"
                  key={category.name}
                >
                  <div className="category-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>

                  <ArrowRight className="category-arrow" size={18} />
                </a>
              );
            })}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>Trending Now</h2>
            </div>

            <p>
              Our collection is being curated. New products will appear here
              as they are added.
            </p>
          </div>

          <div className="empty-products">
            <div className="empty-products-icon">
              <ShoppingBag size={30} />
            </div>

            <h3>Our collection is being curated</h3>

            <p>
              We're preparing a collection of products for you. Check back
              soon for new arrivals.
            </p>
          </div>
        </section>

        <section className="section trust-section" id="why-us">
          <div className="section-heading centered">
            <span className="eyebrow">WHY REPOST</span>
            <h2>Shopping made simple.</h2>
            <p>
              Everything you need for a better, smoother shopping experience.
            </p>
          </div>

          <div className="trust-grid">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="trust-card" key={item.title}>
                  <div className="trust-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}

            <article className="trust-card">
              <div className="trust-icon">
                <ShieldCheck size={23} />
              </div>

              <h3>4 Days Easy Return</h3>
              <p>
                Easy returns within our 4-day return window, subject to our
                return policy.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-glow" />

          <div className="cta-content">
            <span className="eyebrow">READY TO EXPLORE?</span>

            <h2>Find your next favourite.</h2>

            <p>
              Discover products selected for modern everyday living.
            </p>

            <a className="primary-button" href="#categories">
              Start Exploring
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">R</span>
            <span className="brand-name">Repost</span>
          </a>

          <p>
            Discover trending products for modern everyday life.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#why-us">Why Repost</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Repost. All rights reserved.</span>
          <span>Made for modern shoppers.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
