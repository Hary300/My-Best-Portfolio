import Container from '@/components/layouts/Container';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

const Projects = () => {
  const allProjects = projects.allProjects;
  return (
    <Container title='Projects' className='pb-25'>
      <ProjectGrid projects={allProjects} />
    </Container>
  );
};

export default Projects;
