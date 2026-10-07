import {
  ArrowRight,
  Headphones,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const categories = [
  {
    name: "Trending",
    icon: Sparkles,
    description: "What's popular right now",
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
    title: "Fresh Finds",
    description: "Discover products selected for modern shoppers.",
  },
  {
    icon: Headphones,
    title: "Easy Support",
    description: "We're here when you need assistance.",
  },
];

function AuroraMark() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className="aurora-mark"
    >
      <path
        d="M14 51 31.5 10 50 51"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M22 35h19"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M13 43c-8 6-5 14 3 13 8-1 11-10 7-16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M42 23c9-4 12 3 8 8-3 4-8 3-10 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx="50" cy="19" r="2" fill="currentColor" />
    </svg>
  );
}

function AuroraSplashLogo() {
  return (
    <div className="aurora-splash-logo">
      <svg
        className="splash-emblem"
        viewBox="0 0 180 180"
        role="img"
        aria-label="Aurora"
      >
        <defs>
          <linearGradient
            id="auroraGold"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8d6420" />
            <stop offset="45%" stopColor="#d8ad58" />
            <stop offset="100%" stopColor="#765018" />
          </linearGradient>
        </defs>

        <path
          className="splash-draw splash-a"
          d="M47 139 L89 36 L133 139"
          fill="none"
          stroke="url(#auroraGold)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          className="splash-draw splash-cross"
          d="M67 94 H111"
          fill="none"
          stroke="url(#auroraGold)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          className="splash-draw splash-swirl"
          d="M43 115 C18 130 29 157 58 151 C83 146 88 119 75 99 C65 84 44 84 36 98"
          fill="none"
          stroke="url(#auroraGold)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          className="splash-draw splash-swirl-two"
          d="M121 64 C151 52 162 73 148 91 C139 103 121 103 112 91"
          fill="none"
          stroke="url(#auroraGold)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle
          className="splash-dot"
          cx="145"
          cy="55"
          r="4"
          fill="#c99b43"
        />
      </svg>

      <div className="aurora-wordmark">AURORA</div>

      <div className="splash-progress">
        <span />
      </div>
    </div>
  );
}

function AuroraSplash({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2000);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="aurora-splash">
      <div className="splash-glow" />
      <AuroraSplashLogo />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {showSplash && (
        <AuroraSplash onComplete={() => setShowSplash(false)} />
      )}

      <div className="site-shell">
        <nav className="navbar">
          <a className="brand" href="#home" aria-label="Aurora home">
            <span className="brand-emblem">
              <AuroraMark />
            </span>

            <span className="brand-name">AURORA</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#why-us">Why Aurora</a>
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={2} />
            </button>

            <button
              className="icon-button"
              type="button"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} strokeWidth={2} />
            </button>

            <a className="nav-cta" href="#products">
              Shop Now
            </a>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <>
            <div
              className="mobile-menu-backdrop"
              onClick={() => setMenuOpen(false)}
            />

            <aside className="mobile-menu">
              <div className="mobile-menu-header">
                <span>Explore Aurora</span>

                <button
                  type="button"
                  className="mobile-menu-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu-links">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Home</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#categories"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Categories</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#products"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Best Products & Sale</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#why-us"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Why Aurora</span>
                  <ArrowRight size={17} />
                </a>

                <div className="mobile-menu-divider" />

                <a
                  href="#account"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>My Account</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>About Aurora</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Contact Us</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#faq"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>FAQ</span>
                  <ArrowRight size={17} />
                </a>
              </div>
            </aside>
          </>
        )}

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
                <Sparkles size={14} />
                <span>Curated for modern shoppers</span>
              </div>

              <h1>
                Discover
                <span>Something Better.</span>
              </h1>

              <p>
                Explore carefully selected products, standout finds and
                everyday essentials — all in one place.
              </p>

              <div className="hero-buttons">
                <a className="primary-button" href="#products">
                  Shop Best Products
                  <ArrowRight size={18} />
                </a>

                <a className="secondary-button" href="#categories">
                  Explore Categories
                </a>
              </div>
            </div>

            <div className="hero-3d-scene" aria-hidden="true">
              <div className="cube">
                <div className="cube-face cube-front">A</div>
                <div className="cube-face cube-back">A</div>
                <div className="cube-face cube-right">A</div>
                <div className="cube-face cube-left">A</div>
                <div className="cube-face cube-top">A</div>
                <div className="cube-face cube-bottom">A</div>
              </div>

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>

            <div className="hero-scroll" aria-hidden="true">
              <span>Scroll to explore</span>
              <div className="scroll-line" />
            </div>
          </section>

          <section
            className="section categories-section"
            id="categories"
          >
            <div className="section-heading">
              <span className="eyebrow">EXPLORE</span>

              <h2>Shop by Category</h2>

              <p>
                Browse products by the things you love and use every day.
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
                      <Icon size={21} />
                    </div>

                    <div className="category-copy">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>

                    <ArrowRight
                      className="category-arrow"
                      size={18}
                    />
                  </a>
                );
              })}
            </div>
          </section>

          <section
            className="section products-section"
            id="products"
          >
            <div className="section-heading">
              <span className="eyebrow">SHOP SMART</span>

              <h2>Best Products &amp; Sale</h2>

              <p>
                Discover selected products and offers as they become
                available.
              </p>
            </div>

            <
