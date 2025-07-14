import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice'
import { authApi } from '../service/authData';
import authReducer from '../features/Auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
     [authApi.reducerPath]:authApi.reducer,
      auth:authReducer,
    tasks: taskReducer,
  },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)
});
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;