// src/redux/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  jwtToken: null,
  round: null,
  role: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, jwtToken, round, role } = action.payload;
      state.username = username;
      state.jwtToken = jwtToken;
      state.round = round;
      state.role = role;
    },
    clearUser: (state) => {
      state.username = null;
      state.jwtToken = null;
      state.round = null;
      state.role = null;
    },
  },
});

export const { setUser, clearUser } = usersSlice.actions;
export default usersSlice.reducer;
