import tsIcon from '@/assets/icons/typescript-plain.svg';
import reactIcon from '@/assets/icons/react-original.svg';
import zustandIcon from '@/assets/icons/zustand-plain.svg';
import sassIcon from '@/assets/icons/sass-original.svg';
import tailwindIcon from '@/assets/icons/tailwindcss-original.svg';
import supabaseIcon from '@/assets/icons/supabase-plain.svg';

const ICONS = [
  {
    name: 'ts',
    icon: tsIcon,
    displayName: 'TypeScript',
  },
  {
    name: 'react',
    icon: reactIcon,
    displayName: 'React',
  },
  {
    name: 'zustand',
    icon: zustandIcon,
    displayName: 'Zustand',
  },
  {
    name: 'sass',
    icon: sassIcon,
    displayName: 'Sass',
  },
  {
    name: 'tailwind',
    icon: tailwindIcon,
    displayName: 'Tailwind CSS',
  },
  {
    name: 'supabase',
    icon: supabaseIcon,
    displayName: 'Supabase',
  },
];

export default function TechStack() {
  return (
    <section className='flex flex-col items-center justify-center gap-7 xl:gap-10'>
      <h1 className='section-heading text-center'>
        <span className='text-yellow'>Technologie</span> z którymi pracuję.
      </h1>
      <ul className='mt-4 flex flex-row flex-wrap items-center justify-center gap-5 xl:gap-7'>
        {ICONS.map((icon) => (
          <li
            key={icon.name}
            className='text-light flex size-22 flex-col items-center gap-4 font-medium xl:size-32'>
            <img
              src={icon.icon}
              alt={icon.name}
              className='size-12 xl:size-16'
            />
            <p className='text-sm leading-5 xl:text-xl xl:leading-7'>
              {icon.displayName}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
