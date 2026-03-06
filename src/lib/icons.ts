import type { Icon } from '@/types/icon.ts';
import tsIcon from '@/assets/icons/typescript-plain.svg';
import reactIcon from '@/assets/icons/react-original.svg';
import zustandIcon from '@/assets/icons/zustand-plain.svg';
import sassIcon from '@/assets/icons/sass-original.svg';
import tailwindIcon from '@/assets/icons/tailwindcss-original.svg';
import supabaseIcon from '@/assets/icons/supabase-plain.svg';

export const ICONS: Icon[] = [
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
