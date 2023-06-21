import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/Contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsList = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsList.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactsList.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactsList.splice(index, 1);
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
