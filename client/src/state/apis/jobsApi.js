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
      query: ({
        page,
        debouncedSearch: search,
        searchStatus,
        searchType,
        sort,
      }) => {
        let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
        if (search) {
          url += `&search=${search}`;
        }
        return { url };
      },
      providesTags: ["get-all-jobs"],
    }),
    deleteJob: builder.mutation({
      query: (jobId) => ({
        url: `/jobs/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["get-all-jobs"],
    }),
    updateJob: builder.mutation({
      query: ({ jobId, jobData }) => ({
        url: `/jobs/${jobId}`,
        method: "PATCH",
        data: jobData,
      }),
      invalidatesTags: ["get-all-jobs"],
    }),
    showStats: builder.query({
      query: () => ({
        url: "/jobs/stats",
      }),
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetAllJobsQuery,
  useDeleteJobMutation,
  useUpdateJobMutation,
  useShowStatsQuery,
} = jobsApi;
