import Header from "./components/Header";
import BrandLockup from "./components/BrandLockup";
import Emblem from "./components/Emblem";
import BookingForm from "./components/BookingForm";
import { services, features, steps, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "./data";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-logo">
              <BrandLockup id="hero" />
            </div>

            <div className="hero-text">
              <p className="eyebrow">Women's Salon & Home Beauty Services</p>
              <h1 className="tagline">
                <span>Look Good</span>
                <span>Feel Beautiful</span>
                <span>Always</span>
              </h1>
              <span className="gold-rule" />
              <p className="lead">
                Beauty at your doorstep. Enhancing your natural beauty in the comfort of your home.
              </p>
              <div className="hero-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  WhatsApp Us
                </a>
                <a href={PHONE_TEL} className="btn btn-outline">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="hero-areas">📍 Serving Redhills & Chennai</p>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What we offer</p>
              <h2>Our Services</h2>
              <p>Everything you need to look and feel your best, at the salon or at home.</p>
            </div>
            <div className="grid services-grid">
              {services.map((s) => (
                <article key={s.title} className="card service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why-us" className="section section-tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Why Beauty Cult</p>
              <h2>Pampering You Can Trust</h2>
            </div>
            <div className="grid features-grid">
              {features.map((f) => (
                <div key={f.title} className="feature">
                  <span className="sparkle">✨</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Simple & easy</p>
              <h2>How Home Service Works</h2>
            </div>
            <div className="grid steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="step">
                  <span className="step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section id="areas" className="section section-dark">
          <div className="container areas">
            <div>
              <p className="eyebrow light">Service Areas</p>
              <h2>We Come to You</h2>
              <p>
                Home beauty services across <strong>Redhills</strong> and <strong>Chennai</strong>.
                Not sure if we cover your locality? Just ask!
              </p>
            </div>
            <div className="area-pills">
              <span>📍 Redhills</span>
              <span>📍 Chennai</span>
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="section">
          <div className="container book">
            <div className="book-info">
              <p className="eyebrow">Book an appointment</p>
              <h2>Ready to Glow?</h2>
              <p>
                Fill in a few details and send them straight to us on WhatsApp, or simply give us a call.
              </p>
              <div className="contact-list">
                <a href={PHONE_TEL} className="contact-item">
                  <span>📞</span>
                  <div>
                    <small>Call</small>
                    <strong>{PHONE_DISPLAY}</strong>
                  </div>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
                  <span>💬</span>
                  <div>
                    <small>WhatsApp</small>
                    <strong>{PHONE_DISPLAY}</strong>
                  </div>
                </a>
                <div className="contact-item">
                  <span>📍</span>
                  <div>
                    <small>Service Areas</small>
                    <strong>Redhills & Chennai</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Emblem id="footer" className="footer-emblem" />
            <div>
              <div className="footer-name">Beauty Cult</div>
              <p>Beauty Beyond Ordinary</p>
              <p className="footer-sub">Women's Salon & Home Beauty Services</p>
            </div>
          </div>
          <div className="footer-contact">
            <a href={PHONE_TEL}>📞 {PHONE_DISPLAY}</a>
            <span>📍 Redhills & Chennai</span>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Beauty Cult. All rights reserved.</p>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.11.56 4.17 1.62 5.99L4 29l8.25-1.6a12.1 12.1 0 0 0 3.79.6C22.68 28 28 22.64 28 16.03 28 9.42 22.68 3 16.04 3Zm0 22.83c-1.21 0-2.4-.2-3.53-.6l-.25-.09-4.9.95.98-4.75-.17-.27a10.6 10.6 0 0 1-1.65-5.1c0-5.78 4.7-10.48 10.5-10.48 5.79 0 10.5 4.7 10.5 10.5 0 5.79-4.7 9.84-11.48 9.84Zm5.77-7.84c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.77 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </>
  );
}
