import { isAction, Middleware } from '@reduxjs/toolkit';

import { StoreAPI } from 'store/types';
import { showToast } from 'store/reducers/toast';
import { deletePostEngagements } from 'store/reducers/postEngagements';

const postEngagements: Middleware<{}, any> =
  ({ dispatch }: StoreAPI) =>
  (next) =>
  (action: unknown) => {
    if (isAction(action) && deletePostEngagements.match(action)) {
      const { payload } = action;
      // show toast message when items are deleted
      dispatch(
        showToast({
          message: !payload.length
            ? 'No item selected.'
            : `${payload.length} post engagement(s) deleted successfully.`,
          type: !payload.length ? 'error' : 'success',
        })
      );
    }

    next(action);
  };

export default postEngagements;
