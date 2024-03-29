import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailOutlineIcon,
  BriefcaseIcon,
  ArrowDownIcon,
} from '@/components/Icons';
import logoHcat from '@/images/logos/hcat.png';
import logoBwell from '@/images/logos/bwell.png';
import logoMayo from '@/images/logos/mayoClinic.jpg';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';
import { debounce } from '@/lib/debounce';
import { formatDate } from '@/lib/formatDate';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';

function Article({ article }) {
  return (
    <Card as='article'>
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as='time' dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function Newsletter() {
  return (
    <form action='/thank-you' className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <MailOutlineIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className='mt-6 flex'>
        <input
          type='email'
          placeholder='Email address'
          aria-label='Email address'
          required
          className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
        />
        <Button type='submit' className='ml-4 flex-none'>
          Join
        </Button>
      </div>
      <p className='mt-4 text-xs text-red-500'>Note: Still working on getting my subscription process working.</p>
    </form>
  );
}

function Resume() {
  let resume = [
    {
      company: 'Mayo Clinic',
      title: 'Senior Platform Integration Engineer',
      logo: logoMayo,
      start: '2023',
      end: {
        label: 'Now',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'b.well Connected Health',
      title: 'Senior Software Engineer',
      logo: logoBwell,
      start: '2021',
      end: '2023',
    },
    {
      company: 'Health Catalyst',
      title: 'Senior Software Engineer',
      logo: logoHcat,
      start: '2018',
      end: '2021',
    },
    {
      company: 'Health Catalyst',
      title: 'Lead Product Architect',
      logo: logoHcat,
      start: '2015',
      end: '2018',
    },
    {
      company: 'Health Catalyst',
      title: 'Senior Data Architect',
      logo: logoHcat,
      start: '2012',
      end: '2015',
    },
  ];

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <BriefcaseIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className='flex gap-4'>
            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
              <Image src={role.logo} alt='Logo' className='h-10 w-auto rounded-full' unoptimized />
            </div>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{role.company}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role.title}</dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>{role.start.label ?? role.start}</time>{' '}
                <span aria-hidden='true'>—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>{role.end.label ?? role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href='https://www.dropbox.com/s/3bh5c20o3fvto3u/spencer_nicol_resume.pdf?dl=0'
        variant='secondary'
        className='group mt-6 w-full'
      >
        Download Resume
        <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </Button>
    </div>
  );
}

function Photos() {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  const images = [image1, image2, image3, image4, image5];
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  useEffect(() => {
    const container = scrollRef.current;
    const scrollToMiddle = ({ behavior = 'smooth' }) => {
      if (window.innerWidth < container.scrollWidth) {
        container.scroll({
          left: Math.round(container.scrollWidth / 2) - Math.round(container.clientWidth / 2),
          behavior,
        });
      }
    };
    scrollToMiddle({ behavior: 'auto' });
    const handleScroll = debounce(scrollToMiddle, 2000);

    container.addEventListener('scroll', handleScroll);

    setIsScrolling(false);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='mt-16 flex justify-center sm:mt-20'>
      <div ref={scrollRef} className='-my-4 flex flex-nowrap gap-5 overflow-x-auto px-3 py-4 sm:gap-8'>
        {images.map((image, index) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[index % rotations.length]
            )}
            style={{ scrollSnapAlign: 'center', opacity: isScrolling ? 0 : 1 }}
          >
            <Image
              src={image}
              alt={`Image${index}`}
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Spencer Nicol - Software engineer and family man</title>
        <meta
          name='description'
          content='Hi there! I’m Spencer, a software engineer from Salt Lake City. My current career focus is at b.well Connected Health, where I work on developing innovative solutions that empower patients to take ownership of their health data.'
        />
      </Head>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Software engineer with an eye for design and a passion for automation
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            Hi, I’m Spencer, a software engineer from Salt Lake City. I work at b.well Connected Health, where I’m
            focused on creating software that empowers patients to manage their own health data. I enjoy finding elegant
            solutions to complex problems, and I have a talent for design and automation. With experience in healthcare,
            I’m passionate about using technology to improve patient outcomes and streamline processes. My goal is to
            make a meaningful impact in people’s lives by creating software that’s both efficient and effective.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink href='https://twitter.com/SpenceNicol' aria-label='Follow on Twitter' icon={TwitterIcon} />
            <SocialLink href='https://github.com/snicol21' aria-label='Follow on GitHub' icon={GitHubIcon} />
            <SocialLink href='https://linkedin.com/in/snicol21' aria-label='Follow on LinkedIn' icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles()).slice(0, 4).map(({ component, ...meta }) => meta),
    },
  };
}
