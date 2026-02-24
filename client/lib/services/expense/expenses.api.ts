'use client';
import { CreateExpenseRequest, Expense } from '@/types/expenses.types';
import { api } from '../api';
import { ApiResponse } from '@/types/api.types';

export const expensesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createExpense: builder.mutation<
      ApiResponse<CreateExpenseRequest>, // Response
      CreateExpenseRequest // Request body
    >({
      query: (body) => ({
        url: '/admin/expenses',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'Expenses', id: 'LIST' },
        { type: 'Expenses', id: 'COUNT' },
      ],
    }),
    getAllExpenses: builder.query<
      ApiResponse<Expense[]>,
      void
      //  {
      //   project?: string;
      //   amount?: number;
      //   requestedBy?: string;
      //   requestedDate?: string;
      //   approved?: boolean;
      //   approvedDate?: string;
      //   type?: string;
      // }
    >({
      query: () => ({
        url: '/admin/expenses',
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Expenses' as const,
                _id,
              })),
              { type: 'Expenses', id: 'LIST' },
            ]
          : [{ type: 'Expenses', id: 'LIST' }],
    }),
    getAllExpnesesByType: builder.query<ApiResponse<Expense[]>, void>({
      query: () => ({
        url: '/admin/expenses-by-type',
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Expenses' as const,
                _id,
              })),
              { type: 'Expenses', id: 'LIST' },
            ]
          : [{ type: 'Expenses', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateExpenseMutation,
  useGetAllExpensesQuery,
  useGetAllExpnesesByTypeQuery,
} = expensesApi;
