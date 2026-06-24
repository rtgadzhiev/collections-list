import { type IQuestions } from '../types/api';
import { apiRequest } from './apiRequest';

export async function getPublicQuestionsByCollection(params?: URLSearchParams) {
  return apiRequest<IQuestions>('questions/public-questions/', params);
}
