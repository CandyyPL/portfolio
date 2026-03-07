import { type ReactNode, useState } from 'react';
import { PrevLocationContext } from '@/context/PrevLocationContext.ts';
import type { PrevLocationContextType } from '@/types/prevLocation.ts';

type Props = { children: ReactNode };

export default function PrevLocationProvider({ children }: Props) {
  const [prevLocation, setPrevLocation] = useState<string>('/');

  const provide: PrevLocationContextType = {
    prevLocation,
    setPrevLocation,
  };

  return (
    <PrevLocationContext.Provider value={provide}>
      {children}
    </PrevLocationContext.Provider>
  );
}
