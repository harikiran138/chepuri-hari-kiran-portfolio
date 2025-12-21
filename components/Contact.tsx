export default function Contact() {
  return (
    <section id="contact" style={{ background: 'radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1), transparent 70%)' }}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="grid grid-2">
          <div className="glass-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  📞 Phone
                </p>
                <p>+123456789</p>
              </div>
              <div>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  ✉️ Email
                </p>
                <a href="mailto:me@gmail.com" style={{ color: 'var(--primary-color)' }}>
                  me@gmail.com
                </a>
              </div>
              <div>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  📍 Location
                </p>
                <p>
                  123 North Street<br />
                  Some City<br />
                  Some Country
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Let&apos;s Connect</h3>
            <p style={{ marginBottom: '2rem' }}>
              I&apos;m always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:me@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="#hero" className="btn btn-secondary">
                Back to Top
              </a>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: '#666' }}>
            © {new Date().getFullYear()} Chepuri Hari Kiran. Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </section>
  );
}
