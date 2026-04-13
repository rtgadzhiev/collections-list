import figmaIcon from '../assets/images/icons/socials/figma-icon.svg';
import githubIcon from '../assets/images/icons/socials/github-icon.svg';
import telegramIcon from '../assets/images/icons/socials/telegram-icon.svg';
import tiktokIcon from '../assets/images/icons/socials/tiktok-icon.svg';
import youtubeIcon from '../assets/images/icons/socials/youtube-icon.svg';

interface IBaseItem {
  id: number;
  title: string;
}

interface IMenuItem extends IBaseItem {
  isActive?: boolean;
}

type TMenuItems = IMenuItem[];

export const MENU_ITEMS: TMenuItems = [
  { id: 1, title: 'База вопросов', isActive: true },
  { id: 2, title: 'Тренажер' },
  { id: 3, title: 'Материалы' },
  { id: 4, title: 'Навыки (hh)' },
];

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

interface ISocialItem extends IBaseItem {
  icon: string;
}

type TSocialItems = ISocialItem[];

export const SOCIALS_ITEMS: TSocialItems = [
  { id: 1, title: 'Figma', icon: figmaIcon },
  { id: 2, title: 'Telegram', icon: telegramIcon },
  { id: 3, title: 'YouTube', icon: youtubeIcon },
  { id: 4, title: 'TikTok', icon: tiktokIcon },
  { id: 5, title: 'GitHub', icon: githubIcon },
];

interface ITitleTags {
  h1: string;
  h2: string;
}

export const TITLE_TAGS: ITitleTags = { h1: 'h1', h2: 'h2' };
