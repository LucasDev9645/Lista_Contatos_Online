import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../../models/Contact";

type ContactState = {
  items: Contact[];
};

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: "Lucas freitas",
      email: " Lucasdev9645@gmail.com",
      telephone: 31973041723,
    },
    {
      id: 2,
      name: "Cintia Vieira",
      email: " Cintia@gmail.com",
      telephone: 31947281723,
    },
    {
      id: 3,
      name: "Maria Rute",
      email: " rute0844@gmail.com",
      telephone: 319874641723,
    },
    {
      id: 4,
      name: "Antônio Donizete",
      email: " antonio9645@gmail.com",
      telephone: 319854351723,
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
  },
});

export const { remove } = contactSlice.actions;
export default contactSlice.reducer;
