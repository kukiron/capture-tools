/* ----- Common Types ----- */

import type { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from './configureStore';

export type Nullable<T> = T | null;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type GetState = () => RootState;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  any,
  Action<string>
>;

export type StoreAPI = {
  dispatch: AppDispatch;
  getState: () => RootState;
};

/* ----- types for 'theme` reducer ----- */

export enum AppTheme {
  light = 'winter',
  dark = 'night',
}

/* ----- types for 'toast` reducer ----- */

export type Toast = {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
};

/* ----- types for 'postEngagement` reducer ----- */

export type PostEngagement = {
  id: number;
  name: string;
  engaged: number;
  unique: number;
  acquired: number;
  conversion: string;
  platform: string;
  selected?: boolean;
};

export type PostEngagementResponse = {
  data: PostEngagement[];
  totalPages: number; // total number of pages
  pageSize: number; // number of items per page
};
