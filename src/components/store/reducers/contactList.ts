import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../../models/Contact";

const contactSlice = createSlice({
  name: "contato",
  initialState: [
    new Contact(1, "Lucas freitas", " Lucasdev9645@gmail.com", 31973041723),
    new Contact(2, "Cintia Vieira", " Cintia@gmail.com", 31947281723),
    new Contact(3, "Maria Rute", " rute0844@gmail.com", 319874641723),
    new Contact(4, "Antônio Donizete", " antonio9645@gmail.com", 31965455623),
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { remove } = contactSlice.actions;
export default contactSlice.reducer;
