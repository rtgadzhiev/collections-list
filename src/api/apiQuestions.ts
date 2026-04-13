import type { ICollections } from '../types/api';
import { apiRequest } from './apiRequest';

export async function getPublicCollections(params: URLSearchParams) {
  return apiRequest<ICollections>('collections/public', params);
}
