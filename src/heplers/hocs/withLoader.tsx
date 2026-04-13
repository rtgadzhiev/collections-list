import { Suspense, type ComponentType, type FC } from 'react';
import Loader from '../../components/ui/Loader/Loader';

function withLoader<P extends object>(Component: ComponentType<P>): FC<P> {
  return (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default withLoader;
