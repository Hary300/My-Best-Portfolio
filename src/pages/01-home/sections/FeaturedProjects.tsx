import ProjectGrid from '@/components/ProjectGrid';
import { homeData } from '@/data/homeData';

const FeaturedProjects = () => {
  const featuredProjects = homeData.featuredProjects;

  return (
    <section
      id='home-featured-projects'
      className='mt-5 flex flex-col gap-4 sm:gap-5 pb-20'
    >
      <h3 className='font-semibold text-2xl'>Featured Projects</h3>
      <ProjectGrid projects={featuredProjects} />
    </section>
  );
};

export default FeaturedProjects;
