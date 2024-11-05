import uniqBy from 'lodash/uniqBy';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostEngagementResponse } from 'store/types';
import type { PostEngagement } from '../types';

const ITEMS_PER_PAGE = 10;

const initialState: PostEngagementResponse = {
  data: [],
  pageSize: 1,
  itemsPerPage: ITEMS_PER_PAGE,
};

export const postEngagement = createSlice({
  name: 'postEngagement',
  initialState: initialState,
  reducers: {
    addPostEngagements: (state, action: PayloadAction<PostEngagement[]>) => {
      const updatedList = uniqBy([...state.data, ...action.payload], 'id');
      return {
        ...state,
        data: updatedList,
        pageSize: Math.ceil(updatedList.length / state.itemsPerPage),
      };
    },
    deletePostEngagements: (state, action: PayloadAction<number[]>) => {
      const { payload: itemsIds } = action;
      // remove items from list
      const updatedList = state.data.filter(
        (item) => !itemsIds.includes(item.id)
      );
      return {
        ...state,
        data: updatedList,
        pageSize: Math.ceil(updatedList.length / state.itemsPerPage),
      };
    },
  },
  selectors: {
    selectPostEngagements: (state) => state,
  },
});

/* ----- selectors ----- */

export const { selectPostEngagements } = postEngagement.selectors;

/* ----- actions -----*/

export const { addPostEngagements, deletePostEngagements } =
  postEngagement.actions;
