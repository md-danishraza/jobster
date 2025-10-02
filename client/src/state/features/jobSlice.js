import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
const initialState = {
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      // directly mutating (redux will handle)
      state[name] = value;
    },
    clearValues: (state) => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      };
    },
  },
});
export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
