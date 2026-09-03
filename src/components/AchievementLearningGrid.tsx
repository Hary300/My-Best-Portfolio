import { achievementData } from '@/data/achievementData';
import AchievementLearningCard from './AchievementLearningCard';

const AchievementLearningGrid = () => {
  const achievementItems = achievementData.learnings;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {achievementItems.map((item, index) => (
        <AchievementLearningCard key={item.id} number={index + 1} data={item} />
      ))}
    </div>
  );
};

export default AchievementLearningGrid;
