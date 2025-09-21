import React from 'react'
import './Hero4.css'

export const Hero4 = () => {
  return (
    <section className="packages-root">
      <h2 className="packages-title">Brand Identity &amp; Design Packages</h2>

      <div className="packages-grid">
        {/* Starter */}
        <article className="pkg-card">
          <header className="pkg-header">
            <h3 className="pkg-name">Starter</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Logo design</li>
            <li className="pkg-item">Brand color palette &amp; fonts</li>
            <li className="pkg-item">Business card / basic stationery</li>
          </ul>

          <div className="pkg-cta-wrap">
            <button className="pkg-cta">Get Started</button>
          </div>
        </article>

        {/* Growth (featured) */}
        <article className="pkg-card pkg-featured">
          <header className="pkg-header">
            <h3 className="pkg-name featured-name">Growth</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Everything in Starter</li>
            <li className="pkg-item">Social media templates (10 posts)</li>
            <li className="pkg-item">Brand guidelines document</li>
            <li className="pkg-item">Basic motion graphics intro/outro</li>
          </ul>

          <div className="pkg-cta-wrap">
            <button className="pkg-cta pkg-cta-strong">Choose Growth</button>
          </div>
        </article>

        {/* Premium */}
        <article className="pkg-card">
          <header className="pkg-header">
            <h3 className="pkg-name">Premium</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Everything in Growth</li>
            <li className="pkg-item">Product packaging design</li>
            <li className="pkg-item">Photography session</li>
            <li className="pkg-item">Advanced motion graphics/animations</li>
          </ul>

          <div className="pkg-cta-wrap">
            <button className="pkg-cta">Go Premium</button>
          </div>
        </article>
      </div>
    </section>
  )
}
