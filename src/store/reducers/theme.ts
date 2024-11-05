import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppTheme } from '../types';

export const theme = createSlice({
  name: 'theme',
  initialState: AppTheme.dark,
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
