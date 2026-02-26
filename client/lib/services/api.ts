import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env['NEXT_PUBLIC_API_BASE_URL'] || 'http://localhost:5000/api/v1',
  }),
  tagTypes: ['Projects', 'Operations', 'Finances', 'Expenses', 'Payments'],
  endpoints: () => ({}), // empty here
});
