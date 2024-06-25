import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices!</p>
      </header>
      <section className="landing-page__features">
        <div className="feature">
          <h2>Wide Selection</h2>
          <p>Explore our vast collection of products from various categories.</p>
        </div>
        <div className="feature">
          <h2>Quality Assurance</h2>
          <p>Rest assured that all our products meet the highest quality standards.</p>
        </div>
        <div className="feature">
          <h2>Fast Shipping</h2>
          <p>Get your orders delivered quickly and efficiently.</p>
        </div>
      </section>
      <footer className="landing-page__footer">
        <p>Copyright &copy; 2024 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;