import figmaIcon from '@/shared/assets/images/icons/socials/figma-icon.svg';
import githubIcon from '@/shared/assets/images/icons/socials/github-icon.svg';
import telegramIcon from '@/shared/assets/images/icons/socials/telegram-icon.svg';
import tiktokIcon from '@/shared/assets/images/icons/socials/tiktok-icon.svg';
import youtubeIcon from '@/shared/assets/images/icons/socials/youtube-icon.svg';
import type { TSocialItems } from './types';

export const SOCIALS_ITEMS: TSocialItems = [
  { id: 1, title: 'Figma', icon: figmaIcon },
  { id: 2, title: 'Telegram', icon: telegramIcon },
  { id: 3, title: 'YouTube', icon: youtubeIcon },
  { id: 4, title: 'TikTok', icon: tiktokIcon },
  { id: 5, title: 'GitHub', icon: githubIcon },
];
