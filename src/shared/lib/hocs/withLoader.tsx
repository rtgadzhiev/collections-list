import { Loader } from '@/shared/ui/Loader';
import { Suspense, type ComponentType, type FC } from 'react';

function withLoader<P extends object>(Component: ComponentType<P>): FC<P> {
  return (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export { withLoader };
