import { createSlice } from "@reduxjs/toolkit";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    setAllJobs: (state, { payload }) => {
      state.jobs = payload.jobs;
    },
  },
});

export const { setAllJobs } = allJobsSlice.actions;
export default allJobsSlice.reducer;
