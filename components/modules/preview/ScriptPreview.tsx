import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '../../../pages';
import { getDateDisplay } from '../../../shared/utils/date.util';
import TechIcon from '../../elements/icons/TechIcon';

type Props = IPost;

const ScriptPreview = ({ slug, title, date, categories, description, imageUrl, imageLoading }: Props) => {
  const dateFormatted = getDateDisplay(date);
  return (
    <Link href={`/posts/${slug}`} className='flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-none'>
      <div className='relative h-48 w-full flex-shrink-0'>
        <Image className='object-cover' fill src={imageUrl} alt={title} loading={imageLoading} />
      </div>
      <div className='flex flex-1 flex-col justify-between p-6 dark:bg-gray-800'>
        <div className='flex-1'>
          <div className='mt-3 space-x-1'>
            {categories.map((category) => (
              <span key={category} className='inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-800'>
                <TechIcon name={category} className='-ml-1 mr-1.5 h-4 w-4' />
              </span>
            ))}
          </div>
          <div className='mt-2 block'>
            <p className='text-xl font-semibold'>{title}</p>
            <p className='mt-3 text-base text-gray-500 dark:text-gray-300'>{description}</p>
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex space-x-1 text-sm text-gray-600 dark:text-gray-400'>
            <time dateTime={date}>{dateFormatted.dateDisplay}</time>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScriptPreview;
