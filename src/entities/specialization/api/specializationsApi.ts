import { baseApi } from '@/shared/api/baseApi';
import type { ISpecializations } from '../model';

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<ISpecializations, void>({
      query: () => 'specializations',
      providesTags: ['Specializations'],
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
