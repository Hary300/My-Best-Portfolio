import Container from '@/components/layouts/Container';
import SkillList from '@/components/SkillList';
import { skillData } from '@/data/skillsData';

const Skills = () => {
  return (
    <Container title='Skills' Icon={skillData.icon} className='pb-25'>
      <SkillList />
    </Container>
  );
};

export default Skills;
