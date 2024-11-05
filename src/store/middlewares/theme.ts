import { isAction, Middleware } from '@reduxjs/toolkit';

import { toggleTheme } from '../reducers/theme';
import { StoreAPI } from 'store/types';
import { showToast } from 'store/reducers/toast';

const theme: Middleware<{}, any> =
  ({ dispatch }: StoreAPI) =>
  (next) =>
  (action: unknown) => {
    if (isAction(action) && toggleTheme.match(action)) {
      const { payload: newTheme } = action;
      // set new theme
      document.querySelector('html')?.setAttribute('data-theme', newTheme);
      // show toast message
      dispatch(showToast({ message: 'App theme updated.', type: 'success' }));
    }

    next(action);
  };

export default theme;
