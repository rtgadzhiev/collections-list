import type { ICollection, ICollections, ISpecializations } from '../types/api';
import { apiRequest } from './apiRequest';

export async function getPublicCollections(params?: URLSearchParams) {
  return apiRequest<ICollections>('collections/public', params);
}

export async function getPublicCollectionById(id?: string) {
  if (!id) throw new Error('Wrong collection id!');
  return apiRequest<ICollection>(`collections/${id}/public`);
}

export async function getSpecializations(params?: URLSearchParams) {
  return apiRequest<ISpecializations>('specializations', params);
}
