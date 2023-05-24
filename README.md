# Learning & Development Management

In this project you can login to the system and can see the scores of interns with the help of charts and their score.

### Tools:

- SvelteKit
- TypeScript
- TailwindCSS
- DaisyUI for basic UI components
- svelte-fa for FontAwesome icons
- neverthrow for elegantly handling exceptions

### Features:

- Form actions to login and signup
- Store the users's auth token in a cookie
- Fetch the user in the `handle` hook in `hooks.server`
- Implementation of a basic session store
- Use route (groups) to protect pages
- Authenticate API endpoints via an auth token (`Authorization: Bearer <TOKEN>` header)
- Log out

## Setup

```shell
npm install
```

## Development

```shell
npm run dev

# Run with debug logging:
DEBUG="app:*" npm run dev
```

To debug in the browser, open up the `Console` in DevTools and type:

```js
localStorage.debug = "app:*";
```