import type { ICollections, ISpecializations } from '../types/api';
import { apiRequest } from './apiRequest';

export async function getPublicCollections(params?: URLSearchParams) {
  return apiRequest<ICollections>('collections/public', params);
}

export async function getSpecializations(params?: URLSearchParams) {
  return apiRequest<ISpecializations>('specializations', params);
}
