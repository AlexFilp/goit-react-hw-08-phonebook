import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer;

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
