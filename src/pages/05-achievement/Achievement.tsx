import Container from '@/components/layouts/Container';
import AchievementHero from './sections/AchievementHero';
import { achievementData } from '@/data/achievementData';
import { useSearchParams } from 'react-router-dom';
import { GiRead } from 'react-icons/gi';
import type { IconType } from 'react-icons/lib';
import { RiCertificate2Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AchievementLearningGrid from '@/components/AchievementLearningGrid';
import AchievementCertificateGrid from '@/components/AchievementCertificateGrid';

type AchievementCategories = 'learning' | 'certificate';

const achievementCategories: AchievementCategories[] = [
  'certificate',
  'learning',
] as const;

interface AchievementTab {
  id: number;
  icon: IconType;
  name: 'Learning' | 'Certificate';
  slug: AchievementCategories;
}

const isAchievementCategory = (
  value: string | null
): value is AchievementCategories => {
  return (
    value !== null &&
    achievementCategories.includes(value as AchievementCategories)
  );
};

const achievementTabs: AchievementTab[] = [
  {
    id: 1,
    icon: GiRead,
    name: 'Learning',
    slug: 'learning',
  },
  {
    id: 2,
    icon: RiCertificate2Line,
    name: 'Certificate',
    slug: 'certificate',
  },
];

const Achievement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category');
  const activeCategory = isAchievementCategory(categoryQuery)
    ? categoryQuery
    : 'learning';

  const handleAchievementTabClick = (tabSlug: AchievementCategories) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', tabSlug);

    setSearchParams(params.toString());
  };

  return (
    <Container
      title='Achievement'
      Icon={achievementData.icon}
      className='pb-25'
    >
      <AchievementHero />
      <section
        id='achievement-tabs'
        className='flex flex-wrap items-center gap-2'
      >
        {achievementTabs.map((tab) => {
          const isActive = activeCategory === tab.slug;
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              onClick={() => handleAchievementTabClick(tab.slug)}
              className={cn(
                'px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors',
                isActive
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-900/5 text-emerald-900/80 hover:bg-emerald-900/10 dark:bg-emerald-950/30 dark:text-emerald-200'
              )}
            >
              <Icon />
              {tab.name}
            </Button>
          );
        })}
      </section>
      {activeCategory === 'learning' && <AchievementLearningGrid />}
      {activeCategory === 'certificate' && <AchievementCertificateGrid />}
    </Container>
  );
};

export default Achievement;
