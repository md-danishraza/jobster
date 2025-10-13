import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        data: userData,
      }),
    }),
    registerTestUser: builder.mutation({
      query: () => ({
        url: "/auth/login",
        method: "POST",
        data: {
          email: "md.danish0raza@gmail.com",
          password: "md.danish0raza@gmail.com",
        },
      }),
    }),
    // registerTestUser: builder.mutation({
    //   query: () => ({
    //     url: "/auth/testingRegister",
    //     method: "POST",
    //     data: { name: "john", email: "john@gmail.com", password: "secret" },
    //   }),
    // }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    updateUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/updateUser",
        method: "PATCH",
        data: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useRegisterTestUserMutation,
  useUpdateUserMutation,
} = userApi;
