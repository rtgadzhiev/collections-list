import { type ICollections, type ICollection } from '../types/api';
import { baseApi } from './baseApi';

export const collectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<ICollections, string>({
      query: (params) => {
        return `collections/public${params ? `?${params}` : ''}`;
      },
      providesTags: ['Collections'],
    }),
    getCollectionById: builder.query<ICollection, string | void>({
      query: (id) => `collections/${id}/public`,
      providesTags: ['Collection'],
    }),
  }),
});

export const { useGetCollectionsQuery, useGetCollectionByIdQuery } =
  collectionsApi;
