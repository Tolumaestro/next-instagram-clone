import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modal: false,
  },

  reducers: {
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.modal;
