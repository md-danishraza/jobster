import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice";
import jobsReducer from "./features/jobSlice";
import allJobsReducer from "./features/allJobsSlice";
import { userApi } from "./apis/userApi";
import { jobsApi } from "./apis/jobsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobsReducer,
    allJobs: allJobsReducer,
    [userApi.reducerPath]: userApi.reducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, jobsApi.middleware),
});
