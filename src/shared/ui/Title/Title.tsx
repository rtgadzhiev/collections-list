import clsx from 'clsx';
import styles from './Title.module.css';
import type { ElementType, ReactNode } from 'react';

type TTitleTagsKeys = keyof typeof TITLE_TAGS;
const TITLE_TAGS = { h1: 'h1', h2: 'h2' } as const;

interface Props {
  children: ReactNode;
  type?: TTitleTagsKeys;
  className?: string;
}

const Title = ({ type = 'h1', children, className }: Props) => {
  const Tag: ElementType = TITLE_TAGS[type];

  return (
    <Tag className={clsx(styles.title, styles[type], className)}>
      {children}
    </Tag>
  );
};

export { Title };
