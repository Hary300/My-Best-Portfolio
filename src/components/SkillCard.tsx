import type { Skill } from '@/data/skills';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const Icon = skill.icon;

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <div
      className='flex flex-col gap-4 items-center rounded-md border-portfolio-green/70 border p-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 active:translate-0 group hover:shadow-subtle active:shadow-none bg-portfolio-green/10 dark:active:shadow-green'
      onClick={() => handleCardClick(skill.url)}
    >
      <div className='flex flex-col gap-1 items-center'>
        <Icon className={cn('size-8 group-hover:animate-spin', skill.color)} />
        <p className='text-md'>{skill.name}</p>
      </div>
      <div className='w-full'>
        <p className='text-[8px] text-right'>{skill.percentage}%</p>

        <div className='w-full dark:bg-portfolio-card-secondary bg-portfolio-gray-muted rounded-full'>
          <div
            className='h-0.5 bg-portfolio-green rounded-md  dark:shadow-glow-green'
            style={{ width: `${skill.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
