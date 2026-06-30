import { createBrowserRouter } from 'react-router';
import { ROUTES } from '../shared/constants/routes';
import { lazy } from 'react';
import { withLoader } from '@/shared/lib/';
import { Layout } from './layouts';

const CollectionsPage = lazy(() => import('@/pages/collections'));
const CollectionPage = lazy(() => import('@/pages/collection'));
const QuestionPage = lazy(() => import('@/pages/question'));

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
