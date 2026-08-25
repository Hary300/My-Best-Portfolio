import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import type { Project } from '@/types/projects';
import { techStacks } from './../config/tech-stack';
import { TbApi } from 'react-icons/tb';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const service = project.service;
  return (
    <div className='rounded-2xl flex flex-col gap-6 p-4 border-2 shadow-subtle dark:shadow-green'>
      <div className='relative rounded-2xl overflow-hidden h-50'>
        <img
          src={project.image}
          alt={`${project.title} image`}
          className='h-full w-full object-cover object-top'
        />
        <p className='absolute top-3 left-3 px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-portfolio-light/90 dark:bg-portfolio-dark/80 backdrop-blur-md text-portfolio-green border border-portfolio-green shadow-sm'>
          {project.category.name}
        </p>
      </div>
      <p className='font-semibold text-xl'>{project.title}</p>
      <p className='text-zinc-500'>{project.description}</p>
      <div className='flex gap-2 flex-wrap'>
        {project.techStack.map((item) => {
          const stack = techStacks[item];
          const Icon = stack.icon;
          return (
            <div
              key={stack.name}
              className={cn(
                'rounded-md p-2 flex items-center gap-1',
                stack.bgColor,
                stack.textColor
              )}
            >
              {Icon && <Icon />}
              <span>{stack.name}</span>
            </div>
          );
        })}
        {service && (
          <div
            className={cn(
              'rounded-md p-2 flex items-center gap-1 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300'
            )}
          >
            <TbApi />
            <span>{service}</span>
          </div>
        )}
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
