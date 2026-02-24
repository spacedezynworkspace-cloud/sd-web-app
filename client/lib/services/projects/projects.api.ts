'use client';
import { CreateProjectRequest, Project } from '@/types/projects.types';
import { api } from '../api';
import { ApiResponse } from '@/types/api.types';

export const projectsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation<
      ApiResponse<CreateProjectRequest>, // Response
      CreateProjectRequest // Request body
    >({
      query: (body) => ({
        url: '/admin/projects',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'Projects', id: 'LIST' },
        { type: 'Projects', id: 'COUNT' },
        { type: 'Finances', id: 'LIST' },
        { type: 'Finances', id: 'COUNT' },
      ],
    }),
    getAllProjects: builder.query<
      ApiResponse<Project[]>,
      {
        search?: string;
        status?: number;
        phase?: number;
        state?: string;
        startDate?: string;
        endDate?: string;
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
      }
    >({
      query: (params) => ({
        url: '/admin/projects',
        method: 'GET',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Projects' as const,
                _id,
              })),
              { type: 'Projects', id: 'LIST' },
            ]
          : [{ type: 'Projects', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateProjectMutation, useGetAllProjectsQuery } = projectsApi;
