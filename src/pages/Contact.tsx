import { useState } from 'react';

export default function Contact({ setPage }: { setPage?: (page: string) => void }) {
  const [status, setStatus] = useState('');
  
  // Enterprise styling variables
  const colors = {
    primary: '#111827',
    secondary: '#374151',
    accent: '#2563EB',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Processing request...');
    const formData = new FormData(e.currentTarget);
    
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not Provided',
      company: formData.get('company'),
      message: `
        SMRG CONSULTING DEMO REQUEST
        ------------------------------------------
        Product Interest: ${formData.get('product_interest')}
        Current Workflow Friction: ${formData.get('friction')}
        Team Size: ${formData.get('team_size')}
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
        setStatus('Request received. Our team will contact you shortly to schedule your demonstration.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus(`Error: ${data.error || 'Server rejected response without error details.'}`);
      }
    } catch (err: any) {
      setStatus(`Connection error: ${err.message || err}`);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: colors.primary, lineHeight: 1.6, background: colors.surface, minHeight: '80vh' }}>
      
      <section style={{ padding: '6rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          
          {/* Left Column: Context & Trust */}
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Let's look at your workflow.
            </h1>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
              Your organization already has an intake process. The question is whether that process is working for you. 
            </p>
            <p style={{ fontSize: '1.15rem', color: colors.secondary, marginBottom: '2rem' }}>
              Request a live demonstration, and we will show you how an SMRG operational utility can transform your unstructured inquiries into decision-ready intelligence.
            </p>
          </div>

          {/* Right Column: Intake Form */}
          <div style={{ background: colors.background, padding: '2.5rem', borderRadius: '8px', border: `1px solid ${colors.border}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Request a Demonstration</h2>
            <form onSubmit={handleSubmit}>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Full Name</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Corporate Email</label>
                <input type="email" name="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone Number (Optional)</label>
                <input type="tel" name="phone" placeholder="e.g. (555) 000-0000" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Company / Organization Name</label>
                <input type="text" name="company" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>

              <div style={{ padding: '1.5rem', background: colors.surface, borderRadius: '4px', border: `1px solid ${colors.border}`, margin: '1.5rem 0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Operational Context</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Solution of Interest</label>
                  <select name="product_interest" required defaultValue="" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box', background: '#fff' }}>
                    <option value="" disabled>Select a utility...</option>
                    <option value="RRU">RRU™ (Real Estate Readiness)</option>
                    <option value="LIRU">LIRU™ (Legal Intake)</option>
                    <option value="IRU">IRU™ (Immigration Intake)</option>
                    <option value="Childcare">Childcare OCC™</option>
                    <option value="Custom">Custom Operational System</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>What is your primary intake friction?</label>
                  <input type="text" name="friction" required placeholder="e.g., Incomplete forms, manual data entry..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box' }} />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Team Size</label>
                  <select name="team_size" required defaultValue="" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: `1px solid ${colors.border}`, fontSize: '1rem', boxSizing: 'border-box', background: '#fff' }}>
                    <option value="" disabled>Select...</option>
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="50+">50+ Employees</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                style={{ width: '100%', background: colors.primary, color: '#fff', padding: '1rem', borderRadius: '4px', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.background = colors.secondary}
                onMouseOut={(e) => e.currentTarget.style.background = colors.primary}
              >
                REQUEST DEMONSTRATION
              </button>
              
              {status && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#EFF6FF', color: colors.accent, borderRadius: '4px', border: '1px solid #BFDBFE', fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>
                  {status}
                </div>
              )}
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}