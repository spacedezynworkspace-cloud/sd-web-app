'use client';
import { CreateProjectRequest } from '@/types/projects.types';
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
      invalidatesTags: ['Projects'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateProjectMutation } = projectsApi;
