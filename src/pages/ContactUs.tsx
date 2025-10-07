import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactUs.css';

export const ContactUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selectedPlan: 'custom'
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    // Form submission logic would go here
    // For now, just show success message
    setSubmitted(true);
    setError('');
  };

  // Keep selectedPlan in sync with URL ?plan=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    if (plan) {
      setFormData(prev => ({ ...prev, selectedPlan: plan }));
    }
  }, [location]);

  return (
    <div id="contact-section" className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subheading">
        {formData.selectedPlan !== 'custom' 
          ? `You've selected the ${formData.selectedPlan.replace('-', ' ')} plan. Fill out the form below to get started!` 
          : 'Tell us about your project and we will get back to you soon!'}
      </p>

      <div id="contact-form-container" className="contact-form-container">
        {submitted ? (
          <div className="success-message">
            <h2>Thank you for contacting us!</h2>
            <p>We've received your message and will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="selectedPlan" className="form-label">Selected Plan</label>
              <select
                id="selectedPlan"
                name="selectedPlan"
                className="form-select"
                value={formData.selectedPlan}
                onChange={handleChange}
              >
                <option value="custom">Custom Plan</option>
                <option value="brand-starter">Brand Identity - Starter</option>
                <option value="brand-growth">Brand Identity - Growth</option>
                <option value="brand-premium">Brand Identity - Premium</option>
                <option value="marketing-starter">Marketing - Starter</option>
                <option value="marketing-growth">Marketing - Growth</option>
                <option value="marketing-premium">Marketing - Premium</option>
                <option value="web-starter">Web Development - Starter</option>
                <option value="web-growth">Web Development - Growth</option>
                <option value="web-premium">Web Development - Premium</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};