import SplineScene from "./SplineScene";

export default function Hero() {
  return (
    <section id="hero" style={{ 
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: 0 // Reset padding as we're centering vertically
    }}>
      {/* 3D Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}>
        <SplineScene scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className="w-full h-full" />
      </div>

      {/* Content Overlay */}
      <div className="container" style={{ 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 10,
        pointerEvents: 'none' // Let clicks pass through to Spline if needed, but buttons need pointer-events-auto
      }}>
        <div className="fade-in-up" style={{ pointerEvents: 'auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>
            Hello, I&apos;m
          </p>
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1rem',
            background: 'var(--gradient-1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Chepuri Hari Kiran</h1>
          <p style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginBottom: '2rem', fontWeight: '300' }}>
            Web Developer & Creative Technologist
          </p>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Passionate about building beautiful, functional web applications that make a difference. 
            I turn ideas into elegant digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', animation: 'float 3s ease-in-out infinite', pointerEvents: 'auto' }}>
          <a href="#about" style={{ fontSize: '2rem' }}>↓</a>
        </div>
      </div>
    </section>
  );
}
