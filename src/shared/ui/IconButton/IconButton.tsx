import styles from './IconButton.module.css';
import { Button } from '../Button';
import { Icon } from '../Icon/Icon';

interface Props {
  src: string;
  title: string;
  width?: number;
  height?: number;
}

const IconButton = ({ src, title, width = 24, height = 24 }: Props) => {
  <Button className={styles.button} title={title}>
    <Icon className={styles.icon} src={src} width={width} height={height} />
  </Button>;
};

export { IconButton };
