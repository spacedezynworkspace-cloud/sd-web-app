'use client';

import { Supervisor } from '@/types/supervisors.types';
import { api } from '../api';
import { ApiResponse } from '@/types/api.types';
import { Project } from '@/types/projects.types';

export const supervisorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupervisors: builder.query<
      ApiResponse<Supervisor[]>,
      {
        search?: string;
        isActive?: boolean;
      }
    >({
      query: (params) => ({
        url: '/supervisors',
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Supervisors' as const,
                _id,
              })),
              { type: 'Supervisors', id: 'LIST' },
            ]
          : [{ type: 'Supervisors', id: 'LIST' }],
    }),
    assignSupervisor: builder.mutation<
      ApiResponse<Project>,
      {
        id: string;
        data: { supervisorId?: string };
      }
    >({
      query: ({ id, data }) => ({
        url: `/supervisors/projects/${id}/assign-supervisor`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Projects', id },
        { type: 'Projects', id: 'LIST' },
      ],
    }),
    removeSupervisor: builder.mutation<
      ApiResponse<Project>,
      {
        id: string;
        data: { supervisorId?: string };
      }
    >({
      query: ({ id, data }) => ({
        url: `/supervisors/projects/${id}/remove-supervisor`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Projects', id },
        { type: 'Projects', id: 'LIST' },
      ],
    }),

    getAllSupervisorsPayments: builder.query<
      ApiResponse<Supervisor[]>,
      {
        search?: string;
      }
    >({
      query: (params) => ({
        url: '/supervisors/payment',
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Supervisors' as const,
                _id,
              })),
              { type: 'Supervisors', id: 'LIST' },
            ]
          : [{ type: 'Supervisors', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllSupervisorsQuery,
  useLazyGetAllSupervisorsQuery,
  useAssignSupervisorMutation,
  useRemoveSupervisorMutation,
  useGetAllSupervisorsPaymentsQuery,
} = supervisorsApi;
