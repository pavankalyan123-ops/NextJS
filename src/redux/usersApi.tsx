import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Tuser } from "@/types/userType";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<Tuser[], void>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
