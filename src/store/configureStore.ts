import { combineSlices, configureStore } from '@reduxjs/toolkit';

// import { isDevelopment } from 'lib/environments';
import middlewares from './middlewares';
import { theme } from './reducers/theme';
import { toast } from './reducers/toast';
import { postEngagement } from './reducers/postEngagements';

const rootReducer = combineSlices(theme, toast, postEngagement);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    // Avoid putting non-serializable values in redux store
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  // devTools: isDevelopment,
});
