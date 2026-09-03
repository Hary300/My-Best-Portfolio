import Container from '@/components/layouts/Container';
import CodeQuiz from '@/components/quiz/CodeQuiz';
import HomeHero from './sections/HomeHero';
import FeaturedProjects from './sections/FeaturedProjects';
import { homeData } from '@/data/homeData';

const Home = () => {
  return (
    <Container title='Home' Icon={homeData.icon}>
      <HomeHero />
      <CodeQuiz />
      <FeaturedProjects />
    </Container>
  );
};

export default Home;
