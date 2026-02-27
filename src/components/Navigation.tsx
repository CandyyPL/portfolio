import useMediaQuery from '@/hooks/useMediaQuery.ts';
import { SECTIONS } from '@/lib/constants.ts';

type Props = {
  toggleNav: () => void;
};

const MOBILE_BREAKPOINT = '768px';

export default function Navigation({ toggleNav }: Props) {
  const isMobileWidth = useMediaQuery(`width < ${MOBILE_BREAKPOINT}`);

  const handleScroll = (section: string) => {
    if (isMobileWidth) toggleNav();

    const options: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start',
    };

    document.getElementById(section)?.scrollIntoView(options);
  };

  return (
    <nav className='flex flex-col items-center justify-center gap-8 text-3xl'>
      <div onClick={() => handleScroll(SECTIONS.HERO)}>witaj</div>
      <div onClick={() => handleScroll(SECTIONS.PROJECTS)}>projekty</div>
      <div onClick={() => handleScroll(SECTIONS.ABOUT)}>o mnie</div>
      <div
        onClick={() => handleScroll(SECTIONS.CONTACT)}
        className='bg-yellow text-dark px-10 py-4'>
        kontakt
      </div>
    </nav>
  );
}
