import { achievementData } from '@/data/achievementData';
import AchievementCertificateCard from './AchievementCertificateCard';

const AchievementCertificateGrid = () => {
  const achievementItems = achievementData.certificates;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {achievementItems.map((item) => (
        <AchievementCertificateCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AchievementCertificateGrid;
