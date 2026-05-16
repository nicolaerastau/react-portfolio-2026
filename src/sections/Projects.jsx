import './Projects.css';
const Projects = () => {
  const myWork = [
    {
      title: ' App 1',
      desc: 'An app ....',
      link: '#',
    },
    {
      title: 'App 2',
      desc: 'An app ...',
      link: '#',
    },
  ];

  return (
    <div className="projects">
      <section id="projects" className="section">
        <h2>Featured Work</h2>
        <div className="project-grid">
          {myWork.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Live →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Projects;
