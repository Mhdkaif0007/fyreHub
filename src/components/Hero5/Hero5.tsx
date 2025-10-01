
export const Hero5 = () => {
  return (
    <section className="packages-root">
      <h2 className="packages-title">Digital Marketing Packages</h2>

      <div className="packages-grid">
        {/* Starter */}
        <article className="pkg-card">
          <header className="pkg-header">
            <h3 className="pkg-name">Starter</h3>
          </header>

          <ul className="pkg-list">
            <li className="pkg-item">Social media management (8 posts/month)</li>
            <li className="pkg-item">1 paid ad campaign setup</li>
            <li className="pkg-item">Monthly performance report</li>
          </ul>

          <div className="pkg-cta-wrap">
            <button className="pkg-cta">Get Started</button>
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
            <li className="pkg-item">15 posts/month</li>
            <li className="pkg-item">2 ad campaigns + optimization</li>
            <li className="pkg-item">Influencer collaboration support</li>
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
            <li className="pkg-item">25 posts/month</li>
            <li className="pkg-item">Full video content creation</li>
            <li className="pkg-item">Weekly analytics + strategy call</li>
          </ul>

          <div className="pkg-cta-wrap">
            <button className="pkg-cta">Go Premium</button>
          </div>
        </article>
      </div>
    </section>
  )
}
