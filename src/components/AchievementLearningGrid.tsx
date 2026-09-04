import { achievementData } from '@/data/achievementData';
import AchievementLearningCard from './AchievementLearningCard';
import { useSearchParams } from 'react-router-dom';
import type { IconType } from 'react-icons/lib';
import { IoMdGrid } from 'react-icons/io';
import {
  IoBookOutline,
  IoDocumentTextOutline,
  IoExtensionPuzzleOutline,
  IoSearchSharp,
} from 'react-icons/io5';
import { RxGear } from 'react-icons/rx';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { MdSearchOff } from 'react-icons/md';

type FilterId = 'all' | 'roadmap' | 'setup' | 'logic' | 'reference';
type FilterLabel = 'All' | 'Roadmap' | 'Setup' | 'Logic' | 'Reference';
interface FilterTabs {
  id: FilterId;
  icon: IconType;
  label: FilterLabel;
}

const filterIds: FilterId[] = ['all', 'logic', 'roadmap', 'setup', 'reference'];

const isAchievementFilter = (value: string | null): value is FilterId => {
  return value !== null && filterIds.includes(value as FilterId);
};

interface SearchForm {
  keyword: string;
}

const AchievementLearningGrid = () => {
  const { register, handleSubmit } = useForm<SearchForm>({
    defaultValues: {
      keyword: '',
    },
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('search') ?? '';

  const queryFilter = searchParams.get('filter');
  const activeFilter = isAchievementFilter(queryFilter) ? queryFilter : 'all';

  const onSubmit = (data: SearchForm) => {
    const params = new URLSearchParams(searchParams);
    if (data.keyword === '') {
      params.delete('search');
    } else {
      params.set('search', data.keyword);
    }
    setSearchParams(params.toString());
  };

  const handleFilter = (slug: FilterId) => {
    const params = new URLSearchParams(searchParams);

    params.set('filter', slug);

    setSearchParams(params, { preventScrollReset: true });
  };

  const filterTabs: FilterTabs[] = [
    {
      id: 'all',
      icon: IoMdGrid,
      label: 'All',
    },
    {
      id: 'roadmap',
      icon: IoDocumentTextOutline,
      label: 'Roadmap',
    },
    {
      id: 'setup',
      icon: RxGear,
      label: 'Setup',
    },
    {
      id: 'logic',
      icon: IoExtensionPuzzleOutline,
      label: 'Logic',
    },
    {
      id: 'reference',
      icon: IoBookOutline,
      label: 'Reference',
    },
  ];

  const achievementItems = achievementData.learnings;

  const filteredItems = achievementItems.filter((item) => {
    const keyword = querySearch.toLowerCase();

    const matchesFilter =
      activeFilter === 'all' || item.category === activeFilter;

    const matchesSearch =
      item.title.includes(keyword) ||
      item.description.includes(keyword) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(keyword));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between '>
        <div className='md:min-w-75 md:max-w-100 flex gap-1 flex-wrap w-full'>
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div
                key={tab.id}
                className={cn(
                  'flex-1 flex flex-col gap-1 p-2 rounded-lg border cursor-pointer justify-center items-center transition-transform duration-300 hover:bg-portfolio-green/15 active:translate-px shadow-subtle',
                  tab.id === activeFilter && 'text-portfolio-green'
                )}
                onClick={() => handleFilter(tab.id)}
              >
                <Icon />
                <span className='text-xs'>{tab.label}</span>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full md:max-w-60 lg:max-w-100 '
        >
          <div className='relative'>
            <input
              type='text'
              placeholder='Enter your keyword'
              {...register('keyword')}
              className={cn(
                'rounded-full border pl-8 py-2 xl:py-3 text-xs lg:text-sm focus:outline-0 w-full shadow-subtle'
              )}
            />
            <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-400' />
          </div>
        </form>
      </div>

      {filteredItems.length === 0 ? (
        <div className='rounded-lg w-full flex justify-center items-center h-50 shadow-subtle'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <MdSearchOff className='size-20 text-portfolio-gray-muted' />
            <p className='text-portfolio-gray-muted'>No Data Found</p>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredItems.map((item, index) => (
            <AchievementLearningCard
              key={item.id}
              number={index + 1}
              data={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AchievementLearningGrid;
