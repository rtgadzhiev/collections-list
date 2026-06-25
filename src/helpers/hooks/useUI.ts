import { UIContext } from '../../context/UIContext';
import { useContext } from 'react';

export function useUI() {
  const uiContext = useContext(UIContext);

  if (!uiContext)
    throw new Error('uiContext must be used within a UIContextProvider');

  return uiContext;
}
