import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='rounded-2xl flex flex-col gap-6 p-4 border-2'>
      <div className='rounded-2xl overflow-hidden h-50'>
        <img
          src={project.image}
          alt={`${project.title} image`}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <p className='font-semibold text-xl'>{project.title}</p>
      <p className='text-zinc-500'>{project.description}</p>
      <div className='xl:flex gap-2 grid grid-cols-2 lg:'>
        {project.techStack.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className={cn(
                'rounded-md p-2 flex items-center gap-1',
                item.bgColor,
                item.textColor
              )}
            >
              {Icon && <Icon />}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className='flex gap-4'>
        <a
          href={project.links.github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-1'
        >
          {' '}
          <Button
            variant='outline'
            className='border-portfolio-green-secondary w-full h-10 '
          >
            GitHub
          </Button>
        </a>
        <a
          href={project.links.liveDemo}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-1'
        >
          <Button className='w-full h-10 bg-portfolio-green text-portfolio-white'>
            Live Demo
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
