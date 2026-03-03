import { useState } from 'react';
import clsx from 'clsx';
import Navigation from '@/components/Navigation.tsx';

export default function Topbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const toggleHamburgerNav = () => {
    setIsHamburgerOpen((prev) => !prev);
    document.body.classList.toggle('nav-active');
  };

  return (
    <header className='flex h-18 flex-row items-center justify-end overflow-hidden px-2 md:mt-6 md:mb-10 md:px-8'>
      <div
        className={clsx(
          'bg-dark text-light fixed top-0 left-0 z-11 flex h-full w-full items-center justify-center transition-transform duration-200 md:hidden',
          {
            'translate-x-0': isHamburgerOpen,
            'translate-x-full': !isHamburgerOpen,
          }
        )}>
        <Navigation toggleNav={toggleHamburgerNav} />
      </div>
      <button
        onClick={toggleHamburgerNav}
        className='relative z-12 flex size-12 items-center justify-center md:hidden'>
        <span className='flex h-7 w-9 items-center justify-center'>
          <span
            className={clsx('hamburger-line', {
              'hamburger-line-active': isHamburgerOpen,
            })}></span>
        </span>
      </button>
      <div className='max-md:hidden'>
        <Navigation />
      </div>
    </header>
  );
}
