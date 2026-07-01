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
      message: showAssessment ? `
        OPERATIONAL BASELINE ASSESSMENT:
        1. Primary Bottleneck: ${formData.get('q1_bottleneck')}
        2. Knowledge Storage: ${formData.get('q2_knowledge')}
        3. Prior AI Attempt: ${formData.get('q3_ai_attempt')}
        4. Timeline: ${formData.get('q4_timeline')}
      ` : 'General Inquiry Consultation Request.'
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
        setStatus('Error sending request. Please try again.');
      }
    } catch {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section className="bg-white">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Schedule a Consultation</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2rem' }}>
          Let’s outline your baseline structure and fix broken workflows.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label className="form-label">Full Name</label><input type="text" name="name" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Email Address</label><input type="email" name="email" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Phone Number</label><input type="tel" name="phone" className="form-control" /></div>
          <div className="form-group"><label className="form-label">Company / Organization Name</label><input type="text" name="company" className="form-control" required /></div>
          <div className="form-group">
            <label className="form-label">Industry</label>
            <select name="industry" className="form-control" required defaultValue="">
              <option value="" disabled>Select your industry...</option>
              <option value="Law Firm">Law Firm</option>
              <option value="Childcare">Childcare Organization</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="Small Business">Small Business</option>
              <option value="Professional Services">Professional Services</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">How can we help you?</label>
            <select name="inquiry_type" className="form-control" required defaultValue="" onChange={(e) => setShowAssessment(e.target.value === 'Consulting' || e.target.value === 'Pilot')}>
              <option value="" disabled>Select inquiry type...</option>
              <option value="Consulting">Consulting Services</option>
              <option value="Pilot">Pilot Program</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>

          {showAssessment && (
            <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--accent-color)', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Operational Baseline Assessment</h3>
              <div className="form-group">
                <label className="form-label">1. Primary operational bottleneck?</label>
                <select name="q1_bottleneck" className="form-control">
                  <option value="Inconsistent intake">Inconsistent intake processes</option>
                  <option value="Knowledge hoarding">Knowledge hoarding & staff turnover</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">2. How is knowledge stored?</label>
                <select name="q2_knowledge" className="form-control">
                  <option value="Employees heads">Mostly in employees' heads</option>
                  <option value="Scattered">Scattered across emails and documents</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">3. Prior AI attempt?</label>
                <select name="q3_ai_attempt" className="form-control">
                  <option value="Yes Successfully">Yes, Successfully</option>
                  <option value="Yes Unsuccessfully">Yes, Unsuccessfully</option>
                  <option value="No Looking to start">No, Looking to start</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">4. Timeline for modernization?</label>
                <select name="q4_timeline" className="form-control">
                  <option value="Immediately">Immediately</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
            Secure My Consultation
          </button>
          {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}