import chunk from 'lodash/chunk';
import { createSelector } from '@reduxjs/toolkit';

import { ITEMS_PER_PAGE } from 'lib/constatns';
import type { RootState } from 'store/types';

// wrapper function to provide a selector
// to get the list of items after applying search query
export const searchPostEngagements = (query: string | undefined = '') =>
  createSelector(
    (state: RootState) => state.postEngagement.data,
    (data) =>
      data.filter(({ name }) =>
        name.toLowerCase().includes(query.trim().toLowerCase())
      )
  );

// wrapper function to provide a selector
// to group the items into pages to implement pagination
export const getCurrentPageItems = (
  currentPage: number,
  query: string | undefined = ''
) =>
  createSelector(searchPostEngagements(query), (postEngagements) =>
    (postEngagements.length > ITEMS_PER_PAGE
      ? chunk(postEngagements, ITEMS_PER_PAGE)[currentPage - 1]
      : postEngagements
    ).map(({ name, unique, engaged, ...rest }) => ({
      name,
      'engaged / unique': `${engaged} / ${unique}`,
      ...rest,
    }))
  );
