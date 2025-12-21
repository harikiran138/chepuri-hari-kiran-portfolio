export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h3>Who I Am</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Hello! I&apos;m <strong style={{ color: 'var(--primary-color)' }}>Chepuri Hari Kiran</strong>, 
              a passionate Web Developer dedicated to creating focused, functional, and user-friendly web applications.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              I love building things for the web and constantly learning new technologies. 
              My goal is to craft digital experiences that not only look great but also solve real-world problems.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new frameworks, contributing to open source, 
              or thinking about the next big project to tackle.
            </p>
          </div>
          
          <div className="glass-card">
            <h3 style={{ marginBottom: '1.5rem' }}>What I Do</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                '🎨 Responsive Web Design',
                '⚡ Performance Optimization',
                '🔧 Modern JavaScript/TypeScript',
                '🚀 Next.js & React Development',
                '🎯 User Experience Focus',
                '💡 Creative Problem Solving'
              ].map((item, index) => (
                <li key={index} style={{ 
                  padding: '0.75rem 0', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '1.1rem'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
