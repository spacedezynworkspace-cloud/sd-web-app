import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env['NEXT_PUBLIC_API_BASE_URL'] || 'http://localhost:5000/api/v1',
    credentials: 'include', // 🔥 required for refresh cookie
    prepareHeaders: async (headers) => {
      const session = await getSession();

      if (session?.accessToken) {
        headers.set('Authorization', `Bearer ${session.accessToken}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Projects', 'Operations', 'Finances', 'Expenses', 'Payments'],
  endpoints: () => ({}), // empty here
});
