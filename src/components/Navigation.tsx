import useMediaQuery from '@/hooks/useMediaQuery.ts';
import { SECTIONS } from '@/lib/constants.ts';

type Props = {
  toggleNav?: () => void;
};

const MOBILE_BREAKPOINT = '768px';

export default function Navigation({ toggleNav }: Props) {
  const isMobileWidth = useMediaQuery(`width < ${MOBILE_BREAKPOINT}`);

  const handleScroll = (section: string) => {
    if (isMobileWidth && toggleNav) toggleNav();

    const options: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'center',
    };

    document.getElementById(section)?.scrollIntoView(options);
  };

  return (
    <nav className='md:text-light flex flex-col items-center justify-center gap-8 text-3xl md:flex-row md:text-xl'>
      <div
        onClick={() => handleScroll(SECTIONS.PROJECTS)}
        className='cursor-pointer'>
        projekty
      </div>
      <div
        onClick={() => handleScroll(SECTIONS.ABOUT)}
        className='cursor-pointer'>
        o mnie
      </div>
      <div
        onClick={() => handleScroll(SECTIONS.CONTACT)}
        className='bg-yellow text-dark hover:bg-yellow-dim transition-bg cursor-pointer px-10 py-4 duration-200 md:px-6 md:py-2'>
        kontakt
      </div>
    </nav>
  );
}
