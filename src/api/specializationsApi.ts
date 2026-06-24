import type { ISpecializations } from '../types/api';
import { baseApi } from './baseApi';

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<ISpecializations, void>({
      query: () => 'specializations',
      providesTags: ['Specializations'],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
