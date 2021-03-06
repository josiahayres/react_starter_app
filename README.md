# REACT STARTER APP

## Code Structure

### /src

#### | `index.js`

App entry point. Renders `./App.js` into the DOM.

#### | `App.js`

Configures and makes the following available to all pages in the app:

-   Redux provider
-   Notistack (for notification)
-   Material UI theme provider

Renders `./Routes.js`

#### | `Routes.js`

Responsible for mapping each file in `/pages/` folder to a app route. Initial configuration uses a switch component to only show one page at a time.

We split this out into a separate file from `App.js` so we can show notifications from the navigation bar (can't `useSnackbar` in the same component as notification provider)

#### | /components

Reusable components that can be used anywhere.

#### | /hooks

Custom react hooks that can be reused

#### | /pages

Each file in here maps to a URL route. See `./Routes.js` for how it's implemented.

#### | /redux

Contains store, root reducer and auth

#### | /services

All files in here make different API calls, and will likely be used in redux reducers.

#### | /services/`axios.js`

Creates and exports an instance of axios that adds checking to give better messages if API calls fail.

```js
import axiosInstance from "./axios";
axiosInstance.get(url);
```

Don't use the NPM package version of axios:

~~`import axios from "axios";`~~

#### | /styleguide

Contains Wrapper component for styleguide, makes Redux, Notistack, Material UI Theme available in styleguide components.

## Documentation

React styleguidist

Will look for all `.js` files inside the `/components` folder.

Each component needs to have a `Name.examples.md`.

## Testing

## Base
