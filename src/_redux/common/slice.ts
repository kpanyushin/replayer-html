import { createSlice } from '@reduxjs/toolkit';

/**
 * Редьюсеры для управления общими состояниями (например, открытие-закрытие модалки)
 * Reducers for managing common states (e.g. toggleModal)
 */
const commonSlice = createSlice({
  name: 'common',
  initialState: {
    modal: {
      title: '',
      children: [],
      isOpen: false,
    },
  },
  reducers: {
    toggleModal: (state, { payload: { title, children, isOpen } }) => {
      state.modal = {
        title,
        isOpen,
        children,
      };
    },
  },
});

export const { toggleModal } = commonSlice.actions;

export default commonSlice.reducer;
