import { useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';

const ViewAllProjectsButton = () => {
  const [, setSearchParams] = useSearchParams();
  const handleClick = () => {
    const params = new URLSearchParams();
    params.set('tab', 'projects');
    setSearchParams(params);
  };
  return (
    <Button
      className='bg-portfolio-green text-portfolio-white'
      onClick={handleClick}
    >
      View All Projects
    </Button>
  );
};

export default ViewAllProjectsButton;
