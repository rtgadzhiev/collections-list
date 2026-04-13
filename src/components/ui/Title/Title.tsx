import clsx from 'clsx';
import styles from './Title.module.css';
import { TITLE_TAGS, type TTitleTagsKeys } from '../../../constants/constants';
import type { ElementType, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type?: TTitleTagsKeys;
  className?: string;
}

function Title({ type = 'h1', children, className }: Props) {
  const Tag: ElementType = TITLE_TAGS[type];

  return (
    <Tag className={clsx(styles.title, styles[type], className)}>
      {children}
    </Tag>
  );
}

export default Title;
