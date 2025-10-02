import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
    clearUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      toast.success("Logged Out Successfully!");
      removeUserFromLocalStorage();
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setUser, clearUser, toggleSidebar } = userSlice.actions;

export default userSlice.reducer;
