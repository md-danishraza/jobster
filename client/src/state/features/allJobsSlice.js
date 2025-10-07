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
    setAllJobs: (state, { payload: { data } }) => {
      // console.log(data);
      state.jobs = data.jobs;
      state.numOfPages = data.numOfPages;
      state.totalJobs = data.totalJobs;
    },
    setStats: (state, { payload }) => {
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    },
    handleFilterChange: (state, { payload: { name, value } }) => {
      // state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    updateFileredJob: (state) => {},
  },
});

export const { setAllJobs, setStats, handleFilterChange, clearFilters } =
  allJobsSlice.actions;
export default allJobsSlice.reducer;
