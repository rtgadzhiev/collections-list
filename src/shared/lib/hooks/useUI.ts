import { useContext } from 'react';
import { UIContext } from '@/app/providers/UIContext';

export function useUI() {
  const uiContext = useContext(UIContext);

  if (!uiContext)
    throw new Error('uiContext must be used within a UIContextProvider');

  return uiContext;
}
