import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'users',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    getFilteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const contactsConfig = {
  key: 'users',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  contactsConfig,
  contactsSlice.reducer
);

export const { deleteContact, addContact, getFilteredContacts } =
  contactsSlice.actions;

export const getContactsValue = state => state.users.contacts;
export const getFilteredValue = state => state.users.filter;
