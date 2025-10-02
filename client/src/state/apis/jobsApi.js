import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./baseQuery";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (jobData) => ({
        // { position:'position', company:'company', jobLocation:'location', jobType:'full-time', status:'pending' }
        url: "/jobs",
        method: "POST",
        data: jobData,
      }),
      invalidatesTags: ["get-all-jobs"],
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["get-all-jobs"],
    }),
  }),
});

export const { useCreateJobMutation, useGetAllJobsQuery } = jobsApi;
