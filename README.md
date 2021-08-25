## Simple Posts Reader

This repo contains solution for a frontend task which could be found [here](https://github.com/supermetrics/react-assignment) (github link).

The solution is built with React, Redux and plain CSS3.

## Notes and additional consideration for this solution

There are a few additional features taht are not specified in the task description but considered by myself as nice to have for application consistancy:

- Store persistance is used for user' session only. This allows not to enter credentials each time you hit refresh button.
- In case of a token epiration (an error from API) user is redirected to Login page. This allows to refresh token.

## How To

- To run application, first run `build` command via `npm run` or `yarn run`. This will build application with a production configuration. Then just run `start` command. Application would be served at `http://localhost:8080`.
- To debug project just run `dev` command. This will serve application in a dev mode at `http://localhost:3000`.

Enjoy! :wink:
