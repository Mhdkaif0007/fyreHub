
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
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'brand-starter')
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

        {/* Growth (featured) */}
        <article className="pkg-card pkg-featured">
          <div className="ribbon-wrapper">
            <span className="ribbon">Best Value!</span>
          </div>
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
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'brand-growth')
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
            <li className="pkg-item">Product packaging design</li>
            <li className="pkg-item">Photography session</li>
            <li className="pkg-item">Advanced motion graphics/animations</li>
          </ul>

          <div className="pkg-cta-wrap">
            <a href="#contact-section" onClick={(e) => {
              e.preventDefault()
              const url = new URL(window.location.href)
              url.searchParams.set('plan', 'brand-premium')
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
