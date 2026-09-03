import type { Learning } from '@/data/achievementData';
import { cn } from '@/lib/utils';
import { themeStore } from '@/store/themeStore';
import type { CSSProperties } from 'react';

interface AchievementLearningGridProps {
  data: Learning;
  number: number;
}

const AchievementLearningCard = ({
  data,
  number,
}: AchievementLearningGridProps) => {
  const isDark = themeStore((state) => state.isDark);
  const Icon = data.icon;
  return (
    <a
      href={data.linkNotion}
      target='_blank'
      className={cn(
        'relative flex rounded-2xl p-4 overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-in-out active:translate-y-0 group',
        isDark ? 'shadow-green' : 'shadow-subtle'
      )}
    >
      <div className='flex flex-col gap-2'>
        <Icon className='size-10' />
        <p className='font-semibold group-hover:underline'>{data.title}</p>
        <p className='text-xs max-w-[clamp(220px,calc(93.75vw-80px),300px)] md:max-w-45'>
          {data.description}
        </p>
      </div>
      <div
        className='absolute inset-y-0 right-0 flex p-3 bg-accent dark:bg-(--accent-dark)'
        style={
          {
            '--accent': data.accentColor,
            '--accent-dark': data.accentColorDark,
          } as CSSProperties
        }
      >
        <p
          className={cn(
            'text-neutral-900 font-bold',
            isDark && 'text-portfolio-gray-muted'
          )}
        >
          {number}
        </p>
        <div className='absolute inset-x-0 bottom-0 h-[calc(100%-3rem)] bg-[color-mix(in_oklab,var(--accent)_70%,white)] dark:bg-[color-mix(in_oklab,var(--accent-dark)_70%,white)]' />
      </div>
    </a>
  );
};

export default AchievementLearningCard;
