import { api } from '../api';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const financeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFinances: builder.query<Post[], void>({
      query: () => 'finances',
      providesTags: ['Finances'],
    }),

    getFinanceById: builder.query<Post, number>({
      query: (id) => `finances/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllFinancesQuery, useGetFinanceByIdQuery } = financeApi;
