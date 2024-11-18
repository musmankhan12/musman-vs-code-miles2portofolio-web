



import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  // Example projects with images and tags
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my work and skills.',
      image: '/portofolio web.jpg', // Example image URL
      tags: ['Html', 'javascript', 'css'],
      link: '',
    },
    {
      id: 2,
      title: 'Resume biulder',
      description: 'Customizable resume builder with HTML, CSS, and JavaScript functionality.',
      image: '/resume1.jpg', // Example image URL
      tags: ['Html', 'javascript', 'css'],
      link: 'https://milstone2resumebuilderprojectbymusman.vercel.app/',
    },
    {
      id: 3,
      title: 'Figma website',
      description: 'nteractive Figma design showcasing modern UI concepts and responsive layouts.',
      image: '/figma web.jpg', // Example image URL
      tags: ['Next.js', 'Figma template', 'tailwind'],
      link: '',
    },
  ];

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            {/* Display Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage} // Add style for image
            />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
            <div className={styles.tags}>
              {(project.tags || []).map((tag, index) => (
                <span key={index} className={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;


