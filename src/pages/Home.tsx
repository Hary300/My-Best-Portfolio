import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';
import ViewAllProjectsButton from '@/components/ViewAllProjectsButton';

const Home = () => {
  return (
    <Container className='flex flex-col gap-4'>
      <h2 className='font-semibold text-xl'>Home</h2>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-3xl font-bold'>Hi, I'm Hary</p>
          <p className='text-3xl font-bold text-portfolio-green-secondary dark:text-portfolio-green'>
            Full Stack Developer
          </p>
          <p>
            I build modern, responsive web applications with React, TypeScript,
            Node.js, and modern backend technologies.
          </p>
          <div className='flex gap-1'>
            <ViewAllProjectsButton />
            <a
              href='https://github.com/Hary300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='outline'>My GitHub</Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
