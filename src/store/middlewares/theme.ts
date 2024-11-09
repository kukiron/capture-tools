import { isAction, Middleware } from '@reduxjs/toolkit';

import { StoreAPI } from 'store/types';
// import { showToast } from 'store/reducers/toast';
import { toggleTheme } from '../reducers/theme';

const theme: Middleware<{}, any> =
  ({ dispatch }: StoreAPI) =>
  (next) =>
  (action: unknown) => {
    if (isAction(action) && toggleTheme.match(action)) {
      const { payload: newTheme } = action;
      // store the theme in local storage
      localStorage.setItem('theme', newTheme);
      // show toast message
      // dispatch(showToast({ message: 'App theme updated.', type: 'success' }));
    }

    next(action);
  };

export default theme;
