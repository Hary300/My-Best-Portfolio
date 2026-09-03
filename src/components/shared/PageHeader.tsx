import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  highlightTitle: string;
  description: string;
  hasTitleBreak?: boolean;
  hasDescriptionBreak?: boolean;
}
const PageHeader = ({
  title,
  highlightTitle,
  description,
  hasTitleBreak = false,
  hasDescriptionBreak = false,
}: PageHeaderProps) => {
  return (
    <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-[50%]'>
      <p
        className={cn(
          'text-3xl font-bold xl:text-5xl',
          hasTitleBreak && 'flex flex-col gap-2'
        )}
      >
        {title}{' '}
        <span className={cn('text-portfolio-green', hasTitleBreak && 'block')}>
          {highlightTitle}
        </span>
      </p>
      <div
        className={cn(
          'flex flex-col gap-2 md:max-w-170',
          hasDescriptionBreak && 'whitespace-pre-line leading-6'
        )}
      >
        {description}
      </div>
    </div>
  );
};

export default PageHeader;
