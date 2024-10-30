import {createSlice, configureStore} from '@reduxjs/toolkit'; // Correct import path
import {v4 as uuid} from 'uuid'; // Fixed import alias

export const mapContacts = contact => {
  const {name, picture, phone, cell, email} = contact; // Correct destructuring

  return {
    id: uuid(), // Corrected function call
    name: `${name.first} ${name.last}`, // Fixed string concatenation
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false, // Fixed ternary syntax
  };
};

const contactsSlice = createSlice({
  name: 'contacts', // Changed the slice name to 'contacts'
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload; // Fixed state update syntax
    },
  },
});

export const {fetchContactsSuccess} = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer, // Fixed store configuration syntax
});

export default store;
