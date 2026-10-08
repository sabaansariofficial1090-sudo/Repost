import {
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  Eye,
  EyeOff,
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

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Browse a product, open its details and continue to checkout. The complete ordering flow will be connected as the store backend is added.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Aurora is being built with an account area where customers will be able to view their orders and tracking information.",
  },
  {
    question: "What is the return window?",
    answer:
      "Aurora plans a 4-day easy return window for eligible items. Eligibility can vary by product, so the final return policy should always be checked.",
  },
  {
    question: "Is my account information secure?",
    answer:
      "Aurora uses Appwrite authentication for customer accounts. Passwords are handled by the authentication service and are not displayed in the customer or admin dashboard.",
  },
  {
    question: "How can I contact Aurora?",
    answer:
      "Use the Contact Us page for support, order questions, return help and general enquiries.",
  },
];

function AuroraMark() {
  return (
    <svg viewBox="0 0 64 64" className="aurora-mark">
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
      />

      <path
        d="M42 23c9-4 12 3 8 8-3 4-8 3-10 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="50" cy="19" r="2" fill="currentColor" />
    </svg>
  );
}

function AuroraSplash({
  onComplete,
}: {
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2000);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="aurora-splash">
      <div className="splash-glow" />

      <div className="aurora-splash-logo">
        <svg className="splash-emblem" viewBox="0 0 180 180">
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
          />

          <path
            className="splash-draw splash-swirl-two"
            d="M121 64 C151 52 162 73 148 91 C139 103 121 103 112 91"
            fill="none"
            stroke="url(#auroraGold)"
            strokeWidth="4"
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
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow" />

      <div className="page-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function CategoriesPage({
  go,
}: {
  go: (path: string) => void;
}) {
  return (
    <>
      <PageHero
        eyebrow="EXPLORE AURORA"
        title="Shop by Category"
        description="Explore Aurora collections and discover products by the way you shop, live and style your everyday."
      />

      <section className="section page-section">
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                className="category-card page-category-card"
                key={category.name}
                onClick={() => go("/products")}
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
              </button>
            );
          })}
        </div>
      </section>

      <section className="info-band">
        <div>
          <span className="eyebrow">AURORA COLLECTION</span>
          <h2>
            More collections will appear as real products are added.
          </h2>
        </div>

        <button
          className="primary-button"
          onClick={() => go("/products")}
        >
          View Products <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="SHOP SMART"
        title="Best Products & Sale"
        description="Your place for Aurora's real product collection, offers and selected finds."
      />

      <section className="section page-section">
        <div className="empty-products large-empty">
          <div className="empty-products-icon">
            <ShoppingBag size={29} />
          </div>

          <h3>Our collection is being curated</h3>

          <p>
            Products will appear here automatically when they are
            added through the Aurora admin system.
          </p>
        </div>
      </section>
    </>
  );
}

