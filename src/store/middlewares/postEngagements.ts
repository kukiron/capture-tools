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
            : 'Post engagements deleted.',
          type: !payload.length ? 'error' : 'success',
        })
      );
    }

    next(action);
  };

export default postEngagements;
