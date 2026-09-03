import type { Certificate } from '@/data/achievementData';
import { Button } from './ui/button';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { cn } from '@/lib/utils';
import { themeStore } from '@/store/themeStore';

interface AchievementCertificateGridProps {
  data: Certificate;
}

const AchievementCertificateCard = ({
  data,
}: AchievementCertificateGridProps) => {
  const isDark = themeStore((state) => state.isDark);
  return (
    <div
      className={cn(
        'flex flex-col p-6 rounded-2xl  gap-8',
        isDark ? 'shadow-green' : 'shadow-subtle'
      )}
    >
      <div className='rounded-2xl overflow-hidden shadow-subtle'>
        <img src={data.image} alt={`${data.issuer} certificate`} />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-lg lg:text-xl'>{data.title}</p>
          <p className='flex gap-2 items-center'>
            <HiOutlineBuildingOffice2 /> {data.issuer}
          </p>
        </div>
        <Button asChild className='bg-portfolio-green'>
          <a
            href={data.credentialUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='h-10'
          >
            View Credential
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AchievementCertificateCard;