function WhyAuroraPage() {
  const features = [
    [
      "Curated discovery",
      "We want the store to make finding useful products easier.",
    ],
    [
      "Simple experience",
      "From browsing to checkout, the goal is a straightforward mobile journey.",
    ],
    [
      "Clear information",
      "Product names, pricing and important purchase details should be presented clearly.",
    ],
    [
      "Customer first",
      "Accounts, orders, addresses and support are being built around customer needs.",
    ],
    [
      "Secure accounts",
      "Customer authentication is handled by Appwrite.",
    ],
    [
      "Built to improve",
      "Aurora will keep evolving as real products and feedback are added.",
    ],
  ];

  return (
    <>
      <PageHero
        eyebrow="WHY AURORA"
        title="Shopping made simple."
        description="Aurora is being designed around a clean, useful and trustworthy shopping experience."
      />

      <section className="section page-section">
        <div className="feature-story-grid">
          {features.map(([title, description], index) => (
            <article
              className="feature-story-card"
              key={title}
            >
              <div className="feature-number">
                0{index + 1}
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-info-section">
        <div className="dark-info-inner">
          <span className="eyebrow">
            THE AURORA STANDARD
          </span>

          <h2>Discover. Choose. Enjoy.</h2>

          <p>
            Every part of Aurora is being built to make online
            shopping feel more considered, useful and easier to
            navigate.
          </p>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR STORY"
        title="About Aurora"
        description="Aurora is a modern e-commerce destination being built to bring useful products and a refined shopping experience together."
      />

      <section className="section page-section">
        <div className="about-grid">
          <div className="about-main">
            <span className="eyebrow">
              ABOUT THE BRAND
            </span>

            <h2>A store built with a simple idea.</h2>

            <p>
              Aurora is designed for people who want to discover
              products without getting lost in a complicated
              shopping experience.
            </p>

            <p>
              Our focus is clear product presentation, easy
              navigation, secure customer accounts and a smooth
              journey from discovery to delivery.
            </p>

            <p>
              As the store grows, real products and useful
              customer features will be added gradually rather
              than filling the site with placeholders.
            </p>
          </div>

          <div className="about-values">
            {[
              "Useful products",
              "Clean design",
              "Clear information",
              "Customer care",
            ].map((value) => (
              <div className="value-row" key={value}>
                <Check size={18} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="WE'RE HERE TO HELP"
        title="Contact Us"
        description="Have a question about an order, a return or Aurora? This page is the place to start."
      />

      <section className="section page-section">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="eyebrow">
              GET SUPPORT
            </span>

            <h2>How can we help?</h2>

            <p>
              Choose the type of help you need. The live contact
              and enquiry connection will be added with the
              customer backend.
            </p>

            <div className="contact-cards">
              {[
                [
                  "Order Support",
                  "Questions about an order, delivery or tracking.",
                ],
                [
                  "Returns & Help",
                  "Need help with an eligible return or product issue?",
                ],
                [
                  "General Enquiry",
                  "Questions, feedback or business-related enquiries.",
                ],
              ].map(([title, description]) => (
                <div
                  className="contact-card"
                  key={title}
                >
                  <div className="contact-card-icon">
                    <Headphones size={20} />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) =>
              event.preventDefault()
            }
          >
            <span className="eyebrow">
              SEND A MESSAGE
            </span>

            <label>
              Name
              <input
                type="text"
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="Your email"
              />
            </label>

            <label>
              Message
              <textarea
                placeholder="How can we help?"
                rows={5}
              />
            </label>

            <button
              className="primary-button"
              type="submit"
            >
              Send Enquiry <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="NEED TO KNOW"
        title="Frequently Asked Questions"
        description="Quick answers to common questions about shopping, accounts, returns and support at Aurora."
      />

      <section className="section page-section">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                open === index ? "open" : ""
              }`}
              key={faq.question}
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(
                    open === index ? null : index
                  )
                }
              >
                <span>{faq.question}</span>
                <ChevronDown size={19} />
              </button>

              {open === index && (
                <p>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* =========================================================
   ACCOUNT / AUTH
   ========================================================= */

function AccountPage() {
  type AuthMode =
    | "signin"
    | "signup"
    | "forgot"
    | "reset"
    | "verify";

  const [mode, setMode] =
    useState<AuthMode>("signin");

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [user, setUser] = useState<{
    $id: string;
    name: string;
    email: string;
  } | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const [verificationEmail, setVerificationEmail] =
    useState("");

  const [recoveryUserId, setRecoveryUserId] =
    useState("");

  const [recoverySecret, setRecoverySecret] =
    useState("");

  const getHashData = () => {
    const rawHash =
      window.location.hash.replace(/^#/, "");

    const [path, queryString = ""] =
      rawHash.split("?");

    return {
      path,
      params: new URLSearchParams(queryString),
    };
  };

  const cleanAuthUrl = () => {
    window.history.replaceState(
      {},
      document.title,
      `${window.location.pathname}#account`
    );
  };

  const sendVerificationEmail = async (
    userEmail?: string
  ) => {
    const { account } =
      await import("./lib/appwrite");

    await account.createVerification({
      url:
        "https://aurora-stor.vercel.app/#account/verify-email",
    });

    setVerificationEmail(
      userEmail || email
    );
  };

  const completeEmailVerification =
    async () => {
      const { account } =
        await import("./lib/appwrite");

      const { params } =
        getHashData();

      const userId =
        params.get("userId");

      const secret =
        params.get("secret");

      if (!userId || !secret) {
        setSuccess(false);

        setMessage(
          "This verification link is incomplete or invalid. Please request a new verification email."
        );

        setLoading(false);
        return;
      }

      try {
        await account.updateVerification({
          userId,
          secret,
        });

        cleanAuthUrl();

        setSuccess(true);

        setMessage(
          "Email verified successfully. You can now use your Aurora account."
        );

        setMode("signin");

        try {
          const currentUser =
            await account.get();

          setUser({
            $id: currentUser.$id,
            name: currentUser.name,
            email: currentUser.email,
          });
        } catch {
          setUser(null);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Email verification failed. Please request a new link.";

        setSuccess(false);
        setMessage(errorMessage);
      } finally {
        setLoading(false);
      }
    };

  const preparePasswordRecovery =
    () => {
      const { params } =
        getHashData();

      const userId =
        params.get("userId");

      const secret =
        params.get("secret");

      if (!userId || !secret) {
        setSuccess(false);

        setMessage(
          "This password reset link is invalid or incomplete. Please request a new one."
        );

        setLoading(false);
        return;
      }

      setRecoveryUserId(userId);
      setRecoverySecret(secret);
      setMode("reset");
      setLoading(false);
    };

  useEffect(() => {
    const initializeAccount =
      async () => {
        const { path } =
          getHashData();

        if (
          path ===
          "account/verify-email"
        ) {
          await completeEmailVerification();
          return;
        }

        if (
          path ===
          "account/reset-password"
        ) {
          preparePasswordRecovery();
          return;
        }

        try {
          const { account } =
            await import(
              "./lib/appwrite"
            );

          const currentUser =
            await account.get();

          setUser({
            $id: currentUser.$id,
            name: currentUser.name,
            email: currentUser.email,
          });
        } catch {
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

    initializeAccount();
  }, []);

  const handleAuth = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    setMessage("");
    setSuccess(false);
    setSubmitting(true);

    try {
      const { account, ID } =
        await import(
          "./lib/appwrite"
        );

      if (!email.trim()) {
        throw new Error(
          "Please enter your email address."
        );
      }

      if (mode === "signup") {
        if (!name.trim()) {
          throw new Error(
            "Please enter your name."
          );
        }

        if (password.length < 8) {
          throw new Error(
            "Password must be at least 8 characters."
          );
        }

        await account.create({
          userId: ID.unique(),
          email: email.trim(),
          password,
          name: name.trim(),
        });

        await account.createEmailPasswordSession(
          {
            email: email.trim(),
            password,
          }
        );

        const currentUser =
          await account.get();

        setVerificationEmail(
          currentUser.email
        );

        setPassword("");
        setMode("verify");

        try {
          await sendVerificationEmail(
            currentUser.email
          );

          setSuccess(true);

          setMessage(
            "Account created. We sent a verification email to your inbox."
          );
        } catch (verificationError) {
          const verificationMessage =
            verificationError instanceof
            Error
              ? verificationError.message
              : "The account was created, but the verification email could not be sent.";

          setSuccess(false);

          setMessage(
            `Account created, but verification email could not be sent: ${verificationMessage}`
          );
        }

        return;
      }

      await account.createEmailPasswordSession(
        {
          email: email.trim(),
          password,
        }
      );

      const currentUser =
        await account.get();

      if (!currentUser.emailVerification) {
        setVerificationEmail(
          currentUser.email
        );

        setPassword("");
        setMode("verify");

        try {
          await sendVerificationEmail(
            currentUser.email
          );

          setSuccess(true);

          setMessage(
            "Your email is not verified yet. We sent a verification email."
          );
        } catch (verificationError) {
          const verificationMessage =
            verificationError instanceof
            Error
              ? verificationError.message
              : "Verification email could not be sent.";

          setSuccess(false);
          setMessage(
            verificationMessage
          );
        }

        return;
      }

      setUser({
        $id: currentUser.$id,
        name: currentUser.name,
        email: currentUser.email,
      });

      setPassword("");

      setSuccess(true);
      setMessage("Welcome back.");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setSuccess(false);
      setMessage(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword =
    async (
      event: React.FormEvent
    ) => {
      event.preventDefault();

      setMessage("");
      setSuccess(false);
      setSubmitting(true);

      try {
        if (!email.trim()) {
          throw new Error(
            "Please enter your email address."
          );
        }

        const { account } =
          await import(
            "./lib/appwrite"
          );

        await account.createRecovery({
          email: email.trim(),
          url:
            "https://aurora-stor.vercel.app/#account/reset-password",
        });

        setSuccess(true);

        setMessage(
          "Password reset email sent. Please check your inbox and spam folder."
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Could not send the password reset email.";

        setSuccess(false);
        setMessage(errorMessage);
      } finally {
        setSubmitting(false);
      }
    };

  const handleResetPassword =
    async (
      event: React.FormEvent
    ) => {
      event.preventDefault();

      setMessage("");
      setSuccess(false);
      setSubmitting(true);

      try {
        if (
          !recoveryUserId ||
          !recoverySecret
        ) {
          throw new Error(
            "This reset link is invalid. Please request a new password reset email."
          );
        }

        if (newPassword.length < 8) {
          throw new Error(
            "New password must be at least 8 characters."
          );
        }

        const { account } =
          await import(
            "./lib/appwrite"
          );

        await account.updateRecovery({
          userId: recoveryUserId,
          secret: recoverySecret,
          password: newPassword,
        });

        cleanAuthUrl();

        setNewPassword("");

        setSuccess(true);

        setMessage(
          "Password updated successfully. You can now sign in with your new password."
        );

        setMode("signin");
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Password reset failed. Please request a new reset link.";

        setSuccess(false);
        setMessage(errorMessage);
      } finally {
        setSubmitting(false);
      }
    };

  const handleResendVerification =
    async () => {
      setMessage("");
      setSuccess(false);
      setSubmitting(true);

      try {
        await sendVerificationEmail(
          verificationEmail || email
        );

        setSuccess(true);

        setMessage(
          "A new verification email has been sent."
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Could not send the verification email.";

        setSuccess(false);
        setMessage(errorMessage);
      } finally {
        setSubmitting(false);
      }
    };

  const handleLogout = async () => {
    setSubmitting(true);
    setMessage("");

    try {
      const { account } =
        await import(
          "./lib/appwrite"
        );

      await account.deleteSession({
        sessionId: "current",
      });

      setUser(null);
      setName("");
      setEmail("");
      setPassword("");
      setNewPassword("");

      setSuccess(true);
      setMessage(
        "You have been logged out."
      );

      setMode("signin");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Logout failed. Please try again.";

      setSuccess(false);
      setMessage(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <>
        <PageHero
          eyebrow="YOUR AURORA"
          title="My Account"
          description="Your personal space for profile details, addresses, orders and account settings."
        />

        <section className="section page-section">
          <div className="account-preview">
            <div className="account-icon">
              <ShoppingBag size={27} />
            </div>

            <h2>
              Checking your account...
            </h2>

            <p>
              Please wait while Aurora
              restores your existing
              session.
            </p>
          </div>
        </section>
      </>
    );
  }

  if (user) {
    return (
      <>
        <PageHero
          eyebrow="YOUR AURORA"
          title="Welcome back."
          description="Your Aurora account is active and your session will stay available when you return."
        />

        <section className="section page-section">
          <div className="account-preview">
            <div className="account-icon">
              <Check size={27} />
            </div>

            <span className="eyebrow">
              SIGNED IN
            </span>

            <h2>
              {user.name ||
                "Aurora Customer"}
            </h2>

            <p>{user.email}</p>

            {message && (
              <div
                className={`auth-message ${
                  success ? "success" : ""
                }`}
              >
                {message}
              </div>
            )}

            <div className="account-feature-grid">
              {[
                "Profile",
                "My Orders",
                "Saved Addresses",
                "Account Settings",
              ].map((item) => (
                <div key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="account-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={handleLogout}
                disabled={submitting}
              >
                {submitting
                  ? "Signing out..."
                  : "Sign Out"}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (mode === "verify") {
    return (
      <>
        <PageHero
          eyebrow="EMAIL VERIFICATION"
          title="One last step."
          description="Verify your email address to finish setting up your Aurora account."
        />

        <section className="section page-section">
          <div className="account-auth-card">
            <div className="account-icon">
              <ShieldCheck size={27} />
            </div>

            <span className="eyebrow">
              VERIFY YOUR EMAIL
            </span>

            <h2>
              Check your inbox.
            </h2>

            <p>
              We sent a verification
              link to:
            </p>

            <strong>
              {verificationEmail ||
                email}
            </strong>

            {message && (
              <div
                className={`auth-message ${
                  success ? "success" : ""
                }`}
              >
                {message}
              </div>
            )}

            <button
              className="primary-button auth-submit-button"
              type="button"
              onClick={
                handleResendVerification
              }
              disabled={submitting}
            >
              {submitting
                ? "Sending..."
                : "Resend Verification Email"}

              {!submitting && (
                <ArrowRight size={18} />
              )}
            </button>

            <button
              className="auth-secondary-action"
              type="button"
              onClick={async () => {
                try {
                  const { account } =
                    await import(
                      "./lib/appwrite"
                    );

                  await account.deleteSession(
                    {
                      sessionId: "current",
                    }
                  );
                } catch {}

                setMode("signin");
                setMessage("");
                setSuccess(false);
              }}
            >
              Back to Sign In
            </button>
          </div>
        </section>
      </>
    );
  }

  if (mode === "forgot") {
    return (
      <>
        <PageHero
          eyebrow="PASSWORD RECOVERY"
          title="Forgot your password?"
          description="Enter your account email and Aurora will send you a secure password reset link."
        />

        <section className="section page-section">
          <div className="account-auth-card">
            <div className="account-icon">
              <ShieldCheck size={27} />
            </div>

            <span className="eyebrow">
              RECOVER ACCOUNT
            </span>

            <h2>
              Reset your password.
            </h2>

            <p>
              Enter the email address
              connected to your Aurora
              account.
            </p>

            <form
              className="account-auth-form"
              onSubmit={
                handleForgotPassword
              }
            >
              <label>
                Email

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              {message && (
                <div
                  className={`auth-message ${
                    success ? "success" : ""
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                className="primary-button auth-submit-button"
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Sending..."
                  : "Send Reset Link"}

                {!submitting && (
                  <ArrowRight size={18} />
                )}
              </button>
            </form>

            <button
              className="auth-secondary-action"
              type="button"
              onClick={() => {
                setMode("signin");
                setMessage("");
                setSuccess(false);
              }}
            >
              Back to Sign In
            </button>
          </div>
        </section>
      </>
    );
  }

  if (mode === "reset") {
    return (
      <>
        <PageHero
          eyebrow="PASSWORD RECOVERY"
          title="Create a new password."
          description="Choose a new secure password for your Aurora account."
        />

        <section className="section page-section">
          <div className="account-auth-card">
            <div className="account-icon">
              <ShieldCheck size={27} />
            </div>

            <span className="eyebrow">
              PASSWORD RESET
            </span>

            <h2>
              Set your new password.
            </h2>

            <p>
              Your recovery link is ready.
              Enter your new password
              below.
            </p>

            <form
              className="account-auth-form"
              onSubmit={
                handleResetPassword
              }
            >
              <label>
                New Password

                <div className="password-input-wrap">
                  <input
                    type={
                      showNewPassword
                        ? "text"
                        : "password"
                    }
                    value={newPassword}
                    onChange={(event) =>
                      setNewPassword(
                        event.target.value
                      )
                    }
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowNewPassword(
                        !showNewPassword
                      )
                    }
                    aria-label={
                      showNewPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showNewPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </label>

              {message && (
                <div
                  className={`auth-message ${
                    success ? "success" : ""
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                className="primary-button auth-submit-button"
                type="submit"
                disabled={submitting}
              >
                {submitting
                  ? "Updating..."
                  : "Update Password"}

                {!submitting && (
                  <Check size={18} />
                )}
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="YOUR AURORA"
        title="My Account"
        description="Create your Aurora account or sign in to continue shopping."
      />

      <section className="section page-section">
        <div className="account-auth-card">
          <div className="account-icon">
            <ShoppingBag size={27} />
          </div>

          <span className="eyebrow">
            {mode === "signin"
              ? "WELCOME BACK"
              : "JOIN AURORA"}
          </span>

          <h2>
            {mode === "signin"
              ? "Sign in to your account."
              : "Create your account."}
          </h2>

          <p>
            {mode === "signin"
              ? "Sign in to access your Aurora account and orders."
              : "Create your Aurora account and verify your email to activate it."}
          </p>

          <form
            className="account-auth-form"
            onSubmit={handleAuth}
          >
            {mode === "signup" && (
              <label>
                Full Name

                <input
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </label>
            )}

            <label>
              Email

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                placeholder="Your email"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Password

              <div className="password-input-wrap">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  placeholder="At least 8 characters"
                  autoComplete={
                    mode === "signin"
                      ? "current-password"
                      : "new-password"
                  }
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </label>

            {mode === "signin" && (
              <button
                type="button"
                className="forgot-password-button"
                onClick={() => {
                  setMode("forgot");
                  setMessage("");
                  setSuccess(false);
                }}
              >
                Forgot password?
              </button>
            )}

            {message && (
              <div
                className={`auth-message ${
                  success ? "success" : ""
                }`}
              >
                {message}
              </div>
            )}

            <button
              className="primary-button auth-submit-button"
              type="submit"
              disabled={submitting}
            >
              {submitting
                ? "Please wait..."
                : mode === "signin"
                ? "Sign In"
                : "Create Account"}

              {!submitting && (
                <ArrowRight size={18} />
              )}
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {mode === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>

            <button
              type="button"
              onClick={() => {
                setMessage("");
                setSuccess(false);
                setShowPassword(false);

                setMode(
                  mode === "signin"
                    ? "signup"
                    : "signin"
                );
              }}
            >
              {mode === "signin"
                ? "Create Account"
                : "Sign In"}
            </button>
          </div>

          <div className="account-security-note">
            <ShieldCheck size={17} />

            <span>
              Your password is handled
              securely by Appwrite and is
              never displayed in the Aurora
              admin dashboard.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function HomePage({
  go,
}: {
  go: (path: string) => void;
}) {
  return (
    <>
      <section className="hero">
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
            <span>
              Curated for modern shoppers
            </span>
          </div>

          <h1>
            Discover
            <span>Something Better.</span>
          </h1>

          <p>
            Explore carefully selected
            products, standout finds and
            everyday essentials — all in
            one place.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() =>
                go("/products")
              }
            >
              Shop Best Products{" "}
              <ArrowRight size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                go("/categories")
              }
            >
              Explore Categories
            </button>
          </div>
        </div>

        <div className="hero-3d-scene">
          <div className="cube">
            <div className="cube-face cube-front">
              A
            </div>
            <div className="cube-face cube-back">
              A
            </div>
            <div className="cube-face cube-right">
              A
            </div>
            <div className="cube-face cube-left">
              A
            </div>
            <div className="cube-face cube-top">
              A
            </div>
            <div className="cube-face cube-bottom">
              A
            </div>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <section className="section categories-section">
        <div className="section-heading">
          <span className="eyebrow">
            EXPLORE
          </span>

          <h2>Shop by Category</h2>

          <p>
            Browse products by the things
            you love and use every day.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                className="category-card"
                onClick={() =>
                  go("/categories")
                }
                key={category.name}
              >
                <div className="category-icon">
                  <Icon size={21} />
                </div>

                <div className="category-copy">
                  <h3>{category.name}</h3>
                  <p>
                    {category.description}
                  </p>
                </div>

                <ArrowRight
                  className="category-arrow"
                  size={18}
                />
              </button>
            );
          })}
        </div>
      </section>

      <section className="section products-section">
        <div className="section-heading">
          <span className="eyebrow">
            SHOP SMART
          </span>

          <h2>Best Products &amp; Sale</h2>

          <p>
            Discover selected products and
            offers as they become available.
          </p>
        </div>

        <div className="empty-products">
          <div className="empty-products-icon">
            <ShoppingBag size={29} />
          </div>

          <h3>
            Our collection is being curated
          </h3>

          <p>
            New products will appear here as
            they are added to Aurora.
          </p>
        </div>

        <button
          className="text-link-button"
          onClick={() =>
            go("/products")
          }
        >
          Open Best Products &amp; Sale{" "}
          <ArrowRight size={16} />
        </button>
      </section>

      <section className="section trust-section">
        <div className="section-heading">
          <span className="eyebrow">
            WHY AURORA
          </span>

          <h2>
            Shopping made simple.
          </h2>

          <p>
            A clean, convenient shopping
            experience built around you.
          </p>
        </div>

        <div className="trust-grid">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="trust-card"
                key={item.title}
              >
                <div className="trust-icon">
                  <Icon size={21} />
                </div>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>
              </article>
            );
          })}

          <article className="trust-card">
            <div className="trust-icon">
              <ShieldCheck size={21} />
            </div>

            <h3>
              4 Days Easy Return
            </h3>

            <p>
              Easy returns within our
              4-day return window, subject
              to the return policy.
            </p>
          </article>
        </div>

        <button
          className="text-link-button"
          onClick={() =>
            go("/why-aurora")
          }
        >
          Discover Why Aurora{" "}
          <ArrowRight size={16} />
        </button>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <span className="eyebrow">
            EXPLORE AURORA
          </span>

          <h2>
            Find something you'll love.
          </h2>

          <p>
            Discover products selected for
            modern everyday living.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              go("/categories")
            }
          >
            Start Exploring{" "}
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [showSplash, setShowSplash] =
    useState(true);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [route, setRoute] = useState(
    window.location.hash.replace(
      "#",
      ""
    ) || "home"
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(
        window.location.hash.replace(
          "#",
          ""
        ) || "home"
      );

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    };

    window.addEventListener(
      "hashchange",
      onHashChange
    );

    return () =>
      window.removeEventListener(
        "hashchange",
        onHashChange
      );
  }, []);

  const go = (path: string) => {
    const cleanPath =
      path
        .replace(/^#\/?/, "")
        .replace(/^\//, "") ||
      "home";

    setMenuOpen(false);

    if (route === cleanPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.location.hash =
      cleanPath;
  };

  const isAccountRoute =
    route === "account" ||
    route.startsWith("account/");

  const page =
    route === "categories" ? (
      <CategoriesPage go={go} />
    ) : route === "products" ? (
      <ProductsPage />
    ) : route === "why-aurora" ? (
      <WhyAuroraPage />
    ) : isAccountRoute ? (
      <AccountPage />
    ) : route === "about" ? (
      <AboutPage />
    ) : route === "contact" ? (
      <ContactPage />
    ) : route === "faq" ? (
      <FAQPage />
    ) : (
      <HomePage go={go} />
    );

  return (
    <>
      {showSplash && (
        <AuroraSplash
          onComplete={() =>
            setShowSplash(false)
          }
        />
      )}

      <div className="site-shell">
        <nav className="navbar">
          <button
            className="brand brand-button"
            onClick={() =>
              go("/home")
            }
          >
            <span className="brand-emblem">
              <AuroraMark />
            </span>

            <span className="brand-name">
              AURORA
            </span>
          </button>

          <div className="nav-links">
            <button
              onClick={() =>
                go("/home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                go("/categories")
              }
            >
              Categories
            </button>

            <button
              onClick={() =>
                go("/products")
              }
            >
              Products
            </button>

            <button
              onClick={() =>
                go("/why-aurora")
              }
            >
              Why Aurora
            </button>
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() =>
                go("/products")
              }
            >
              <Search size={18} />
            </button>

            <button
              className="icon-button"
              onClick={() =>
                go("/account")
              }
            >
              <ShoppingBag size={18} />
            </button>

            <button
              className="nav-cta"
              onClick={() =>
                go("/products")
              }
            >
              Shop Now
            </button>

            <button
              className="mobile-menu-button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <>
            <div
              className="mobile-menu-backdrop"
              onClick={() =>
                setMenuOpen(false)
              }
            />

            <aside className="mobile-menu">
              <div className="mobile-menu-header">
                <span>
                  Explore Aurora
                </span>

                <button
                  className="mobile-menu-close"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {[
                  ["Home", "/home"],
                  [
                    "Categories",
                    "/categories",
                  ],
                  [
                    "Best Products & Sale",
                    "/products",
                  ],
                  [
                    "Why Aurora",
                    "/why-aurora",
                  ],
                  [
                    "My Account",
                    "/account",
                  ],
                  [
                    "About Aurora",
                    "/about",
                  ],
                  [
                    "Contact Us",
                    "/contact",
                  ],
                  ["FAQ", "/faq"],
                ].map(
                  ([label, path]) => (
                    <button
                      className="mobile-menu-link"
                      key={path}
                      onClick={() =>
                        go(path)
                      }
                    >
                      <span>
                        {label}
                      </span>

                      <ArrowRight
                        size={17}
                      />
                    </button>
                  )
                )}
              </div>
            </aside>
          </>
        )}

        <main>{page}</main>

        <footer className="footer">
          <div className="footer-main">
            <button
              className="brand brand-button footer-brand"
              onClick={() =>
                go("/home")
              }
            >
              <span className="brand-emblem">
                <AuroraMark />
              </span>

              <span className="brand-name">
                AURORA
              </span>
            </button>

            <p>
              A modern destination for
              products worth discovering.
            </p>

            <div className="footer-links">
              <button
                onClick={() =>
                  go("/home")
                }
              >
                Home
              </button>

              <button
                onClick={() =>
                  go("/categories")
                }
              >
                Categories
              </button>

              <button
                onClick={() =>
                  go("/products")
                }
              >
                Products
              </button>

              <button
                onClick={() =>
                  go("/why-aurora")
                }
              >
                Why Aurora
              </button>

              <button
                onClick={() =>
                  go("/about")
                }
              >
                About
              </button>

              <button
                onClick={() =>
                  go("/contact")
                }
              >
                Contact
              </button>

              <button
                onClick={() =>
                  go("/faq")
                }
              >
                FAQ
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Aurora.
              All rights reserved.
            </span>

            <span>
              Discover. Choose. Enjoy.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
