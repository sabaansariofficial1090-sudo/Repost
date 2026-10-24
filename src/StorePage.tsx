import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ShoppingBag,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  LoaderCircle,
  PackageSearch,
} from "lucide-react";
import { tablesDB } from "./lib/appwrite";

const DATABASE_ID = "ecommerce";
const PRODUCTS_TABLE_ID = "products";

type Product = {
  $id: string;
  name: string;
  description?: string;
  price: number;
  compare_price?: number;
  category?: string;
  images?: string[];
  active?: boolean;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type StorePageProps = {
  go: (path: string) => void;
  initialView?: "products" | "cart";
};

export default function StorePage({
  go,
  initialView = "products",
}: StorePageProps) {
  const [view, setView] = useState<"products" | "cart">(initialView);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [placingOrder, setPlacingOrder] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await tablesDB.listRows({
          databaseId: DATABASE_ID,
          tableId: PRODUCTS_TABLE_ID,
        });

        if (!mounted) return;

        const rows = response.rows as unknown as Product[];

        setProducts(
          rows.filter(
            (product) =>
              product.active === true &&
              Number(product.price) >= 0
          )
        );
      } catch (err) {
        console.error("Product loading failed:", err);

        if (mounted) {
          setError(
            "Products load nahi ho paaye. Appwrite connection aur permissions check karo."
          );
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (sum, item) =>
          sum + Number(item.product.price) * item.quantity,
        0
      ),
    [cart]
  );

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find(
        (item) => item.product.$id === product.$id
      );

      if (existing) {
        return current.map((item) =>
          item.product.$id === product.$id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { product, quantity: 1 }];
    });

    setMessage(`${product.name} cart mein add ho gaya.`);
    window.setTimeout(() => setMessage(""), 2500);
  }

  function changeQuantity(productId: string, amount: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.product.$id === productId
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId: string) {
    setCart((current) =>
      current.filter((item) => item.product.$id !== productId)
    );
  }

  function updateCustomer(
    field: keyof typeof customer,
    value: string
  ) {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function placeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage(
      "Checkout abhi secure order function se connect nahi hua hai. Abhi order submit nahi kiya gaya."
    );
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price);
  }

  return (
    <main className="aurora-store">
      <header className="aurora-store-header">
        <button
          type="button"
          className="aurora-back-button"
          onClick={() => {
            if (view === "cart") {
              setView("products");
            } else {
              go("/");
            }
          }}
        >
          <ArrowLeft size={18} />
          <span>{view === "cart" ? "Continue shopping" : "Home"}</span>
        </button>

        <button
          type="button"
          className="aurora-cart-button"
          onClick={() => setView("cart")}
        >
          <ShoppingCart size={19} />
          <span>Cart</span>
          <strong>{totalItems}</strong>
        </button>
      </header>

      {message && (
        <div className="aurora-notice" role="status">
          {message}
        </div>
      )}

      {view === "products" ? (
        <>
          <section className="aurora-store-hero">
            <span className="aurora-eyebrow">DISCOVER AURORA</span>
            <h1>Find Your Next Favourite</h1>
            <p>
              Explore selected everyday products, useful finds
              and trending picks.
            </p>

            <button
              type="button"
              className="aurora-primary-button"
              onClick={() =>
                document
                  .getElementById("aurora-products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore collection
              <ShoppingBag size={18} />
            </button>
          </section>

          <section
            className="aurora-products-section"
            id="aurora-products"
          >
            <div className="aurora-section-heading">
              <div>
                <span className="aurora-eyebrow">OUR COLLECTION</span>
                <h2>Featured Products</h2>
              </div>

              <span className="aurora-product-count">
                {products.length} products
              </span>
            </div>

            {loading ? (
              <div className="aurora-state">
                <LoaderCircle className="aurora-spinner" size={30} />
                <p>Loading products...</p>
              </div>
            ) : error ? (
              <div className="aurora-state aurora-error">
                <p>{error}</p>
                <button
                  type="button"
                  className="aurora-primary-button"
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>
              </div>
            ) : products.length === 0 ? (
              <div className="aurora-state">
                <PackageSearch size={36} />
                <h3>Our collection is being curated</h3>
                <p>
                  Products will appear here when active products
                  are added to the store.
                </p>
              </div>
            ) : (
              <div className="aurora-product-grid">
                {products.map((product) => (
                  <article
                    className="aurora-product-card"
                    key={product.$id}
                  >
                    <div className="aurora-product-image">
                      {product.images?.[0] ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          loading="lazy"
                        />
                      ) : (
                        <ShoppingBag size={38} />
                      )}
                    </div>

                    <div className="aurora-product-info">
                      <span className="aurora-product-category">
                        {product.category || "Featured"}
                      </span>

                      <h3>{product.name}</h3>

                      {product.description && (
                        <p className="aurora-product-description">
                          {product.description}
                        </p>
                      )}

                      <div className="aurora-product-prices">
                        <strong>
                          {formatPrice(Number(product.price))}
                        </strong>

                        {Number(product.compare_price) >
                          Number(product.price) && (
                          <del>
                            {formatPrice(
                              Number(product.compare_price)
                            )}
                          </del>
                        )}
                      </div>

                      <button
                        type="button"
                        className="aurora-primary-button aurora-add-button"
                        onClick={() => addToCart(product)}
                      >
                        <Plus size={17} />
                        Add to cart
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      ) : (
        <section className="aurora-cart-section">
          <span className="aurora-eyebrow">YOUR SELECTION</span>
          <h1>Your Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="aurora-state">
              <ShoppingCart size={36} />
              <h3>Your cart is empty</h3>
              <p>Add a product before checking out.</p>

              <button
                type="button"
                className="aurora-primary-button"
                onClick={() => setView("products")}
              >
                Browse products
              </button>
            </div>
          ) : (
            <>
              <div className="aurora-cart-layout">
                <div className="aurora-cart-items">
                  {cart.map((item) => (
                    <article
                      className="aurora-cart-item"
                      key={item.product.$id}
                    >
                      <div className="aurora-cart-image">
                        {item.product.images?.[0] ? (
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                          />
                        ) : (
                          <ShoppingBag size={25} />
                        )}
                      </div>

                      <div className="aurora-cart-details">
                        <h3>{item.product.name}</h3>
                        <strong>
                          {formatPrice(Number(item.product.price))}
                        </strong>

                        <div className="aurora-quantity-controls">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              changeQuantity(item.product.$id, -1)
                            }
                          >
                            <Minus size={15} />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              changeQuantity(item.product.$id, 1)
                            }
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="aurora-remove-button"
                        aria-label={`Remove ${item.product.name}`}
                        onClick={() =>
                          removeFromCart(item.product.$id)
                        }
                      >
                        <Trash2 size={18} />
                      </button>
                    </article>
                  ))}
                </div>

                <aside className="aurora-order-summary">
                  <h2>Order summary</h2>

                  <div className="aurora-summary-row">
                    <span>Subtotal</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>

                  <div className="aurora-summary-row">
                    <span>Shipping</span>
                    <strong>Calculated at checkout</strong>
                  </div>

                  <div className="aurora-summary-total">
                    <span>Estimated total</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                </aside>
              </div>

              <form
                className="aurora-checkout-form"
                onSubmit={placeOrder}
              >
                <h2>Delivery details</h2>
                <p>
                  Enter the details needed for delivery.
                </p>

                <label>
                  Full name
                  <input
                    required
                    autoComplete="name"
                    value={customer.name}
                    onChange={(e) =>
                      updateCustomer("name", e.target.value)
                    }
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="[0-9+() -]{10,18}"
                    value={customer.phone}
                    onChange={(e) =>
                      updateCustomer("phone", e.target.value)
                    }
                    placeholder="Your phone number"
                  />
                </label>

                <label>
                  Full delivery address
                  <textarea
                    required
                    autoComplete="street-address"
                    value={customer.address}
                    onChange={(e) =>
                      updateCustomer("address", e.target.value)
                    }
                    placeholder="House number, street, area"
                    rows={3}
                  />
                </label>

                <div className="aurora-form-row">
                  <label>
                    City
                    <input
                      required
                      autoComplete="address-level2"
                      value={customer.city}
                      onChange={(e) =>
                        updateCustomer("city", e.target.value)
                      }
                    />
                  </label>

                  <label>
                    State
                    <input
                      required
                      autoComplete="address-level1"
                      value={customer.state}
                      onChange={(e) =>
                        updateCustomer("state", e.target.value)
                      }
                    />
                  </label>
                </div>

                <label>
                  PIN code
                  <input
                    required
                    inputMode="numeric"
                    autoComplete="postal-code"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={customer.pincode}
                    onChange={(e) =>
                      updateCustomer("pincode", e.target.value)
                    }
                    placeholder="6-digit PIN code"
                  />
                </label>

                <div className="aurora-cod-note">
                  Cash on Delivery (COD) is planned as the initial
                  payment method.
                </div>

                <button
                  type="submit"
                  className="aurora-primary-button aurora-place-order-button"
                  disabled={placingOrder || cart.length === 0}
                >
                  {placingOrder ? (
                    <LoaderCircle size={18} />
                  ) : null}
                  Continue to place order
                </button>

                <p className="aurora-checkout-disclaimer">
                  Checkout is not active until the secure order
                  function has been connected and tested.
                </p>
              </form>
            </>
          )}
        </section>
      )}
    </main>
  );
}
