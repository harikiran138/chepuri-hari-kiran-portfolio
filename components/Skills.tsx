export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & Tools',
      skills: ['Node.js', 'Git', 'VS Code', 'npm', 'Responsive Design', 'Web Performance']
    },
    {
      title: 'Design & UX',
      skills: ['UI/UX Design', 'Figma', 'Glassmorphism', 'Animations', 'Color Theory', 'Typography']
    }
  ];

  return (
    <section id="skills" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="grid grid-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card">
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
