
import './Hero5.css'

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
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'marketing-starter')
              window.history.replaceState({}, '', url.toString())
              const el = document.getElementById('contact-form-container') || document.getElementById('contact-section')
              if (el) {
                const nav = document.querySelector('[data-nav-container]') as HTMLElement | null
                const offset = nav ? nav.getBoundingClientRect().height + 10 : 80
                const y = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}>
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
            <li className="pkg-item">15 posts/month</li>
            <li className="pkg-item">2 ad campaigns + optimization</li>
            <li className="pkg-item">Influencer collaboration support</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'marketing-growth')
              window.history.replaceState({}, '', url.toString())
              const el = document.getElementById('contact-form-container') || document.getElementById('contact-section')
              if (el) {
                const nav = document.querySelector('[data-nav-container]') as HTMLElement | null
                const offset = nav ? nav.getBoundingClientRect().height + 10 : 80
                const y = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}>
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
            <li className="pkg-item">25 posts/month</li>
            <li className="pkg-item">Full video content creation</li>
            <li className="pkg-item">Weekly analytics + strategy call</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'marketing-premium')
              window.history.replaceState({}, '', url.toString())
              const el = document.getElementById('contact-form-container') || document.getElementById('contact-section')
              if (el) {
                const nav = document.querySelector('[data-nav-container]') as HTMLElement | null
                const offset = nav ? nav.getBoundingClientRect().height + 10 : 80
                const y = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}>
              <button className="pkg-cta">Go Premium</button>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
