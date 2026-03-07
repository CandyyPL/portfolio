import type { Dispatch, SetStateAction } from 'react';

export type PrevLocationContextType = {
  prevLocation: string;
  setPrevLocation: Dispatch<SetStateAction<string>>;
};
