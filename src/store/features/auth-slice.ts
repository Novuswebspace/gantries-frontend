import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types";
import { STORAGE_KEY } from "@/util/constants";
import { getlocalstorage } from "@/util/localstorage";

type AuthState = {
  isAuthenticated: boolean;
  data: User | null;
};

const initialState: AuthState = {
  isAuthenticated: !!getlocalstorage<boolean>(STORAGE_KEY),
  data: getlocalstorage<User>(STORAGE_KEY),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.data = action.payload;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.data = null;
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const { authenticate, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
