import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Container } from '@/components/Container';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Nicol</title>
        <meta name='description' content='I’m Spencer Nicol. I live in New York City, where I design the future.' />
      </Head>
      <Container className='mt-16 sm:mt-32'>
        <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
          <div className='lg:pl-20'>
            <div className='max-w-xs px-2.5 lg:max-w-none'>
              <Image
                src={portraitImage}
                alt='Portrait'
                sizes='(min-width: 1024px) 32rem, 20rem'
                className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              />
            </div>
          </div>
          <div className='lg:order-first lg:row-span-2'>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
              I’m Spencer Nicol, a developer based in Salt Lake City. I have a passion for developing solutions that
              shape the future.
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                I’ve always had a knack for relentlessly figuring things out. While working at a mortgage servicing
                company, my primary responsibility was to manage a series of spreadsheets for investors. Driven to
                optimize the process, I developed a single-button solution to automate the task, turning off background
                querying and allowing the computer to do the work for me.
              </p>
              <p>
                Upon completing my Finance degree, I joined a healthcare consulting firm as an Analyst, marking the
                beginning of my journey in software development within the healthcare industry. My focus quickly turned
                to improving the daunting process of converting unstructured, often dirty data into a structured
                database. In this role, I gained valuable experience writing complex SQL queries, merging and cleansing
                hospital and physician billing data, while honing my data management and analysis skills.
              </p>
              <p>
                I spent the next nine years at Health Catalyst, an exceptional organization that allowed me to use
                technology to create a real impact. One of my most memorable projects was the development of an
                automated CLABSI surveillance algorithm with Stanford Healthcare, which reduced the need for nurses to
                manually review charts by 90-95%.
              </p>
              <p>
                During my time at Health Catalyst, I was able to expand my skills as a developer and move towards
                becoming a fullstack engineer. While initially focused on tasks such as writing database queries,
                building dashboards, and tuning CI/CD pipelines, I recognized the shift towards building more scalable
                and maintainable web applications. To keep pace with this change, I enrolled in a fullstack boot camp
                where I was able to immerse myself in new technologies and gain valuable experience. Through this
                process, I stretched my abilities and gained a deeper understanding of modern web development
                principles.
              </p>
              <p>
                Today, you will find me as a Senior Software Engineer at b.well Connected Health, where I channel my
                passion for developing innovative web solutions that empower patients to take control of their health
                data. When I’m not coding, you’ll find me lifting weights, spending time with my beautiful wife and
                three kids, and maybe even making an unnecessary trip to the gas station for a snack. Let’s connect and
                chat about our shared love for all things tech and health.
              </p>
            </div>
          </div>
          <div className='lg:pl-20'>
            <ul role='list'>
              <SocialLink href='https://twitter.com/SpenceNicol' icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href='https://github.com/snicol21' icon={GitHubIcon} className='mt-4'>
                Follow on GitHub
              </SocialLink>
              <SocialLink href='https://linkedin.com/in/snicol21' icon={LinkedInIcon} className='mt-4'>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href='mailto:spencer.nicol@gmail.com'
                icon={MailIcon}
                className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
              >
                spencer.nicol@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
