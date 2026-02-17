# Advanced Routing with React Router

This project demonstrates advanced React Router v6 features:

## Features Implemented

- **Nested Routes**: `/profile`, `/profile/details`, `/profile/settings`
- **Dynamic Routing**: `/posts/:id` (shows the post ID from URL)
- **Protected Routes**: `/profile/*` requires login (redirects to `/login` if not authenticated)
- Simple fake authentication (click "Login" button)

## How to Test

1. Run `npm run dev`
2. Visit `http://localhost:5173`
   - Home page shows
   - Click links in navbar
3. Try `/profile` → redirects to `/login`
4. Click "Fake Login" → redirects back and allows access to Profile and sub-routes
5. Click Post links → shows dynamic ID
6. Logout to test protection again

This satisfies all routing requirements: nested, dynamic, and protected routes.
