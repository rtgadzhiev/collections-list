import type { ImgHTMLAttributes } from 'react';

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const Icon = ({ className, src, width = 24, height = 24 }: IconProps) => {
  return (
    <img className={className} src={src} alt="" width={width} height={height} />
  );
};

export { Icon };
