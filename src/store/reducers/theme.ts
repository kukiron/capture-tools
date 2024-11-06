import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppTheme } from '../types';

// get initial state from local storage
const initialState = localStorage.getItem('theme') || AppTheme.dark;

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (_, action: PayloadAction<AppTheme>) => action.payload,
  },
  selectors: {
    selectTheme: (theme) => theme,
  },
});

/* ----- selectors ----- */

export const { selectTheme } = theme.selectors;

/* ----- actions -----*/

export const { toggleTheme } = theme.actions;
