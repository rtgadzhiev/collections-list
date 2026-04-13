import figmaIcon from '../assets/images/icons/socials/figma-icon.svg';
import githubIcon from '../assets/images/icons/socials/github-icon.svg';
import telegramIcon from '../assets/images/icons/socials/telegram-icon.svg';
import tiktokIcon from '../assets/images/icons/socials/tiktok-icon.svg';
import youtubeIcon from '../assets/images/icons/socials/youtube-icon.svg';

export const MENU_ITEMS = [
  { id: 1, title: 'База вопросов', isActive: true },
  { id: 2, title: 'Тренажер' },
  { id: 3, title: 'Материалы' },
  { id: 4, title: 'Навыки (hh)' },
];

export const COMPLEXITY_OPTIONS = {
  data: [
    { id: 1, title: '1-3', value: [1, 2, 3] },
    { id: 2, title: '4-6', value: [4, 5, 6] },
    { id: 3, title: '7-8', value: [7, 8] },
    { id: 4, title: '9-10', value: [9, 10] },
  ],
};

export const RATING_OPTIONS = {
  data: [
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
    { id: 4, title: 4 },
    { id: 5, title: 5 },
  ],
};

export const SOCIALS_ITEMS = [
  { id: 1, title: 'Figma', icon: figmaIcon },
  { id: 2, title: 'Telegram', icon: telegramIcon },
  { id: 3, title: 'YouTube', icon: youtubeIcon },
  { id: 4, title: 'TikTok', icon: tiktokIcon },
  { id: 5, title: 'GitHub', icon: githubIcon },
];

export const TITLE_TAGS = { h1: 'h1', h2: 'h2' };
