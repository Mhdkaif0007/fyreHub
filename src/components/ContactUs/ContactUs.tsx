import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../pages/ContactUs.css';

export const ContactUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    selectedPlan: ''
  });

  // Extract the selected plan from URL parameters if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    if (plan) {
      setFormData(prev => ({
        ...prev,
        selectedPlan: plan
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      selectedPlan: ''
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Get in touch with us to discuss your project</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="selectedPlan">Interested In</label>
          <select
            id="selectedPlan"
            name="selectedPlan"
            value={formData.selectedPlan}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a plan</option>
            <option value="custom">Custom Plan</option>
            
            {/* Brand Identity & Design Packages */}
            <option value="brand-starter">Brand Identity - Starter</option>
            <option value="brand-growth">Brand Identity - Growth</option>
            <option value="brand-premium">Brand Identity - Premium</option>
            
            {/* Digital Marketing Packages */}
            <option value="marketing-starter">Digital Marketing - Starter</option>
            <option value="marketing-growth">Digital Marketing - Growth</option>
            <option value="marketing-premium">Digital Marketing - Premium</option>
            
            {/* Web Solutions Packages */}
            <option value="web-starter">Web Solutions - Starter</option>
            <option value="web-growth">Web Solutions - Growth</option>
            <option value="web-premium">Web Solutions - Premium</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project"
            rows={5}
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};