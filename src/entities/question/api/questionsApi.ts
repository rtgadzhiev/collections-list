import { baseApi } from '@/shared/api/baseApi';
import type { IQuestions } from '../model/types';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<IQuestions, string>({
      query: (params) => {
        return `questions/public-questions${params ? `?${params}` : ''}`;
      },
      providesTags: ['Quesions'],
    }),
  }),
});

export const { useGetPublicQuestionsQuery } = questionsApi;
