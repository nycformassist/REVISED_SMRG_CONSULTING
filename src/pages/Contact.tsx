import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [showAssessment, setShowAssessment] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not Provided',
      organization: formData.get('company'),
      system: `${formData.get('industry')} - ${formData.get('inquiry_type')}`,
      message: showAssessment ? `ASSESSMENT:\n1. Bottleneck: ${formData.get('q1')}\n2. Knowledge: ${formData.get('q2')}` : 'General Inquiry'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setStatus('Success! We will be in touch shortly.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Error processing your request. Please try again.');
      }
    } catch {
      setStatus('Network connection issue. Please try again.');
    }
  };

  return (
    <section className="bg-white">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Secure Consultation Intake</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label className="form-label">Full Name</label><input type="text" name="name" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Email Address</label><input type="email" name="email" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Phone Vector</label><input type="tel" name="phone" className="form-control" /></div>
          <div className="form-group"><label className="form-label">Company Name</label><input type="text" name="company" className="form-control" required /></div>
          <div className="form-group">
            <label className="form-label">Industry Sector</label>
            <select name="industry" className="form-control" required defaultValue="">
              <option value="" disabled>Select...</option>
              <option value="Law Firm">Law Firm</option>
              <option value="Childcare">Childcare</option>
              <option value="Small Business">Small Business</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Inquiry Framework</label>
            <select name="inquiry_type" className="form-control" required defaultValue="" onChange={(e) => setShowAssessment(e.target.value === 'Consulting')}>
              <option value="" disabled>Select...</option>
              <option value="Consulting">Consulting Services</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>
          {showAssessment && (
            <div style={{ padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '6px', marginBottom: '1.5rem' }}>
              <div className="form-group"><label className="form-label">Primary Bottleneck</label><input type="text" name="q1" className="form-control" /></div>
              <div className="form-group"><label className="form-label">Knowledge Storage State</label><input type="text" name="q2" className="form-control" /></div>
            </div>
          )}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Engagement Payload</button>
          {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
