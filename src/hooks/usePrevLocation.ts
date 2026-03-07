import { useContext } from 'react';
import { PrevLocationContext } from '@/context/PrevLocationContext.ts';
import type { PrevLocationContextType } from '@/types/prevLocation.ts';

export const usePrevLocation = () => {
  const context = useContext<PrevLocationContextType | null>(
    PrevLocationContext
  );

  if (context) {
    return context;
  } else {
    throw new Error('usePrevLocation must be called within usePrevLocation');
  }
};
