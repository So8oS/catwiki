import { atomWithStorage } from 'jotai/utils';
import type { catBreed } from './compnents/Intro';
import { atom } from 'jotai';
import type { morePhotos } from './compnents/Specs';


export const breedListAtom = atomWithStorage<catBreed[]> ('breedList', []);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const searchAtom = atom<boolean>(false);


export const morePhotosAtom = atomWithStorage<morePhotos[]>('morePhotos', []);

export const specificAtom = atomWithStorage<catBreed>(
    'specific', {
        adaptability: 0,
        affection_level: 0,
        alt_names: '',
        cfa_url: '',
        child_friendly: 0,
        country_code: '',
        country_codes: '',
        description: '',
        dog_friendly: 0,
        energy_level: 0,
        experimental: 0,
        grooming: 0,
        hairless: 0,
        health_issues: 0,
        hypoallergenic: 0,
        id: '',
        indoor: 0,
        intelligence: 0,
        lap: 0,
        life_span: '',
        name: '',
        natural: 0,
        origin: '',
        rare: 0,
        reference_image_id: '',
        rex: 0,
        shedding_level: 0,
        short_legs: 0,
        social_needs: 0,
        stranger_friendly: 0,
        suppressed_tail: 0,
        temperament: '',
        vcahospitals_url: '',
        vetstreet_url: '',
        vocalisation: 0,
        weight: {
            imperial: '',
            metric: '',
        },
        wikipedia_url: '',
    },
    );
