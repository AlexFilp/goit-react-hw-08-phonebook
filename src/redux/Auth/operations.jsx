import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      console.log(res.data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      toast.error(`The account with this email is already existing!`);
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('/users/login', credentials);
      console.log(res.data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken === null) {
      console.log('Unable to fetch user');
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      console.log(persistedToken);
      const res = await axios.get('/users/current');
      console.log(res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
