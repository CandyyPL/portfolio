import { createContext } from 'react';
import type { PrevLocationContextType } from '@/types/prevLocation.ts';

export const PrevLocationContext =
  createContext<PrevLocationContextType | null>(null);
