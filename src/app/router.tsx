import { createBrowserRouter } from 'react-router';
import { ROUTES } from '../shared/constants/routes';
import { lazy } from 'react';
import { withLoader } from '@/shared/lib/';
import { Layout } from './layouts';

const CollectionsPage = lazy(
  () => import('../pages/collections/ui/CollectionsPage'),
);
const CollectionPage = lazy(
  () => import('../pages/collection/ui/CollectionPage'),
);
const QuestionPage = lazy(() => import('../pages/questions/ui/QuestionPage'));

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        Component: withLoader(CollectionsPage),
      },
      {
        path: ROUTES.COLLECTION,
        Component: withLoader(CollectionPage),
      },
      {
        path: ROUTES.QUESTION,
        Component: withLoader(QuestionPage),
      },
    ],
  },
]);
