import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoGameHub from '@/images/logos/gameHub.webp';
import logoHcPosh from '@/images/logos/hcat.png';
import logoOurWardApp from '@/images/logos/ourwardapp.png';

const projects = [
  {
    name: 'Game Hub',
    description:
      'Fun project I built following Mosh Hamedani’s React tutorial. Leveraging Chakra UI components, Zustand for state management, Axios for API communication, and React Query for data fetching and caching, Game Hub mimics the renowned rawg.io gaming website, utilizing their free API.',
    link: { href: 'https://game-hub-one-rho.vercel.app/', label: 'game-hub-one-rho.vercel.app' },
    logo: logoGameHub,
  },
  {
    name: 'OurWardApp',
    description:
      'This site simplifies appointment scheduling and events by streamlining local ward congregation communication using Calendly software to manage leadership calendars.',
    link: { href: 'https://ourwardapp.com', label: 'ourwardapp.com' },
    logo: logoOurWardApp,
  },
  {
    name: 'HCPosh',
    description:
      'This is a unique Powershell module that provides some useful functions and tools when working with data in the Health Catalyst Analytics Platform.',
    link: { href: 'https://github.com/HealthCatalyst/hcposh', label: 'github.com' },
    logo: logoHcPosh,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Spencer Nicol</title>
        <meta name='description' content='Things I’ve made trying to put my dent in the universe.' />
      </Head>
      <SimpleLayout
        title='Things I’ve made trying to put my dent in the universe.'
        intro='I’ve worked on many projects over the years, but these are the ones that I am most proud of. Some of them are still ongoing, while others have been completed. I am happy to share my experiences and the outcomes of these projects with you.'
      >
        <ul role='list' className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <Card as='li' key={project.name}>
              <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
                <Image src={project.logo} alt='Logo' className='h-8 w-auto rounded-full' unoptimized />
              </div>
              <h2 className='mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'>
                <Card.Link href={project.link.href} target='_blank'>
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className='relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200'>
                <LinkIcon className='h-6 w-6 flex-none' />
                <span className='ml-2'>{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
