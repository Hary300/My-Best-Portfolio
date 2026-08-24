import Container from '@/components/layouts/Container';
import ProjectGrid from '@/components/ProjectGrid';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';

type TabSlug =
  | 'all'
  | 'web-app'
  | 'landing-page'
  | 'utility'
  | 'ui-component'
  | 'game';

type CountKey =
  | 'all'
  | 'webApp'
  | 'landingPage'
  | 'uiComponent'
  | 'utility'
  | 'game';

interface Tabs {
  id: number;
  name: string;
  slug: TabSlug;
  countKey: CountKey;
}

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category');
  const activeTab = categoryQuery ? categoryQuery : 'all';
  const selectedProjects = categoryQuery
    ? projects.allProjects.filter(
        (project) => project.category.slug === categoryQuery
      )
    : projects.allProjects;

  const tabs: Tabs[] = [
    {
      id: 1,
      name: 'All',
      slug: 'all',
      countKey: 'all',
    },
    {
      id: 2,
      name: 'Web App',
      slug: 'web-app',
      countKey: 'webApp',
    },
    {
      id: 3,
      name: 'Landing Page',
      slug: 'landing-page',
      countKey: 'landingPage',
    },
    {
      id: 4,
      name: 'Utility',
      slug: 'utility',
      countKey: 'utility',
    },
    {
      id: 5,
      name: 'UI Component',
      slug: 'ui-component',
      countKey: 'uiComponent',
    },
    {
      id: 6,
      name: 'Game',
      slug: 'game',
      countKey: 'game',
    },
  ];

  const handleClickTab = (slug: TabSlug) => {
    const params = new URLSearchParams(searchParams);
    if (slug === 'all') {
      params.delete('category');
    } else {
      params.set('category', slug);
    }
    setSearchParams(params);
  };
  return (
    <Container title='Projects' className='pb-25'>
      <div className='flex flex-wrap gap-2'>
        {tabs.map((tab) => {
          return (
            <Button
              key={tab.id}
              variant='outline'
              className={cn(
                'border-portfolio-green',
                tab.slug === activeTab &&
                  'bg-portfolio-green-soft dark:bg-portfolio-green'
              )}
              onClick={() => handleClickTab(tab.slug)}
            >
              {tab.name} ({projects.total[tab.countKey]})
            </Button>
          );
        })}
      </div>
      <ProjectGrid projects={selectedProjects} />
    </Container>
  );
};

export default Projects;
