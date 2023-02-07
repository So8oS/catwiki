import { atomWithStorage } from 'jotai/utils';
import type { catBreed } from './compnents/Intro';
import { atom } from 'jotai';
import type { morePhotos } from './compnents/Specs';


export const breedListAtom = atomWithStorage<catBreed[]> ('breedList', []);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const searchAtom = atom<boolean>(false);


export const morePhotosAtom = atomWithStorage<morePhotos[]>('morePhotos', []);
