import { baseApi } from '@/shared/api/baseApi';
import { type ICollections, type ICollection } from '../model/types';

export const collectionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<ICollections, string>({
      query: (params) => {
        return `collections/public${params ? `?${params}` : ''}`;
      },
      providesTags: ['Collections'],
    }),
    getCollectionById: builder.query<ICollection, string | undefined>({
      query: (id) => `collections/${id}/public`,
      providesTags: ['Collection'],
    }),
  }),
});

export const { useGetCollectionsQuery, useGetCollectionByIdQuery } =
  collectionApi;
