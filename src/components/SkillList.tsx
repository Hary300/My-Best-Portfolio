import { skillData } from '@/data/skillsData';
import SkillCard from './SkillCard';

const SkillList = () => {
  const categories = skillData.categories;
  return (
    <div className='flex flex-col gap-4 '>
      {categories.map((category) => (
        <div key={category.id} className='flex flex-col gap-4'>
          <p className='font-semibold text-lg text-portfolio-green '>
            {category.name}
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {category.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
