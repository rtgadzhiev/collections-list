import accessIcon from '../assets/images/icons/stars-minimalistic-icon.svg';

export interface IBaseItem {
  id: number;
  title: string;
}

interface IComplexityOption extends IBaseItem {
  value: number[];
}

interface IComplexityOptions {
  data: IComplexityOption[];
}

export const COMPLEXITY_OPTIONS: IComplexityOptions = {
  data: [
    { id: 1, title: '1-3', value: [1, 2, 3] },
    { id: 2, title: '4-6', value: [4, 5, 6] },
    { id: 3, title: '7-8', value: [7, 8] },
    { id: 4, title: '9-10', value: [9, 10] },
  ],
};

interface IRatingOptions {
  data: IBaseItem[];
}

export const RATING_OPTIONS: IRatingOptions = {
  data: [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
  ],
};

export type TTitleTagsKeys = keyof typeof TITLE_TAGS;

export const TITLE_TAGS = { h1: 'h1', h2: 'h2' } as const;

interface IAccessOption {
  id: number;
  title: string;
  value: string;
  imageSrc?: string;
}

export const ACCESS_OPTIONS: IAccessOption[] = [
  { id: 1, title: 'Для участников', value: 'false', imageSrc: accessIcon },
  { id: 2, title: 'Для всех', value: 'true' },
];
