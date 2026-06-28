import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { router } from '@/app/router';
import { UIProvider } from './providers';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </Provider>,
);
