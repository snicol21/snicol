import Link from 'next/link';
import { useEffect, useState } from 'react';

import ThemeChanger from '../../elements/buttons/ThemeChanger';

type INavigation = {
  name: string;
  href: string;
};

const navigation: INavigation[] = [];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => (window.pageYOffset > 0 ? setIsScrolled(true) : setIsScrolled(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border transition-colors duration-300 ${
        isScrolled
          ? 'border-slate-400 bg-slate-300 bg-opacity-90 dark:border-slate-600 dark:bg-slate-800 dark:bg-opacity-90'
          : 'border-transparent bg-white dark:bg-mat-black'
      }`}
    >
      <nav className='mx-auto max-w-7xl' aria-label='Top'>
        <div className='flex w-full items-center justify-between px-4 py-3 duration-300 sm:px-6 md:px-8'>
          <Link href='/' className='text-2xl font-bold uppercase'>
            Spencer Nicol
          </Link>
          <div className='ml-10 hidden space-x-8 md:block'>
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className='text-base font-medium hover:text-primary'>
                {link.name}
              </a>
            ))}
          </div>
          <ThemeChanger />
        </div>
        <div className={`flex flex-wrap justify-center space-x-6`}>
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className='text-base font-medium hover:text-primary'>
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
