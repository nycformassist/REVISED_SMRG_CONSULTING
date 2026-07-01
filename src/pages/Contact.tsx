import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Processing diagnostic payload...');
    const formData = new FormData(e.currentTarget);
    
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not Provided',
      company: formData.get('company'),
      message: `
        BUSINESS BLINDSPOT SCAN / OPERATIONS PULSE
        ------------------------------------------
        Biggest operational friction: ${formData.get('friction')}
        Current tech stack state: ${formData.get('tech_state')}
        Team size: ${formData.get('team_size')}
      `
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Scan initiated. Our team will contact you with the next phase.');
        (e.target as HTMLFormElement).reset();
      } else {
        // Display the explicit server error on screen
        setStatus(`Error: ${data.error || 'Server rejected response without error details.'}`);
      }
    } catch (err: any) {
      setStatus(`Network tracking connection error: ${err.message || err}`);
    }
  };

  return (
    <section className="bg-white">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Business Blindspot Scan™</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2rem' }}>
          Initiate your Operations Pulse™ by providing your baseline vectors below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label className="form-label">Full Name</label><input type="text" name="name" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Email Address</label><input type="email" name="email" className="form-control" required /></div>
          <div className="form-group"><label className="form-label">Company Name</label><input type="text" name="company" className="form-control" required /></div>
          
          <div style={{ background: 'var(--bg-light)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Diagnostic Baselines</h3>
            <div className="form-group">
              <label className="form-label">Where is your biggest operational friction?</label>
              <input type="text" name="friction" className="form-control" required placeholder="e.g., Onboarding, document management..." />
            </div>
            <div className="form-group">
              <label className="form-label">How would you describe your current tech stack?</label>
              <select name="tech_state" className="form-control" required defaultValue="">
                <option value="" disabled>Select...</option>
                <option value="Fragmented">Fragmented (Too many apps that don't talk)</option>
                <option value="Outdated">Outdated (Legacy systems slowing us down)</option>
                <option value="Underutilized">Underutilized (Paying for tools we don't use)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Estimated Team Size</label>
              <select name="team_size" className="form-control" required defaultValue="">
                <option value="" disabled>Select...</option>
                <option value="1-10">1-10 Employees</option>
                <option value="11-50">11-50 Employees</option>
                <option value="50+">50+ Employees</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
            Launch Interactive Blindspot Scan™
          </button>
          {status && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold', color: 'var(--accent-color)' }}>{status}</p>}
        </form>
      </div>
    </section>
  );
}