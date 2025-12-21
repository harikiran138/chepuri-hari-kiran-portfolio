export default function Hero() {
  return (
    <section id="hero" style={{ 
      background: 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.15), transparent 70%), radial-gradient(ellipse at bottom, rgba(118, 75, 162, 0.15), transparent 70%)',
      paddingTop: '6rem'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="fade-in-up">
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>
            Hello, I&apos;m
          </p>
          <h1>Chepuri Hari Kiran</h1>
          <p style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '2rem', fontWeight: '300' }}>
            Web Developer & Creative Technologist
          </p>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Passionate about building beautiful, functional web applications that make a difference. 
            I turn ideas into elegant digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', animation: 'float 3s ease-in-out infinite' }}>
          <a href="#about" style={{ fontSize: '2rem' }}>↓</a>
        </div>
      </div>
    </section>
  );
}
