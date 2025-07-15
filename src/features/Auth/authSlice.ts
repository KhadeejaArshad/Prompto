import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../service/authData';

export const STATUSES = {
  LOADING: 'loading',
  SUCCESS: 'succeeded',
  ERROR: 'failed',
} as const;

type StatusType = (typeof STATUSES)[keyof typeof STATUSES] | 'idle';

interface AuthState {
  status: StatusType;
  error: string | null;
  userName: string | null;
  token: string | null;
}

const initialState: AuthState = {
  status: 'idle',
  error: null,
  userName: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userName = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<{ token: string; data: { name: string } }>) => {
        state.token = action.payload.token;
        state.userName = action.payload.data.name;
        state.status = STATUSES.SUCCESS;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
