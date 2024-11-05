import { createLogger } from 'redux-logger';

import { isDevelopment, showLogger } from 'lib/environments';
import theme from './theme';
import postEngagements from './postEngagements';

const logger = createLogger({
  predicate: () => isDevelopment && showLogger,
});

// add custom middlewares here
const middlewares = [logger, theme, postEngagements];

export default middlewares;
