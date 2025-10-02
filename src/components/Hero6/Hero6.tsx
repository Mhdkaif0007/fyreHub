
import './Hero6.css'
import { Link } from 'react-router-dom'

export const Hero6 = () => {
  return (
    <section className="packages-root">
      <h2 className="packages-title">Web Solutions Packages</h2>

      <div className="packages-grid">
        {/* Starter */}
        <article className="pkg-card">
          <header className="pkg-header">
            <h3 className="pkg-name">Starter</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">1-page website (landing page)</li>
            <li className="pkg-item">Mobile responsive</li>
            <li className="pkg-item">Basic SEO setup</li>
            <li className="pkg-item">Domain renewal &amp; management (annual, included as per package).</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section">
              <button className="pkg-cta">Get Started</button>
            </a>
          </div>
        </article>

        {/* Growth */}
        <article className="pkg-card pkg-featured">
          <div className="ribbon-wrapper">
            <span className="ribbon">Best Value!</span>
          </div>
          <header className="pkg-header">
            <h3 className="pkg-name featured-name">Growth</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Everything in Starter</li>
            <li className="pkg-item">Up to 5 pages (Home, About, Services, Portfolio, Contact)</li>
            <li className="pkg-item">Blog setup</li>
            <li className="pkg-item">Social media integration</li>
            <li className="pkg-item">Domain renewal &amp; management (annual, included as per package).</li>
            <li className="pkg-item">On-page SEO</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section">
              <button className="pkg-cta pkg-cta-strong">Choose Growth</button>
            </a>
          </div>
        </article>

        {/* Premium */}
        <article className="pkg-card">
          <header className="pkg-header">
            <h3 className="pkg-name">Premium</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Everything in Growth</li>
            <li className="pkg-item">Custom website with animations</li>
            <li className="pkg-item">E-commerce functionality</li>
            <li className="pkg-item">Advanced SEO + analytics</li>
            <li className="pkg-item">Ongoing support &amp; maintenance</li>
            <li className="pkg-item">Domain renewal &amp; management (annual, included as per package).</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section">
              <button className="pkg-cta">Go Premium</button>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
