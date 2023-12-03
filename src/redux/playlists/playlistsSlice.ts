import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const playlistsApi = createApi({
  reducerPath: 'playlistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
    prepareHeaders(headers) {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY);
      headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getView: builder.query({
      query: (id) => `/playlist/${id}&limit=50`,
    }),
  }),
});

export const { useGetViewQuery } = playlistsApi;
