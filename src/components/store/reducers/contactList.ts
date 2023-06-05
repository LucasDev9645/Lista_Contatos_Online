import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../../models/Contact";

type ContactState = {
  items: Contact[];
};

const initialState: ContactState = {
  items: [
    {
      name: "Lucas freitas",
      email: " Lucasdev9645@gmail.com",
      telephone: "31973041723",
      id: 1,
    },
    {
      name: "Cintia Vieira",
      email: " Cintia@gmail.com",
      telephone: "31947281723",
      id: 2,
    },
    {
      name: "Maria Rute",
      email: " rute0844@gmail.com",
      telephone: "319874641723",
      id: 3,
    },
    {
      name: "Antônio Donizete",
      email: " antonio9645@gmail.com",
      telephone: "319854351723",
      id: 4,
    },
  ],
};

const contactSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.items.findIndex(
        (c) => c.id === action.payload.id
      );

      if (indexContact >= 0) {
        state.items[indexContact] = action.payload;
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const contactExists = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (contactExists) {
        alert("Já existe um contato com esse nome");
      } else {
        const lastContact = state.items[state.items.length - 1];
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
        };
        state.items.push(newContact);
      }
    },
  },
});

export const { remove, edit, register } = contactSlice.actions;
export default contactSlice.reducer;
