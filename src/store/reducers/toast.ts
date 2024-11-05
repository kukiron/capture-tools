import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable, Toast } from '../types';

export const initialToast = null as Nullable<Toast>;

export const toast = createSlice({
  name: 'toast',
  initialState: initialToast,
  reducers: {
    showToast: (_, action: PayloadAction<Toast>) => {
      const { message, type } = action.payload;
      return { message, type: type || 'info' };
    },
    hideToast: () => initialToast,
  },
  selectors: {
    selectToast: (toast) => toast,
  },
});

/* ----- selectors ----- */

export const { selectToast } = toast.selectors;

/* ----- actions -----*/

export const { showToast, hideToast } = toast.actions;
