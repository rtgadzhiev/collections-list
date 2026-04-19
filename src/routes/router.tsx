import { createBrowserRouter } from 'react-router';
import { ROUTES } from '../constants/routes';
import { lazy } from 'react';
import Layout from '../components/layout/Layout/Layout';
import withLoader from '../heplers/hocs/withLoader';

const CollectionsPage = lazy(() => import('../pages/CollectionsPage'));
const CollectionPage = lazy(() => import('../pages/CollectionPage'));

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
    ],
  },
]);
