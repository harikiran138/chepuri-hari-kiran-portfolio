import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: 'Movie Ranking Project',
      description: 'A curated list of my favorite movies with personal reviews and ratings. Features a clean, dark-themed design.',
      image: '/images/movie-ranking.png',
      tags: ['HTML', 'CSS', 'Web Design'],
      link: '/projects/movie-ranking'
    },
    {
      title: 'Birthday Invite',
      description: 'An interactive birthday invitation page with event details, location map, and RSVP information.',
      image: '/images/birthday-invite.png',
      tags: ['HTML', 'CSS', 'Responsive'],
      link: '/projects/birthday-invite'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="grid grid-2">
          {projects.map((project, idx) => (
            <Link href={project.link} key={idx}>
              <div className="glass-card" style={{ height: '100%', cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '1.5rem', overflow: 'hidden', borderRadius: '15px' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="project-image"
                  />
                </div>
                <h3>{project.title}</h3>
                <p style={{ marginBottom: '1.5rem', color: '#b0b0b0' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
