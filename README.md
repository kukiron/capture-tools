# Capture Tools

This app displays the capture tools section of clepher app, mainly the Post Engagement pages.

## Getting Started

To run the project locally -

```bash
git clone git@github.com:kukiron/capture-tools.git
cd capture-tools
npm install && npm start
```

This should serve the app on `localhost:3000`.

## Tools Used

Tools used for the project -

- TypeScript & React (CRA)
- Tailwind CSS & daisyUI component library
- Redux Toolkit
- ESLint & Prettier: for linting & formatting
- React Icons: collection of popular icons
- And the good old friend lodash

## App Overview

- **Functionality**: The functionalities do NOT go beyond what original Clepher app instance (shared with me) currently has. The Post Engagement page contains the basic functionalities - pagination, search, deleting items etc. The Edit Engagement page is mostly UI components with their local non-persisting states.
- **App Data**: Demo data is used for Post Engagement table view. It simulates an API call when page mounts & show them in table view. Since there's no actual back-end connected, changes are not persisted.
- **State Management**: This app doesn't have the complexity to add Redux for state management. But it's used nonetheless since it's listed as "must-use" tool. Most of the states are at the component level. With an actual back-end, Edit Engagement page states could be lifted to Redux store to save & inject to the page. Maintianing these states in Redux store against different engagement ids is not ideal.
- **Additional Features**: Ths app contains some extra features - tooltip, toaster, loader skeleton, empty status page, and bulk delete.

## Deployment

The app is currently deployed to Netlify - [capture-tools.netlify.app](https://capture-tools.netlify.app/)
